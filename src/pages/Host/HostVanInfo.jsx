import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo () {
    const {vanData} = useOutletContext()

    return (
       <div  className="host--van--info">
        <h5>Name: <span>{vanData.name}</span></h5>
        <h5>Category: <span>{vanData.type}</span></h5>
        <h5>Description: <span>{vanData.description}</span></h5>
        <h5>Visibility: <span>Public</span></h5>
       </div>
    )
}