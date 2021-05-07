import {Entity, hasOne, model, property} from '@loopback/repository';
import {Foo} from './foo.model';

@model()
export class Bar extends Entity {
  @property()
  name?: string;

  @hasOne(() => Foo)
  foo?: Foo;

  constructor(data?: Partial<Bar>) {
    super(data);
  }
}
