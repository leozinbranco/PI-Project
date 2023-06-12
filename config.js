require('dotenv').config();

const config = {
    env: {
        localhost: process.env.LOCAL_HOST || 'não setado', 
        host : process.env.DB_HOST || 'não setado',
        user : process.env.DB_USER || 'não setado',
        password : process.env.DB_PASSWORD || 'não setado',
        database : process.env.DB_NAME || 'não setado', 
    }
}

module.exports = config;