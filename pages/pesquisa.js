import React from "react";

const Pesquisa = () => {
    return (
        <>
            <h1>Pesquisa</h1>
            <form className="max-w-screen-sm mx-auto text-left">
                <label className="my-4 block">
                    <span className="my-2 block font-bold text-gray-700">Seu nome:</span>
                    <input type="text" className="px-2 py-4 block w-full border-2 border-gray-700 rounded" />
                </label>
            </form>
        </>
    );
}

export default Pesquisa;