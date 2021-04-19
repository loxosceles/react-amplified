/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRawSequence = /* GraphQL */ `
  mutation CreateRawSequence(
    $input: CreateRawSequenceInput!
    $condition: ModelRawSequenceConditionInput
  ) {
    createRawSequence(input: $input, condition: $condition) {
      id
      index
      is_labeling_candidate
      is_useless
      p
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateRawSequence = /* GraphQL */ `
  mutation UpdateRawSequence(
    $input: UpdateRawSequenceInput!
    $condition: ModelRawSequenceConditionInput
  ) {
    updateRawSequence(input: $input, condition: $condition) {
      id
      index
      is_labeling_candidate
      is_useless
      p
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteRawSequence = /* GraphQL */ `
  mutation DeleteRawSequence(
    $input: DeleteRawSequenceInput!
    $condition: ModelRawSequenceConditionInput
  ) {
    deleteRawSequence(input: $input, condition: $condition) {
      id
      index
      is_labeling_candidate
      is_useless
      p
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPatient = /* GraphQL */ `
  mutation CreatePatient(
    $input: CreatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    createPatient(input: $input, condition: $condition) {
      id
      inde
      pathological
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PatientDataCollections {
        nextToken
        startedAt
      }
    }
  }
`;
export const updatePatient = /* GraphQL */ `
  mutation UpdatePatient(
    $input: UpdatePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    updatePatient(input: $input, condition: $condition) {
      id
      inde
      pathological
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PatientDataCollections {
        nextToken
        startedAt
      }
    }
  }
`;
export const deletePatient = /* GraphQL */ `
  mutation DeletePatient(
    $input: DeletePatientInput!
    $condition: ModelPatientConditionInput
  ) {
    deletePatient(input: $input, condition: $condition) {
      id
      inde
      pathological
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PatientDataCollections {
        nextToken
        startedAt
      }
    }
  }
`;
export const createDataCollection = /* GraphQL */ `
  mutation CreateDataCollection(
    $input: CreateDataCollectionInput!
    $condition: ModelDataCollectionConditionInput
  ) {
    createDataCollection(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      patients {
        nextToken
        startedAt
      }
    }
  }
`;
export const updateDataCollection = /* GraphQL */ `
  mutation UpdateDataCollection(
    $input: UpdateDataCollectionInput!
    $condition: ModelDataCollectionConditionInput
  ) {
    updateDataCollection(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      patients {
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteDataCollection = /* GraphQL */ `
  mutation DeleteDataCollection(
    $input: DeleteDataCollectionInput!
    $condition: ModelDataCollectionConditionInput
  ) {
    deleteDataCollection(input: $input, condition: $condition) {
      id
      name
      description
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      patients {
        nextToken
        startedAt
      }
    }
  }
`;
export const createPatientDataCollection = /* GraphQL */ `
  mutation CreatePatientDataCollection(
    $input: CreatePatientDataCollectionInput!
    $condition: ModelPatientDataCollectionConditionInput
  ) {
    createPatientDataCollection(input: $input, condition: $condition) {
      id
      patientID
      datacollectionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      patient {
        id
        inde
        pathological
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      datacollection {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const updatePatientDataCollection = /* GraphQL */ `
  mutation UpdatePatientDataCollection(
    $input: UpdatePatientDataCollectionInput!
    $condition: ModelPatientDataCollectionConditionInput
  ) {
    updatePatientDataCollection(input: $input, condition: $condition) {
      id
      patientID
      datacollectionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      patient {
        id
        inde
        pathological
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      datacollection {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
export const deletePatientDataCollection = /* GraphQL */ `
  mutation DeletePatientDataCollection(
    $input: DeletePatientDataCollectionInput!
    $condition: ModelPatientDataCollectionConditionInput
  ) {
    deletePatientDataCollection(input: $input, condition: $condition) {
      id
      patientID
      datacollectionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      patient {
        id
        inde
        pathological
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      datacollection {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
    }
  }
`;
