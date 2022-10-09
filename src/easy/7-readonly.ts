interface Todo {
  title: string;
  description: string;
}

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// expected:
const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

// @ts-ignore
todo.title = "Hello"; // Error: cannot reassign a readonly property
// @ts-ignore
todo.description = "barFoo"; // Error: cannot reassign a readonly property

export default MyReadonly;
