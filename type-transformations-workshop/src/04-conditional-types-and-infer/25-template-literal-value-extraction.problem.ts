import { Equal, Expect } from "../helpers/type-utils";
import { S } from "ts-toolbelt";

type Names = [
  "Matt Pocock",
  "Jimi Hendrix",
  "Eric Clapton",
  "John Mayer",
  "BB King",
];

// type GetSurname<T extends string> = S.Split<T, " ">[1];
type GetSurname<T> = T extends `${infer TName} ${infer TSurname}` ? TSurname : never

type tests = [
  Expect<Equal<GetSurname<Names[0]>, "Pocock">>,
  Expect<Equal<GetSurname<Names[1]>, "Hendrix">>,
  Expect<Equal<GetSurname<Names[2]>, "Clapton">>,
  Expect<Equal<GetSurname<Names[3]>, "Mayer">>,
  Expect<Equal<GetSurname<Names[4]>, "King">>,
];
