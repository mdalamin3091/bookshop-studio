import React from "react";

const TabButton = ({ title }) => {
    return (
        <button
            className={`tabBtns ${title === "Story" ? "tabBtns-active" : ""}`}
        >
            {title}
        </button>
    );
};

export default TabButton;
