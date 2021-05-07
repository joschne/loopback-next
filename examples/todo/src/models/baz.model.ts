import {model, property} from '@loopback/repository';

@model()
export class Baz {
  @property()
  name?: string;

  @property({type: Baz})
  baz?: Baz;

  constructor(data?: Partial<Baz>) {}
}
