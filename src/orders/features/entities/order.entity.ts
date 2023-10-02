import { SerializableEntity } from '@/common/utils/contracts/serializable-entity.interface';
import * as moment from 'moment';

export class Order implements SerializableEntity {
  private _id?: number;
  private _userId: number;
  private _productId: number;
  private _value: number;
  private _status: number;
  private _document: string;
  private _payment: string;
  private _createdAt: string;

  constructor(
    id: number | null,
    userId: number,
    productId: number,
    value: number,
    status: number,
    document: string,
    payment: string,
    createdAt: string,
  ) {
    this._id = id;
    this._userId = userId;
    this._productId = productId;
    this._value = value;
    this._status = status;
    this._document = document;
    this._payment = payment;
    this._createdAt = moment(createdAt).isValid()
      ? moment(createdAt).format('YYYY-MM-DD HH:mm:ss')
      : null;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(userId: number) {
    this._userId = userId;
  }

  get productId(): number {
    return this._productId;
  }

  set productId(productId: number) {
    this._productId = productId;
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  get status(): number {
    return this._status;
  }

  set status(status: number) {
    this._status = status;
  }

  get document(): string {
    return this._document;
  }

  set document(document: string) {
    this._document = document;
  }

  get payment(): string {
    return this._payment;
  }

  set payment(payment: string) {
    this._payment = payment;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(createdAt: string) {
    if (!moment(createdAt).isValid()) {
      this._createdAt = null;
    }
    this._createdAt = moment(createdAt).format('YYYY-MM-DD HH:mm:ss');
  }

  serialize(): object {
    return {
      id: this.id,
      userId: this.userId,
      productId: this.productId,
      value: this.value,
      status: this.status,
      document: this.document,
      payment: this.payment,
      createdAt: this.createdAt,
    };
  }
}
