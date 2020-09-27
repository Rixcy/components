import React from 'react'
import { ProgressBar, ProgressBarProps } from '.'

export default {
    title: 'ProgressBar',
    component: ProgressBar,
}

const defaultArgs: ProgressBarProps = {}

export const Default = (args: any) => <ProgressBar {...args} />
Default.args = defaultArgs

export const WithProgress = (args: any) => <ProgressBar {...args} />
WithProgress.args = { ...defaultArgs, percentCompleted: 30 }

export const WithTopRightProgress = (args: any) => <ProgressBar {...args} />
WithTopRightProgress.args = {
    ...defaultArgs,
    percentCompleted: 30,
    showTopRightPercentCompleted: true,
}

export const WithBadge = (args: any) => <ProgressBar {...args} />
WithBadge.args = { ...defaultArgs, percentCompleted: 30, badge: 'In progress' }

export const WithPercentAndBadge = (args: any) => <ProgressBar {...args} />
WithPercentAndBadge.args = {
    ...defaultArgs,
    showTopRightPercentCompleted: true,
    percentCompleted: 30,
    badge: 'In progress',
}
