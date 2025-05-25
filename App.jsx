import Header from "./components/Header"
import Entry from "./components/Entry"
import placeData from "./data"


export default function App() {
    
    const placeElement = placeData.map((place) => {
        return(
            <Entry
                key={place.id}
                {...place}
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