const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU23KjOBT8F73aGXMxBrsqVYsJGHwFgy+wNQ8yCJC5GglsPJV/3yJOKnnYmc3ypJJQn1Z3n/ML5AUmaIFaMPkFygo3kKJuSdsSgQmY1mGIKtAHAaQQTEC2yo4jI2syxeavZzV+EQ8Fz1ym1nhxqfexR8zz/cAcw8Nh9wxe+6CsTyn2/wCYu42yVzIz3gUzhrsui+PBbL01tizC5Ytcc1hXssrdeZEkz+C1Q4S4wnmkljHKUAXTBWpNiKvv0Z+Zs+gkSKu1sykls5qpG0cfbNITf15sNBmHmrLm4O2l3uvke/TNdKrZA/nYCOrs2igFdbTjYcwLYTzYzFeDY7vljVhdQ3tbPOgTHOUoMAKUU0zbb+ve6ldjGmW8P5/elRWnZl4vl6YbKIdts3yB2iB1Wy0SGTY1vkd8yeczYpfZwoyEmPPIKNht9bmluSzfevvTthx5jqafnGWy+krcrD6ykvwf3dGs5ErLMmVVOjPSC4PXontcQywUFj3a83s9Og7DJtVh6n+PPr/3GkVbO3vtJSlcjpeyJjcy1zE9XqO2Uxp8YO1brNZp8kkf0rr6E8vr8DRu/THjbfnmPGjjHtGJM72dGfZ2F9NKdgzZ8paaq0p4cNg2l+Q2YofHSMSz4EIdK54i0R5spD2+NK6MG2cT3Jwoen57UYJaIwAT9rUPKhRhQitIcZF3eyLbBzBobORXiL6pC0hmcKK/mad3jteqw2lKLT1M3MJJoMRfcse+OkovJMbAWz2DPiirwkeEoEDHhBZVu0KEwAgRMPn7Zx/k6EYfvnXVeLYPQlwRusvrMi1g8GHqxyH0/aLOqd3mvtItUAUmzOc2ohTnEelkrHNY+TFukBJDSsAkhClBr30QoAb7qMMD8k1MM6I/2XFNNtur3s64JzbqKMdF/vhFGI4Rx4Ti01Bi4dOQEcUnOIbDJ0Yc+kgSGMgJCPQBfm+Z7s5vHdz5VxGhBT/3fWjOt8PeVtDu7Um0D49+fkiPKhSACa1q1Acn6Cd16RQJyv+AaztVoa40QqDqzrZlYDCzeyWd+YVtfcF9WAomvz7HlFIEHZ46NgVu6WxBH2RvCcTdy8dDcchLojQU2Qkn/EV+XDsdYVn+yBHtYN817y4EiEKcEjABysY8XUeMqq7E8W3JzGayGslKJINPjz6y/ggTPuXjZj/ShXCczY4HP4hNTVZ7Q1e2vaRIez7rGgtvuHqJds//AtLFcRv5xXUnBYNiS67NdudYV0F1PdcwIlvkWX6zh6KwlDaCv0C1ovgqXrPJkuqDdH/17NVJ7415uKhgVPZWqVqR+9lUrOeu2iMrX4vluSmoNC5VS2+Ta2IuyzXvlUvVN5t0dLNu5tHYz2Np5R11qUnW9bzdnTfZqWAOa/cmyOFIPOnuBV3M3aXdCTaGyfJwlh9d+DYF0vfpi98a5Nd7skKM3oZZDjuH/sObrxlnXvtfIN6n429yNHUzYXBiUdw7Drw4ZXPddW7W1Kxnspp5i3mYrw+KkqEXeaiB19effVCmkIZFlYEJgHlQFTgAfZBCQuXPNnVwhgiFWQkmrMiPR6Mxx3J9kLVyWdoU0o/uBnL3zZcj8PoPbFNIovgHAAA='.    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'no',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

