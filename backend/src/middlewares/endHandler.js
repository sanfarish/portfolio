const path = require("path");

const error = (err, req, res, next) => {
	if (err && err.errorCode !== 404) {
		if (!err.errorCode) err.errorCode = 500;
		return res.status(err.errorCode).json({ message: err.message, });
	}
	next();
};

const notFound = (req, res) => {
	res.status(404).send("not found");
};

module.exports = { error, notFound };
