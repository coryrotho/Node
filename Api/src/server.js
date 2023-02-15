import express from 'express';
import { UserApi } from './concepts/users.js';
import cors from 'cors';

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

app.use(cors({
    origin: '*'
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on Port ${port}`)
});

new UserApi(app, config);