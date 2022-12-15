import meme_icon from "../troll-face.png"

export default function Header() {
    return (
        <header className="header">
            <img className="header--image" src={meme_icon} alt="meme_icon"></img>
            <h2 className="header--title">Meme Generator</h2>           
            <span className="header--project">React Course - Project 5</span>
        </header>
    )
}