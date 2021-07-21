import { Request, Response } from "express";
import filmsApi from "../api/movies.api";
import { planetsKey } from "../utilities/apiFilterKeys";
import { mapOutUnwantedFields } from "../utilities/helperFunction";

const PlanetsController = function () {};

PlanetsController.getMovieCharacters = async (req: Request, res: Response) => {
  const { data, status }: any = await filmsApi.getFilmById(
    Number(req.params.id)
  );

  if (status == 200) {
    const value = mapOutUnwantedFields([data], planetsKey);
    return res.status(200).json(value);
  } else {
    return res.status(400).json({ error: "Bad Requst || data not found" });
  }
};

export { PlanetsController };
