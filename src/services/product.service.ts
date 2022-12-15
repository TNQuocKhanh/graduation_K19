import { ProductRepository } from "../repositories";
import {Filter, repository} from "@loopback/repository";
import { Product } from "../models";

export class ProductService {
  constructor(
    @repository(ProductRepository) private productRepository: ProductRepository,
  ){}

  getAllProducts = async (filter?: Filter<Product>
  ) => {
    console.log('======>>>>abcklkskd')
    const res = await this.productRepository.find(filter)

    return res
  }
}
