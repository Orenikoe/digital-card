import Experience from "./Components/Experience";
import Info from "./Components/Info";
import Interests from "./Components/Interests";
import Footer from "./Components/Footer";



export default function App() {
    return (
      <div className="card">
    <Info />
     <Experience />
     <Interests />
     <Footer />
  </div>
    );
  }