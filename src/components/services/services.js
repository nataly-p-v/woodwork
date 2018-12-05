import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText} from 'react-mdl';

class Products extends Component {
    render () {
        return (
            <div>
                <h1>Наши услуги</h1>
                <Grid className="grid-ruler">
                    <Cell col={6}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://stevin.su/images/phocagallery/ukreplenieberega/gabion8.jpg) center / cover'}}> </CardTitle>
                            <CardText>
                            Габионные конструкции
                            </CardText>
                        </Card>
                    </Cell>
                    <Cell col={6}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://stevin.su/images/phocagallery/ukreplenieberega/listven2.jpg) center / cover'}}> </CardTitle>
                            <CardText>
                               Берегоукрепление шпунтом
                            </CardText>
                        </Card>
                    </Cell>
                    <Cell col={6}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://stevin.su/images/phocagallery/georeshkodinsk/IMG_7325.jpg) center / cover'}}> </CardTitle>
                            <CardText>
                                Берегоукрепление геокаркасом
                            </CardText>
                        </Card>
                    </Cell>
                    <Cell col={6}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://stevin.su/images/phocagallery/ukreplenieberega/gabion8.jpg) center / cover'}}> </CardTitle>
                            <CardText>
                            Габионные конструкции
                            </CardText>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Products;
