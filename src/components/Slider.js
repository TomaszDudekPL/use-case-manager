import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'




export default class SimpleSlider extends React.Component {


    render() {
        const settings = {
            dots: false,
            arrows: true,
            accessibility: true,
            dotsClass: 'slider-nav',

            centerMode: true,
            initialSlide: 1,
            responsive: [{
                breakpoint: 1024,
                settings: {

                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1
        };

        return (
            <div>
                <Slider {...settings}>
                    <div><h3 className="slider_item">1</h3></div>
                    <div><h3 className="slider_item">2</h3></div>
                    <div><h3 className="slider_item">3</h3></div>
                    <div><h3 className="slider_item">4</h3></div>
                    <div><h3 className="slider_item">5</h3></div>
                </Slider>
            </div>

        );
    }


}


