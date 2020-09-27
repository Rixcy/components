import React from 'react'
import { Navbar, NavbarProps } from '.'

export default {
    title: 'Navbar',
    component: Navbar,
}

const defaultArgs: NavbarProps = {}

export const Default = (args: any) => <Navbar {...args} />
Default.args = defaultArgs
