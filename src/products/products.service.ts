import { CreateProductDto } from './dto/create-product.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }

  getById(id: string) {
    return this.products.find((productItem) => productItem.id === id);
  }

  create(productDto: CreateProductDto) {
    const newProduct = { ...productDto, id: Date.now().toString() };
    this.products.push(newProduct);
    console.log(newProduct);
    return productDto;
  }
}
