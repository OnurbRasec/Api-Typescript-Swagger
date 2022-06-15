import { Request, Response } from "express";

import { ListCategoriesUsecase } from "./ListCategoriesUsecase";


class ListCategoriesController {
    constructor(private listCategoriesUsecase: ListCategoriesUsecase) {}

    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUsecase.execute();

        return response.json(all);
    };
};

export { ListCategoriesController }; 