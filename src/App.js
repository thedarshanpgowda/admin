import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Admin from "./Pages/Admin";
import ShopContextProvider from "./Context/ShopContext";

export const backend_url = 'http://localhost:4000';
export const currency = '₹';

function App() {
  return (
    <ShopContextProvider>

      <BrowserRouter>
        <div>
          <Navbar />
          <Admin />
          <Footer />
        </div>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;
