import { faAward } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Block, BlockProps } from '.'

export default {
    title: 'Landing/Block',
    component: Block,
}

const defaultArgs: BlockProps = {
    iconProps: {
        icon: faAward,
    },
    iconColour: 'red',
    title: 'Verified Company',
    text: 'Diam arcu sociis urna enim fames tellus vestibulum curae sagittis urna ut rhoncus odio',
}

export const Default = (args: any) => <Block {...args} />
Default.args = defaultArgs
