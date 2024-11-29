import './css/Footer.css'

export function Footer(){
    return(
        <footer className="footer"> 
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
                </style>  
                <div className='logodiv'>
                <a href="/"><img src="/static/img/HeaderBunny.png" alt="" /></a>
                <h1 className='textgradient'>Lazy Bunny</h1>
                </div>
                <div className='div1'>
                    <div className='catalog'>
                        <a className='div1' href="/">Movies</a>
                        <a className='div1' href="/">Shows</a>
                        <a className='div1' href="/">Mood</a>
                        <a className='div1' href="/">Search</a>
                    </div>
                    <div className='socialMedia'>
                        <div className='viber'>
                            <img src="/static/img/Viber.png" alt="Viber" />
                            <a className='div1' href="/">Viber</a>
                        </div>
                        <div className='instagram'>
                            <a className='div1' href="/">Instagram</a>
                            <img src="/static/img/Instagram.png" alt="Instagram" /> 
                        </div>
                        <div className='telegram'>
                            <a className='div1' href="/">Telegram</a>
                            <img src="/static/img/Telegram.png" alt="Telegram" />
                        </div>
                        <div className='facebook'>
                            <a className='div1' href="/">Facebook</a>
                            <img src="/static/img/Facebook.png" alt="Facebook" /> 
                        </div>
                        {/* <a className='font div1' href="/"><img src="/static/img/Viber.png" alt="Viber" /> Viber</a> */}
                        {/* <a className='font div1' href="/"><img src="/static/img/Instagram.png" alt="Instagram" /> Instagram</a> */}
                        {/* <a className='font div1' href="/"><img src="/static/img/Telegram.png" alt="Telegram" /> Telegram</a> */}
                        {/* <a className='font div1' href="/"><img src="/static/img/Facebook.png" alt="Facebook" /> Facebook</a> */}
                    </div>
                </div>
                <div className='div2'>
                    <div className='footerName'>
                        <a href="/">Bohdanchik</a>
                        <a href="/">Sema</a>
                        <a href="/">Egorushka</a>
                    </div>
                    <div className='footerTeam'>
                        <a href="/">Created by Team1</a>
                        <a href="/"><img src="/static/img/FooterBunny.png" alt="FooterBunny" /></a>
                    </div>
                </div>
                
                
        </footer>
    )
}