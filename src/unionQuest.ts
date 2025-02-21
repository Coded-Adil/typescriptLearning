let discount: number | string = 20;
discount = '30%';
// discount = true;

let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';
orderStatus = 'shipped';
orderStatus = 'delivered';
// orderStatus = 'canceled';

console.log({ discount, orderStatus });