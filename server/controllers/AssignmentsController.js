import { assignmentsService } from "../services/AssignmentsService.js";
import BaseController from "../utils/BaseController.js";

export class AssignmentsController extends BaseController {
  constructor() {
    super('api/assignments')
    this.router
      .post('', this.create)
  }

  async create(req, res, next) {
    try {
      const assignment = await assignmentsService.create(req.body)
      res.send(assignment)
    } catch (error) {
      next(error)
    }
  }
}
