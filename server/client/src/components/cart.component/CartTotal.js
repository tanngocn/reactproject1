import React, { Component } from 'react';

class Cart_total extends Component {

    render() {
      const {cart}=this.props
      console.log(cart.payload);
        return (
            <div>

            <section className="container mt-2">
                <div className="total">
                  <h3>Tổng tiền:</h3>
                  <b>{this.showTotalAmount(cart)}$</b>
                  <a href="#/" className="buymore sum">Thanh toán</a>
                </div>			
              </section>
                          
          </div>
        );
    }

    showTotalAmount = (cart) => {
      let total = 0;
      if (cart.length > 0) {
          for (let i = 0; i < cart.length; i++) {
              total += parseInt(cart[i].payload.priceProduct * cart[i].qualitySell);
          }
      }
      return total;
  }
}

export default Cart_total;