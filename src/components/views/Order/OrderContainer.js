import { connect } from 'react-redux';
import Order from './Order';
import {getAllProducts, fetchProductsFromAPI, getProductsLoadingState} from '../../../redux/productRedux';

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
  loadingProducts: getProductsLoadingState(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
