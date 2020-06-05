export declare const countFromTo: (from: number, to: number) => {
    for: (cb: (index: number) => void) => void;
    map: <T>(cb: (index: number) => T) => T[];
};
export declare const count: (countTo: number) => {
    for: (cb: (index: number) => void) => void;
    map: <T>(cb: (index: number) => T) => T[];
};
