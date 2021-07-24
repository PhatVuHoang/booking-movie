import React, { useState } from 'react';
import { Card } from 'antd';
import './Phim.css';
import moment from 'moment';
import playVideo from '../../assets/img/icons/slide/play-video.png';
import { NavLink } from 'react-router-dom';
import { Rate } from 'antd';





export default function Phim(props) {


    const { Meta } = Card;

    const { phim } = props;

    return (
        <NavLink to="/">
            <Card className="card text-center"
                hoverable
                style={{ width: 220 }}
                cover={<img width={190} height={270} alt={phim.tenPhim} src={phim.hinhAnh} />}
            >
                <span className="card__rate">
                    <div className="card__rate__item">
                        <p className="card__p">{phim.danhGia.toLocaleString()}</p>
                        <Rate disabled value={phim.danhGia / 2} />
                    </div>
                </span>
                <div className="card__layout"></div>
                <button><img src={playVideo} alt={playVideo} /></button>
                <Meta title={phim.tenPhim} description={`${moment(phim.ngayKhoiChieu).format("DD-MM-yyyy")}`} />
            </Card>
        </NavLink>
    )
}
