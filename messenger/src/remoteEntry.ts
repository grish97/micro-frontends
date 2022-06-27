/// <reference types="react" />

type Nullable<T> = T | null;

type TCallback<TR = void> = (...args: any[]) => void;