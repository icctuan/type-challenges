import type { Equal, Expect, NotAny } from "@type-challenges/utils";
// expected to be string
type HelloWorld = string;

// you should make this work
type test = Expect<Equal<HelloWorld, string>>

export default HelloWorld;
