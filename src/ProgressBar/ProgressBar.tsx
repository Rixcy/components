import React from 'react'
import { ColourVariant } from '../../utils'
import classNames from 'classnames'

export type ProgressBarProps = {
    /** choose a base background colour for the ProgressBar */
    bg?: ColourVariant
    /** if provided, text will be sent through to the content of the badge */
    badge?: string
    /** amount of progress to be shown on the progress bar */
    percentCompleted?: number
    /** if this prop is enabled alongside providing the `percentCompleted` prop this will show a number summary of completion on the top right above the progress bar */
    showTopRightPercentCompleted?: boolean
}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
    const { bg, badge, percentCompleted, showTopRightPercentCompleted } = props

    return (
        <div className="relative pt-1">
            {(badge || percentCompleted) && (
                <div className="flex mb-2 items-center justify-between">
                    {badge && (
                        <div
                            className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-${bg}-600 bg-${bg}-200`}
                        >
                            {badge}
                        </div>
                    )}
                    {percentCompleted && showTopRightPercentCompleted && (
                        <div className="ml-auto text-right">
                            <span className={`text-xs font-semibold inline-block text-${bg}-600`}>
                                {percentCompleted}%
                            </span>
                        </div>
                    )}
                </div>
            )}
            <div className={`overflow-hidden h-2 mb-4 text-xs flex rounded bg-${bg}-200`}>
                {percentCompleted && (
                    <div
                        style={{ width: `${percentCompleted}%` }}
                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${bg}-500`}
                    />
                )}
            </div>
        </div>
    )
}

ProgressBar.defaultProps = {
    bg: 'red',
    showTopRightPercentCompleted: false,
}
