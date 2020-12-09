

import React from 'react';
import Cart from './cart'
import Navbar from './navbar'
class App extends React.Component {

  constructor(){
    super();
    this.state={
       products:[
        {
            price:3000,
            title: "Watch",
            qty:3,
            img:'https://bit.ly/33Wojqj',
            id:1
        },
        {
            price:100000,
            title: "Laptop",
            qty:1,
            img:'https://bit.ly/3oEbqt9',
            id:2
        },
        {
            price:5000,
            title: "Mobile",
            qty:1,
            img:'https://bit.ly/3gtdLEc',
            id:3
        },
        {
          price:7000,
          title: "Joystick",
          qty:2,
          img:'https://bit.ly/39QSLWM',
          id:4
      }


       ]
    }
   }
   handleIncreaseQty=(product)=>{
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1;
    this.setState({
        products:products
    })
   }


   handleDecreaseQty=(product)=>{
       const{products}=this.state;
       const index=products.indexOf(product);
       if(products[index].qty>0){
           products[index].qty-=1;
           this.setState({
               products:products
           })
       }
                        }
 handleDelete=(id)=>{
     const { products}=this.state;
     const items=products.filter(item=>item.id!==id);
     this.setState({
         products:items
     })



 }
      getCartCount=()=>{
  const {products}=this.state;
  let cnt=0;
  products.forEach(product => {
    cnt+=product.qty;
  });
  return cnt;
      }


      getTotalPrice=()=>{
        const {products}=this.state;
        let totalPrice=0;
        products.forEach(product=>{
          totalPrice+=product.qty*product.price;
        })
        return totalPrice;
      }
  render(){
    const {products}=this.state;
  return (
    <div className="App">
    
    <Navbar
      count={this.getCartCount()}
    />
    <Cart
    products={products}
     onIncreaseQty={this.handleIncreaseQty}
     onDecreaseQty={this.handleDecreaseQty}
     onDelete={this.handleDelete}
     />
     <div style={{padding:10,fontSize:20}}>
     TOTAL:{this.getTotalPrice()}
     </div>

    </div>
  );
}
}

export default App;
