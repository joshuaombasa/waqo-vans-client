import React from "react";
import { useParams, Link } from "react-router-dom";


export default function VanDetails() {

    const [vanData, setVanData] = React.useState(null)

    const params = useParams()

    React.useEffect(() => {
        fetch(`http://localhost:3000/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
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

    return (
        <div className="van--details--page">
           
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