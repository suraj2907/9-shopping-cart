import React , {useState} from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import {ToastContainer, toast } from 'react-toastify';
import {Container, Col , Row} from "reactstrap"

import BuyPage from './Components/BuyPage';
import Cart from './Components/Cart';
import CardItem from './Components/CartItem';

function App() {
const [cartItem, setCartItem] = useState([]);


const addItem = item =>{
  const isAlreadyAdded = cartItem.findIndex(function(array)  {
return  array.id === item.id;
});

if(isAlreadyAdded !== -1){
  toast("Already there in the cart", {
    type:"error"
  });
  return;
}

setCartItem([...cartItem,item]); 
};

const buyNow = () => {
  setCartItem([])
  toast("Purchase Complete",{
      type: "success"
});
}

const removeItem = item =>{
setCartItem(cartItem.filter(singleItem => singleItem.id !== item.id))
}


  return (
    <Container fluid>
      <ToastContainer />
      <Row>
        <Col md="8">
          <BuyPage addItem = {addItem} />
        </Col>
        <Col md = "4">
            <Cart cartItem = {cartItem} buyNow={buyNow} removeItem={removeItem} />

        </Col>
      </Row>
    </Container>
  );
};

export default App;
