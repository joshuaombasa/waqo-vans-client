import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
    const{ vanData }= useOutletContext()

    return (
        <div className="host--van--pricing">
            <h3>${vanData.price}<span>/day</span></h3>
        </div>
    )
}