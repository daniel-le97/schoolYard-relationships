import { dbContext } from "../db/DbContext.js"

class CoursesService {

  async get() {
    const courses = await dbContext.Courses.find()
    return courses
  }

  async create(formData) {
    const course = await dbContext.Courses.create(formData)
    return course
  }

}

export const coursesService = new CoursesService()


