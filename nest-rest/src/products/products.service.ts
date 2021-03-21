import {Injectable} from "@nestjs/common";
import {CreateProductDto} from "./dto/create-product.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Product, ProductDocument} from "./schemas/products.schema";
import {Model} from "mongoose";
import {UpdateProductDto} from "./dto/update-product.dto";


@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
  }

  async getAll(): Promise<Product[]>  {
    return this.productModel.find().exec();
  }

  async getById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async create(product: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async remove(id: string): Promise<Product> {
    return this.productModel.findByIdAndRemove(id);
  }

  async update(id: string, productUpdate: UpdateProductDto): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, productUpdate, {new: true});
  }
}