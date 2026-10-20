require('dotenv').config();
const app = require('./src/app');
const connectDatabase = require('./src/database/database');


connectDatabase();

app.listen(process.env.PORT, () => {
    console.log("Server is running");
});