import {MelonnApiService} from "./melonn.api/melonn.api.service";

const mellonApi = new MelonnApiService();
export const getMelonnAvaliableShippingMethods = async (): Promise<any> => {
    return await mellonApi.getAvaliableShippingMethods();
};
export const getShippingMethodRules = async (id: string): Promise<any> => {
    return await mellonApi.getShippingMethodRules(id);
};
