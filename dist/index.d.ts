import * as react_jsx_runtime from 'react/jsx-runtime';

interface Options$1 {
    value: string | number;
    label: string | number;
}
interface MultiSelectProps {
    options: Options$1[];
    onChange: (selectedValue: Options$1[]) => void;
    isSearchable?: boolean;
    placeholderText?: string;
    chip?: boolean;
    checked?: boolean;
    disabled?: boolean;
    defaultValue?: Options$1[];
    creatable?: boolean;
    emptyState?: string;
    size?: "sm" | "md" | "lg";
    width?: number;
    height?: number;
    maxLengthShow?: number;
    maxAcceptItem?: number;
    hideHeader?: boolean;
}

declare const MultiSelect: ({ options, onChange, isSearchable, placeholderText, chip, checked, disabled, defaultValue, creatable, emptyState, size, width, height, maxLengthShow, maxAcceptItem, hideHeader, }: MultiSelectProps) => react_jsx_runtime.JSX.Element;

interface Options {
    value: string | number;
    label: string | number;
}

export { MultiSelect, type Options };
