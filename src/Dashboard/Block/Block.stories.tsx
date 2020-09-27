import { faArrowUp, faChartBar } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { Block, BlockProps } from '.'

export default {
    title: 'Dashboard/Block',
    component: Block,
}

const defaultArgs: BlockProps = {
    title: 'New users',
    statistic: '302,144',
    iconProps: {
        variant: 'green',
        iconProps: {
            icon: faChartBar,
        },
    },
    differenceProps: {
        iconProps: {
            icon: faArrowUp,
        },
        statistic: '3.69%',
        statisticText: 'This month',
        statisticColour: 'green',
    },
}

export const Default = (args: any) => <Block {...args} />
Default.args = defaultArgs
