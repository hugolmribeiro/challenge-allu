import { SerializableEntity } from '@/common/utils/contracts/serializable-entity.interface';

export class Product implements SerializableEntity {
  private _id?: number;
  private _code: string;
  private _name: string;
  private _price: number;
  private _description?: string;
  private _image?: string;

  constructor(
    id: number | null,
    name: string,
    code: string,
    price: number,
    description: string,
    image: string | null,
  ) {
    this._id = id;
    this._name = name;
    this._code = code;
    this._price = price;
    this._description = description;
    this._image = image;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get code(): string {
    return this._code;
  }

  set code(code: string) {
    this._code = code;
  }

  get price(): number {
    return this._price;
  }

  set price(price: number) {
    this._price = price;
  }

  get description(): string | null {
    return this._description;
  }

  set description(description: string | null) {
    this._description = description;
  }

  get image(): string | null {
    return this._image;
  }

  set image(image: string | null) {
    this._image = image;
  }

  serialize(): object {
    return {
      id: this.id,
      name: this.name,
      code: this.code,
      price: this.price,
      description: this.description,
      image: this.image,
    };
  }
}
