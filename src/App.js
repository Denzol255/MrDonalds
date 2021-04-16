import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { NavBar } from './Components/Navbar/Navbar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: 'AIzaSyANmee-0gkT5_nXBD9nCAtVRflgkn_l-wg',
  authDomain: 'mrdonalds-15501.firebaseapp.com',
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

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
