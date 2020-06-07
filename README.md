# About dyna-count

Simplifies the `for` loop.

It also offers a `map`.

# for

Instead of

`for (let i = 0; i < 1000; i++) console.log(i);`

you can

`count(1000).for(i => console.log(i))`

or simpler

`count(1000).for(console.log)`

You can `for` with step

`count(10, 2).for(index => console.log(index))` // consoles: 0, 2, 4, 6, 8

You can `break` a `for`, calling the 2nd argument of the `for`'s callback

```
let collected = [];
count(20).for((index, breakIt) => {
    collected.push(index);
    if (index === 9) breakIt();
});
// 0..9 items are only collected
```

# map

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

You can `map` with `step` in the same way as with `for`.

You can `break` in the same way as with `for`.

# Import

`import {count, countFromTo} from "dyna-count";`

# Signatures

`count(countTo: number).for: (cb: (index: number) => void): void`

`count(countTo: number).map: <T>(cb: (index: number) => T): T[]`

`countFromTo(from: number, to: number).for: (cb: (index: number) => void): void`

`countFromTo(from: number, to: number).map: <T>(cb: (index: number) => T): T[]`

