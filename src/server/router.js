import express from "express";

import homepageRouter from "./routes/homepageRouter";
import storyRouter from "./routes/storyRouter";

const router = express.Router();

router.use(homepageRouter);
router.use(storyRouter);

export default router;
