import React from 'react'
import { ITextarea } from './ITextarea';

// Styles
import style from "./Textarea.module.scss";
import { cs } from "app/utils/helper";

const Textarea = (props: ITextarea) => {
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
                    ? <label htmlFor={props.id}>{props.label}</label>
                    : ''
            }

            <div className={style.content}>
                <textarea
                    {...register(id)}
                    {...rest}
                    className={cs(
                        style['form-input'],
                        style[`${!!props.inputsize ? props.inputsize : 'md'}`],
                    )}
                />
            </div>


        </div>
    )
}

export default Textarea;