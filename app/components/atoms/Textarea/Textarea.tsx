import React from 'react'
import { ITextarea } from './ITextarea';

// Styles
import style from "./Textarea.module.scss";
import { cs } from "app/utils/helper";

const Textarea = (props: ITextarea) => {

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
                    {...props}
                    className={cs(
                        style['form-input'],
                        style[`${!!props.inputSize ? props.inputSize : 'md'}`],
                    )}
                />
            </div>


        </div>
    )
}

export default Textarea;