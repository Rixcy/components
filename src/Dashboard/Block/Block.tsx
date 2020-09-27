import React from 'react'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faArrowUp, faChartBar } from '@fortawesome/free-solid-svg-icons'
import { ColourVariant } from '../../../utils'

export type BlockProps = {
    title?: string
    statistic?: string
    differenceProps?: BlockDifferenceProps
    iconProps?: BlockIconProps
}

export const Block: React.FC<BlockProps> = (props) => {
    const { title, statistic, differenceProps, iconProps } = props

    return (
        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className={`text-gray-500 uppercase font-bold text-xs`}>{title}</h5>
                            <span className="font-semibold text-xl text-gray-800">{statistic}</span>
                        </div>
                        <BlockIcon {...iconProps} />
                    </div>
                    <BlockDifference {...differenceProps} />
                </div>
            </div>
        </div>
    )
}

Block.defaultProps = {
    title: 'New users',
    statistic: '302,144',
}

export type BlockIconProps = {
    iconProps?: FontAwesomeIconProps
    variant?: ColourVariant
}

export const BlockIcon: React.FC<BlockIconProps> = (props) => {
    const { iconProps, variant } = props

    return (
        <div className="relative w-auto pl-4 flex-initial">
            <div
                className={`text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-${variant}-500`}
            >
                <FontAwesomeIcon {...iconProps} />
            </div>
        </div>
    )
}

BlockIcon.defaultProps = {
    variant: 'red',
    iconProps: {
        icon: faChartBar,
    },
}

export type BlockDifferenceProps = {
    iconProps?: FontAwesomeIconProps
    statistic?: string
    statisticText?: string
    statisticColour?: ColourVariant
}

export const BlockDifference: React.FC<BlockDifferenceProps> = (props) => {
    const { iconProps, statistic, statisticText, statisticColour } = props
    return (
        <p className="text-sm text-gray-500 mt-4">
            <span className={`text-${statisticColour}-500 mr-2`}>
                <FontAwesomeIcon {...iconProps} />
                {statistic}
            </span>
            <span className="whitespace-no-wrap">{statisticText}</span>
        </p>
    )
}

BlockDifference.defaultProps = {
    iconProps: {
        icon: faArrowUp,
    },
    statistic: '3.69%',
    statisticText: 'This month',
    statisticColour: 'green',
}
