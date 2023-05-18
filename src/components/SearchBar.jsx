import { useState } from 'react'

export default function Searchbar({handleSearch}) {
    let [searchTerm, setSearchTerm] = useState('')
    const onSubmit = (e) => {
        handleSearch(e, searchTerm)
    }

    return (
        <form>
            <input
                type="text"
                placeholder='Enter search term here'
                onChange={(e) => handleSearch(e, e.target.value)}
            />
            <input
                type="submit"
            />
        </form>
    )
}