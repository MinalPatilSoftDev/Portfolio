 import nodemailer from 'nodemailer';


const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
const adminEmailFull = process.env.NEXT_PUBLIC_ADMIN_EMAIL_FULL;
const pass = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

const ToEmail=process.env.NEXT_PUBLIC_To_EMAIL_FULL;

// Create a transporter object
export const transporter = nodemailer.createTransport({
 
     // Specify your SMTP settings
     host: process.env.NEXT_PUBLIC_EMAIL_HOST,
     port: 587,
     secure: false, // Set to true if using TLS
     auth: {
         user: adminEmail,
         pass,
     }
});

export const mailOptions ={
    from:adminEmailFull, // Set the sender name and email address
    to: "patil.minal02@gmail.com",
    subject: `Portfolio Inquiry`,

};

