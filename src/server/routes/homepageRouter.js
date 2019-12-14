import express from "express";
import createHtmlString from "../utils/createHtmlString";
import Homepage from "../../components/Homepage/Homepage";
import { ENTRIES } from "../../client/entries";

const router = express.Router();

router.get("/", (req, res) => {
  res.type("html");
  res.status(200).send(createHtmlString(Homepage, ENTRIES.HOMEPAGE.name));
});

export default router;
