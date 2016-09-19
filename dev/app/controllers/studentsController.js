import API_CONFIG from '../config/studentsAPI'
import StudentsModel from '../models/studentsModel'
import StudentsListView from '../views/students/listView'

export default class Controller {
  constructor(config) {
    this.model = new StudentsModel(API_CONFIG)
    this.listView = new StudentsListView()
    this.config = config
  }
  init() {
    this.model
      .getAll()
      .then(res => res.json())
      .then(this.updateView.bind(this))
      .catch(e => {
        throw e
      })
  }
  updateView(data, node){
    this.config.mountPoint.innerHTML = this.listView.render(data)
  }
}
