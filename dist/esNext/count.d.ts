export declare const countFromTo: (from: number, to: number, step?: number) => {
    for: (cb: (index: number, cbBreak: () => void) => void) => void;
    map: <T = any>(cb: (index: number) => T) => T[];
    reduce: <T_1 = any>(cb: (acc: T_1, index: number) => T_1, initialValue: T_1) => T_1;
};
export declare const count: (countTo: number, step?: number) => {
    for: (cb: (index: number, cbBreak: () => void) => void) => void;
    map: <T = any>(cb: (index: number) => T) => T[];
    reduce: <T_1 = any>(cb: (acc: T_1, index: number) => T_1, initialValue: T_1) => T_1;
};
