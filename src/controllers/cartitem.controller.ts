import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Cartitem} from '../models';
import {CartitemRepository} from '../repositories';

export class CartitemController {
  constructor(
    @repository(CartitemRepository)
    public cartitemRepository : CartitemRepository,
  ) {}

  @post('/cartitems')
  @response(200, {
    description: 'Cartitem model instance',
    content: {'application/json': {schema: getModelSchemaRef(Cartitem)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cartitem, {
            title: 'NewCartitem',
            exclude: ['id'],
          }),
        },
      },
    })
    cartitem: Omit<Cartitem, 'id'>,
  ): Promise<Cartitem> {
    return this.cartitemRepository.create(cartitem);
  }

  @get('/cartitems/count')
  @response(200, {
    description: 'Cartitem model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Cartitem) where?: Where<Cartitem>,
  ): Promise<Count> {
    return this.cartitemRepository.count(where);
  }

  @get('/cartitems')
  @response(200, {
    description: 'Array of Cartitem model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Cartitem, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Cartitem) filter?: Filter<Cartitem>,
  ): Promise<Cartitem[]> {
    return this.cartitemRepository.find(filter);
  }

  @patch('/cartitems')
  @response(200, {
    description: 'Cartitem PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cartitem, {partial: true}),
        },
      },
    })
    cartitem: Cartitem,
    @param.where(Cartitem) where?: Where<Cartitem>,
  ): Promise<Count> {
    return this.cartitemRepository.updateAll(cartitem, where);
  }

  @get('/cartitems/{id}')
  @response(200, {
    description: 'Cartitem model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Cartitem, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Cartitem, {exclude: 'where'}) filter?: FilterExcludingWhere<Cartitem>
  ): Promise<Cartitem> {
    return this.cartitemRepository.findById(id, filter);
  }

  @patch('/cartitems/{id}')
  @response(204, {
    description: 'Cartitem PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Cartitem, {partial: true}),
        },
      },
    })
    cartitem: Cartitem,
  ): Promise<void> {
    await this.cartitemRepository.updateById(id, cartitem);
  }

  @put('/cartitems/{id}')
  @response(204, {
    description: 'Cartitem PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() cartitem: Cartitem,
  ): Promise<void> {
    await this.cartitemRepository.replaceById(id, cartitem);
  }

  @del('/cartitems/{id}')
  @response(204, {
    description: 'Cartitem DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.cartitemRepository.deleteById(id);
  }
}
