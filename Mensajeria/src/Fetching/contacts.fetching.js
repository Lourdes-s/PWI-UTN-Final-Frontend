export const obtenerContactos = async () => {
    const response = await fetch(
        '/data.json',
        {
            method: "GET"
        }
    )
return response.json()
}