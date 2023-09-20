import { useState } from "react";

const selectedStyle = {
    backgroundColor: "red"
};

const unselectedStyle = {
    color: "white",
    backgroundColor: "black"
};

export default function Navigation({ select }) {
    const [selected, setSelected] = useState('about');

    function handleClick(e) {
        e.preventDefault();

        const page = e.target.id;

        if (page !== '') {
            setSelected(page);
            select(page);
        }
    }

    return (
        <>
            <div onClick={handleClick}>
                <button id="about" style={ selected === "about" ? selectedStyle : unselectedStyle}>About Me</button>
                <button id="portfolio" style={ selected === "portfolio" ? selectedStyle : unselectedStyle}>Portfolio</button>
                <button id="contact" style={ selected === "contact" ? selectedStyle : unselectedStyle}>Contact Me</button>
                <button id="resume" style={ selected === "resume" ? selectedStyle : unselectedStyle}>Resume</button>
            </div>
        </>
    );
}