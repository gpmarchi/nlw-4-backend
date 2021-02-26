import { Router } from 'express';
import { AnswerController } from './controllers/AnswerController';
import { NpsController } from './controllers/NpsController';
import { SurveysController } from './controllers/SurveysController';
import { UsersController } from './controllers/UsersController';
import { UserSurveyController } from './controllers/UserSurveyController';

const router = Router();

const usersController = new UsersController();
const surveysController = new SurveysController();
const userSurveyController = new UserSurveyController();
const answersController = new AnswerController();
const npsController = new NpsController();

router.post("/users", usersController.create);

router.post("/surveys", surveysController.create);
router.get("/surveys", surveysController.show);

router.post("/mail", userSurveyController.create);

router.get("/answers/:value", answersController.update);

router.get("/nps/:survey_id", npsController.execute);

export { router };