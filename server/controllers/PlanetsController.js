import { moonsService } from "../services/MoonsService";
import { planetsService } from "../services/PlanetsService";
import BaseController from "../utils/BaseController";


export class PlanetsController extends BaseController{
  constructor(){
    super('api/planets')
    this.router
    .post('', this.createPlanet)
    .get('/:planetId', this.getPlanetById)
    .get('/:planetId/moons', this.getMoonsByPlanetId)
    .delete('/:planetId', this.deletePlanet)
  }

  async createPlanet(req,res,next){
    try {
      let planetData = req.body
      let planet = await planetsService.createPlanet(planetData)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }
  async getPlanetById(req,res,next){
    try {
      let planet = await planetsService.getPlanetById(req.params.planetId)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }

  async getMoonsByPlanetId(req,res,next){
    try {
      let moons = await moonsService.getMoonsByPlanetId(req.params.planetId)
      res.send(moons)
    } catch (error) {
      next(error)
    }
  }


  async deletePlanet(req,res,next){
    try {
      let planet = await planetsService.deletePlanet(req.params.planetId)
      res.send(planet)
    } catch (error) {
      next(error)
    }
  }
}