exports.handler = async (event) => {
    const path = event.rawPath || event.path;

    if (path === "/health") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                status: "OK",
                message: "Service is healthy"
            })
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "CI/CD working perfectly 🚀"
        })
    };
};