import React from 'react'
import classNames from 'classnames'
import { ColourVariant } from '../utils'

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    /** whether or not the button should be a rounded variant or not */
    rounded?: boolean
    /** choose a variant for the button */
    variant?: ColourVariant
    /** whether or not to use the outline variant of the button */
    outline?: boolean
    /** size of the button */
    size?: ButtonSizes
    /** whether or not the text inside the button should be uppercase, default is true */
    uppercase?: boolean
}

export type ButtonSizes = 'sm' | 'md' | 'lg'

export const Button: React.FC<ButtonProps> = (props) => {
    const { rounded, variant, outline, size, uppercase, children, className, ...restProps } = props

    const buttonClasses = classNames(
        'text-white',
        'outline-none',
        'focus:outline-none',
        'font-bold',
        'shadow',
        'hover:shadow-md',
        {
            uppercase: uppercase,
            'rounded-full': rounded,
            rounded: !rounded,
            ['text-xs px-4 py-2']: size === 'sm',
            ['text-sm px-6 py-3']: size === 'md',
            ['text-base px-8 py-3']: size === 'lg',
            'bg-trasparent': outline,
            [`border border-solid border-${variant}-500`]: outline,
            [`hover:bg-${variant}-500 active:bg-${variant}-600`]: outline,
            [`text-${variant}-500`]: outline,
            [`hover:text-white active:text-white`]: outline,
            [`bg-${variant}-500 active:bg-${variant}-600`]: !outline,
        },
    )

    return (
        <button
            type="button"
            className={`${className} ${buttonClasses}`}
            style={{ transition: 'all .15s ease 0s' }}
            {...restProps}
        >
            {children}
        </button>
    )
}

Button.defaultProps = {
    rounded: false,
    variant: 'gray',
    outline: false,
    size: 'md',
    uppercase: true,
}
