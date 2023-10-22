import { cs } from "app/utils/helper"
import styles from './Text.module.scss'

interface IText extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    color?: string,
    size?: number
}

const Text = ({
    children,
    ...props
}: IText) => {

    return (
        <span
            {...props}
            className={cs(
                props.className as string
            )}
            style={{
                color: props.color || '',
                fontSize: props.size || 14,
            }}
        >
            {children}
        </span>
    )
}

export default Text