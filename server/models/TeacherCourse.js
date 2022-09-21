import { Schema } from 'mongoose'

const ObjectId = Schema.Types.ObjectId

export const TeacherCourseSchema = new Schema({

  teacherId: { type: ObjectId, ref: 'Account', required: true },
  courseId: { type: ObjectId, ref: 'Course', required: true },

}, {
  timestamps: true, toJSON: { virtuals: true }
})

TeacherCourseSchema.virtual('teacher', {
  localField: 'teacherId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

TeacherCourseSchema.virtual('course', {
  localField: 'courseId',
  foreignField: '_id',
  justOne: true,
  ref: 'Course'
})

