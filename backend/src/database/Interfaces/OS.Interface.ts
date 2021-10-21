export interface IcreateOS {
    UUID: string;
    timeDelivered: number;
    priceSale: number;
    installmentSale: number;
    ok: boolean;
    active: boolean;
    delivered: boolean;
    support: boolean;
    errorApp?: string;
}