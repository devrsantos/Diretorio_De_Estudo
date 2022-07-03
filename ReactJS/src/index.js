import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Button from './Button'
import ComponenteA from "./ComponenteA";
import ComponenteB from "./ComponenteB";

function soma(a, b) {
    alert(a + b);
}

function primeiroJSX() {
    return (
        <div className="teste">
            <h1>Soma</h1>
            <ComponenteA>
                <ComponenteB>
                    <Button fn={() => soma(10, 20)} name="Calcular"></Button>
                </ComponenteB>
            </ComponenteA>
        </div>
    )
}

const App = () => {
    return (
        <div className='App'>
            Hello World
            {primeiroJSX()}
        </div>
    )

}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement );