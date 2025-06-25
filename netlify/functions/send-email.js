require('dotenv').config() // Load .env variables
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



const transporter = nodemailer.createTransport({
    service: "Gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

// Email template
const createEmailTemplate = (data) => `
<html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            .header { color: #2c3e50; border-bottom: 2px solid #107b5f; padding-bottom: 10px; }
            .details { margin: 15px 0; }
            .label { font-weight: bold; color: #107b5f; }
        </style>
    </head>
    <body>
        <div class="container">
            <h2 class="header">New Contact Us Submission</h2>
            <div class="details">
                <p><span class="label">Name:</span> ${data.name}</p>
                <p><span class="label">Email:</span> ${data.email}</p>
                <p><span class="label">Phone:</span> ${data.phone}</p>
                <p><span class="label">Message:</span><br>${data.message}</p>
            </div>
        </div>
    <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
<script>
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
</script>
</body>
</html>
`;

// app.post('/send-email', async (req, res) => {
//     try {
//         console.log('Received data:', req.body); // Add this for debugging
        
//         // Destructure with default values to avoid undefined
//         const { 
//             name = "Not provided", 
//             email = "Not provided", 
//             phone = "Not provided", 
//             message = "Not provided" 
//         } = req.body;

//         // Validate required fields
//         if (!email || !message) {
//             return res.status(400).json({ 
//                 error: 'Email and message are required fields' 
//             });
//         }

//         const mailOptions = {
//             from: `"Contact Us" <${process.env.EMAIL_USER}>`,
//             to: 'customercare@apelasset.com, registrars@apelasset.com',
//             subject: 'New Contact Us Submission',
//             html: createEmailTemplate({ name, email, phone, message }),
//             replyTo: email
//         };

//         await transporter.sendMail(mailOptions);
//         res.status(200).json({ message: 'Email sent successfully' });
//     } catch (error) {
//         console.error('Error sending email:', error);
//         res.status(500).json({ error: 'Error sending email' });
//     }
// });

// netlify/functions/send-email.js


exports.handler = async (event, context) => {
  if (process.env.NETLIFY_DEV === 'true') {
    require('dotenv').config({ path: '../../.env' }) // Adjust path as needed
  }
     
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
        return {
            statusCode: 405,
            body: JSON.stringify({ error: 'Method Not Allowed' })
        };
    }

    try {
        const data = JSON.parse(event.body);
        
        // Validate required fields
        if (!data.email || !data.message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Email and message are required fields' })
            };
        }

        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"Contact Us" <${process.env.EMAIL_USER}>`,
            to: 'customercare@apelasset.com, registrars@apelasset.com',
            subject: 'New Contact Us Submission',
            html: createEmailTemplate(data),
            replyTo: data.email
        };

        await transporter.sendMail(mailOptions);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully' })
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Error sending email' })
        };
    }
};


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});