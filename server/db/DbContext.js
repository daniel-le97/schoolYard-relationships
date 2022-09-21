import mongoose from 'mongoose';
import { AccountSchema } from '../models/Account';
import { CourseSchema } from '../models/Course.js';
import { CourseAssignmentSchema } from '../models/CourseAssignment.js';
import { StudentEnrollmentSchema } from '../models/StudentEnrollment.js';
import { TeacherCourseSchema } from '../models/teacherCourse.js';
import { ValueSchema } from '../models/Value';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Courses = mongoose.model('Course', CourseSchema)

  CourseAssignments = mongoose.model('CourseAssignment', CourseAssignmentSchema)

  StudentEnrollments = mongoose.model('StudentEnrollment', StudentEnrollmentSchema)

  TeacherCourses = mongoose.model('TeacherCourse', TeacherCourseSchema)

}

export const dbContext = new DbContext()
