import React, { Component } from 'react';
import Swiper from 'react-id-swiper';
import './styles.css';

class Gallery extends Component {
    render() {
        const params = {
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            }
        }
        return (
            <div className={"content-gallery"}>
                <Swiper {...params}>
                    <div><img src="https://www.zalarob.com/assets/Uploads/top-image-2.jpg"/></div>
                    <div><img src="https://www.zalarob.com/assets/Uploads/top-image-1.jpg"/></div>
                    <div><img src="https://www.zalarob.com/assets/Uploads/top-image-3.jpg"/></div>
                    <div><img src="https://www.zalarob.com/assets/Uploads/top-image-1.jpg"/></div>
                    <div><img src="https://www.zalarob.com/assets/Uploads/top-image-2.jpg"/></div>
                </Swiper>
            </div>
        )
    }
}
export default Gallery;
