class RESTfulDAO {
  constructor (root, client) {
    this.root = root
    this.client = client
  }
  async create (object) {
    const result = await this.client.post(`${this.root}`, object)
    return result
  }
}

export default RESTfulDAO
