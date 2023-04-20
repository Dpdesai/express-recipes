const service = require("../service/recipes");

const getAll = async (req, res, next) => {
    try {
        res.json({ data: await service.getAll() });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getAll
}