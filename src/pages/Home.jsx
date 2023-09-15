import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <section className="home--page">
            <div className="hero">
            <div className="hero--text">
                <h1>You got the travel plans, we got the travel vans.</h1>
                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="/vans">Find your van</Link>
            </div>
            </div>
        </section>
    )
}