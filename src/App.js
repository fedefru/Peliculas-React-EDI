import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './general/Routes'; 

import Header from './general/Header';
import Footer from './general/Footer';



function App() {
  return (
    <div className="container-fluid mb-5">
      <Header/>
      <Routes/>
      <Footer/>
    </div>
  );
}

export default App;
