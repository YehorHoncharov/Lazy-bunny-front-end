import { Footer } from '../Footer/Footer'
import { Header } from '../Header/Header'
import { CategoriesOfMovies } from '../CategoriesOfMovies/CategoriesOfMovies'
import { MainFrame } from '../MainFrame/MainFrame'
import { Search } from '../Search/Search'
import "./MainPage.css"

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