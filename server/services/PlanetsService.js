import { dbContext } from "../db/DbContext"


class PlanetsService{

  async createPlanet(planetData){
    let planet = await dbContext.Planets.create(planetData)
    return planet
}

  async getPlanetById(planetId){
    let planet = await dbContext.Planets.findById(planetId)
    return planet
  }

  async getPlanetsByStarId(starId){
    let planets = await dbContext.Planets.find({starId})
    return planets
  }

  async deletePlanet(planetId){
    let planet = await this.getPlanetById(planetId)
    await planet.remove()
    return planet
  }
  
}

export const planetsService = new PlanetsService()