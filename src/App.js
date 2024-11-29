import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import RateCalculator from "./components/Home/RateCalculator";
import Result from "./components/Home/Result";

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Navigate to="/Home/IVF-Success-Rate-Calculator" />
                    }
                />

                <Route
                    path="/Home/IVF-Success-Rate-Calculator"
                    element={<RateCalculator />}
                />

                <Route
                    path="/Home/IVF-Success-Rate-Calculator/Result"
                    element={<Result />}
                />
            </Routes>
        </Router>
    );
}

export default App;
