export interface IProduct {
    id: string,
    name: string,
    price: number,
    original_price: number,
    description: string,
    images : {
        base_url: string;
    }[],
    brand: {
        id:number,
        name:string,
        slug:string
    },
    specifications: ISpecfication[]
}

export interface ISpecfication {
    name: string,
    attribute: {
        code:string,
        name:string,
        value:string
    }
}