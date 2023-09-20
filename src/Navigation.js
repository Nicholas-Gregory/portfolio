import { useState } from "react";

const selectedStyle = {
    backgroundColor: "red"
};

const unselectedStyle = {
    color: "white",
    backgroundColor: "black"
};

const pageOptions = [
    {
       key: 'about',
       text: 'About Me'
    },
    {
        key: 'portfolio',
        text: 'Portfolio'
    },
    {
        key: 'contact',
        text: 'Contact Me'
    },
    {
        key: 'resume',
        text: 'My Resume'
    }
]

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
                {pageOptions.map(option =>
                    <button id={option.key} key={option.key} style={selected === option.key ? selectedStyle : unselectedStyle}>{option.text}</button>
                )}
            </div>
        </>
    );
}