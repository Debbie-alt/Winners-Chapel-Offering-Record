const getOrders = () => {
    return(
      fetch('https://dummyjson.com/products')
      .then(res => res.json())

  )
};

export default getOrders;

export const getRevenue=()=>{
  return(  
    fetch('https://dummyjson.com/carts')
    .then(res => res.json()))
}
