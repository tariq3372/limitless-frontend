import { Fragment, useEffect } from "react";
import Home from "./pages/Home/Home.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product/Product.js";
import $ from "jquery";

function App() {
  useEffect(() => {
    $(document).ready(function () {
      import("./assets/js/theme.js");
      import("./assets/js/shop.js");
    });
  }, []);

  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
