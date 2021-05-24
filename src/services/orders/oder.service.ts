import {OrderInterface} from "./order.interface";
import {orderDb} from "./order.db";
import moment from "moment";
import {getShippingMethodRules} from "../third.party.services/third.party.service";
export const create = async (newItem: OrderInterface): Promise<String> => {
    try {
        newItem.creationTime = moment().format('YYYY-MM-DD')
        newItem.internalOrderNumber = uniqueValue(); // note: no entendi el requerimiento sobre {mse} asi que preferi usar este metodo
        try {
            const result = await getShippingMethodRules(String(newItem.shippingMethod.id));
            if (result) {
                newItem.packPromiseMin = result.rules.promisesParameters.cases[0].packPromise.min;
                newItem.packPromiseMax = result.rules.promisesParameters.cases[0].packPromise.max;
                newItem.shipPromiseMin = result.rules.promisesParameters.cases[0].shipPromise.min;
                newItem.shipPromiseMax = result.rules.promisesParameters.cases[0].shipPromise.max;
                newItem.deliveryPromiseMin = result.rules.promisesParameters.cases[0].deliveryPromise.min;
                newItem.deliveryPromiseMax = result.rules.promisesParameters.cases[0].deliveryPromise.max;
                newItem.readyPickupPromiseMin = result.rules.promisesParameters.cases[0].readyPickUpPromise.min;
                newItem.readyPickupPromiseMax = result.rules.promisesParameters.cases[0].readyPickUpPromise.max;
            }
        } catch (e) {
            return `error, ${e.toString()}`;
        }
        orderDb.push(newItem);
    } catch (e) {
        return `error, ${e.toString()}`;
    }
    return 'ok';
};

export const getAll = async (): Promise<OrderInterface[]> => {
    try {
        return orderDb;
    } catch (e) {
        return [];
    }
    return [];
};

const uniqueValue = () => {
    let date = new Date();
    let unique = ((Math.random() * 100) + '').slice(-4);
    let newDate = date.toISOString().replace(/[^0-9]/g, '').replace(date.getFullYear().toString(), unique);
    let random = Math.random() * 100;
    return newDate.slice(0, -12) + '-' + random.toString().slice(-5);
}
