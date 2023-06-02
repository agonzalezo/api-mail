/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

import nodemailer from 'nodemailer'
import returnTemplate from '../mail/template.js'

const messageData = {}

async function sendEmail(req, res) {
    try {
        console.log(`Sending mail to: ${req.body.to}`)
        if (req.body.template === 'activation') {
            messageData.code = req.body.code
            messageData.currentTemplate = returnTemplate('activation', { code: req.body.code, name: req.body.name })
            messageData.subject = 'Account Activation Is Required ✔'
            messageData.to = req.body.to
        } else {
            messageData.currentTemplate = returnTemplate('test', { name: req.body.name })
            messageData.subject = 'This is an email test dont worry ✔'
            messageData.to = 'ruteaelmundo@gmail.com, mexi1415@gmail.com'
        }

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            pool: true,
            port: process.env.SMTP_HOST,
            secure: true, // true for 465, false for other ports
            auth: {
                user: process.env.API_MAIL_USER, // generated ethereal user
                pass: process.env.API_MAIL_KEY // generated ethereal password
            }
        })

        const info = await transporter.sendMail({
            from: '"Netsys Xylon 👻" <mexi1415@gmail.com>', // sender address
            to: messageData.to, // list of receivers
            subject: messageData.subject, // Subject line
            text: 'Message sent from https://netsys.ml', // plain text body
            html: messageData.currentTemplate// html body
        })
        if (info.accepted[0] === req.body.to) {
            res.status(200).json(
                {
                    status: 'ok',
                    message: 'Message Sent',
                    info
                }
            )
        } else {
            res.status(400).json({
                status: 'error',
                message: 'Error sending email, please validate the email address'
            })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json(
            {
                status: 'error',
                message: 'Server error sending email'
            })
    }
}

export default sendEmail
