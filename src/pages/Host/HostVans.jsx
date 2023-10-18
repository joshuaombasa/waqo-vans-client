import React, { Suspense } from "react";
import { Await, defer, useLoaderData } from "react-router-dom";
import HostVanItem from "../../components/HostVanItem";
import { getHostVans } from "../../api";

export function loader() {
    return defer({hostVans : getHostVans()})
}

export default function HostVans() {

    // const [vansData, setVansData] = React.useState(null)

    const dataPromise = useLoaderData()

    // React.useEffect(() => {
    //     fetch("http://localhost:3000/api/host/vans")
    //         .then(res => res.json())
    //         .then(data => {

    //             setVansData(data)
    //         })
    // },[])


    // if (!vansData) {
    //     return <h1>Loading</h1>
    // }



    function renderHostVans(vansData) {

        const hostVanElements = vansData.map(van => (
            <HostVanItem key={van.id} van={van} />
        ))

        return (
            <>
                <h1 className="bold--text">Your listed vans</h1>
                <div className="host--vans--page">
                    {hostVanElements}
                </div>
            </>
        )
    }

    return (
        <div className="host--van--page">
            <Suspense>
                <Await resolve={dataPromise.hostVans}>
                    {renderHostVans}
                </Await>
            </Suspense>
        </div>
    )
}