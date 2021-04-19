// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RawSequence, Patient, PatientDataCollection, DataCollection } = initSchema(schema);

export {
  RawSequence,
  Patient,
  PatientDataCollection,
  DataCollection
};