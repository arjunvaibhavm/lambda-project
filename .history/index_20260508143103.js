exports.handler = async (event) => {
    const path = event.rawPath || "";

    // normalize path (remove /prod)
    const cleanPath = path.replace("/prod", "");

    if (cleanPath === "/health") {
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
            message: "CI/CD working perfectly for demo 🚀"
        })
    };
};