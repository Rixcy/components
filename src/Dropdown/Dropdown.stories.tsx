import React from 'react'
import { Dropdown, DropdownProps } from '.'

export default {
    title: 'Dropdown',
    component: Dropdown,
}

const defaultArgs: DropdownProps = {
    items: [{ children: 'Action one' }, { children: 'Action two' }],
}

export const Default = (args: any) => (
    <div style={{ minHeight: '200px' }}>
        <Dropdown {...args} />
    </div>
)
Default.args = defaultArgs
