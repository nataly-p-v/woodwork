import React from 'react';
import Landing from './landing';
import About from './about';
import Contacts from './contacts';
import Gallery from './gallery';
import Prices from './prices';
import Products from './products';
import Help from './help';
import Privacy from './privacy';
import { Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path={"/"} component={Landing} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contacts"} component={Contacts} />
        <Route exact path={"/gallery"} component={Gallery} />
        <Route exact path={"/prices"} component={Prices} />
        <Route exact path={"/products"} component={Products} />
        <Route exact path={"/help"} component={Help} />
        <Route exact path={"/privacy"} component={Privacy} />
    </Switch>
);
export default Main;
