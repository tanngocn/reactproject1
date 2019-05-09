import React, { Component } from 'react';

class SortProduct extends Component {
    render() {
        return (
            <aside className="sort_product">
                <div className="title_page">
                  <h1 className="title_product_detail">Tìm kiếm theo:</h1>
                  <hr className="title_line review" />
                </div>
                <div className="sort">
                  <div className="form_group_style sortBy">
                    <select name="kindProduct" id="kindProduct" className="form-ctr">
                      <option value={0}>Nhẫn </option>
                      <option value={1}>Bông tai </option>
                      <option value={2}>Dây chuyền </option>
                      <option value={3}>Vòng tay </option>
                    </select>
                    <label htmlFor="kindProduct" className="label-form"> Loại sản phẩm:</label>
                  </div>
                  <div className="form_group_style sortBy">
                    <select name="kindProduct" id="kindProduct" className="form-ctr">
                      <option value={0}>Vàng</option>
                      <option value={1}>Bạch Kim </option>
                      <option value={2}>Bạc </option>
                      <option value={3}>Gỗ </option>
                    </select>
                    <label htmlFor="kindProduct" className="label-form"> Chất liệu:</label>
                  </div>
                  <div className="form_group_style sortBy">
                    <select name="kindProduct" id="kindProduct" className="form-ctr">
                      <option value={0}>Dưới 10 triệu</option>
                      <option value={1}>Từ 10 triệu -20 triệu</option>
                      <option value={2}>Trên 20 triệu </option>
                    </select>
                    <label htmlFor="kindProduct" className="label-form"> Giá thành:</label>
                  </div>
                </div>	
                <div className="title_page">
                  <h1 className="title_product_detail">Loại sản phẩm:</h1>
                  <hr className="title_line review" />
                </div>
                <ul className="list_kind">
                  <li><a href="#/">Nhẫn ()</a></li>
                  <li><a href="#/">Dây Chuyền ()</a></li>
                  <li><a href="#/">Bông tai ()</a></li>
                  <li><a href="#/">Vòng ()</a></li>
                  <li><a href="#/">Lắc ()</a></li>
                </ul>
                <div className="title_page">
                  <h1 className="title_product_detail">Chất liệu:</h1>
                  <hr className="title_line review" />
                </div>
                <ul className="list_kind">
                  <li><a href="#/">Vàng ()</a></li>
                  <li><a href="#/">Bạch Kim ()</a></li>
                  <li><a href="#/">Bạc ()</a></li>
                  <li><a href="#/">Gỗ ()</a></li>
                </ul>
                <div className="title_page">
                  <h1 className="title_product_detail">Kích thước:</h1>
                  <hr className="title_line review" />
                </div>
                <ul className="list_kind">
                  <li><a href="#/">12 x 15 inches ()</a></li>
                  <li><a href="#/">16 inches ()</a></li>
                  <li><a href="#/">22 inches ()</a></li>
                  <li><a href="#/">4  inches ()</a></li>
                </ul>
              </aside>
        );
    }
}

export default SortProduct;