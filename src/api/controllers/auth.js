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
                const client = {
                    firstName, lastName, email, username
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

    static async verifyEmail(req, res) {
        res.status(200).json({
            status: 200,
            message: "Email verified"
        })
    }
}

export default AuthController;