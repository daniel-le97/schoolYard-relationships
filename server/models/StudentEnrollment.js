import { Schema } from 'mongoose'

const ObjectId = Schema.Types.ObjectId

export const StudentEnrollmentSchema = new Schema({

  studentId: { type: ObjectId, ref: 'Account', required: true },
  courseId: { type: ObjectId, ref: 'Course', required: true },
  status: { type: String, required: true, default: 'enrolled', enum: ['enrolled', 'dropped', 'failed', 'passed'] }

}, {
  timestamps: true, toJSON: { virtuals: true }
})

StudentEnrollmentSchema.virtual('student', {
  localField: 'studentId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})

StudentEnrollmentSchema.virtual('course', {
  localField: 'courseId',
  foreignField: '_id',
  justOne: true,
  ref: 'Course'
})



