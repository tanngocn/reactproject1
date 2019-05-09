import React, { Component } from 'react';
import SortProduct from './SortProduct';
import ProductItem from './ProductItem';

class Products extends Component {
    render() {
        return (
            <section className="container">
            <section className="product_list_page">
            {/* aside sort */}
                <SortProduct/>
              {/* list product */}
              <section className="product_list_item">
                <div className="title_page">
                  <h1 className="title_product_detail">Danh sách sản phẩm:</h1>
                  <hr className="title_line review" />
                </div>
                <div className="form_group_style showProduct">
                  <select name="kindProduct" id="kindProduct" className="form-ctr">
                    <option value={0}>8 Sản phẩm</option>
                    <option value={1}>16 sản phẩm</option>
                    <option value={2}>Trên 16 sản phẩm</option>
                  </select>
                  <label htmlFor="kindProduct" className="label-form"> Hiển thị :</label>
                </div>
                {/* Product_list */}
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>

              </section>
            </section>
            {/* product_list_page */}
          </section>
        );
    }
}

export default Products;