import Header from "./components/Header"
import Entry from "./components/Entry"
import placeData from "./data"
/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
    
    const placeElement = placeData.map((place) => {
        return(
            <Entry
                img={{ 
                    src: place.img.src,
                    alt: place.img.alt
                }}
                title={place.title}
                country={place.country}
                googleMapsLink={place.googleMapsLink}
                dates={place.dates}
                text={place.text}
            />
        )
    })
    
    return (
        
        <>
            <Header />
            <main className="container">
                {placeElement}
            </main>
        </>
    )
}