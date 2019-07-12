import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import WelcomeEmail from './emailTemplates/WelcomeEmail';
import Html from './emailTemplates/Html';
import { ServerStyleSheet } from 'styled-components'; // <-- importing ServerStyleSheet

const port = 3000;
const server = express();
const mailer = require("./mailer");

//entrypoint

server.post('/email', (req, res) => {
    res.set("Content-Type", "application/json");
    // const {email, userName} = req.body;
    const email = "xuan.zhu@healthtap.com";
    const sheet = new ServerStyleSheet();
    const body = renderToString(sheet.collectStyles(<WelcomeEmail />)); // <-- collecting styles
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
//     console.log("req", req);
//     const sheet = new ServerStyleSheet();
//     const body = renderToString(sheet.collectStyles(<WelcomeEmail />)); // <-- collecting styles
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
