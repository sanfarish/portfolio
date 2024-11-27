module.exports = (req, res, next) => {
    const bearerToken = req.get("Authorization")
	if (!bearerToken) throw Object.assign(new Error("auth required"), { errorCode: 401 });
	const token =  bearerToken.split(' ')[1];
	if (token !== process.env.SECRET_TOKEN) throw Object.assign(new Error("auth denied"), { errorCode: 401 });
    next()
}