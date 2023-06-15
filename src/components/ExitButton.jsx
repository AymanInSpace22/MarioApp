import React from "react";
import { remote } from "electron";
import "./../Styles/TerminateButton.css";

function ExitButton() {
    const handleButtonClick = () => {
        const window = remote.getCurrentWindow();
        window.close();
    };
    return (
        <a onClick={handleButtonClick}>
            <img
                src="https://img.icons8.com/?size=512&id=JBdPHdFxWGru&format=png"
                className="logo exit"
                alt="exit logo"
            />
        </a>
    );
}

export default ExitButton;
