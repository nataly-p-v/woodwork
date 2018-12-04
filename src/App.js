import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterDropDownSection, FooterLinkList} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="content">
          <Layout>
              <Header title="Title" scroll>
                  <Navigation>
                      <Link to="/">Главная</Link>
                      <Link to="/about">О нас</Link>
                      <Link to="/contacts">Контакты</Link>
                      <Link to="/gallery">Галерея</Link>
                      <Link to="/prices">Цены</Link>
                      <Link to="/products">Продукция</Link>
                  </Navigation>
              </Header>
              <Drawer title="Title">
                  <Navigation>
                      <Link to="/">Главная</Link>
                      <Link to="/about">О нас</Link>
                      <Link to="/contacts">Контакты</Link>
                      <Link to="/gallery">Галерея</Link>
                      <Link to="/prices">Цены</Link>
                      <Link to="/products">Продукция</Link>
                  </Navigation>
              </Drawer>
              <Content>
              <Main/>
              </Content>
              <Footer size="mega">
                  <FooterSection type="middle">
                      <FooterDropDownSection title="Features">
                          <FooterLinkList>
                              <Link to="/">Home</Link>
                              <Link to="/about">About</Link>
                              <Link to="/contacts">Contacts</Link>
                          </FooterLinkList>
                      </FooterDropDownSection>
                      <FooterDropDownSection title="Details">
                          <FooterLinkList>
                              <Link to="/gallery">Gallery</Link>
                              <Link to="/prices">Prices</Link>
                              <Link to="/products">Products</Link>
                          </FooterLinkList>
                      </FooterDropDownSection>
                  </FooterSection>
                  <FooterSection type="bottom" logo="Title">
                      <FooterLinkList>
                          <Link to="/help">Помощь</Link>
                          <Link to="/privacy">Конфиденциальность и условия</Link>
                      </FooterLinkList>
                  </FooterSection>
              </Footer>
          </Layout>
      </div>
    );
  }
}

export default App;
