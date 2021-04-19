/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRawSequence = /* GraphQL */ `
  query GetRawSequence($id: ID!) {
    getRawSequence(id: $id) {
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
export const listRawSequences = /* GraphQL */ `
  query ListRawSequences(
    $filter: ModelRawSequenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRawSequences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncRawSequences = /* GraphQL */ `
  query SyncRawSequences(
    $filter: ModelRawSequenceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRawSequences(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const listPatients = /* GraphQL */ `
  query ListPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        inde
        pathological
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPatient = /* GraphQL */ `
  query GetPatient($id: ID!) {
    getPatient(id: $id) {
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
export const syncPatients = /* GraphQL */ `
  query SyncPatients(
    $filter: ModelPatientFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatients(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        inde
        pathological
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const listDataCollections = /* GraphQL */ `
  query ListDataCollections(
    $filter: ModelDataCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDataCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getDataCollection = /* GraphQL */ `
  query GetDataCollection($id: ID!) {
    getDataCollection(id: $id) {
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
export const syncDataCollections = /* GraphQL */ `
  query SyncDataCollections(
    $filter: ModelDataCollectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDataCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        description
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPatientDataCollections = /* GraphQL */ `
  query SyncPatientDataCollections(
    $filter: ModelPatientDataCollectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPatientDataCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        patientID
        datacollectionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
