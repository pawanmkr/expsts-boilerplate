import { Router, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { UserController, PostController } from "../controllers/index.js";

export const router: Router = Router();

router.post("/user/register", UserController.registerNewUser);
router.post("/user/login", UserController.login);

router.get("/post", (req: Request, res: Response) => {
  body("content")
    .notEmpty()
    .isLength({ max: 500 })
    .withMessage("Content is required.");
  body("postedBy").notEmpty().withMessage("Posted by is required.");

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  PostController.createNewPost;
});
