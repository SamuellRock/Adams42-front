import react from "react"

function HeaderGlobal(){
    return(
        <header>
            <button className="btn-logo"><div className="logo">Adams<span>42</span></div></button>
            <nav>
                <a href="#">Inicio</a>
                <a href="#">Chat</a>
                <a href="#">Quem somos</a>
            </nav>
        </header>
    )
}

export default HeaderGlobal