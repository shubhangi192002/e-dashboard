import './App.css';
import Nav from './component/Nav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './component/Footer';
import SignUp from './SignUp';
import PrivateComponent from './PrivateComponent';

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route element={<PrivateComponent/>}>
            <Route path='/' element={<h1>Product Listing Component</h1>}/>
            <Route path='/add' element={<h1>Add Product Component</h1>}/>
            <Route path='/update' element={<h1>Update Listing Component</h1>}/>
            <Route path='/logout' element={<h1>Logout Component</h1>}/>
            <Route path='/profile' element={<h1>Profile Component</h1>}/>
            </Route>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      </>
    </div>
  );
}

export default App;
