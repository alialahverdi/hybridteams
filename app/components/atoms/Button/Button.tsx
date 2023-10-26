import React, { useRef } from 'react';
import style from './Button.module.scss';
import { IButton } from './IButton';
import { cs } from 'app/utils/helper';

const Button = (props: IButton) => {

    const buttonRef = useRef<HTMLButtonElement | null>(null)

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        let xCoords = e.clientX - rect.left;
        let yCoords = e.clientY - rect.top;
        const rippleElement = document.createElement('span')
        rippleElement.classList.add(style.ripple);
        rippleElement.style.left = `${xCoords}px`
        rippleElement.style.top = `${yCoords}px`
        buttonRef?.current?.append(rippleElement)
        setTimeout(() => {
            rippleElement.remove()
        }, 800)
        props.onClick && props.onClick(e);
    }

    return (
        <button
            {...props}
            type={props.type || 'button'}
            ref={buttonRef}
            onClick={handleButtonClick}
            disabled={props.disabled || props.loading}
            className={cs(
                style['btn'],
                !!props.block ? style['button-block'] : '',
                !!props.outline ? style['outline'] : '',
                !!props.size ? style[`${props.size}`] : '',
                !!props.buttonStyle ? style[`${props.buttonStyle}`] : '',
                !!props.rounded ? style['btn-rounded'] : '',
                !!props.justIcon ? style['just-icon'] : '',
                !!props.withBgOpacity ? style['with-bg-opacity'] : '',
                !!props.actionBtn ? style.action_btn : '',
                props.loading ? style[`${props.loading}`] : '',
                props.className ? props.className : ''
            )}
        >
        </button>
    )
}
export default Button;