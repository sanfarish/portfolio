const { Visitor } = require("../db/models");
const asyncWrapper = require("../middlewares/asyncWrapper");
const diffHourly = require("../utils/diffHourly");

const getAll = asyncWrapper(async (req, res) => {
	const data = await Visitor.findAll();
	res.status(200).send(data.length.toString());
});

const getMonthly = asyncWrapper(async (req, res) => {
	const data = await Visitor.findAll();
	const expiredTime = 24 * 30;
	const filteredData = data.filter(item => {
		const diff = diffHourly(item.createdAt);
		if (expiredTime > diff) return item.id;
	});
	res.status(200).send(filteredData.length.toString());
});

const getWeekly = asyncWrapper(async (req, res) => {
	const data = await Visitor.findAll();
	const expiredTime = 24 * 7;
	const filteredData = data.filter(item => {
		const diff = diffHourly(item.createdAt);
		if (expiredTime > diff) return item.id;
	});
	res.status(200).send(filteredData.length.toString());
});

const getByID = asyncWrapper(async (req, res) => {
	const data = await Visitor.findOne({ where: { farishasan_visit: req.params.id } });
	if (!data) throw Object.assign(new Error(), { errorCode: 404 });
	const expiredTime = 24 * process.env.EXPIRED_TIME;
	const diff = diffHourly(data.createdAt)
	if (diff > expiredTime) throw Object.assign(new Error("expired"), { errorCode: 400 });
	res.status(200).send(data.farishasan_visit);
});

const post = asyncWrapper(async (req, res) => {
	if (!req.body.visitor) throw Object.assign(new Error("invalid request"), { errorCode: 400 });

	const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i
	if (!uuidRegex.test(req.body.visitor)) throw Object.assign(new Error("invalid request"), { errorCode: 400 });

	const checker = await Visitor.findOne({ where: { farishasan_visit: req.body.visitor } });
	if (checker) throw Object.assign(new Error("duplicate request"), { errorCode: 400 });

	const data = await Visitor.create( { farishasan_visit: req.body.visitor } );
	res.status(201).send(data.farishasan_visit);
});

module.exports = { getAll, getMonthly, getWeekly, getByID, post };
