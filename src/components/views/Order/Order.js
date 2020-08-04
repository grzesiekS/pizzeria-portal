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

const demoProducts = [
  {
    id: 'cake',
    class: 'small',
    name: `Zio Stefano's Doughnut`,
    price: 9,
    description: 'Treat yourself with this soft, freshly baked cookie. The recipe has been handed down from generation to generation in our family and it has won us several first place prizes in local competitions.',
  },
  {
    id: 'pizza',
    name: `Nonna Alba's Pizza`,
    price: 20,
    description: 'The true taste of Italy homemade pizza as prepared by our grandmothers in old-fashoned brick ovens. Choose your favorite topping and enjoy your comfort food! All ingredients come straight from eco-friendly, trusted farms in the Italian countryside.',
    params: {
      sauce: {
        label: 'Sauce',
        type: 'radios',
        options: {
          tomato: {
            label: 'Tomato',
            price: 0,
            default: true,
          },
          cream: {
            label: 'Sour cream',
            price: 2,
          },
        },
      },
      toppings: {
        label: 'Toppings',
        type: 'checkboxes',
        options: {
          olives: {
            label: 'Olives',
            price: 2,
            default: true,
          },
          redPeppers: {
            label: 'Red peppers',
            price: 2,
            default: true,
          },
          greenPeppers: {
            label: 'Green peppers',
            price: 2,
            default: true,
          },
          mushrooms: {
            label: 'Mushrooms',
            price: 2,
            default: true,
          },
          basil: {
            label: 'Fresh basil',
            price: 2,
            default: true,
          },
          salami: {
            label: 'Salami',
            price: 3,
          },
          bacon: {
            label: 'Bacon',
            price: 3,
          },
          corn: {
            label: 'Corn',
            price: 2,
          },
          pineapple: {
            label: 'Pineapple',
            price: 2,
          },
        },
      },
      crust: {
        label: 'pizza crust',
        type: 'select',
        options: {
          standard: {
            label: 'standard',
            price: 0,
            default: true,
          },
          thin: {
            label: 'thin',
            price: 2,
          },
          thick: {
            label: 'thick',
            price: 2,
          },
          cheese: {
            label: 'cheese in edges',
            price: 5,
          },
          wholewheat: {
            label: 'wholewheat',
            price: 3,
          },
          gluten: {
            label: 'with extra gluten',
            price: 0,
          },
        },
      },
    },
  },
];

const dbDataOrdersDemo = {
  address: '',
  phone: '',
  tableNo: '1',
  totalPrice: 40,
  totalNumber: 1,
  subtotalPrice: 20,
  deliveryFee: 20,
  products: [
    {
      id: 'pizza',
      amount: 1,
      price: 20,
      priceSingle: 20,
      params: {
        sauce: {
          tomato: 'tomato',
        },
        toppings: {
          olives: 'olives',
          redPeppers: 'redPeppers',
          greenPeppers: 'greenPeppers',
          mushrooms: 'mushrooms',
          basil: 'basil',
        },
        crust: {
          standard: 'standard',
        },
      },
    },
    {
      id: 'cake',
      amount: 9,
      price: 27,
      priceSingle: 9,
      params: {},
    },
    {
      id: 'cake',
      amount: 5,
      price: 45,
      priceSingle: 9,
      params: {},
    },
  ],
  id: 123,
};

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

  render() {

    return (
      <div className={styles.component}>
        <Grid
          container
          justify="space-around"
        >
          <div className={styles.container}>
            {demoProducts.map(product => (
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
            <Grid item component={Paper} className={styles.innerSection}>
              <h2 className={styles.title}>{`Order ${this.props.match.params.id}`}</h2>
              <TextField
                id="standard-basic"
                label="Table No"
                className={styles.input}
                value={dbDataOrdersDemo.tableNo}
              />
              <h2 className={styles.subtitle}>Order details:</h2>
              {dbDataOrdersDemo.products.map(product => (
                findProduct(product.id, demoProducts).map(productFilter => (
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
              <h2 className={styles.title}>{`${dbDataOrdersDemo.totalPrice} $`}</h2>
              <Button variant="contained" color="primary">
                Send Order
              </Button>
            </Grid>
          </div>
        </Grid>
      </div>
    );
  }
}

Order.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Order;
