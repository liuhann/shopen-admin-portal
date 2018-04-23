class DictonaryDAO {
  constructor (client) {
    this.client = client
  }
  async create (namespace, dict, opts) {
    const result = await this.client.put(`/api/dictionary/${namespace}/${dict}`, opts)
    return result
  }

  async list (namespace) {
    const result = await this.client.get(`/api/dictionary/${namespace}`)
    return result
  }

  async remove (namespace, dict) {
    const result = await this.client.delete(`/api/dictionary/${namespace}/${dict}`)
    return result
  }
}

export default DictonaryDAO
