import { Request, Response } from "express";
import filmsApi from "../api/movies.api";
import { vehiclesKey } from "../utilities/apiFilterKeys";
import {
  mapOutUnwantedFields,
} from "../utilities/helperFunction";

const VehiclesController = function () {};

VehiclesController.getMovieCharacters = async (req: Request, res: Response) => {
  const { data, status }: any = await filmsApi.getFilmById(
    Number(req.params.id)
  );

  if (status == 200) {
    const value = mapOutUnwantedFields([data], vehiclesKey);
    return res.status(200).json(value);
  } else {
    return res.status(400).json({ error: "Bad Requst || data not found" });
  }
};

export { VehiclesController };
