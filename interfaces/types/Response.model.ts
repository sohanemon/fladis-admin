import type { Metadata } from './Metadata.model';

export type Response<T> = {
  data: T;
  metaData: Metadata;
  successMessage: string | undefined;
  errors: boolean | undefined;
  isSuccess: boolean;
  status: number;
};
