import {Entity, hasOne, model, property} from '@loopback/repository';
import {Bar} from './bar.model';

@model()
export class Foo extends Entity {
  @property()
  name?: string;

  // comment out the following two lines to make the app start
  @hasOne(() => Bar)
  bar?: Bar;

  constructor(data?: Partial<Foo>) {
    super(data);
  }
}
