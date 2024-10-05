import { useState } from 'react'
import './App.css'
import HeaderGlobal from './components/HeaderGlobal';
import Chat from './components/Chat';

function App() {  

  return (
      <>
        <HeaderGlobal/>

        <Chat />

        {/* <footer>
            © 2024 Hackaton Nasa Challenger. Copyright and All rights reserved.
        </footer> */}
      </>
  );
}

export default App
