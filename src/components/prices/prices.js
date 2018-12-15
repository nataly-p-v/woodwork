import React, { Component } from 'react';

class Prices extends Component {
    render () {
        return (
            <div className={"content"}>
                <h1>Цены</h1>
                <p>Цены на наши услуги определяются согласно прайсу который вы можете посмотреть <a href="/files/pricing.xlsx" download>
                   здесь
                </a>
                </p>
            </div>
        )
    }
}
export default Prices;