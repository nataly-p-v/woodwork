import React, { Component } from 'react';

class Landing extends Component {
    render () {
        return (
            <div className={"content"}>
                <div style={{
                    color: '#fff',
                    height: '376px',
                    background: 'url(https://www.zalarob.com/assets/Uploads/top-image-3.jpg) center / cover',
                    padding: '10vw 4vw'
                }}>
                    <h1 className="main-title">Укрепление Берега</h1>
                    <p className="main-description">
                        комплекс работ по укреплению и защите прибрежной линии природных и искусственных водоемов от
                        подмыва, обвала и эрозии берегового склона под воздействием течения и волн, а так же размыва
                        ливневыми потоками.
                    </p>
                </div>
            </div>
        )
    }
}
export default Landing;
