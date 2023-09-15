import React from "react";
import VansPageVan from "../../components/VansPageVan";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Vans() {

    const [vansData, setVansData] = React.useState([])

    React.useEffect(() => {
        fetch("http://localhost:3000/api/vans")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setVansData(data)
            })
    }, [])

    if (!vansData) {
        return <h1>Loading...</h1>
    }

    const vanElements = vansData.map(van => (
        <VansPageVan key={van.id} van={van} />
    ))

    return (
        <div className="vans--page">
            
            <div className="vans--wrapper">
            <h1 className="bold--text">Explore our van options</h1>
                <section className="vans--page--container">
                    {vansData && vanElements}
                </section>
            </div>
           
        </div>
    )
}