export type InputFiledSize = 'sm' | 'md' | 'lg';

type direction = 'rtl' | 'ltr';

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

export interface ITextarea extends
    IInputBase,
    React.DetailedHTMLProps<
        React.TextareaHTMLAttributes<HTMLTextAreaElement>,
        HTMLTextAreaElement
    > { }