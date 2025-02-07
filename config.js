const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qMQ0GYCb#he66sivLKpSs9LDM8OO1KGl-FkSoyT9ydxNQ8LkParQ",
};
