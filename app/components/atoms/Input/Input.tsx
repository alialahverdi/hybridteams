import React from 'react'
import { IInput } from './IInput';

// Styles
import style from "./Input.module.scss";
import { cs } from "app/utils/helper";

const Input = (props: IInput) => {

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
                    ? <label htmlFor={props.id}>{props.label}</label>
                    : ''
            }

            <div className={style.content}>
                <input
                    {...props}
                    className={cs(
                        style['form-input'],
                        style[`${!!props.inputsize ? props.inputsize : 'md'}`],
                    )}
                />
            </div>


        </div>
    )
}

export default Input;