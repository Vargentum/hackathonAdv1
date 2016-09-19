import config from '../config/studentsAPI'
import StudentsModel from '../models/studentsModel'

export default class Controller {
  constructor(args) {
    this.model = new StudentsModel({config})

    this.model
      .getAll()
      .then(res => res.json())
      .then(data => console.log(data, '---------'))
      .catch(e => {
        throw e
      })
  }
}
