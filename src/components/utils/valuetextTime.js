export const valuetextTime = value => value.toString().length > 2 ? value.toString().replace('.5', ':30') : `${value.toString()}:00`;
