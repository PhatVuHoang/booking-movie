import React, { useState } from 'react'
import Slider from 'react-slick'
import './../../assets/CarouselComponent.css'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/css/modal-video.css'

export default function CarouselComponent(props) {


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const [isOpen, setOpen] = useState(false)


    return (
        <div>
            <Slider {...settings} className="header__slick">
                <div>
                    <img src="https://s3img.vcdn.vn/123phim/2021/04/trang-ti-16194117174325.jpg" alt="" />

                    <React.Fragment>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

                        <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button>
                    </React.Fragment>

                </div>
                <div>
                    <img src="https://s3img.vcdn.vn/123phim/2021/04/lat-mat-48h-16177782153424.png" alt="" />


                </div>
                <div>
                    <img src="https://s3img.vcdn.vn/123phim/2021/04/ban-tay-diet-quy-evil-expeller-16177781815781.png" alt="" />


                </div>
            </Slider>
        </div>
    )
}
