import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import {getAllOrders, fetchOrderFromAPI} from '../../../redux/orderRedux';
import { getAllProducts, fetchProductsFromAPI } from '../../../redux/productRedux';

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
  products: getAllProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
  fetchOrders: () => dispatch(fetchOrderFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
