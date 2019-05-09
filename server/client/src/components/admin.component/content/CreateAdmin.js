import React, { Component } from 'react';

class CreateAdmin extends Component {
    render() {
        return (
            <div className="form_container">
                <section className="form createAdmin">
                        <div className="title_page ">
                            <h1 className="title_product_detail">Thêm quản trị </h1>
                            <hr className="title_line review" />
                        </div>
                        <div className="form_group_style">
                            <input type="text" name="name" id="name" required className="form-ctr" />
                            <label htmlFor="name" className="label-form"><i className="fas fa-user-circle" /> Name:</label>
                        </div>		
                        <div className="form_group_style">
                            <input type="email" name="email" id="email" required className="form-ctr" />
                            <label htmlFor="email" className="label-form"><i className="fas fa-envelope" /> Email:</label>
                        </div>
                        <div className="form_group_style">
                            <input type="password" name="passWord" id="passWord"  required className="form-ctr" />
                            <label htmlFor="passWord" className="label-form"><i className="fas fa-lock" /> Password:</label>
                        </div>
                        <div className="form_group_style sortBy">
                            <select name="Level" id="Level" className="form-ctr">
                            <option value={0}>Admin </option>
                            <option value={1}>User </option>
                            </select>
                            <label htmlFor="Level" className="label-form">Level</label>
                        </div>
                        <button className="addProduct createCategories" title="Thêm danh mục">Create</button>
                        <button className="addProduct resetProduct createCategories" title="Hủy thao tác"> Back</button>
                </section>
      </div>
        );
    }
}

export default CreateAdmin;