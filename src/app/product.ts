export class Product {   
    public id : number;
    public name : string;
    public image : string;
}

export class ProductDetail extends Product {
    public description : string;
    public price : number = 0;
    public rating : number = 0;
    
}