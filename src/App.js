import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import ProductPage from "./Layouts/ProductPage/ProductPage";

function App() {
    const [toggleCart, setToggleCart] = useState(false);

    const displayCartList = () => {
        setToggleCart(!toggleCart);
    };

    return (
        <div className="App">
            <Navbar displayCartList={displayCartList} toggleCart={toggleCart} />
            <ProductPage />
        </div>
    );
}

export default App;
