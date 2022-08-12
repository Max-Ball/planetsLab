import mongoose from 'mongoose'
import { PLANET } from '../db/Collections.js'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const MoonSchema = new Schema(
  {
    name: {type: String, required: true},
    planetId: {type: ObjectId, required: true, ref:PLANET}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)