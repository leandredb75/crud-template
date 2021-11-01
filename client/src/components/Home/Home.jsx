import React, { useState } from 'react';
import "./Home.scss"

export default function Home() {

    const [isClick, isClickF] = useState(false);

    const test = () => {
        alert(isClick)
        isClickF(!isClick);
    }

    return (
        <div className="container mx-auto px-4">
            <div className="">
                <button onClick={test}>Ajouter une revente</button> br
                <button onClick={test}>Admin</button>
            </div>
            <div className="">
                <p>Revente en cours</p>

            </div>

            <div className="">
                <p>Paire vendus</p>

            </div>
        </div>
    )
}