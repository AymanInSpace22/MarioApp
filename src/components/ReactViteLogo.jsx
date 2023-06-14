import React from "react";
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import maroLogo from '/M.png'
import '../App.css'

function ReactViteLogo() {
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <a href="https://en.wikipedia.org/wiki/Mario" target="_blank">
                    <img src={maroLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Mario App</h1>
        </>
    );
}

export default ReactViteLogo;