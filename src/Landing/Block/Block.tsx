import React from 'react'
import { faAward } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { ColourVariant } from '../../../utils'

export type BlockProps = {
    iconProps?: FontAwesomeIconProps
    iconColour?: ColourVariant
    title?: string
    text?: React.ReactNode
}

export const Block: React.FC<BlockProps> = (props) => {
    const { iconProps, iconColour, title, text } = props
    return (
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                    <div
                        className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-${iconColour}-400`}
                    >
                        <FontAwesomeIcon {...iconProps} />
                    </div>
                    <h6 className="text-xl font-semibold">{title}</h6>
                    <p className="mt-2 mb-4 text-gray-600">{text}</p>
                </div>
            </div>
        </div>
    )
}

Block.defaultProps = {
    iconProps: {
        icon: faAward,
    },
    iconColour: 'red',
    title: 'Verified Company',
    text: 'Diam arcu sociis urna enim fames tellus vestibulum curae sagittis urna ut rhoncus odio',
}
