import React, { Suspense } from "react";
import { useSearchParams, useLoaderData, defer, Await } from "react-router-dom";
import VansPageVan from "../../components/VansPageVan";
import { getVans } from "../../api";

export function loader() {

    return defer({ vans: getVans() })
}

export default function Vans() {

    // const [vansData, setVansData] = React.useState([])
    const [serchParams, setSearchParams] = useSearchParams()
    const typeFilter = serchParams.get("type")
    const dataPromise = useLoaderData()

    // React.useEffect(() => {
    //     async function loadData() {
    //         try {
    //             const data = await getVans()
    //             setVansData(data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }

    //     loadData()
    // }, [])

    // if (!vansData) {
    //     return <h1>Loading...</h1>
    // }



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

    function renderVans(vansData) {

        const filteredVans = typeFilter ? vansData.filter(van => van.type === typeFilter) : vansData

        const vanElements = filteredVans.map(van => (
            <VansPageVan key={van.id} van={van} serchParams={serchParams.toString()} typeFilter={typeFilter} />
        ))

        return (
            <div className="vans--wrapper">
                <h1 className="bold--text">Explore our van options</h1>
                <nav className="vans--type--nav">
                    <button
                        className={`simple--vans--btn ${typeFilter === "simple" ? "simple--vans--selected" : null}`}
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
        )
    }


    return (
        <div className="vans--page">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.vans}>
                    {renderVans}
                </Await>
            </Suspense>
        </div>
    )
}