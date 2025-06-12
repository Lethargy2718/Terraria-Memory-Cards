export default function Main() {
    return (
        <main className="main container main-menu">
            <div className="logo-container">
                <img src="/terraria-logo.webp" alt="Terraria logo" className="logo"/> 
            </div>
            <nav className="menu__btns col">
                <button className="menu__btn">Play</button>
                <button className="menu__btn">Collection</button>
                <button className="menu__btn">Options</button>
            </nav>

        </main>
    )
}