export function request(endpoint) {
    return fetch(`http://localhost:4000/${endpoint}`).then((response) => {
        return response.json()
    });
}