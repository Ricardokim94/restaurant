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

//Omit 사용법 - 뭐를 빼고 싶을 때 사용
export type AddressWithoutZip = Omit<Address, 'zipCode'>
//Pick 사용법 - 뭐를 추가 (이것만 가져오고 싶을때) 사용
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>



//API 받는 것도 type으로 지정 해놓을 수 있다.
export type ApiResponse<T> = {
    data:T[],
    totalPage : number,
    page : number
}
//이런식으로 사용!
export type ResturantResponse = ApiResponse<Restaurant>
export type MenuResponse = ApiResponse<Menu>