import { Schema } from 'mongoose'

const ObjectId = Schema.Types.ObjectId

export const CourseAssignmentSchema = new Schema({

  name: { type: String, required: true, minlength: 2, maxlength: 20 },
  description: { type: String, default: '', maxlength: 500 },
  points: { type: Number, required: true, min: 0 },

  // RELATIONSHIPS
  courseId: { type: ObjectId, ref: 'Course', required: true }

}, {
  timestamps: true, toJSON: { virtuals: true }
})

CourseAssignmentSchema.virtual('course', {
  localField: 'courseId',
  foreignField: '_id',
  justOne: true,
  ref: 'Course'
})
