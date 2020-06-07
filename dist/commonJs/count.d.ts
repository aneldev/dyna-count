export declare const countFromTo: (from: number, to: number, step?: number) => {
    for: (cb: (index: number, cbBreak: any) => void) => void;
    map: <T = any>(cb: (index: number) => T) => T[];
};
export declare const count: (countTo: number, step?: number) => {
    for: (cb: (index: number, cbBreak: any) => void) => void;
    map: <T = any>(cb: (index: number) => T) => T[];
};
