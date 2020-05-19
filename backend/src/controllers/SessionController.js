const connection = require('../database/conenection');

module.exports = {
  async create(req, res) {
    const { id } = req.body;

    const ong = await connection('ongs').where('id', id).select('name').first();

    if (!ong) {
      return res.status(400).json({ error: "No found ONG with this ID" });
    }
    return res.json(ong);
  }
}