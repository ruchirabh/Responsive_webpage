import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import 'bootstrap-icons/font/bootstrap-icons.css';


import "./App.css";
import Homepage from "./components/homepage";
import Navbar from "./components/navbar";
import Secondnavbar from "./components/secondnavbar";
import Compo from "./components/Compo";

function App() {
  return (
    <>
   
      
   <Navbar/>
   <Homepage/>
   <Secondnavbar/>
   <Compo/>
  
   
   
  
    </>
  );
}

export default App;
