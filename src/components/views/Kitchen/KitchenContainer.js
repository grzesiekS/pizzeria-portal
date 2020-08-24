import { connect } from 'react-redux';
import Kitchen from './Kitchen';
import {getAllOrders, fetchOrderFromAPI, getOrderLoadingState} from '../../../redux/orderRedux';
import { getAllProducts, fetchProductsFromAPI, getProductsLoadingState } from '../../../redux/productRedux';

const mapStateToProps = (state) => ({
  orders: getAllOrders(state),
  loadingOrders: getOrderLoadingState(state),
  products: getAllProducts(state),
  loadingProducts: getProductsLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
  fetchOrders: () => dispatch(fetchOrderFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Kitchen);
