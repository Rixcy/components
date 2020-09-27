import React from 'react'
import Popper, { Position } from 'popper.js'
import { ColourVariant } from '../../utils'

export type TooltipProps = {
    buttonText?: React.ReactNode
    content?: React.ReactNode
    position?: Position
    title?: string
    variant?: ColourVariant
}

export const Tooltip = (props: TooltipProps) => {
    const { buttonText, content, position, title, variant } = props
    const [tooltipShow, setTooltipShow] = React.useState(false)
    const btnRef = React.createRef<HTMLButtonElement>()
    const tooltipRef = React.createRef<HTMLDivElement>()
    const openLeftTooltip = () => {
        new Popper(btnRef.current, tooltipRef.current, {
            placement: position,
        })
        setTooltipShow(true)
    }
    const closeLeftTooltip = () => {
        setTooltipShow(false)
    }
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full text-center">
                    <button
                        className={`bg-${variant}-500 text-white active:bg-${variant}-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1`}
                        type="button"
                        style={{ transition: 'all .15s ease' }}
                        onMouseEnter={openLeftTooltip}
                        onMouseLeave={closeLeftTooltip}
                        ref={btnRef}
                    >
                        {buttonText}
                    </button>
                    <div
                        className={`${
                            tooltipShow ? '' : 'hidden'
                        } bg-${variant}-600 border-0 m-3 block z-50 font-normal leading-normal text-sm max-w-xs text-left no-underline break-words rounded-lg`}
                        ref={tooltipRef}
                    >
                        <div>
                            {title && <TooltipTitle {...props} />}
                            {content && <TooltipContent {...props} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Tooltip.defaultProps = {
    buttonText: 'hover me!',
    title: 'A really cool tooltip title',
    content: 'Fermentum magnis facilisis varius quisque nisl amet',
    position: 'right',
    variant: 'red',
}

export const TooltipTitle = ({ variant, title }: TooltipProps) => (
    <div
        className={`bg-${variant}-600 text-white opacity-75 font-semibold p-3 mb-0 border-b border-solid border-gray-200 uppercase rounded-t-lg`}
    >
        {title}
    </div>
)

export const TooltipContent = ({ content }: TooltipProps) => (
    <div className="text-white p-3">{content}</div>
)
