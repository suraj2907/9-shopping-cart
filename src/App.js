import React , {useState} from 'react';
import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import './App.css';
import {ToastContainer, toast } from 'react-toastify';
import { type } from '@testing-library/user-event/dist/type';
import BuyPage from './Components/BuyPage';

function App() {
const [cartItem, setCartItem] = useState([]);


const addItem =(item) =>{
  const isAlreadyAdded = cartItem.findIndex(function(array)  {
return  array.id === cartItem.id;
});

if(isAlreadyAdded !== -1){
  toast("Already there in the cart", {
    type:"error"
  });
  return;
}

setCartItem({...cartItem,item}); 
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
    <div className="App">
      <BuyPage addItem = {addItem} />
    </div>
  );
}

export default App;
