export async function getVans() {
    
}

export async function getVanDetails(id) {
    const res = await fetch(`http://localhost:3000/api/vans/${id}`)
    if (!res.ok) {
        throw{
            message: "Failed to fetch van details",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

export async function getHostVans() {
    const res = await  fetch("http://localhost:3000/api/host/vans")
    if (!res.ok) {
        throw{
            message: "Failed to fetch host vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}

export async function getHostVanDetails(id) {
    const res = await  fetch(`http://localhost:3000/api/vans/${id}`)
    if (!res.ok) {
        throw{
            message: "Failed to fetch host van details",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data
}
