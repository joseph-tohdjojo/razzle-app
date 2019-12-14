import express from "express";
import createHtmlString from "../utils/createHtmlString";
import Story from "../../components/Story/Story";
import { ENTRIES } from "../../client/entries";

const router = express.Router();

router.get("/story", (req, res) => {
  res.type("html");
  res.send(createHtmlString(Story, ENTRIES.STORY.name));
});

export default router;
