// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Subjects, Universities, Genders, Registered } = initSchema(schema);

export {
  Subjects,
  Universities,
  Genders,
  Registered
};