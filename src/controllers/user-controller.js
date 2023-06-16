import models from '../models';
import services from "../services/jwt"
import config from '../config';
import repositories from '../repositories'
import httpStatus from 'http-status';
import model from '../models';
import bcrypt from 'bcryptjs';

const { userRepository } = repositories;
const { user } = models;

export default {
  async signUp(req, res, next) {
    try {
      const result = await userRepository.signup(req);
      if (result) {
        return res.status(httpStatus.OK).json({ message: "submitted", status: true });
      } else {
        console.log(error);
        return res.status(httpStatus.BAD_REQUEST).json({ message: "bad request", status: false });
      }
    } catch (error) {
      next(error);
    }
  },
  async signIn(req, res, next) {
    try {
      const data = await userRepository.signin(req);
      if (data?.token) {
        return res.status(httpStatus.OK).json({ token: data.token, message: 'SIGNIN SUCCESSS......' });
      }
      return res.status(httpStatus.BAD_REQUEST).json(data || { message: 'SOMETHING WENT WRONG.....' });
    } catch (error) {
      next(error)
    }
  }
}