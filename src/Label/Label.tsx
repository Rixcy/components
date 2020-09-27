import React from 'react'
import { ColourVariant } from '../../utils'
import classNames from 'classnames'

export type LabelProps = React.HTMLAttributes<HTMLSpanElement> & {
    /** whether or not the label should be a rounded variant or not */
    rounded?: boolean
    /** choose a variant for the label */
    variant?: ColourVariant
    /** whether or not to use the outline variant of the label */
    outline?: boolean
    /** whether or not the text inside the label should be uppercase, default is true */
    uppercase?: boolean
}

export const Label: React.FC<LabelProps> = (props) => {
    const { rounded, variant, uppercase, outline, ...restProps } = props

    const styles = classNames(
        'text-xs',
        'font-semibold',
        'inline-block',
        'py-1',
        'px-2',
        'rounded',
        `text-${variant}-600`,
        {
            'rounded-full': rounded,
            uppercase: uppercase,
            [`bg-${variant}-200`]: !outline,
            [`border-${variant}-600`]: outline,
            border: outline,
        },
    )

    return <span className={styles} {...restProps} />
}

Label.defaultProps = {
    rounded: false,
    variant: 'red',
    uppercase: true,
    outline: false,
}
