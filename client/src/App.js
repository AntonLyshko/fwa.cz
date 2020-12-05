import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import './style.css';
import ScrollToTop from 'react-router-scroll-top';
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utills/setAuthToken';
import loadUser from './actions/auth';
import PrivateRoute from './routing/privateRoute';
import { useTranslation } from 'react-i18next';
import NavBar from './comp/navbar/navbar';
import Footer from './comp/footer/footer';
import Firstpage from './comp/pages/firstpage/firstpage';
import SingUp from './comp/pages/singup/singup';
import SuccessPage from './comp/pages/success/success';
import Contacts from './comp/pages/contacts/contacts';
import AboutUs from './comp/pages/about-us/about-us';
import Useful from './comp/pages/useful/useful';
import Reviews from './comp/pages/reviews/reviews';
import BlogPage from './comp/pages/blog-page/blog-page';
import Firstscreen from './comp/pages/firstpage/comp/firstscreen';
import Licenses from './comp/pages/licenses/licenses';
import Partners from './comp/pages/partners/partners';
import Employer from './comp/pages/employer/employer'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const { t, i18n } = useTranslation();

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <NavBar changeLanguage={changeLanguage} />
      <Switch>
        <Route exact path='/' component={Firstscreen} />
      </Switch>
      <Container>
        <section>
          <Switch>
            <Route exact path='/' component={Firstpage} />
            <Route path='/sing-up' component={SingUp} />
            <Route path='/employer' component={Employer} />
            <Route path='/contacts' component={Contacts} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/reviews' component={Reviews} />
            <Route path='/useful' component={Useful} />
            <Route path='/licenses' component={Licenses} />
            <Route path='/partners' component={Partners} />
            <Route path='/success' component={SuccessPage} />
            <Route path='/blog/:page' component={BlogPage} />
          </Switch>
        </section>
        <Footer changeLanguage={changeLanguage} />
      </Container>
      <ScrollToTop />
    </Provider>
  );
};

export default App;
