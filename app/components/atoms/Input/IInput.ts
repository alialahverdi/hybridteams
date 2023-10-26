export type InputFiledSize = 'sm' | 'md' | 'lg';

type direction = 'rtl' | 'ltr';

export type CustomInputType = {
    name: string | number | null,
    value: string | number | null
}

export interface IInputBase {
    inputsize?: InputFiledSize
    label?: string | JSX.Element
    icon?: string | JSX.Element
    containerClassName?: string
    inputClassName?: string,
    errorMessage?: string,
    containerDir?: direction,
    labelDir?: direction,
    icondir?: direction,
    witoutValidation?: boolean
    withoutLabel?: boolean
}

export interface IInput extends
    IInputBase,
    React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
    > {
    addBefore?: React.ReactNode
    addAfter?: React.ReactNode
}


