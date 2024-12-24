export type Nullable<T> = T | null | undefined;
export type Optional<T> = T | undefined;
export interface BaseReactProps {
    children?: React.ReactNode;
    params?: Record<string, string>;
    searchParams?: Record<string, string>;
}

export type Primitives = string | number | boolean | null | undefined;
