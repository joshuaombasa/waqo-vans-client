import React, { Suspense } from "react";
import { useParams, Link, useLocation, useLoaderData, defer, Await } from "react-router-dom";
import { getVanDetails } from "../../api";

export function loader({params}) {
    return defer({VanDetails: getVanDetails(params.id)})
}

export default function VanDetails() {
    const location = useLocation()

    // const [vanData, setVanData] = React.useState(null)

    const dataPromise = useLoaderData()

    

    const params = useParams()

    // React.useEffect(() => {
    //     fetch(`http://localhost:3000/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => {

    //             setVanData(data)
    //         })
    // }, [])

    // if (!vanData) {
    //     return <h1>Loading...</h1>
    // }


    const backVansFilter = location.state.search === "" ? "" : location.state.search
    const backVansType = location.state.typeFilter === null ? "all" : location.state.typeFilter

    function renderDetails(vanData) {

        let color
        if (vanData.type === "luxury") {
            color = "#161616"
        } else if (vanData.type === "simple") {
            color = "#E17654"
        } else if (vanData.type === "rugged") {
            color = "#115E59"
        }
    
    
        const styles = {
            backgroundColor: color
        }

        return (
            <>
               <Link
                to={`..?${backVansFilter}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {backVansType} vans</span></Link>
            <div className="van--details--container">
                <img src={vanData.imageUrl} alt="" />
                <span style={styles}>{vanData.type}</span>
                <h1>{vanData.name}</h1>
                <h3>${vanData.price}<span>/day</span></h3>
                <p>{vanData.description}</p>
                <Link>Rent this van</Link>
            </div>
            </>
        )
    }

    return (
        <div className="van--details--page">
            <Suspense fallback={<h1>Loading...</h1>}>
            <Await resolve={dataPromise.VanDetails}>
                {renderDetails}
            </Await>
            </Suspense>
        </div>
    )
}