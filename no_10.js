function sanitizeBody(body, arr) {
    
    const result = {};
    Object.keys(body).forEach((key) => {
        if (arr.includes(key)) {
            result[key] = body[key];
        }
    });
    
    return result;
}


console.log(sanitizeBody({username: "andi", password: "andi123", lastname: "siahaan"},
            ["username", "password"])
            );