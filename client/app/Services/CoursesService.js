import { appState } from '../AppState.js'
import { Course } from '../Models/Course.js'
import { Enrollment } from '../Models/Enrollment.js'
import { server } from './AxiosService.js'
class CoursesService {
  async getMyCourses() {
    const res = await server.get('account/courses')
    appState.myCourses = res.data.map(e => new Enrollment(e))
  }
  async getCourses() {
    const res = await server.get('api/courses')
    appState.courses = res.data.map(c => new Course(c))
  }
}


export const coursesService = new CoursesService()
