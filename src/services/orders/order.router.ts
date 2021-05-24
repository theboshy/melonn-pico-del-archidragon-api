import * as express from 'express';
import * as OrderService from "./oder.service";
export const ordersRouter = express.Router();

ordersRouter.post("/create", async (req: any, res: any) => {
    try {
        if (req.body) {
            const order = req.body;
            const result = await OrderService.create(order);
            if (result && result.includes('ok')) {
                res.status(200).send(JSON.stringify({result}));
            } else {
                res.status(500).send(JSON.stringify({result}));
            }
        }
    } catch (e) {
        res.status(500).send(e.message);
    }
});

ordersRouter.post("/get", async (req: any, res: any) => {
    try {
        const result = await OrderService.getAll();
        if (result) {
            res.status(200).send(JSON.stringify({result}));
        } else {
            res.status(500).send(JSON.stringify({result}));
        }
    } catch (e) {
        res.status(500).send(e.message);
    }
});
