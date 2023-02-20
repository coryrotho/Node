import express from 'express';
// import { UserRoutes } from './concepts/user.js';
import { UserApi } from './concepts/user.js';
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

UserApi(app,config);