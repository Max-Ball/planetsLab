import { dbContext } from "../db/DbContext"


class GalaxiesService{

  async getGalaxies(){
    let galaxies = await dbContext.Galaxies.find()
    return galaxies
  }

  async createGalaxy(galaxyData){
    let galaxy = await dbContext.Galaxies.create(galaxyData)
    return galaxy
  }

  async getGalaxyById(galaxyId){
    let galaxy = await dbContext.Galaxies.findById(galaxyId)
    return galaxy
  }

  async deleteGalaxy(galaxyId){
    let galaxy = await this.getGalaxyById(galaxyId)

    await galaxy.remove()
    return galaxy
  }

}

export const galaxiesService = new GalaxiesService()