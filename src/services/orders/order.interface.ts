export interface OrderInterface {
    sellerStore: string;
    shippingMethod: ShippingMethodInterface;
    externalOrderNumber: number;
    /*buyer*/
    name: string;
    phone: number;
    email: string;
    shippingAddress: string;
    shippingCity: string;
    shippingRegion: string;
    shippingCountry: string;
    /*-*/
    items: [ItemInterface];
    creationTime: string;
    internalOrderNumber: string;
    packPromiseMin: string;
    packPromiseMax: string;
    shipPromiseMin: string;
    shipPromiseMax: string;
    deliveryPromiseMin: string;
    deliveryPromiseMax: string;
    readyPickupPromiseMin: string;
    readyPickupPromiseMax: string;
}

export interface ItemInterface {
    name: string;
    qty: string;
    weight: number;
}

export interface ShippingMethodInterface {
    id: number;
    name: string;
}
