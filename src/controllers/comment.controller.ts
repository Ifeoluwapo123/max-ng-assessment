import { CommentModel } from "../models/comment.model";
import { Response, Request } from "express";
import { Comment } from "../interfaces/IComment";
import ipAddressApi from "../api/ipAddress.api";

const CommentController = function () {};

CommentController.getAllComments = function (req: Request, res: Response) {
  CommentModel.findAll(function (err: any, data: any) {
    if (err) res.status(500).json({ error: "server error" });
    else res.status(200).json(data);
  });
};

CommentController.makeCommment = async function (req: Request, res: Response) {
  try {
    const userIpAddress: any = await ipAddressApi.getUserPublicAddress();
    const { ip, city, country_name } = userIpAddress.data;
    const data: Comment = {
      ...req.body,
      ip_address: `${ip}, ${city} ${country_name}`,
    };

    CommentModel.makeComment(data, function (err: any, data: any) {
      if (err) res.status(500).json({ error: "server error" });
      else res.status(200).json({message: "successfully made a comment"});
    });
  } catch (error) {
    console.log(error);
  }
};

CommentController.findByMovie = function (req: Request, res: Response) {
  const id: number = Number(req.params.id);
  CommentModel.findByMovie(id, function (err: any, data: any) {
    if (err) res.status(500).json({ error: "server error" });
    else res.status(200).json(data);
  });
};

export { CommentController };
