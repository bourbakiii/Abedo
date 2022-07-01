export default async function ({store, route, redirect}) {
  // console.log(store.state.announcement);
  // console.log(route.name);
  if (!store.state.announcement) return;
  // console.log('---route.query.preview---');
  // console.log(+route.query.preview === 1);
  // console.log('---route.query.preview---');
  // console.log(route.query.preview === 1 && (route.name === 'partners-partner_id' || route.name === 'product_id'));
  if (+route.query.preview === 1 && (route.name === 'partners-partner_id' || route.name === 'product_id')) return;

  if (route.name === 'authorization' &&
    ((Object.keys(route.query).length === 2 && Object.keys(route.query).includes('shop_id') && Object.keys(route.query).includes('product_id'))
      || (Object.keys(route.query).length === 1 && Object.keys(route.query).includes('shop_id'))))
    return;


  console.log("Перекидывает");
  redirect('/announcement');

};
