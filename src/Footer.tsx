import './css/Footer.css'

export function Footer(){
    return(
        <footer className="footer"> 
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
                </style>  
                <div className='logodiv'>
                <a href="/"><img src="/static/img/HeaderBunny.png" alt="" /></a>
                <h1 className='font'>Lazy Bunny</h1>
                </div>
                <div className='div1'>
                    <a className='font' href="/">Movies</a>
                    <a className='font' href="/">Shows</a>
                    <a className='font' href="/">Mood</a>
                    <a className='font' href="/">Search</a>
                    <a href="/"><img src="/static/img/Viber.png" alt="Viber" /></a>
                    <a href="/"><img src="/static/img/Instagram.png" alt="Instagram" /></a>
                    <a href="/"><img src="/static/img/Telegram.png" alt="Telegram" /></a>
                    <a href="/"><img src="/static/img/Facebook.png" alt="Facebook" /></a>
                </div>
                <div className='div2'>
                    <a href="/">Bohdanchik</a>
                    <a href="/">Sema</a>
                    <a href="/">Egorushka</a>
                    <a href="/">Created by Team1</a>
                </div>
                <img src="/static/img/FooterBunny.png" alt="" />
                
        </footer>
    )
}