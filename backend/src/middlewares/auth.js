const createError = require("../utils/createError");

module.exports = (req, res, next) => {
    const bearerToken = req.get("Authorization")
	if (!bearerToken) {
		throw createError('Unauthorized', 401);
	};
	const token =  bearerToken.split(' ')[1];
	if (req.originalUrl === '/api/v1/visitors') {
		if (token !== process.env.ADMIN_TOKEN) {
			throw createError('Unauthorized', 401);
		};
	} else {
		if (token !== process.env.POST_TOKEN) {
			throw createError('Unauthorized', 401);
		};
	}
    next()
}