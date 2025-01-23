import { BaseReactProps } from "lib/m/types";

export default function Bold({ value }: BaseReactProps<{ value: string }>) {
    return (
        <strong>{value}</strong>
    );
}
