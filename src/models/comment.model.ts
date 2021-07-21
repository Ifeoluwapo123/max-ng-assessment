import sql from "../database/connection";
import { Comment } from "../interfaces/IComment";

const CommentModel = function () {};

CommentModel.makeComment = function (data: Comment, callback: any) {
  sql.query("INSERT INTO movies_comments SET ?", data, (err, rows, fields) => {
    if (err) {
      console.log(err);
      return callback(true, null);
    } else return callback(null, rows);
  });
};

CommentModel.findAll = function (callback: any) {
  sql.query(
    "SELECT * FROM movies_comments ORDER BY id DESC",
    (err, rows, fields) => {
      if (err) return callback(true, null);
      else {
        return callback(null, rows);
      }
    }
  );
};

CommentModel.findByMovie = function (id: number, callback: any) {
  sql.query(
    "SELECT * FROM movies_comments WHERE movie_id = ?",
    id,
    (err, rows, fields) => {
      if (err) {
        console.log(err);
        return callback(true, null);
      } else {
        return callback(null, rows);
      }
    }
  );
};

export { CommentModel };
