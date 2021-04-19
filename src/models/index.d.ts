import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class RawSequence {
  readonly id: string;
  readonly index?: number;
  readonly is_labeling_candidate?: boolean;
  readonly is_useless?: boolean;
  readonly p?: string;
  constructor(init: ModelInit<RawSequence>);
  static copyOf(source: RawSequence, mutator: (draft: MutableModel<RawSequence>) => MutableModel<RawSequence> | void): RawSequence;
}

export declare class Patient {
  readonly id: string;
  readonly inde?: string;
  readonly pathological?: string;
  readonly PatientDataCollections?: (PatientDataCollection | null)[];
  constructor(init: ModelInit<Patient>);
  static copyOf(source: Patient, mutator: (draft: MutableModel<Patient>) => MutableModel<Patient> | void): Patient;
}

export declare class PatientDataCollection {
  readonly id: string;
  readonly patient: Patient;
  readonly datacollection: DataCollection;
  constructor(init: ModelInit<PatientDataCollection>);
  static copyOf(source: PatientDataCollection, mutator: (draft: MutableModel<PatientDataCollection>) => MutableModel<PatientDataCollection> | void): PatientDataCollection;
}

export declare class DataCollection {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly patients?: (PatientDataCollection | null)[];
  constructor(init: ModelInit<DataCollection>);
  static copyOf(source: DataCollection, mutator: (draft: MutableModel<DataCollection>) => MutableModel<DataCollection> | void): DataCollection;
}