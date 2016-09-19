
export default class StudentsModel {
  constructor(apiConfig) {
    this.apiConfig = apiConfig
  }
  makeAPIRequest(request) {
    return `//${this.apiConfig.host}:${this.apiConfig.port}/${this.apiConfig.endpoint}${request}`
  }
  getAll() {
    return fetch(this.makeAPIRequest('/students'))
  }
}