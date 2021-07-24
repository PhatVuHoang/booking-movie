import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { Card, Row, Tabs } from "antd";
import 'antd/dist/antd.css';
import './FilmCoponent.css'
import { getFilmsAction } from "../../redux/actions/QuanLiPhimAction";
import Phim from "./Phim";
import Slider from 'react-slick'
import FilmMobile from "./FilmMobile/FilmMobileDangChieu";

export default function FilmComponent() {
  const { TabPane } = Tabs;
  function callback(key) {
    console.log(key);
  }

  let { danhSachPhim } = useSelector(state => state.FilmReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFilmsAction());
  }, [])


  const renderPhimDangChieu = () => {
    const danhSachPhimDangChieu = danhSachPhim.filter(x => x.dangChieu);
    return danhSachPhimDangChieu.map((phim, index) => {
      return <div key={index}>
        <Phim phim={phim} />
      </div>
    })
  }
  const renderPhimSapChieu = () => {
    const danhSachPhimSapChieu = danhSachPhim.filter(x => x.sapChieu);
    return danhSachPhimSapChieu.map((phim, index) => {
      return <div key={index}>
        <Phim phim={phim} />
      </div>
    })
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    // slidesPerRow: 2,
    // centerMode: true
    responsive: [
      {
        breakpoint: '769.99px',
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          rows: 2,
          infinite: true,
          arrows: false
        }
      },
    ]
  };
  return (
    <div className="film mt-5">
      <Tabs defaultActiveKey="1" onChange={callback} centered={true}>
        <TabPane tab="Đang Chiếu" key="1">
          <div className="container film__item">
            <Slider {...settings}>
              {renderPhimDangChieu()}
            </Slider>
          </div>
          <FilmMobile />
        </TabPane>
        <TabPane tab="Sắp Chiếu" key="2">
          <div className="container film__item">
            <Slider {...settings}>
              {renderPhimSapChieu()}
            </Slider>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}


