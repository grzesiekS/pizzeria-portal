import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import shortid from 'shortid';

import styles from './Kitchen.module.scss';
import { ListItemText, ListItemSecondaryAction, Typography } from '@material-ui/core';

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

const dbDataOrdersDemo = [
  {
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
    ],
    id: 123,
  },
  {
    address: 'test',
    phone: '123456789',
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
        id: 'pizza',
        amount: 3,
        price: 60,
        priceSingle: 20,
        params: {
          sauce: {
            tomato: 'tomato',
          },
          toppings: {
            olives: 'olives',
            redPeppers: 'redPeppers',
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
    ],
    id: 567,
  },
];

const sortList = list => (list.sort((a,b) => b.id - a.id));
const findProduct = (productId, productList) => productList.filter(product => product.id === productId);

const Kitchen = () => {
  return (
    <div className={styles.component}>
      <h2 className={styles.title}>Orders</h2>
      <List component={Paper}>
        {sortList(dbDataOrdersDemo).map(orderEl => (
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
                findProduct(product.id, demoProducts).map(productFilter => (
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
};

export default Kitchen;
