import { Router } from 'express';
import media from './media'
import user from "./user.js"
import product from "./product.js";
import HttpStatus from 'http-status';
import category from './category.js';

const router = Router();
const register = (app) => {
    app.use(router);
    router.use('/', [
        media,
        user,
        product,
        category,
    ])
    app.use((error, req, res, next) => {
        console.log(error)
       return  res.status(HttpStatus.BAD_REQUEST).json({
            status: false,
            errorMsg: error.message
        })
    })
}

export default register;