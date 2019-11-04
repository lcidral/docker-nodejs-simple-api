class EntityController {
  async get(req, res) {
    const response = {
      message: 'implement here your GET method'
    };
    return res.json(response);
  }

  async post(req, res) {
    const response = {
      message: 'implement here your POST method',
      body: req.body
    };
    return res.json(response);
  }

  async put(req, res) {
    const response = {
      id: req.params.id,
      message: 'implement here your PUT method'
    };
    return res.json(response);
  }

  async delete(req, res) {
    const response = {
      id: req.params.id,
      message: 'implement here your DELETE method'
    };
    return res.json(response);
  }

}

export default new EntityController();