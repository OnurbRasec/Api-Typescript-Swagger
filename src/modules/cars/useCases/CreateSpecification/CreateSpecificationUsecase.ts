import { ISpecificationsRepository } from "../../repositories/Implementations/ISpecificationsRepository";


interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUsecase {

    constructor(private specificationsRepository: ISpecificationsRepository){}

    execute({name, description}: IRequest): void {
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);

        if(specificationAlreadyExists){
            throw new Error("Specification already Exists!")
        }

   this.specificationsRepository.create({
       name,
       description,
   })
   
   
    }
};

export { CreateSpecificationUsecase };