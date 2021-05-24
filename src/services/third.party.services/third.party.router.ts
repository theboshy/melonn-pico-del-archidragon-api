import * as express from "express";
export const thirdPartyRouter = express.Router();
import * as ThirdPartyService from "./third.party.service";

thirdPartyRouter.get("/getshm", async (req: any, res: any) => {
    try {
        const result = await ThirdPartyService.getMelonnAvaliableShippingMethods();
        if (result) {
            res.status(200).send(result);
        } else {
            // todo: maybe trown an error?
        }
    } catch (e) {
        res.status(500).send(e.message);
    }
});
