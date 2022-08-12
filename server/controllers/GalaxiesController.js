import { galaxiesService } from "../services/GalaxiesService";
import { starsService } from "../services/StarsService";
import BaseController from "../utils/BaseController";

export class GalaxiesController extends BaseController{
  constructor(){
    super('api/galaxies')
    this.router
    .get('', this.getGalaxies)
    .post('', this.createGalaxy)
    .get('/:galaxyId', this.getGalaxyById)
    .get('/:galaxyId/stars', this.getStarsByGalaxyId)
    .delete('/:galaxyId', this.deleteGalaxy)
  }

  async getGalaxies(req,res,next){
    try {
      let galaxies = await galaxiesService.getGalaxies()
      res.send(galaxies)
    } catch (error) {
      next(error)
    }
  }

  async createGalaxy(req, res, next){
    try {
      let galaxyData = req.body
      let galaxy = await galaxiesService.createGalaxy(galaxyData)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getGalaxyById(req,res,next){
    try {
      let galaxy = await galaxiesService.getGalaxyById(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }

  async getStarsByGalaxyId(req,res,next){
    try {
      let stars = await starsService.getStarsByGalaxyId(req.params.galaxyId)
      res.send(stars)
    } catch (error) {
      next(error)
    }
  }

  async deleteGalaxy(req,res,next){
    try {
      let galaxy = await galaxiesService.deleteGalaxy(req.params.galaxyId)
      res.send(galaxy)
    } catch (error) {
      next(error)
    }
  }
}