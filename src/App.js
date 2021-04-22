import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { NavBar } from './Components/Navbar/Navbar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { Context } from './Components/Functions/context';

const firebaseConfig = {
  apiKey: 'AIzaSyANmee-0gkT5_nXBD9nCAtVRflgkn_l-wg',
  authDomain: 'mrdonalds-15501.firebaseapp.com',
  databaseURL:
    'https://mrdonalds-15501-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'mrdonalds-15501',
  storageBucket: 'mrdonalds-15501.appspot.com',
  messagingSenderId: '221433422819',
  appId: '1:221433422819:web:97dc85a21453af644f76d6',
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

function App() {
  const auth = useAuth(firebase.auth);

  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  useTitle(openItem.openItem);

  return (
    <Context.Provider
      value={{
        auth,
        openItem,
        orders,
        orderConfirm,
      }}
    >
      <GlobalStyle />

      <NavBar />
      <Order />
      <Menu />
      {openItem.openItem && <ModalItem />}
      {orderConfirm.openOrderConfirm && (
        <OrderConfirm firebaseDatabase={firebase.database} />
      )}
    </Context.Provider>
  );
}

export default App;
