import express from 'express';

// config for your database
export const config = {
    user: 'sa',
    password: 'password',
    server: 'localhost', 
    database: 'NodeProject',
    trustServerCertificate: true,
    port: 1433,
};

export const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
});
