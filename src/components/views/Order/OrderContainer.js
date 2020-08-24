import { connect } from 'react-redux';
import Order from './Order';
import {getAllProducts, fetchProductsFromAPI, getProductsLoadingState} from '../../../redux/productRedux';
import {getAllOrders, fetchFilteredOrderFromAPI, getOrderLoadingState} from '../../../redux/orderRedux';

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
  loadingProducts: getProductsLoadingState(state),
  orders: getAllOrders(state),
  loadingOrders: getOrderLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
  fetchFilteredOrder: id => dispatch(fetchFilteredOrderFromAPI(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
