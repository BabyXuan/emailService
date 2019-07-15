import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import MailContainer from './emailTemplates/mailContainer';
import Html from './emailTemplates/html';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet

const port = 3000;
const server = express();
const mailer = require("./mailer");
const bodyParser = require("body-parser");

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

//entrypoint:

server.post('/email', (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log('body', req.body);
    const {email, userName, type} = req.body;
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<MailContainer userName={userName} type={type}/>)); // <-- collecting styles
    const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
    const title = 'Server side Rendering with Styled Components';
    const messageInfo = {
        email,
        fromEmail: "frada.qin+emailjet@healthtap.com",
        fromName: "HealthTap",
        subject: "Welcome to HealthTap"
    };
    mailer.sendEmail(messageInfo, Html({body, styles, title}));
    res.send('{"message":"Email sent."}');
});

//for local testing:
// server.get("/", (req, res) => {
//     res.setHeader("Content-Type", "application/json");
//     console.log('body', req.body);
//     const sheet = new ServerStyleSheet();
//     const body = renderToString(sheet.collectStyles(<MailContainer />)); // <-- collecting styles
//     const styles = sheet.getStyleTags(); // <-- getting all the tags from the sheet
//     const title = 'Server side Rendering with Styled Components';
//     res.send(
//         Html({
//             body,
//             styles, // <-- passing the styles to our Html template
//             title
//         })
//     );
// });

server.listen(port);
console.log(`Serving at http://localhost:${port}`);
