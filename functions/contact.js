require('dotenv').config();
const sgMail = require('@sendgrid/mail');

// Configure SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
    try {
        // Parse the form submission data
        const { name, email, message, subject } = JSON.parse(event.body);

        // Define the recipients
        const recipients = ['varunsingh151509@gmail.com','adam.kunz@durhamcollege.ca'];

        // Define the email content
        const emailContent = {
            to: recipients,
            from: 'varundeepsingh+inft3102-01@dcmail.ca', // Use the verified sender email
            subject: `[Automated] ${subject} by ${name}`,
            text: `
                You have received a new message:
                Name: ${name}
                Email: ${email}
                Message: ${message}
            `,
            html: `
                <p><strong>New form submission:</strong></p>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong>${message}</p>
                <hr/>
                <br/>
                <p>I did it I deserve a 100 now lol :)</p>
            `,
        };

        // Log email content before sending
        console.log('Sending email:', emailContent);

        // Send the email
        await sgMail.sendMultiple(emailContent);
        console.log('Email sent successfully.');

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' }),
        };
    } catch (error) {
        console.error('Error sending email:', error);

        // Log detailed SendGrid error response
        if (error.response) {
            console.error('SendGrid error response:', JSON.stringify(error.response.body.errors, null, 2));
        }

        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email' }),
        };
    }
};
