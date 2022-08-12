import { Auth0Provider } from "@bcwdev/auth0provider";
import { moonsService } from "../services/MoonsService";
import BaseController from "../utils/BaseController";


export class MoonsController extends BaseController{
  constructor(){
    super('api/moons')
    this.router
    .post('', this.createMoon)
    .get('/:moonId', this.getMoonById)
    .delete('/:moonId', this.deleteMoon)
  }

  async createMoon(req,res,next){
    try {
      let moonData = req.body
      let moon = await moonsService.createMoon(moonData)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }
  async getMoonById(req,res,next){
    try {
      let moon = await moonsService.getMoonById(req.params.moonId)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }

  async deleteMoon(req,res,next){
    try {
      let moon = await moonsService.deleteMoon(req.params.moonId)
      res.send(moon)
    } catch (error) {
      next(error)
    }
  }
}

