import { dbContext } from "../db/DbContext"


class StarsService{

  async createStar(starData){
    let star = await dbContext.Stars.create(starData)
    return star
  }

  async getStarById(starId){
    let star = await dbContext.Stars.findById(starId)
    return star
  }

  async getStarsByGalaxyId(galaxyId){
    let stars = await dbContext.Stars.find({galaxyId})
    return stars
  }

  async deleteStar(starId){
    let star = await this.getStarById(starId)

    await star.remove()
    return star
  }

}

export const starsService = new StarsService()