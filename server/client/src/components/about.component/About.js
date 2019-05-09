import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div>
            <section className="container">
              <h1 className="about_title">Cam kết  Website</h1>
              <div className="about">
                <section className="aboutBlock">
                  <h1 className="title">Sản phẩm</h1>
                  <ul>
                    <li>Phong phú, Đa dạng</li>
                    <li>Giá thành hợp lý</li>
                    <li>Tiết kiệm</li>
                    <li>Chế độ bảo hành hợp lý</li>
                  </ul>
                </section>
                <section className="aboutBlock">
                  <h1 className="title">Chất lượng</h1>
                  <ul>
                    <li>Đảm bảo</li>
                    <li>Trung thực</li>
                    <li>Hàng thật, chất lượng thật</li>
                    <li>Nhận trách nhiệm</li>
                  </ul>
                </section>
                <section className="aboutBlock">
                  <h1 className="title">Cam kết</h1>
                  <ul>
                    <li> Luôn đặt tiêu chí của khách hàng lên làm đầu</li>
                    <li>Cập nhật kịp thời các công nghệ mới</li>
                    <li>Nhận trách nhiệm</li>
                    <li>Tư vấn mọi câu hỏi của cách hàng</li>
                    <li>Giao hàng đảm bảo đúng chất lượng sản phẩm mà khách mua</li>
                  </ul>
                </section>
                <section className="aboutBlock">
                  <h1 className="title">Giá trị cốt lõi</h1>
                  <ul>
                    <li>Tận tâm với Khách hàng</li>
                    <li>Trung thực</li>
                    <li>Nhận trách nhiệm</li>
                    <li>Yêu thương và hỗ trợ đồng đội</li>
                    <li>Máu lửa trong công việc</li>
                  </ul>
                </section>
              </div>
            </section>
            {/* about shop */}
            {/* footer */}
            <section className="container mb-2" >
              <h1 className="about_title">Địa chỉ Cửa hàng</h1>
              <div className="aboutMe">
                <div id="map">
                  <img src="../images/address.jpg" alt="Map" />
                </div>
              </div>
            </section>
          </div>

        );
    }
}

export default About;