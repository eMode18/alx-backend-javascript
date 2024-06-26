function handleResponseFromAPI(promise) {
    return promise
        .then((resolvedData) => {
            console.log("Got a response from the API");
            return { status: 200, body: "success" };
        })
        .catch((error) => {
            return new Error();
        });
}

export default handleResponseFromAPI;

