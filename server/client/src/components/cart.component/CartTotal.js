import React, { Component } from 'react';

class Cart_total extends Component {
    render() {
        return (
            <div>

        <section className="container mt-2">
            <div className="total">
              <h3>Tổng tiền:</h3>
              <b>3000$</b>
              <a href="#/" className="buymore sum">Thanh toán</a>
            </div>			
          </section>
                          
          </div>
        );
    }
}

export default Cart_total;