import axios from 'axios';

const SHOP_API_BASE_URL = "http://localhost:8080/api/shop";

class ShopListService {
  getShopList() {
    /*let list =axios.get(SHOP_API_BASE_URL);
    console.log('axios > ', list);*/
    return axios.get(SHOP_API_BASE_URL);
  }
}

export default new ShopListService();