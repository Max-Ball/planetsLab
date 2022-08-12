import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const SpeciesSchema = new Schema(
  {
    name: {type: String,}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)