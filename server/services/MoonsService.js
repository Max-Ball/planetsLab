import { dbContext } from "../db/DbContext"


class MoonsService{

  async createMoon(moonData){
    let moon = await dbContext.Moons.create(moonData)
    return moon
  }

  async getMoonById(moonId){
    let moon = await dbContext.Moons.findById(moonId)
    return moon
  }

  async getMoonsByPlanetId(planetId){
    let moons = await dbContext.Moons.find({planetId})
    return moons
  }

  async deleteMoon(moonId){
    let moon = await this.getMoonById(moonId)

    await moon.remove()
    return moon
  }
}

export const moonsService = new MoonsService()