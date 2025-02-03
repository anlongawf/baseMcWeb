import database from '../config/database.js';
import crypto from "crypto";

class AccountModel {
    constructor() {
        this.acc = database;
    }

    computeHash(password, salt = "") {
        return new Promise((resolve, reject) => {
            if (salt === "") {
                salt = crypto.randomBytes(8).toString('hex');  
            }
            const firstHash = crypto.createHash('sha256').update(password).digest('hex');
            const combined = firstHash + salt;
            const secondHash = crypto.createHash('sha256').update(combined).digest('hex');
            const finalHash = `$SHA$${salt}$${secondHash}`;
            resolve(finalHash);
        });
    }

    async comparePassword(password, hashedPassword) {
        console.log('Comparing password:');
        console.log('Input password:', password);
        console.log('Stored hashed password:', hashedPassword);

        const parts = hashedPassword.split('$');
        if (parts.length === 4) {
            const salt = parts[2];      
            console.log('Salt:', salt);

            const computedHash = await this.computeHash(password, salt);
            console.log('Computed hash:', computedHash);
            console.log('Stored hash:', hashedPassword);

            return hashedPassword === computedHash;
        } else {
            console.log('Invalid hash format');
            return false;
        }
    }

    async getOneInformationOfUserByUsername(username) {
        let conn;
        try {
            conn = await this.acc.getConnection();
            console.log('Querying database for username:', username);
            
            const query = 'SELECT * FROM authme WHERE realname = ?';
            console.log('Executing query:', query);
            
            const result = await conn.query(query, [username]);
            console.log('Query result:', result);
            
            return result;
        } catch (error) {
            console.error('Database query error:', error);
            throw error;
        } finally {
            if (conn) conn.release();
        }
    }

    async login(username, password) {
        console.log('Login method called with:', username);
        
        try {
            const userInfo = await this.getOneInformationOfUserByUsername(username);
            console.log('User info found:', userInfo);

            if (userInfo.length === 0) {
                console.log('No user found with username:', username);
                return { message: "Tài khoản không tồn tại" };
            } else {
                const hashedPassword = userInfo[0].password;
                console.log('Stored hashed password:', hashedPassword);

                const isMatch = await this.comparePassword(password, hashedPassword);
                
                if (isMatch) {
                    console.log('Login successful for username:', username);
                    return { message: "Đăng nhập thành công" };
                } else {
                    console.log('Password does not match for username:', username);
                    return { message: "Sai mật khẩu" };
                }
            }
        } catch (error) {
            console.error('Login method error:', error);
            throw error;
        }
    }

    async createAccount(username, password, email) {
        let conn;
        try {
            conn = await this.acc.getConnection();
            
            const existingUser = await conn.query('SELECT * FROM authme WHERE realname = ?', [username]);
            if (existingUser.length > 0) {
                return { message: "Tài khoản đã tồn tại" };
            }

            const hashedPassword = await this.computeHash(password);

            const insertQuery = 'INSERT INTO authme (realname, password, email) VALUES (?, ?, ?)';
            await conn.query(insertQuery, [username, hashedPassword, email]);

            return { message: "Tạo tài khoản thành công" };
        } catch (error) {
            console.error('Create account error:', error);
            throw error;
        } finally {
            if (conn) conn.release();
        }
    }
}

export default AccountModel;