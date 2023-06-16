import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from "./components/Hero";
import Eyona from "./components/Eyona";
import Worldclass from "./components/Worldclass";
import Ourproudect from "./components/Ourproudect";
import Relasitionship from "./components/Relasitionship";
import Contact from "./components/Contact";
import Magic from "./components/Magic";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Managements from "./components/Managements";
import Preloder from "./components/Preloder";

function App() {
  return (
    <>
      <Preloder/>
      <Hero />
      <Eyona/>
      <Worldclass/>
      <Ourproudect/>
      <Relasitionship/>
      <Contact/>
      <Magic/>
      <Managements/>
      <Join/>
      <Footer/>
    </>
  );
}

export default App;
