import React from "react";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Switch, Route, withRouter } from "react-router-dom";
import Content from "./components/Content/Content";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Switch>
                <Route path="/cuadrados-medios">
                    <Content title="Cuadrados Medios" algorithm="cuadradosMedios"/>
                </Route>
                <Route path="/productos-medios">
                    <Content title="Productos Medios" algorithm="productosMedios"/>
                </Route>
                <Route path="/lineal">
                    <Content title="Algoritmo Lineal" algorithm="lineal"/>
                </Route>
                <Route path="/multiplicativo">
                    <Content title="Algoritmo Multiplicativo" algorithm="multiplicativo"/>
                </Route>
            </Switch>
            <Footer />
        </div>
    );
}

export default withRouter(App);
