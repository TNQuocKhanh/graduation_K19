import {belongsTo, Entity, model, property} from '@loopback/repository';
import {Category} from './category.model';
import {Organizer} from './organizer.model';
import {Comment} from './product-comment.model';

@model({settings: {strict: false, collection: 'products'}})

export class Product extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  sold: number;

  @property({
    type: 'number',
    required: true,
  })
  stock: number;

  @property({
    type: 'string',
    required: true,
  })
  image?: string;

  @property({
    type: 'number',
    required: true,
  })
  rate?: number;

  @property({
    type: 'string',
    default: '00INACTIVE'
  })
  status?: string;


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

  @property({
    type: 'array',
    itemType: Comment
  })
  reviews?: Comment[];

  @belongsTo(
    () => Category,
    {keyFrom: 'categoryId', name: 'category'},
    {name: 'categoryId'},
  )
  categoryId: string;

  @belongsTo(
    () => Organizer,
    {keyFrom: 'organizerId', name: 'organizer'},
    {name: 'organizerId'},
  )
  organizerId: string;

  @property.array(Comment)
  cmt?: Comment[];

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Product>) {
    super(data);
  }
}

export interface ProductRelations {
  // describe navigational properties here
}

export type ProductWithRelations = Product & ProductRelations;
