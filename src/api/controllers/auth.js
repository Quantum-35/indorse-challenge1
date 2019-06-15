import jwt from 'jsonwebtoken';

import db from '../../sequelize/models';
import EmailService from '../../utils/Email';

const { User } = db;
const { sendValidationEmail } = EmailService;

class AuthController {
    static async signup(req, res) {
        const {body: {
            firstName, lastName, email, password, username,
            bio, gender, verified,
        }} = req;

        if(Object.keys(req.body).length === 0) {
            return res.status(400).json({
                status: 400,
                error: "Invalid input" 
            })
        }
        const newUser = await User.create({
            firstName, lastName, email, verified, password, username,
            bio, gender

        });
        if(newUser) {
            try {
                const token = jwt.sign({username}, process.env.SECRET_KEY, {expiresIn: '2h'});
                const client = {
                    firstName, lastName, email, username, token
                }
                await sendValidationEmail(client);
                return res.status(200).json({
                    status: 200,
                    message: "Email sent successfully"
                })
                
            } catch (error) {
                return res.status(400).json({
                    status: 400,
                    message: "Email not sent."
                })
            }
            
        }

        return res.status(400).json({
            status: 400,
            message: "Sign up not successful, please check your input"
        })
    }

    static async login(req, res) {
        res.status(200).json({
            status: 200,
            message: "Logged in successful"
        })
    }

    static async verifyAccount(req, res) {
        const { token } = req.query;
        const user = jwt.verify(token, process.env.SECRET_KEY)
        if (user) {
            try {
                await User.update(
                    { verified: true },
                    { where: { username: user.username }},
                    );
                return res.status(202).json({
                    status: 202,
                    message: "Account verified."
                })
            } catch (error) {
                console.log('===>', error)
                return res.status(406).json({
                    status: 406,
                    message: "Could not verify the Account."
                })
            }
        }
        res.status(401).json({
            status: 401,
            message: "Invalid or Expired token"
        })
    }
}

export default AuthController;