const morgan = require("morgan");
const dayjs = require("dayjs");
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");

dayjs.extend(utc);
dayjs.extend(timezone);

morgan.token("date", () => dayjs(new Date()).tz("Asia/Jakarta").format("YYYY-MM-DDTHH:mm:ss"));

const logger = morgan(process.env.NODE_ENV === "production" ? "common" : "dev");

module.exports = logger;
