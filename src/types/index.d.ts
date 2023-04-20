/* eslint-disable no-unused-vars */

export {};

declare global {
  interface Error {
    status?: number;
    isJoi?: boolean;
    details?: Array;
  }
}
