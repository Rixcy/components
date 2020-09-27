import React from 'react'
import { Input, InputProps } from '.'

export default {
    title: 'Input',
    component: Input,
}

const defaultArgs: InputProps = { placeholder: 'this is placeholder text' }

export const Default = (args: any) => <Input {...args} />
Default.args = defaultArgs

export const Small = (args: any) => <Input {...args} />
Small.args = { ...defaultArgs, size: 'sm' }

export const Regular = (args: any) => <Input {...args} />
Regular.args = { ...defaultArgs, size: 'regular' }

export const Large = (args: any) => <Input {...args} />
Large.args = { ...defaultArgs, size: 'large' }
