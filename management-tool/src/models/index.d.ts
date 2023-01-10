import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerSubjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subjects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subject_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySubjects = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Subjects, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly subject_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Subjects = LazyLoading extends LazyLoadingDisabled ? EagerSubjects : LazySubjects

export declare const Subjects: (new (init: ModelInit<Subjects>) => Subjects) & {
  copyOf(source: Subjects, mutator: (draft: MutableModel<Subjects>) => MutableModel<Subjects> | void): Subjects;
}

type EagerUniversities = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Universities, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly university_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUniversities = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Universities, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly university_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Universities = LazyLoading extends LazyLoadingDisabled ? EagerUniversities : LazyUniversities

export declare const Universities: (new (init: ModelInit<Universities>) => Universities) & {
  copyOf(source: Universities, mutator: (draft: MutableModel<Universities>) => MutableModel<Universities> | void): Universities;
}

type EagerGenders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Genders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gender?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGenders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Genders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly gender?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Genders = LazyLoading extends LazyLoadingDisabled ? EagerGenders : LazyGenders

export declare const Genders: (new (init: ModelInit<Genders>) => Genders) & {
  copyOf(source: Genders, mutator: (draft: MutableModel<Genders>) => MutableModel<Genders> | void): Genders;
}

type EagerRegistered = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Registered, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly gender?: number | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly university?: number | null;
  readonly subject?: number | null;
  readonly participated_before?: boolean | null;
  readonly group?: number | null;
  readonly participatingNow?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyRegistered = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Registered, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly first_name?: string | null;
  readonly last_name?: string | null;
  readonly gender?: number | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly university?: number | null;
  readonly subject?: number | null;
  readonly participated_before?: boolean | null;
  readonly group?: number | null;
  readonly participatingNow?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Registered = LazyLoading extends LazyLoadingDisabled ? EagerRegistered : LazyRegistered

export declare const Registered: (new (init: ModelInit<Registered>) => Registered) & {
  copyOf(source: Registered, mutator: (draft: MutableModel<Registered>) => MutableModel<Registered> | void): Registered;
}