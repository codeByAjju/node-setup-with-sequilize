import httpStatus from "http-status";
import repositories from "../repositories";

const { orderRepositories } = repositories;

export default {
  async saveOrder(request, response, next) {
    try {
      const result = await orderRepositories.saveOrder(request);
      // if (result) {
      //     return response.status(httpStatus.OK).json(result);
      // } else {
      //   return response.status(httpStatus.BAD_REQUEST).json({ message: "Something went wrong", status: false });
      // }
    } catch (error) {
      next(error);
    }
  },
};
