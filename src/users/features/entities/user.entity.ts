import { SerializableEntity } from '@/common/utils/contracts/serializable-entity.interface';
import * as moment from 'moment';

export class User implements SerializableEntity {
  private _id?: number;
  private _name: string;
  private _email: string;
  private _password: string;
  private _createdAt: string;
  private _updatedAt?: string;

  constructor(
    id: number | null,
    name: string,
    email: string,
    password: string,
    createdAt: string,
    updatedAt: string | null,
  ) {
    this._id = id;
    this._name = name;
    this._email = email;
    this._password = password;
    this._createdAt = moment(createdAt).isValid()
      ? moment(createdAt).format('YYYY-MM-DD HH:mm:ss')
      : null;
    this._updatedAt = updatedAt
      ? moment(updatedAt).format('YYYY-MM-DD HH:mm:ss')
      : null;
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

  get email(): string {
    return this._email;
  }

  set email(email: string) {
    this._email = email;
  }

  get password(): string {
    return this._password;
  }

  set password(password: string) {
    this._password = password;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  set createdAt(createdAt: string) {
    if (!moment(createdAt).isValid()) {
      this._updatedAt = null;
    }
    this._createdAt = moment(createdAt).format('YYYY-MM-DD HH:mm:ss');
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  set updatedAt(updatedAt: string | null) {
    if (!moment(updatedAt).isValid()) {
      this._updatedAt = null;
    }
    this._updatedAt = moment(updatedAt).format('YYYY-MM-DD HH:mm:ss');
  }

  serialize(): object {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }
}
