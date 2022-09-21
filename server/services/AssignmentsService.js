import { dbContext } from "../db/DbContext.js";

class AssignmentsService {
  async getAssignmentsByCourseId(courseId) {
    const courseAssignments = await dbContext.CourseAssignments.find({ courseId }).populate('course', 'name code')
    return courseAssignments
  }

  async create(formData) {
    const assignment = await dbContext.CourseAssignments.create(formData);
    return assignment;
  }
}


export const assignmentsService = new AssignmentsService()
