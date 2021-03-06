import { CategoriesRepository } from "../../repositories/CategoriesRepository";
import { ListCategoriesController } from "./ListCategoriesController";
import { ListCategoriesUsecase } from "./ListCategoriesUsecase";

const categoriesRepository = CategoriesRepository.getInstance();
const listCategoriesUsecase = new ListCategoriesUsecase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(listCategoriesUsecase);



export { listCategoriesController };