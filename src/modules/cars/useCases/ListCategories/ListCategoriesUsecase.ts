import { ICategoriesRepository } from '../../repositories/Implementations/ICategoriesRepository';
import { Category } from "../../model/Category";

class ListCategoriesUsecase {
    constructor( private categoriesRepository: ICategoriesRepository) {}

    execute(): Category[] {
        const categories = this.categoriesRepository.list();

        return categories;
       
    }

};

export { ListCategoriesUsecase };