import React from "react";
export default function Login() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
    })

    function handleChange(event) {
        const { name, value } = event.target
        setFormData(prevFormData => (
            {
                ...prevFormData,
                [name]: value
            }
        ))
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div className="login--page">
            <div className="login--page--container">
                <h1>Sign in to your account</h1>
                <form onSubmit={handleSubmit} className="login--form">
                    <input
                        type="email"
                        className="email"
                        name="email"
                        placeholder="Email address"
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <input
                        type="password"
                        className="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        value={formData.password}
                        required
                    />
                    <button className="login--btn">Sign in</button>
                </form>
                <h4>Don’t have an account? <span>Create one now</span></h4>
            </div>
        </div>
    )
}