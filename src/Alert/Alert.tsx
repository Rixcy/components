import React from 'react'
import { ColourVariant } from '../utils'
import { FaCheckCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa'

type AlertIcon = 'success' | 'warning' | 'error'

export type AlertProps = {
    /** optional icon to be used for the alert */
    icon?: AlertIcon
    /** choose a variant for the button */
    variant?: ColourVariant
    /** event to pass through to the close button. useful for conditionally rendering/closing the alert */
    closeCallback: (e: React.MouseEvent<HTMLButtonElement>) => void
    /** children to pass through to the alert */
    children: React.ReactNode
}

export const Alert: React.FC<AlertProps> = (props) => {
    const { icon, variant, closeCallback, children } = props

    return (
        <div className={`text-white px-6 py-4 border-0 rounded relative mb-4 bg-${variant}-500`}>
            {icon && (
                <span className="text-xl inline-block mr-5 align-middle">
                    {icon === 'success' && <FaCheckCircle />}
                    {icon === 'warning' && <FaExclamationTriangle />}
                    {icon === 'error' && <FaTimesCircle />}
                </span>
            )}
            <span className="inline-block align-middle mr-8">{children}</span>
            <button
                className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
                onClick={(e) => closeCallback(e)}
            >
                <span>×</span>
            </button>
        </div>
    )
}

Alert.defaultProps = {
    variant: 'green',
    closeCallback: function (_e) {
        console.log('clicking close button')
    },
}
