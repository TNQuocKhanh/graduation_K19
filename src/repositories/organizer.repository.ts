import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Organizer, OrganizerRelations} from '../models';

export class OrganizerRepository extends DefaultCrudRepository<
  Organizer,
  typeof Organizer.prototype.id,
  OrganizerRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Organizer, dataSource);
  }
}
