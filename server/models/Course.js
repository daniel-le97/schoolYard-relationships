import { Schema } from 'mongoose'

const ObjectId = Schema.Types.ObjectId

export const CourseSchema = new Schema({

  name: { type: String, required: true, minlength: 2, maxlength: 20 },
  code: { type: Number, required: true, min: 0, max: 9999 },
  description: { type: String, default: '', maxlength: 500 },

  // RELATIONSHIPS
  teacherId: { type: ObjectId, ref: 'Account' }

}, {
  timestamps: true, toJSON: { virtuals: true }
})

CourseSchema.virtual('teacher', {
  localField: 'teacherId',
  foreignField: '_id',
  justOne: true,
  ref: 'Account'
})
