import { Router, Request, Response } from "express";

const router = Router();

router.get("/tasks", (req: Request, res: Response) => {
  res.send("Get all tasks");
});

export default router;
