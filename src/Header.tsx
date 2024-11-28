import "./css/Header.css"

export function Header(){
    
    return(
        <header className="header">
            <a href="/"><img src="/static/img/HeaderBunny.png" alt="" /></a>
            <a href="/" className="text">Movies</a>
            <a href="/" className="text">Shows</a>
            <a href="/" className="text">Mood</a>
            <a href="/" className="text">Search</a>
            <button className="buttonProfile">Profile</button>
        </header>
    )
}