import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Cartitem extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  name?: string;
  
  @property({
    type: 'number',
  })
  price?: number;

  @property({
    type: 'number',
  })
  amount?: number;

  //@property({
    //type: 'array',
    //itemType: 'string',
  //})
  //products?: string[];

  //@property({
    //type: 'string',
  //})
  //info?: string;

  //@property({
    //type: 'array',
    //itemType: 'object',
  //})
  //more?: object[];

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

  constructor(data?: Partial<Cartitem>) {
    super(data);
  }
}

export interface CartitemRelations {
  // describe navigational properties here
}

export type CartitemWithRelations = Cartitem & CartitemRelations;
