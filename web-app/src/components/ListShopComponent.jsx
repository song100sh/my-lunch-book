import React, { Component } from 'react';
import ShopListService from '../service/ShopListService';

class ListShopComponent extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      shopList: []
    }
  }
  
  componentDidMount() {
    ShopListService.getShopList().then((response) => {
      console.log('why...', response.data);
      let dumpData = [{localIndex: '1', shopName: 'TEST', foodName: '태스트 메뉴1'}, {localIndex: '1', shopName: 'TEST', foodName: '태스트 메뉴2'}];
      // change -> {localIndex: '', shopName: '', foodList : [{name : test1, allQt: 10, myQt: 1}, {name : test2, allQt: 11, myQt: 2}];
      response.data = dumpData;
      this.setState({shopList : response.data});
    });
  }
  
  render() {
    return (
      <div>
        <h2 className={"text-center"}>Shop List</h2>
        <div className={"d-flex flex-row"}>
          <ul>
            {
              this.state.shopList.map(
                shop =>
                  <li key={shop.localIndex}>
                    매장명 : {shop.shopName}
                    매뉴명 : {shop.foodName}
                  </li>
              )
            }
          </ul>
        </div>
        {/*<div className={"row"}>
          <table className={"table table-striped table-bordered"}>
            <thead>
            <tr>
              <th>index</th>
              <th>매장</th>
              <th>메뉴</th>
              <th>작성자</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.shopList.map(
                shop =>
                  <tr key={shop.localIndex}>
                    <td>{shop.localIndex}</td>
                    <td>{shop.shopName}</td>
                    <td>{shop.foodName}</td>
                    <td>{shop.localName}</td>
                  </tr>
              )
            }
            </tbody>
          </table>
        </div>*/}
      </div>
    );
  }
}

export default ListShopComponent;