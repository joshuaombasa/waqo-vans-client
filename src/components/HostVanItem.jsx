import React from "react";
import { Link } from "react-router-dom";
export default function HostVanItem({van}) {
    return (
        <div className="host--vans--item--page">
            <Link to={`${van.id}`} className="host--vans--item--container">
                <img src={van.imageUrl} alt="" />
                <div className="about--section">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </Link>
        </div>
    )
}