export interface IcreateApplications {
    nameApp: string;
    imageApp?: string;
    descriptionsApp: string;
    typeApp: string;
    activeApp?: boolean;
    costProduceApp?: number | undefined;
    priceApp: number;
    promotionApp?: string;
    timeDeliveryApp?: string;
    low_low?: number;
    low?: number;
    medium?: number;
    high?: number;
    high_high?: number;
    tester?: boolean;
}