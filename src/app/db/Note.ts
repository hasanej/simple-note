import Realm, {ObjectSchema} from 'realm';

export class Note extends Realm.Object<Note> {
  _id!: Realm.BSON.ObjectId;
  title!: string;
  content!:string;
  static schema: ObjectSchema = {
    name: 'Note',
    properties: {
      _id: 'objectId',
      title: 'string',
      content: 'string'
    },
    primaryKey: '_id'
  };
}