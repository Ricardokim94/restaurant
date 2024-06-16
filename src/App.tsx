import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Store from './Store';
import { Address, Restaurant } from './model/restuarnt';
import BestMenu from './BestMenu';

//이 데이터를 전달해서 값을 보여줌<Store>
let data : Restaurant= {
  name : '창목이 식당',
  category : 'korean',
  address : {
    city : 'suwon',
    detail : 'somewhere',
    zipCode : 123123
  },
  menu : [{name : 'bibimbab', price : 10000, category : 'BAB'},{name : 'guck', price : 8000, category : 'SOAP'}]
}
const App : React.FC = ()=>{
  const [myRestaurant, setMyRestaurant] = useState<Restaurant>(data); //useState에 data를 넣어봄
  const changeAddress = (address : Address) =>{  //address 바꾸는 함수 만들어 봄
    setMyRestaurant({...myRestaurant, address : address})
  } 
  const showBestMenuName = (name:string)=>{
    return name
  }
  return (
    <div className="App">
        <Store info={myRestaurant} changeAddress={changeAddress}/>
        <BestMenu name="불고기피자" category="피자" showBestMenuName = {showBestMenuName}/>
    </div>
  );
}

export default App;
