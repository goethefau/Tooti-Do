class Http {
    static send(url, method = "GET", options = {}) {
        console.log("Fetch send request to url -", url, "with options: ", options)

        return (
            fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                ...options
            }).then(response => {
                if (!response.ok) throw new Error(response.statusText);
                return response
            }).catch(e => {
                console.error(e)
            })
        )
    }
}

export default Http