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
              <Header scroll>
                  <Link to="/" class="mdl-layout-title logo">
                    <img src="https://cdn.logojoy.com/wp-content/uploads/2017/08/freelogodesign2@2x.png"></img>
                  </Link>
                  <div class="mdl-layout-spacer"></div>
                  <Navigation>
                      <Link to="/">Главная</Link>
                      <Link to="/about">О нас</Link>
                      <Link to="/contacts">Контакты</Link>
                      <Link to="/gallery">Галерея</Link>
                      <Link to="/prices">Цены</Link>
                      <Link to="/services">Наши услуги</Link>
                  </Navigation>
              </Header>
              <Drawer >
                  <Navigation>
                      <Link to="/">Главная</Link>
                      <Link to="/about">О нас</Link>
                      <Link to="/contacts">Контакты</Link>
                      <Link to="/gallery">Галерея</Link>
                      <Link to="/prices">Цены</Link>
                      <Link to="/services">Наши услуги</Link>
                  </Navigation>
              </Drawer>
              <Content>
              <Main/>
              </Content>
              <Footer size="mega">
                  <FooterSection type="middle">
                      <FooterDropDownSection>
                          <FooterLinkList>
                              <Link to="/">Главная</Link>
                              <Link to="/about">О нас</Link>
                              <Link to="/contacts">Контакты</Link>
                          </FooterLinkList>
                      </FooterDropDownSection>
                      <FooterDropDownSection>
                          <FooterLinkList>
                              <Link to="/gallery">Галерея</Link>
                              <Link to="/prices">Цены</Link>
                              <Link to="/services">Наши услуги</Link>
                          </FooterLinkList>
                      </FooterDropDownSection>
                  </FooterSection>
                  <FooterSection type="bottom">
                      <FooterLinkList>
© 2018 Строительная компания © Украина, Киев. Все материалы, размещенные на сайте защищены законодательством об охране авторских прав.

                      </FooterLinkList>
                  </FooterSection>
              </Footer>
          </Layout>
      </div>
    );
  }
}

export default App;
