import { useState } from "react";

export default function NameInput() {

    const [name, setName] = useState("");

    async function saveName() {
        await fetch("http://localhost:5000/save", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name })

        });

    }

    return (

        <>

            <label>Enter your Name</label>

            <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <button onClick={saveName}>
                Add Name
            </button>

        </>

    );

}