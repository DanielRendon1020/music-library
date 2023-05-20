import { useState } from 'react'

export default function GalleryItem({item}) {
    let [view, setView] = useState(false)

    let {
        trackName,
        collectionName,
        primaryGenreName,
        releaseDate,
        artworkUrl100
    } = item

    const simpleStyle = {
        textShadow: '0px 0px 10px black',
        width: '60%',
        borderRadius: '5px',
        padding: '1rem',
        margin: '1rem',
        backgroundImage: `url(${artworkUrl100})`,
        backgroundSize: 'cover',
        transitionDuration: '.5s',
    }

    const detailStyle = {
        width: '100%',
        borderRadius: '5px',
        padding: '1rem',
        margin: '1rem',
        backgroundImage: `url(${artworkUrl100})`,
        backgroundSize: 'cover',
        transitionDuration: '.5s',
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
                <h2>{trackName}</h2>
                <h3>{collectionName}</h3>
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
                display: 'inline block',
                cursor: 'pointer',
            }}
        >
            {view ? detailView() : simpleView()}
        </div>
    )
}

