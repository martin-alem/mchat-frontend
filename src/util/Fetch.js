class Fetch {

    /**
     * Makes a fetch request.
     * @param {string} url api endpoint to fetch
     * @param {string} method http method
     * @param {any} data data
     * @returns {promise} promise that will be resolved with the response
     */
    static async makeRequest(url, method, data) {

        const init = {
            method: method,
            mode: "cors",
            cache: "no-cache",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Accept-Language": "en",
                "Content-Language": "en",
                "Content-Length": `${data.length}`
            },
            body: JSON.stringify(data)
        };

        const response = await fetch(url, init);
        return response;
    }
}

export default Fetch;