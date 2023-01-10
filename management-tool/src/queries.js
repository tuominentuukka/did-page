/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSubjects = /* GraphQL */ `
  query GetSubjects($id: ID!) {
    getSubjects(id: $id) {
      id
      subject_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSubjects = /* GraphQL */ `
  query ListSubjects(
    $filter: ModelSubjectsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSubjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subject_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSubjects = /* GraphQL */ `
  query SyncSubjects(
    $filter: ModelSubjectsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSubjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        subject_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUniversities = /* GraphQL */ `
  query GetUniversities($id: ID!) {
    getUniversities(id: $id) {
      id
      university_name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUniversities = /* GraphQL */ `
  query ListUniversities(
    $filter: ModelUniversitiesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUniversities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        university_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUniversities = /* GraphQL */ `
  query SyncUniversities(
    $filter: ModelUniversitiesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUniversities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        university_name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGenders = /* GraphQL */ `
  query GetGenders($id: ID!) {
    getGenders(id: $id) {
      id
      gender
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listGenders = /* GraphQL */ `
  query ListGenders(
    $filter: ModelGendersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGenders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gender
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGenders = /* GraphQL */ `
  query SyncGenders(
    $filter: ModelGendersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGenders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        gender
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRegistered = /* GraphQL */ `
  query GetRegistered($id: ID!) {
    getRegistered(id: $id) {
      id
      first_name
      last_name
      gender
      email
      phone
      university
      subject
      participated_before
      group
      participatingNow
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRegistereds = /* GraphQL */ `
  query ListRegistereds(
    $filter: ModelRegisteredFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegistereds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        first_name
        last_name
        gender
        email
        phone
        university
        subject
        group
        participated_before
        group
        participatingNow
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRegistereds = /* GraphQL */ `
  query SyncRegistereds(
    $filter: ModelRegisteredFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRegistereds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        first_name
        last_name
        gender
        email
        phone
        university
        subject
        participated_before
        group
        participatingNow
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
