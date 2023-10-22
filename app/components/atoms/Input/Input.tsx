import React from 'react'
import style from './Input.module.scss';
import { IInput } from './IInput';
import { cs } from 'app/utils/helper';

const FixedLabelInput = (props: IInput) => {

    const variants = {
        hidden: { y: -10, opacity: 0 },
        show: { y: 0, opacity: 1 },
    }

    console.log('props', props)

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
                        style[`${!!props.inputSize ? props.inputSize : 'md'}`],
                    )}
                />
            </div>


        </div>
    )
}

export default FixedLabelInput;