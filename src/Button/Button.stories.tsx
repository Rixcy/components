import React from 'react'
import { Button, ButtonProps } from '.'

export default {
    title: 'Button',
    component: Button,
}

const defaultArgs: ButtonProps = {
    children: 'Submit',
    onClick: function () {
        console.log('clicking button')
    },
}

export const Default = (args: any) => <Button {...args} />
Default.args = defaultArgs

export const Rounded = (args: any) => <Button {...args} />
Rounded.args = {
    ...defaultArgs,
    rounded: true,
}

export const Outline = (args: any) => <Button {...args} />
Outline.args = {
    ...defaultArgs,
    outline: true,
}
