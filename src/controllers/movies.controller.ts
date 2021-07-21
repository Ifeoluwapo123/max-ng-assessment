import { Request, Response } from "express";
import filmsApi from "../api/movies.api";
import { allNecessaryMovieKeys } from "../utilities/apiFilterKeys";
import { CommentModel } from "../models/comment.model";
import {
  sortMoviesByDate,
  mapOutUnwantedFields,
} from "../utilities/helperFunction";

const MoviesController = function () {};

MoviesController.getMovies = async (req: Request, res: Response) => {
  const { data, status }: any = await filmsApi.getAllFilms();

  if (status == 200) {
    const value = mapOutUnwantedFields(
      sortMoviesByDate(data.results),
      allNecessaryMovieKeys
    );
    return res.status(200).json(value);
  } else {
    return res.status(400).json({ error: "Bad Requst || data not found" });
  }
};

MoviesController.getMovieById = async (req: Request, res: Response) => {
  const { data, status }: any = await filmsApi.getFilmById(
    Number(req.params.id)
  );
  CommentModel.findByMovie(
    Number(req.params.id),
    async function (err: any, result: any) {
      if (err) {
        res.status(500).json({ error: "server error" });
      } else {
        if (status == 200) {
          const value = mapOutUnwantedFields([data], allNecessaryMovieKeys);
          return res.status(200).json({ ...value, comment: result.length });
        } else {
          return res
            .status(400)
            .json({ error: "Bad Requst || data not found" });
        }
      }
    }
  );
};

export { MoviesController };
