import { Footer } from './Footer'
import { Header } from './Header'
import { CategoriesOfMovies } from './CategoriesOfMovies'
import { MainFrame } from './MainFrame'
import { Search } from './Search'
import "./css/MainPage.css"

export function MainPage(){
    return (
        <div className='contener'>
                
                <Header />
                <MainFrame />
                <hr />
                <Search />
                <hr />
                <CategoriesOfMovies />
                <hr />
                <Footer />
                
        </div>
    )
}