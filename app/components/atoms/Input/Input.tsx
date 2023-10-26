import React from 'react'
import { IInput } from './IInput';

// Styles
import style from "./Input.module.scss";
import { cs } from "app/utils/helper";

const Input = (props: IInput) => {
    const { label, id, inputsize, register, ...rest } = props
    return (
        <div
            className={cs(
                style['input-container'],
                style['ltr-label']
            )}
            dir={props.containerDir}
        >
            {
                !props.withoutLabel
                    ? <label htmlFor={id}>{label}</label>
                    : ''
            }

            <div className={style.content}>
                <input
                    {...register(id)}
                    {...rest}
                    className={cs(
                        style['form-input'],
                        style[`${!!inputsize ? inputsize : 'md'}`],
                    )}
                />
            </div>
        </div>
    )
}

export default Input;