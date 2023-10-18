import React, { Suspense } from "react";
import { useParams, Link, NavLink, Outlet, useLoaderData, defer, Await } from "react-router-dom";
import { getHostVanDetails } from "../../api";

export function loader({ params }) {

    return defer({ hostVanDetails: getHostVanDetails(params.id) })
}

export default function VanDetails() {

    // const [vanData, setVanData] = React.useState(null)

    const dataPromise = useLoaderData()

    const params = useParams()

    // React.useEffect(() => {
    //     fetch(`http://localhost:3000/api/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             // console.log(data)
    //             setVanData(data)
    //         })
    // }, [])

    // if (!vanData) {
    //     return <h1>Loading...</h1>
    // }


    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    function renderHostVanDetails(vanData) {

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
                    to=".."
                    relative="path"
                    className="back-button"
                >&larr; <span>Back to all vans</span></Link>
                <div className="top--section">
                    <img src={vanData.imageUrl} alt="" />
                    <div className="desc--section">
                        <span style={styles}>{vanData.type}</span>
                        <h3>{vanData.name}</h3>
                        <h4>${vanData.price}<span>/day</span></h4>
                    </div>
                </div>
                <nav>
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >Details</NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >Pricing</NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyle : null}
                    >Photos</NavLink>
                </nav>
                <Outlet context={{ vanData }} />
            </>
        )
    }

    return (
        <div className="host--van--details--container">
            <Suspense fallback={<h1>Loading...</h1>}>
                <Await resolve={dataPromise.hostVanDetails}>
                    {renderHostVanDetails}
                </Await>
            </Suspense>
        </div>
    )
}