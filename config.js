const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nFOYKIgFVTtSjiBRmviLh1HgIEiHINAcQp//sWOlNnHvacnX1LBdLpdPfX7yBJcYF01IDhO8gIriBF7ZI2GQJDMCp9HxHQAR6kEAzBYGW5PcqXrrLXLPGyWXC63gi7XrM/Hq7WCK9P860pLM9Mkr6CewdkpRNh9w+A0xLFjK3eGDJemeqZpWNNSXQ5QLkWZksro7dj2ijuyuLMV3BvESEmOAkmWYhiRGCko2YNMfkefWtmvYlMiaEcsIdFrdAwclR1wgbVKpvK/KwsmNpQu0bEFd+jr5mjfO/aEi6qXId83NUr/nxdad1GTy8imfoDcpIUS9lYxpN+gYMEeXMPJRTT5tu6T7VSmM7H43xBHVflVrHUjMqMv3pwF6XM0sibLX8cH/sMF3yP+LZLjvmUWHRi2FMTbnHfFeLDltupsa7cJnZlVExcrrCoTL4SX5PPrFz+j+76NGSoxFclqR2T5HO/Rx1H5ZHZJTsjPUuhHukO2hWZufke/ck+Npb+gbIqjmLTMVSJCqJi8qfLeTkexbUvVrTa4Zt2LX7Rh7Qkf2KZT5RSctbWSOjbbCBcWE1gb7flrkIbWNrd6yxq2PhGpXTubPhIZffH4yjhcKjV/vgwZ6WDutFEpV4WPupd1nN3bfSCUHl9vOiCmrkHhty9AwgKcEEJpDhNHnvioAOgV+2QSxB9yAs29Z6bqNKIt8/rybyfa9jRBoU6Fvwjq1W6oRGIvHzZC037FXRARlIXFQXyZrigKWkMVBQwQAUY/v2zAxJ0pU/j2ut4rgN8TApqJmUWpdD7dPXzI3TdtEzorknccbtABAzZX9uIUpwERatjmUDihrhC4xDSAgx9GBXo3gEeqrCLWjyQKUJVILHaWvGK1oM5tNKDpLSUwzR5/sL3nJ7ryvwLkgbcS9+RnRdJGvAv0Ie8JMqsJMoS6AD8MTPtmd9aiJK3YHvVqjk7yvMFvB253cblhFF8MR42PLVHBHlgSEmJOsCB7qXM9ukFJX/ANQezpV7icDPbdBfVsrkdCVqL52bBXL7gPj0Fw/dfPTVOvRZP3iuDvirLoAPiRwRx+3K5L/Z5SZT6Ijfs9f4qftStjjDLfiSItrAfmrcHPEQhjgowBOOV6tQDdjJZE6kg7HSqGIEyDlpRPz36DPszTNhJ5OowmAm+HE+PluuFa02ZMH1b2Z0uacS4nD3XT31DDczXfwEBQ7C/yD3Ncd4cqKpudjwZlTRQr2K1TfI3tpA0jisGUa1Wo1BIwqTL2HIqpzUf03m9OtdTIognWx1l3ctqdOpOhT17EN+U+rW97ZmVr5eZ+pav52wisq47C6eLfCNvCIn0+cZu5JsdoElNKiYL6r2I0i5TzVhUV3t5cYqZEO561i2XeM4sZcfVHH+VhN3VJsTBcwwfNRB91C9+DMj7R7J8jB5tlsAY/ac3XzPO3jtfID7q8Tc5Gtmx0HU4FDLH7imMuGRm76+b0bqcKpP4pC/85M0aj2OkKn0N3O8/OyCLIPVTEoMhgIlHUuyBDohgQZVfY7rHMSoojLO2THiZF/s9Trj/A1Q9ps3cBwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " Ibrahim Adams",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'BMW_MD',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
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

