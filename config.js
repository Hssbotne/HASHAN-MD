const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qqgkHbKL#YdgFK6rfPpu_tfQF83tmabGu43i29NzhmVOqKftvO9s",
};
