import React from 'react';
class CartItem extends React.Component{

  
  render(){
  const {price,title,qty}=this.props.product;
  const {product,onIncreaseQty,onDecreaseQty,onDelete}=this.props;

        return(
          <div className="cart-item">
              <div className="left-block">
                  <img alt="" style={styles.image}/>
              </div>
              <div className="right-block">
                 <div style={{fontSize:25}}>{title}</div>
                 <div style={{color:"grey"}}>Rs{price}</div>
                 <div style={{color:"grey"}}>{qty}</div>
                 <div className="cart-item-actions">
                {/*buttons*/}
                <img
                 alt="inc" 
                 className="action-icons"
                  src="https://bit.ly/36ImpeS"
                   onClick={()=>onIncreaseQty(product)}
                  />
                <img alt="dec"
                 className="action-icons"
                  src="https://bit.ly/2IhZ9uJ"
                  onClick={()=>onDecreaseQty(product)}
                  />
                <img 
                alt="del" 
                className="action-icons" 
                src="https://bit.ly/3gehsxm"
                onClick={()=>onDelete(product.id)}
                />
                
               
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