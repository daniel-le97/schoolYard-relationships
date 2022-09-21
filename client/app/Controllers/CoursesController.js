import { appState } from "../AppState.js";
import { coursesService } from "../Services/CoursesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function draw() {
  let template = ''
  appState.courses.forEach(c => template += c.CourseCardTemplate)

  setHTML('courses', template)
}

function drawMyCourses() {
  let template = ''
  appState.myCourses.forEach(e => template += e.EnrollmentTemplate)

  setHTML('my-courses', template)
}

export class CoursesController {
  constructor() {
    appState.on('courses', draw)
    appState.on('myCourses', drawMyCourses)

    this.getCourses()
  }

  async getCourses() {
    try {
      await coursesService.getCourses()
    } catch (error) {
      console.error('[getting courses]', error)
      Pop.error(error)
    }
  }

  async getMyCourses() {
    try {
      await coursesService.getMyCourses()
    } catch (error) {
      console.error('[getting courses]', error)
      Pop.error(error)
    }
  }

}
