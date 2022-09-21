import { Course } from "./Course.js"

export class Enrollment {
  constructor(data) {
    this.id = data.id
    this.studentId = data.studentId
    this.courseId = data.courseId
    this.status = data.status
    this.course = new Course(data.course)
  }

  get EnrollmentTemplate() {
    return /*html*/`
      <div>
        ${this.course.CourseCardTemplate}
        <div class="card-footer">
          STATUS: ${this.status}
        </div>
      </div>
    `
  }

}
