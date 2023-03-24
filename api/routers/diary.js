const { Router } = require('express');

const diaryController = require('../controllers/diary.js');

const diaryRouter = Router();

diaryRouter.get("/", diaryController.index);
// diaryRouter.get("/random", diaryController.getRandom);
diaryRouter.get("/:id", diaryController.show);
// diaryRouter.post("/", diaryController.create);
// diaryRouter.delete("/:id", diaryController.destroy);
// diaryRouter.patch("/:id", diaryController.update);

module.exports = diaryRouter;
