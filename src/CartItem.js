import React from 'react';
class CartItem extends React.Component{

         constructor(){
          super();
          this.state={
              price:999,
              title: "Device",
              qty:1,
              img:''
          }
         }

   incQuantity=()=>{
       const value=this.state.qty+1;
 this.setState({qty:value});
   }
   decQuantity=()=>{
       
   
    if(this.state.qty>0){
        const value=this.state.qty-1;
        
this.setState({qty:value});
    }
}


    render(){
  const {price,title,qty}=this.state;

        return(
          <div className="cart-item">
              <div className="left-block">
                  <img alt="" style={styles.image}/>
              </div>
              <div className="right-block">
                 <div style={{fontSize:25}}>{title}</div>
                 <div style={{color:"grey"}}>{price}RS</div>
                 <div style={{color:"grey"}}>{qty}</div>
                 <div className="cart-item-actions">
                {/*buttons*/}
                <img
                 alt="inc" 
                 className="action-icons"
                  src="https://bit.ly/36ImpeS"
                   onClick={this.incQuantity}
                  />
                <img alt="dec"
                 className="action-icons"
                  src="https://bit.ly/2IhZ9uJ"
                  onClick={this.decQuantity}
                  />
                <img 
                alt="del" 
                className="action-icons" 
                src="https://bit.ly/3gehsxm"/>
               
                 </div>

              </div>
          </div>  
        );
    }



}
const styles={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background:'#ccc'
    }
}
export default CartItem;