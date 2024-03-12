import { sculptureList } from "../data/article";
import { useState } from "react";

export default function Gallery() {
    const [index, setIndex] = useState(0);

    function handleClick() {
        if (index < sculptureList.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };

    function handleClickMundur() {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(sculptureList.length - 1);
        }
    };

    let sculpture = sculptureList[index];

    return (
        <>
            <button
                onClick={handleClickMundur}
                className="bg-blue-400 hover:bg-blue-700 text-white p-2 rounded m-2"> Artikel Sebelumnya 
            </button>
            <button
                onClick={handleClick}
                className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"> Artikel Selanjutnya 
            </button>
            <h2><i>{sculpture.name} </i> oleh {sculpture.artist} </h2>
            <h3>({index + 1} dari {sculptureList.length}) </h3>
            <img src={sculpture.url} alt={sculpture.alt} />
            <p>
                {sculpture.description}
            </p>
        </>
    );
}