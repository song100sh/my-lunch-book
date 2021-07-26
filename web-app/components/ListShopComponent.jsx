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
      this.setState({shopList : response.data});
    });
  }
  
  render() {
    return (
      <div>
        <h2 className={"text-center"}>Shop List</h2>
        <div className={"row"}>
          <table className={"table table-striped table-bordered"}>
            <thead>
            <tr>
              <th>매장</th>
              <th>메뉴</th>
              <th>작성자</th>
              <th>TOTAL</th>
              <th>CLEAR</th>
            </tr>
            </thead>
            <tbody>
            {
              this.state.shopList.map(
                shop => {
                }
              )
            }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default;