//레스토랑 type 하나 새로 만듬
export type Restaurant = {
    name : string;
    category : string;
    address : Address;
    menu : Menu[];
}



//address 와 menu도 따로 type 만들어 보기
export type Address = {
    city : string;
    detail : string;
    zipCode : number;
}
export type Menu = {
    name : string;
    price : number;
    category : string;
}
