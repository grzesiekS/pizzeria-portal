import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import shortid from 'shortid';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import styles from './Order.module.scss';
import { Radio } from '@material-ui/core';

const findProduct = (productId, productList) => productList.filter(product => product.id === productId);

const renderActions = param => {
  switch (param.type) {
    case 'select':
      return (
        <FormControl key={shortid.generate()}>
          <InputLabel id={param.label}>{param.label}</InputLabel>
          <Select
            labelId={param.label}
            value={'standard'}
            className={styles.select}
          >
            {Object.keys(param.options).map(opt => (
              <MenuItem key={opt} value={param.options[opt].label}>{`${param.options[opt].label} - ${param.options[opt].price} $`}</MenuItem>
            ))}
          </Select>
        </FormControl>
      );
    case 'checkboxes':
      return (
        <FormControl key={shortid.generate()}>
          <FormLabel id={param.label}>{param.label}</FormLabel>
          <FormGroup>
            {Object.keys(param.options).map(opt => (
              <FormControlLabel
                key={param.options[opt].label}
                control={<Checkbox checked={param.options[opt].default ? true : false} name={opt} color='primary'/>}
                label={param.options[opt].label}
              />
            ))}
          </FormGroup>
        </FormControl>
      );
    case 'radios':
      return (
        <FormControl key={shortid.generate()}>
          <FormLabel id={param.label}>{param.label}</FormLabel>
          <RadioGroup value='tomato'>
            {Object.keys(param.options).map(opt => (
              <FormControlLabel
                key={opt}
                value={opt}
                control={<Radio color='primary'/>}
                label={`${param.options[opt].label} - ${param.options[opt].price} $`}
              />
            ))}
          </RadioGroup>
        </FormControl>
      );
    default:
      return <></>;
  }
};

class Order extends React.Component {

  componentDidMount() {
    const { fetchProducts, fetchFilteredOrder } = this.props;
    fetchProducts();
    fetchFilteredOrder(parseInt(this.props.match.params.id));
  }

  render() {
    const { loadingProducts: {active, error}, products, orders, loadingOrders} = this.props;

    if(active || !products.length || loadingOrders.active) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error || loadingOrders.error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <div className={styles.component}>
          <Grid
            container
            justify="space-around"
          >
            <div className={styles.container}>
              {products.map(product => (
                <Grid item xs={12} key={product.id} component={Paper} className={styles.innerSection}>
                  <h2 className={styles.title}>{product.name}</h2>
                  {product.params !== undefined
                    ?
                    Object.keys(product.params).map(param => (
                      renderActions(product.params[param])
                    ))
                    : null
                  }
                  <Grid
                    container
                    justify="space-around"
                    alignItems="center"
                    className={styles.orderSection}
                  >
                    <TextField
                      id="standard-number"
                      label="Select Quantity"
                      type="number"
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    <Button variant="contained" color="primary">
                      Add Order
                    </Button>
                  </Grid>
                </Grid>
              ))}
            </div>
            <div className={styles.container}>
              {orders.map(order =>
                <Grid key={order.id} item component={Paper} className={styles.innerSection}>
                  <h2 className={styles.title}>{`Order ${this.props.match.params.id}`}</h2>
                  <TextField
                    id="standard-basic"
                    label="Table No"
                    className={styles.input}
                    value={order.tableNo}
                  />
                  <h2 className={styles.subtitle}>Order details:</h2>
                  {order.products.map(product => (
                    findProduct(product.id, products).map(productFilter => (
                      <div key={product.id} className={styles.orderDetails}>
                        <p>{`${productFilter.name} x ${product.amount} Price: ${product.price}$`}</p>
                        {product.params !== undefined
                          ?
                          Object.keys(product.params).map(param => (
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
                          ))
                          :
                          null
                        }
                      </div>
                    ))
                  ))}
                  <h2 className={styles.subtitle}>Total Price:</h2>
                  <h2 className={styles.title}>{`${order.totalPrice} $`}</h2>
                  <Button variant="contained" color="primary">
                    Send Order
                  </Button>
                </Grid>
              )}
            </div>
          </Grid>
        </div>
      );
    }
  }
}

Order.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
  fetchProducts: PropTypes.func,
  fetchFilteredOrder: PropTypes.func,
  loadingProducts: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
  }),
  loadingOrders: PropTypes.shape({
    active: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
  }),
  products: PropTypes.any,
  orders: PropTypes.any,
};

export default Order;
