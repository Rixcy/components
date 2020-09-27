import React from 'react'
import { Label, LabelProps } from '.'

export default {
    title: 'Label',
    component: Label,
}

const defaultArgs: LabelProps = { children: 'this is label text' }

export const Default = (args: any) => <Label {...args} />
Default.args = defaultArgs

export const Rounded = (args: any) => <Label {...args} />
Rounded.args = { ...defaultArgs, rounded: true }

export const WithoutUppercase = (args: any) => <Label {...args} />
WithoutUppercase.args = { ...defaultArgs, uppercase: false }

export const Outline = (args: any) => <Label {...args} />
Outline.args = { ...defaultArgs, outline: true }
