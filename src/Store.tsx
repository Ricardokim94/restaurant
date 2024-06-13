import React from 'react';
import { Address, Restaurant } from './model/restuarnt';

interface OwnProps {
  info: Restaurant;
  changeAddress(address: Address): void;
}

const Store: React.FC<OwnProps> = ({ info, changeAddress }) => {
  const handleButtonClick = () => {
    const newAddress: Address = {
      city: 'new city',
      detail: 'new detail',
      zipCode: 456456
    };
    changeAddress(newAddress);
  };

  const handleExistingButtonClick = () => {
    // 기존의 주소 정보로 되돌리기
    const originalAddress: Address = {
      city: 'suwon',
      detail: 'somewhere',
      zipCode: 123123
    };
    changeAddress(originalAddress);
  };

  return (
    <div className="container mt-4">
      <table className="table table-bordered">
        <thead className="thead-light">
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Detail</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{info.name}</td>
            <td>{info.address.city}</td>
            <td>{info.address.detail}</td>
            <td>{info.address.zipCode}</td>
          </tr>
        </tbody>
      </table>
      <div style={{ marginTop: '10px' }}> {/* 버튼 사이에 간격을 주기 위한 div */}
        <button 
          onClick={handleButtonClick} 
          className="btn btn-primary"
          style={{ marginRight: '10px' }} // 오른쪽 마진 추가
        >
          Change Address
        </button>
        <button 
          onClick={handleExistingButtonClick} 
          className="btn btn-primary"
        >
          Existing Button
        </button>
      </div>
    </div>
  );
};

export default Store;
