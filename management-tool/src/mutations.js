/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSubjects = /* GraphQL */ `
  mutation CreateSubjects(
    $input: CreateSubjectsInput!
    $condition: ModelSubjectsConditionInput
  ) {
    createSubjects(input: $input, condition: $condition) {
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
export const updateSubjects = /* GraphQL */ `
  mutation UpdateSubjects(
    $input: UpdateSubjectsInput!
    $condition: ModelSubjectsConditionInput
  ) {
    updateSubjects(input: $input, condition: $condition) {
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
export const deleteSubjects = /* GraphQL */ `
  mutation DeleteSubjects(
    $input: DeleteSubjectsInput!
    $condition: ModelSubjectsConditionInput
  ) {
    deleteSubjects(input: $input, condition: $condition) {
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
export const createUniversities = /* GraphQL */ `
  mutation CreateUniversities(
    $input: CreateUniversitiesInput!
    $condition: ModelUniversitiesConditionInput
  ) {
    createUniversities(input: $input, condition: $condition) {
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
export const updateUniversities = /* GraphQL */ `
  mutation UpdateUniversities(
    $input: UpdateUniversitiesInput!
    $condition: ModelUniversitiesConditionInput
  ) {
    updateUniversities(input: $input, condition: $condition) {
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
export const deleteUniversities = /* GraphQL */ `
  mutation DeleteUniversities(
    $input: DeleteUniversitiesInput!
    $condition: ModelUniversitiesConditionInput
  ) {
    deleteUniversities(input: $input, condition: $condition) {
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
export const createGenders = /* GraphQL */ `
  mutation CreateGenders(
    $input: CreateGendersInput!
    $condition: ModelGendersConditionInput
  ) {
    createGenders(input: $input, condition: $condition) {
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
export const updateGenders = /* GraphQL */ `
  mutation UpdateGenders(
    $input: UpdateGendersInput!
    $condition: ModelGendersConditionInput
  ) {
    updateGenders(input: $input, condition: $condition) {
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
export const deleteGenders = /* GraphQL */ `
  mutation DeleteGenders(
    $input: DeleteGendersInput!
    $condition: ModelGendersConditionInput
  ) {
    deleteGenders(input: $input, condition: $condition) {
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
export const createRegistered = /* GraphQL */ `
  mutation CreateRegistered(
    $input: CreateRegisteredInput!
    $condition: ModelRegisteredConditionInput
  ) {
    createRegistered(input: $input, condition: $condition) {
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
export const updateRegistered = /* GraphQL */ `
  mutation UpdateRegistered(
    $input: UpdateRegisteredInput!
    $condition: ModelRegisteredConditionInput
  ) {
    updateRegistered(input: $input, condition: $condition) {
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
export const deleteRegistered = /* GraphQL */ `
  mutation DeleteRegistered(
    $input: DeleteRegisteredInput!
    $condition: ModelRegisteredConditionInput
  ) {
    deleteRegistered(input: $input, condition: $condition) {
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
