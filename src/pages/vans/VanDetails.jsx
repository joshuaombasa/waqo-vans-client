import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";


export default function VanDetails() {
    const location = useLocation()
    console.log(location.state)
    const [vanData, setVanData] = React.useState(null)

    const params = useParams()

    React.useEffect(() => {
        fetch(`http://localhost:3000/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {

                setVanData(data)
            })
    }, [])

    if (!vanData) {
        return <h1>Loading...</h1>
    }

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

    const backVansFilter = location.state.search === "" ? "" : location.state.search
    const backVansType = location.state.typeFilter === "" ? "" : location.state.typeFilter

    return (
        <div className="van--details--page">
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

        </div>
    )
}