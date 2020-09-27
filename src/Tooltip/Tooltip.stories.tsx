import React from 'react'
import { Tooltip, TooltipProps } from '.'

export default {
    title: 'Tooltip',
    component: Tooltip,
}

const defaultArgs: TooltipProps = {}

export const Default = (args: any) => (
    <div style={{ minHeight: '200px' }}>
        <Tooltip {...args} />
    </div>
)

Default.args = defaultArgs
