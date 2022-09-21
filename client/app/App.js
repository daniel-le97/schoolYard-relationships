import { AuthController } from './Controllers/AuthController.js';
import { CoursesController } from './Controllers/CoursesController.js';


class App {
  authController = new AuthController();
  coursesController = new CoursesController()


}

// @ts-ignore
window.app = new App()
