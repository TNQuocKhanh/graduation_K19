import {Entity, model, property} from "@loopback/repository";

@model()
export class Comment extends Entity {
  @property({
    type: 'string',
  })
  id: string;

  @property({
    type: 'string',
  })
  name: string;

  @property({
    type: 'string',
  })
  comment?: string;

  @property({
    type: 'number',
  })
  rating?: number;

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
}
