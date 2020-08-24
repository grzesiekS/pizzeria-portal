import { connect } from 'react-redux';
import Order from './Order';
import {getAllProducts, fetchProductsFromAPI} from '../../../redux/productRedux';

const mapStateToProps = (state) => ({
  products: getAllProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProductsFromAPI()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
