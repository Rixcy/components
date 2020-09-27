import React from 'react'
import { Menu, MenuProps } from '.'

export default {
    title: 'Menu',
    component: Menu,
}

const defaultArgs: MenuProps = {}

export const Default = (args: any) => <Menu {...args} />
Default.args = defaultArgs
