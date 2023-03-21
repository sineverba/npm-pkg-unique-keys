import { v4 as uuidv4 } from "uuid";
/**
 *
 * Generates and adds unique keys for an array.
 *
 * @param data the array without an unique key
 * @returns the same array with an unique key
 */
export const uniqueKeys = (data: any) => {
  return data.map((item: any) => Object.assign(item, { uniqueKey: uuidv4() }));
};
