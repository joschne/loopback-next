import {model, property} from '@loopback/repository';
import {Foo} from './foo.model';

@model()
export class Bar {
  @property()
  name?: string;

  @property({type: Foo})
  foo?: Foo;

  constructor(data?: Partial<Bar>) {}
}
