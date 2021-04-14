class Http {
    static send(url, method = "GET", options = {}) {
        return (
            fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                ...options
            }).then(response => {
                if (!response.ok) throw Error(response.statusText);
                return response
            })
        )
    }
}

export default Http