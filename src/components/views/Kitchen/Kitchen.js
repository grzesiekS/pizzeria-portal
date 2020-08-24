import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import shortid from 'shortid';

import styles from './Kitchen.module.scss';
import { ListItemText, ListItemSecondaryAction, Typography } from '@material-ui/core';

const sortList = list => (list.sort((a,b) => b.id - a.id));
const findProduct = (productId, productList) => productList.filter(product => product.id === productId);

class Kitchen extends React.Component {

  componentDidMount() {
    const { fetchProducts, fetchOrders } = this.props;
    fetchProducts();
    fetchOrders();
  }

  render() {

    const { orders, loadingOrders, products, loadingProducts} = this.props;

    if(loadingOrders.active || !orders.length || loadingProducts.active || !products.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(loadingOrders.error || loadingProducts.error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{loadingOrders.error ? loadingOrders.error : loadingProducts.error}</pre>
        </Paper>
      );
    } else {
      return (
        <div className={styles.component}>
          <h2 className={styles.title}>Orders</h2>
          <List component={Paper}>
            {sortList(orders).map(orderEl => (
              <div key={orderEl.id}>
                <ListItem>
                  <ListItemText
                    primary={orderEl.tableNo !== undefined
                      ?
                      `Table No: ${orderEl.tableNo}`
                      :
                      `Order No: ${orderEl.id}`
                    }
                  />
                  {orderEl.products.map(product => (
                    findProduct(product.id, products).map(productFilter => (
                      <ListItemText
                        key={shortid.generate()}
                        primary={`${productFilter.name} x${product.amount}`}
                        secondary={product.params !== undefined
                          ?
                          <Typography component={'div'} className={styles.options}>
                            {Object.keys(product.params).map(param => (
                              <ul key={param}>
                                <li>
                                  {`${productFilter.params[param].label}:`}
                                  <ul>
                                    {Object.keys(product.params[param]).map(paramInner => (
                                      <li key={paramInner}>{productFilter.params[param].options[paramInner].label}</li>
                                    ))}
                                  </ul>
                                </li>
                              </ul>
                            ))}
                          </Typography>
                          :
                          null
                        }
                      />
                    ))
                  ))}
                  <ListItemSecondaryAction>
                    <Button variant="contained" color="primary">
                      Ready
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        </div>
      );
    }
  }
}

Kitchen.propTypes = {
  loadingProducts: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
  }),
  loadingOrders: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
  }),
  fetchOrders: PropTypes.func,
  fetchProducts: PropTypes.func,
  orders: PropTypes.any,
  products: PropTypes.any,
};

export default Kitchen;
