import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import models from './models';
import register from './routes/index.js';

dotenv.config();

const app = express();

app.set('port', process.env.PORT);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/public', express.static(`${__dirname}/../public`));

const { sequelize } = models;
sequelize.authenticate()
    .then(() => {
        console.log('Database connected');
        return sequelize.sync();
    })
    .then(() => {
        console.log('Database is synchronized');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

register(app);

app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});
