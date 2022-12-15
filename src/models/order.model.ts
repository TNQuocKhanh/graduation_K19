import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Account} from './account.model';
import {Cartitem} from './cartitem.model';

@model({settings: {strict: false}})
export class Order extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: Cartitem,
  })
  products?: Cartitem[];

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'number',
  })
  amount?: number;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'string',
  })
  status?: string;

  @property({
    type: 'string',
  })
  method?: string;

  @belongsTo(
    () => Account,
    {keyFrom: 'accountId', name: 'account'},
    {name: 'accountId'},
  )
  accountId: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  createdAt?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  updatedAt?: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Order>) {
    super(data);
  }
}

export interface OrderRelations {
  // describe navigational properties here
}

export type OrderWithRelations = Order & OrderRelations;
