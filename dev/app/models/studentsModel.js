
export default class StudentsModel {
  constructor({config}) {
    this.config = config
  }
  makeAPIRequest(request) {
    return `//${this.config.host}:${this.config.port}/${this.config.endpoint}${request}`
  }
  getAll() {
    return fetch(this.makeAPIRequest('/students'))
  }
}