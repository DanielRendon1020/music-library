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
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transitionDuration: '0.5s',
        cursor: 'pointer',
    }

    const detailStyle = {
        width: '100vw',
        height: '100%',
        borderRadius: '5px',
        padding: '1rem',
        margin: '1rem',
        backgroundImage: `url(${artworkUrl100})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    }

    const backdrop = {
        backdropFilter: 'blur(5px) brightness(1.3)',
        borderRadius: '5px',
    }

    const simpleView = () => {
        return(
            <div style={simpleStyle}>
                <h3 style={backdrop}>{trackName}</h3>
                <h4 style={backdrop}>{collectionName}</h4>
            </div>
        )
    }

    const detailView = () => {
        return(
            <div style={detailStyle}>
                <h1 style={backdrop}>
                    <Link to={`/artist/${artistId || trackId}`}>
                        {trackName}
                    </Link>
                </h1>
                <h1 style={backdrop}>
                    <Link to={`/album/${collectionId}`}>
                        {collectionName}
                    </Link>
                </h1>
                <h3>{primaryGenreName}</h3>
                <h3>{releaseDate}</h3>
            </div>
        )
    }

    return (
        <div
            onClick={() => setView(!view)}
        >
            {view ? detailView() : simpleView()}
        </div>
    )
}

