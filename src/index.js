const app = require("./app");
const {PORT}  = process.env

const startApp = () => {
    app.listen(PORT, () => {
        console.log(`backend on port: ${PORT}`);
    });
};

startApp();