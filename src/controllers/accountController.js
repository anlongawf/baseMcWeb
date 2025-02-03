import AccountModel from "../models/account.js";

class AccountController {
    constructor() {
        this.accountModel = new AccountModel();
        
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
    }

    async login(req, res) {
        console.log('Login request received');
        console.log('Request body:', req.body);
        
        try {
            const { username, password } = req.body;
            
            if (!username || !password) {
                console.log('Missing username or password');
                return res.status(400).json({ error: 'Username and password are required' });
            }

            console.log('Attempting to login with username:', username);
            const response = await this.accountModel.login(username, password);
            
            console.log('Login response:', response);
            
            if (response.message === "Đăng nhập thành công") {
                res.status(200).json(response);
            } else {
                res.status(401).json(response);
            }
        } catch (error) {
            console.error('Login error:', error);
            res.status(500).json({ error: 'An error occurred while logging in', details: error.message });
        }
    }

    async register(req, res) {
        console.log('Register request received');
        console.log('Request body:', req.body);
        
        try {
            const { username, password, email } = req.body;
            
            if (!username || !password || !email) {
                console.log('Missing registration details');
                return res.status(400).json({ error: 'Username, password, and email are required' });
            }

            console.log('Attempting to register with username:', username);
            const response = await this.accountModel.createAccount(username, password, email);
            
            console.log('Register response:', response);
            
            // Kiem tra tu models
            if (response.message === "Tạo tài khoản thành công") {
                res.status(201).json(response);
            } else {
                res.status(409).json(response);
            }
        } catch (error) {
            console.error('Register error:', error);
            res.status(500).json({ error: 'An error occurred while registering', details: error.message });
        }
    }
    // Debug
    async login(req, res) {
        console.log('AccountController - Login Method:');
        console.log('Received Request Body:', req.body);
        console.log('Username:', req.body?.username);
        console.log('Password:', req.body?.password ? '[HIDDEN]' : 'NOT PROVIDED');
    
        try {
            const { username, password } = req.body;
            
            if (!username || !password) {
                console.log('Login Validation Error: Missing username or password');
                return res.status(400).json({ error: 'Username and password are required' });
            }
    
            const response = await this.accountModel.login(username, password);
            console.log('Login Model Response:', response);
            
            res.json(response);
        } catch (error) {
            console.error('Login Controller Error:', error);
            res.status(500).json({ error: 'An error occurred while logging in', details: error.message });
        }
    }
}


export default new AccountController();