import {model, property} from '@loopback/repository';
import {Bar} from './bar.model';

@model()
export class Foo {
  @property()
  name?: string;

  // comment out the following two lines to make the app start
  @property({type: Bar})
  bar?: Bar;

  constructor(data?: Partial<Foo>) {}
}
