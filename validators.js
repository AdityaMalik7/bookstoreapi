import { body, validationResult } from "express-validator";

export const bookValidator = [
  body("title").isString().isLength(5),
  body("author").isString().isLength(5),
  body("isbn").isString().isLength(5),
  body("publishedDate").isString().isLength(5),
];
