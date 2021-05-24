import express from "express";
import cors from 'cors';
const bodyParser = require('body-parser')
require('dotenv').config()
import {ordersRouter} from "./services/orders/order.router";
import {thirdPartyRouter} from "./services/third.party.services/third.party.router";

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api/order", ordersRouter);
app.use("/api/melonn", thirdPartyRouter);

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send('app working!');
});

app.listen(1010, () => {
    console.log('The application is listening on port 1010!');
});
