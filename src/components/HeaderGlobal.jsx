import react from "react"

function HeaderGlobal(){
    return(
        <header>
            <button className="btn-logo"><div className="logo">Adams<span>42</span></div></button>
            <nav>
                <a href="#">Home</a>
                <a href="#">Chat</a>
                <a href="#">About Us</a>
            </nav>
        </header>
    )
}

export default HeaderGlobal