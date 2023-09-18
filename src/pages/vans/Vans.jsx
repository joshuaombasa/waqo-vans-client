import React from "react";
import { useSearchParams } from "react-router-dom";
import VansPageVan from "../../components/VansPageVan";


export default function Vans() {

    const [vansData, setVansData] = React.useState([])
    const [serchParams, setSearchParams] = useSearchParams()
    const typeFilter = serchParams.get("type")
    
    const filteredVans = typeFilter ?  vansData.filter(van => van.type === typeFilter) : vansData

    React.useEffect(() => {
        fetch("http://localhost:3000/api/vans")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVansData(data)
            })
    }, [])

    if (!vansData) {
        return <h1>Loading...</h1>
    }

    const vanElements = filteredVans.map(van => (
        <VansPageVan key={van.id} van={van} serchParams={serchParams.toString()} typeFilter={typeFilter} />
    ))

    function handleSearchParams(key, value) {
        setSearchParams(prevSearchParams => {
            if (!value) {
                 prevSearchParams.delete(key)
            } else {
                 prevSearchParams.set(key, value)
            }

            return prevSearchParams
        })
    }


    return (
        <div className="vans--page">
            <div className="vans--wrapper">
            <h1 className="bold--text">Explore our van options</h1>
            <nav className="vans--type--nav">
                <button 
                    className={`simple--vans--btn red${typeFilter === "simple" ? "red" : null}`}
                    onClick={() => handleSearchParams("type", "simple")}
                >Simple</button>
                <button 
                    className={`luxury--vans--btn ${typeFilter === "luxury" && "luxury--vans--selected"}`}
                    onClick={() => handleSearchParams("type", "luxury")}
                >Luxury</button>
                <button 
                    className={`rugged--vans--btn ${typeFilter === "rugged" && "rugged--vans--selected"}`}
                    onClick={() => handleSearchParams("type", "rugged")}
                >Rugged</button>
                <button 
                    className="clear--filters--btn"
                    onClick={() => handleSearchParams("type", null)}
                >Clear filters</button>
            </nav>
                <section className="vans--page--container">
                    {vansData && vanElements}
                </section>
            </div>
           
        </div>
    )
}