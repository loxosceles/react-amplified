/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRawSequence = /* GraphQL */ `
  subscription OnCreateRawSequence {
    onCreateRawSequence {
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
export const onUpdateRawSequence = /* GraphQL */ `
  subscription OnUpdateRawSequence {
    onUpdateRawSequence {
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
export const onDeleteRawSequence = /* GraphQL */ `
  subscription OnDeleteRawSequence {
    onDeleteRawSequence {
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
export const onCreatePatient = /* GraphQL */ `
  subscription OnCreatePatient {
    onCreatePatient {
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
export const onUpdatePatient = /* GraphQL */ `
  subscription OnUpdatePatient {
    onUpdatePatient {
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
export const onDeletePatient = /* GraphQL */ `
  subscription OnDeletePatient {
    onDeletePatient {
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
export const onCreateDataCollection = /* GraphQL */ `
  subscription OnCreateDataCollection {
    onCreateDataCollection {
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
export const onUpdateDataCollection = /* GraphQL */ `
  subscription OnUpdateDataCollection {
    onUpdateDataCollection {
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
export const onDeleteDataCollection = /* GraphQL */ `
  subscription OnDeleteDataCollection {
    onDeleteDataCollection {
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
export const onCreatePatientDataCollection = /* GraphQL */ `
  subscription OnCreatePatientDataCollection {
    onCreatePatientDataCollection {
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
export const onUpdatePatientDataCollection = /* GraphQL */ `
  subscription OnUpdatePatientDataCollection {
    onUpdatePatientDataCollection {
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
export const onDeletePatientDataCollection = /* GraphQL */ `
  subscription OnDeletePatientDataCollection {
    onDeletePatientDataCollection {
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
