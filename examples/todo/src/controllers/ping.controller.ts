import {get, getModelSchemaRef, requestBody, response} from '@loopback/rest';
import {Bar} from '../models/bar.model';
import {Baz} from '../models/baz.model';
import {Foo} from '../models/foo.model';

export class PingController {
  constructor() {}

  @get('/foo')
  @response(200)
  foo(@requestBody(Foo) foo: Foo): string {
    return 'ok';
  }

  @get('/bar')
  @response(200)
  bar(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Bar, {includeRelations: true}),
        },
      },
    })
    bar: Bar,
  ): string {
    return 'ok';
  }

  @get('/baz')
  @response(200)
  baz(@requestBody(Baz) baz: Baz): string {
    return 'ok';
  }
}
