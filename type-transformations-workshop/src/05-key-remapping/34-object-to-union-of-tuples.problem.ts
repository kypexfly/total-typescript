import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type ValuesObject = {
  [K in keyof Values]: [K, Values[K]];
};

type ValuesAsUnionOfTuples = ValuesObject[keyof ValuesObject];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
