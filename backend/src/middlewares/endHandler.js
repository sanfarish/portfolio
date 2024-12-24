const path = require("path");

const error = (err, req, res, next) => {
	if (err && err.statusCode !== 404) {
		console.error((err.code || 500) + ' error: ' + err.message)
		return res.status(err.statusCode || 500).json({ error: err.message, });
	}
	next();
};

const notFound = (req, res) => {
	res.status(404).send("Not found");
};

module.exports = { error, notFound };
