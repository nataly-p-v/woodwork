import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText} from 'react-mdl';

class Products extends Component {
    render () {
        return (
            <div>
                <h1>Products</h1>
                <Grid className="grid-ruler">
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.ddktrading.com/wp-content/uploads/2018/08/Bez-imeni-3-300x180.jpg) center / cover'}}> </CardTitle>
                            <CardText>
                                Wooden rounded logs
                            </CardText>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.ddktrading.com/wp-content/uploads/2018/08/Edged-boards-2-300x180.jpg) center / cover'}}> </CardTitle>
                            <CardText>
                                Edged boards
                            </CardText>
                        </Card>
                    </Cell>
                    <Cell col={4}>
                        <Card shadow={0} style={{width: '512px', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.ddktrading.com/wp-content/uploads/elementor/thumbs/Unedged-Board_2-nuxxmhs35v7ilxr6g7t9eu2aly59ordm28bzhvitx2.jpg) center / cover'}}> </CardTitle>
                            <CardText>
                                Unedged board
                            </CardText>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Products;
