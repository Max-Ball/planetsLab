import mongoose from 'mongoose'
import { STAR } from '../db/Collections.js'
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId


export const PlanetSchema = new Schema(
  {
    name: {type: String, required: true},
    starId: {type: ObjectId, required: true, ref:STAR}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)