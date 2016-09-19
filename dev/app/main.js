import StudentsController from './controllers/studentsController'

const controller = new StudentsController({
  mountPoint: document.getElementById('app')
})
controller.init()