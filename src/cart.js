import React from 'react';
import CartItem from './CartItem'
class Cart extends React.Component{
    constructor(){
        super();
        this.state={
           products:[
            {
                price:3000,
                title: "Watch",
                qty:2,
                img:'',
                id:1
            },
            {
                price:100000,
                title: "Laptop",
                qty:1,
                img:'',
                id:2
            },
            {
                price:5000,
                title: "Mobile",
                qty:3,
                img:'',
                id:3
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

   render(){
       const {products}=this.state;
       return(
           <div className="cart">

           {
               products.map(product=>{
                   
                   return <CartItem 
                   product={product} 
                   key={product.id}
                   onIncreaseQty={this.handleIncreaseQty}
                   onDecreaseQty={this.handleDecreaseQty}
                   onDelete={this.handleDelete}
                   />
               })
           }
           
           </div>
       );
   }
      
}

export default Cart;