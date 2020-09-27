import React from 'react'
import classNames from 'classnames'

export type InputSize = 'sm' | 'md' | 'lg'

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    inputSize?: InputSize
    placeholder?: string
}

export const Input = React.forwardRef(function Input(props: InputProps, ref: React.Ref<any>) {
    const { src, inputSize = 'md', placeholder, ...restProps } = props

    const sharedStyles = classNames(
        'placeholder-gray-400',
        'text-gray-700',
        'w-full',
        'outline-none',
        'focus:outline-none',
        'focus:shadow-outline',
        'relative',
        'shadow',
        'rounded',
        'relative',
    )

    const smallStyles = inputSize === 'sm' ? ['px-2', 'py-1', 'text-sm'] : null
    const regularStyles = inputSize === 'md' ? ['px-3', 'py-3', 'text-sm'] : null
    const largeStyles = inputSize === 'lg' ? ['px-3', 'py-4', 'text-base'] : null

    const classes = classNames('input', sharedStyles, smallStyles, regularStyles, largeStyles)

    return (
        <input type="text" placeholder={placeholder} className={classes} {...restProps} {...ref} />
    )
})

Input.defaultProps = {
    inputSize: 'md',
}
