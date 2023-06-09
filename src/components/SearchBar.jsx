import { useContext } from 'react'
import { SearchContext } from '../contexts/SearchContext'

export default function Searchbar() {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input
                ref={term}
                type="text"
                placeholder='Search 🔎'
                onChange={(e) => handleSearch(e, term.current.value)}
            />
            <input type="submit"/>
        </form>
    )
}