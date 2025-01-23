export type Nullable<T> = T | null | undefined;
export type Optional<T> = T | undefined;
export type BaseReactProps<E extends Object = {}> = {
    children?: React.ReactNode;
    params?: Record<string, string>;
    searchParams?: Record<string, string>;
} & E;

export type Primitives = string | number | boolean | null | undefined;
