class RESTfulDAO {
  constructor (root, client) {
    this.root = root
    this.client = client
  }
  async create (object) {
    const result = await this.client.post(`${this.root}`, object)
    return result
  }

  async list (param) {
    const result = await this.client.get(`${this.root}`, param)
    return result
  }

  async patch (id, set) {
    const result = await this.client.patch(`${this.root}/${id}`, set)
    return result
  }

  async delete (id) {
    const result = await this.client.delete(`${this.root}/${id}`)
    return result
  }
}

export default RESTfulDAO
