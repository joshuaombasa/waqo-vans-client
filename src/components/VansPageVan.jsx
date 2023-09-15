import React from "react";
import { Link } from "react-router-dom";
export default function VansPageVan({ van }) {

    let color
    if (van.type === "luxury") {
        color = "#161616"
    } else if (van.type === "simple") {
        color = "#E17654"
    } else if (van.type === "rugged") {
        color = "#115E59"
    }


    const styles = {
        backgroundColor: color
    }

    return (
        <div>
            <Link to={`${van.id}`} className="vans--page--van--container">
                <img src={van.imageUrl} alt="" />
                <div className="vans--page--van--container--desc">
                    <h3>{van.name}</h3>
                    <div className="charge">
                        <h3>${van.price}</h3>
                        <span>/day</span>
                    </div>
                </div>
                <span style={styles} className="van--type">{van.type}</span>
            </Link>
        </div>
    )
}