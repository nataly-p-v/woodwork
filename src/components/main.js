import React from 'react';
import Landing from './landing/landing';
import About from './about/about';
import Contacts from './contacts/contacts';
import Gallery from './gallery/gallery';
import Prices from './prices/prices';
import Services from './services/services';
import { Switch, Route} from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path={"/"} component={Landing} />
        <Route exact path={"/about"} component={About} />
        <Route exact path={"/contacts"} component={Contacts} />
        <Route exact path={"/gallery"} component={Gallery} />
        <Route exact path={"/prices"} component={Prices} />
        <Route exact path={"/services"} component={Services} />
    </Switch>
);
export default Main;
