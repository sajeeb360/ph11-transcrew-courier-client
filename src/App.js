import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddService from './components/AddService/AddService';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import MyOrders from './components/MyOrders/MyOrders';
import ManageOrders from './components/ManageOrders/ManageOrders';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/addService">
              <AddService />
            </PrivateRoute>
            <PrivateRoute exact path="/services">
              <Services />
            </PrivateRoute>
            <PrivateRoute path="/placeOrder/:id">
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute exact path="/myOrders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute exact path="/manageOrders">
              <ManageOrders />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
