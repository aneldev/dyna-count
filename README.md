# About count & countFromTo

Simplifies the `for` loop.

It also offers a `map`.

Instead of

`for (let i = 0; i < 1000; i++) console.log(i);`

you can

`count(1000).for(i => console.log(i))`

or simpler

`count(1000).for(console.log)`

You can `map` also the iteration, useful for data generation.

```
let items = [];
count(3).map(i => items.push(i));
// items is now [0, 1, 2]
```

In Typescript, `map` supports types, for example:

```
let items: string[] = [];
count(3).map<string>(i => items.push(i.toString()));
// items is now ['0', '1', '2']
```

Similarly, we have and the  `countFromTo`

- `for`

`countFromTo(100, 200).for(i => console.log(i))`

- `map`

```
let items = [];
countFromTo(10, 13).map(i => items.push(i));
// items is now [10, 11, 12]
```

# Import

`import {count, countFromTo} from "dyna-count";`

# Signatures

`count(countTo: number).for: (cb: (index: number) => void): void`

`count(countTo: number).map: <T>(cb: (index: number) => T): T[]`

`countFromTo(from: number, to: number).for: (cb: (index: number) => void): void`

`countFromTo(from: number, to: number).map: <T>(cb: (index: number) => T): T[]`

