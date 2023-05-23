import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function GalleryItem({item}) {
    let [view, setView] = useState(false)

    let {
        trackName,
        collectionName,
        primaryGenreName,
        releaseDate,
        artworkUrl100,
        artistId,
        collectionId,
        trackId
    } = item

    const simpleStyle = {
        borderRadius: '5px',
        padding: '1rem',
        margin: '1rem',
        backgroundImage: `url(${artworkUrl100})`,
        backgroundSize: '500px',
        backgroundPosition: 'center',
    }

    const detailStyle = {
        borderRadius: '5px',
        padding: '1rem',
        margin: 'auto',
        backgroundImage: `url(${artworkUrl100})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const simpleView = () => {
        return(
            <div style={simpleStyle}>
                <h3>{trackName}</h3>
                <h4>{collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return(
            <div style={detailStyle}>
                <h2>
                    <Link to={`/artist/${artistId || trackId}`}>
                        <button className='outline'>{trackName}</button>
                    </Link>
                    
                    </h2>
                <h3>
                    <Link to={`/album/${collectionId}`}>
                        <button className='outline'>{collectionName}</button>
                        </Link>
                    
                    </h3>
                <h4>{primaryGenreName}</h4>
                <h4>{releaseDate}</h4>
            </div>
        )
    }

    return (
        <div
            onClick={() => setView(!view)}
            style={{ 
                width: '25vw',
                height: 'auto',
            }}
            
        >
            {view ? detailView() : simpleView()}
        </div>
    )
}

