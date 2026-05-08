exports.handler = async (event) => {
    if (event.rawPath === "/health") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                status: "OK"
            })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "CI/CD working perfectly arjun"
        })
    };
};