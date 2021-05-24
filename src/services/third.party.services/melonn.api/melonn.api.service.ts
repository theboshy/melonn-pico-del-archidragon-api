import fetch from 'node-fetch';
export class MelonnApiService {
    private getShippingMethodsUrl = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods';
    private getShippingMethodsRulesUrl = 'https://yhua9e1l30.execute-api.us-east-1.amazonaws.com/sandbox/shipping-methods';
    async getAvaliableShippingMethods() {
       const result =  await fetch(this.getShippingMethodsUrl, {
            method: 'GET',
            headers: {
                'x-api-key': process.env.MELONN_API_KEY
            }
        }).then(res => res.json()).then(json => {
           return json;
        });
        return result;
    }
    async getShippingMethodRules(id: string) {
        const parseredUrl = `${this.getShippingMethodsRulesUrl}/${id}`;
        const result =  await fetch(parseredUrl, {
            method: 'GET',
            headers: {
                'x-api-key': process.env.MELONN_API_KEY
            }
        }).then(res => res.json()).then(json => {
            return json;
        });
        return result;
    }
}
