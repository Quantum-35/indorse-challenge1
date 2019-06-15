import SendgridClient from '@sendgrid/mail';
import dotenv from 'dotenv';


dotenv.config();
const { env: { SENDER_EMAIL, SENDGRID_API_KEY } } = process;


class EmailService {
    static async sendValidationEmail(client) {
        const { firstName, lastName, email, username } = client;
        const message = {
            to: email,
            from: SENDER_EMAIL,
            subject: 'Welcome',
            templateId: 'd-1387e1a284134f88b64ecae511c170fa',
            substitutions: {
                firstName,
                lastName,
                username
            }
        }
        SendgridClient.setApiKey(SENDGRID_API_KEY);
        await SendgridClient.send(message);
    }
}

export default EmailService;