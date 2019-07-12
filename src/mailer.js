//mailer.js is to send email by mailjet
"use strict";

//connect mailjet
const mailjet = require("node-mailjet").connect(
    process.env.MJ_APIKEY_PUBLIC,
    process.env.MJ_APIKEY_PRIVATE
);

//send email by email jet
exports.sendEmail = function (messageInfo, emailTemplate) {
    return mailjet.post("send", { version: "v3.1" }).request({
        Messages: [
            {
                From: { Email: messageInfo.fromEmail, Name: messageInfo.fromName },
                To: [{ Email: messageInfo.email }],
                Subject: messageInfo.subject,
                HTMLPart: emailTemplate
            }
        ]
    });
};
