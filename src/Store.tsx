import React from 'react'
import { Address, Restaurant } from './model/restuarnt'

//여기에서만 쓰이는 타입하나를 만듬 (props 사용하기 위해서)
interface OwnProps{
  info : Restaurant,
  changeAddress(address:Address) : void;    //함수 타입 지정은 이렇게 한다. 
                                  //void : return 타입이 x때 사용한다.
}

const Store : React.FC<OwnProps> = ({info, changeAddress}) => { //React.FC에서도 <> 쓸수 있다.
  //change 하는 함수 구현해봄
  const handleButtonClick = ()=> {
    const newAddress : Address = {
      city : 'new City',
      detail : 'new Detail',
      zipCode : 456456
    };
    changeAddress(newAddress);
  };
  
  return (
    <div>
      <div>{info.name}</div>
      <button onClick={handleButtonClick}>Change Address</button>
    </div>
  )
}

export default Store;