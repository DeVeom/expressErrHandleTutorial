import express from "express";
import fetch from "node-fetch";
import { LongBodyError, LongTitleError } from "./errors";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/user-posts", (req, res, next) => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => {
      for (let post of posts) {
        if (post.title.length > 100)
          throw new LongTitleError(post.id, post.body);
        if (post.body.length > 200) throw new LongBodyError(post.id, post.body);
      }
      // console.log(posts);
      res.header("Content-Type", "application/json");
      res.send(JSON.stringify(posts, null, 4));
    })
    .catch((err) => next(err));
});

router.get("/error", (req, res) => {
  res.send("The URL you are trying to reach does not exist.");
});

export default router;
