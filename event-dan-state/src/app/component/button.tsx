export default function Tombol_1() {
    function handleClick() {
        alert("Tombol telah ditekan!!!")
    }
    function handleMouseOver() {
        alert("Hayo Brian, mau mencet tombol ya?")
    }
    return (
        <button 
            className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
            onClick={handleClick}
            // onMouseOver={handleMouseOver}
            onMouseLeave={() => {
                    alert("Loh, Brian kok sudah pergi!!!")
                }
            }
        >
            Ini tombool Brian
        </button>
    )
}