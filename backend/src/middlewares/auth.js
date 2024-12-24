const createError = require("../utils/createError");

module.exports = (req, res, next) => {
    const bearerToken = req.get("Authorization")
	if (!bearerToken) {
		throw createError('Unauthorized', 401);
	};
	const token =  bearerToken.split(' ')[1];
	if (token !== process.env.SECRET_TOKEN) {
		throw createError('Unauthorized', 401);
	};
    next()
}