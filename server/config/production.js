module.exports = {
    app: {
        mode: "production",
        logs: "combined",
        port: process.env.APP_PORT
    },
    db: {
        name: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        logs: true
    }
};