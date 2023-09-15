import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
    const {vanData} = useOutletContext()

    return (
        <div className="host--van--photos">
            <img src={vanData.imageUrl} alt="" />
        </div>
    )
}