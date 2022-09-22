import { Auth0Provider } from "@bcwdev/auth0provider";
import { accountService } from "../services/AccountService";
import { coursesService } from "../services/CoursesService.js";
import BaseController from "../utils/BaseController";

export class AccountController extends BaseController {
  constructor() {
    super("account");
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get("", this.getUserAccount)
      .get("/courses", this.getMyCourses)
      .post("/enroll", this.enrollInCourse);
  }

  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo);
      res.send(account);
    } catch (error) {
      next(error);
    }
  }

  async getMyCourses(req, res, next) {
    try {
      const courses = await coursesService.getCoursesByStudentId(
        req.userInfo.id
      );
      res.send(courses);
    } catch (error) {
      next(error);
    }
  }

  async enrollInCourse(req, res, next) {
    try {
      //       V NOTE remember this must match the schema
      req.body.studentId = req.userInfo.id;
      const studentEnrollment = await coursesService.enrollInCourse(req.body);
      res.send(studentEnrollment);
    } catch (error) {
      next(error);
    }
  }
}
