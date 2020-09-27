import React from 'react'
import { Alert, AlertProps } from '.'

export default {
    title: 'Alert',
    component: Alert,
}

const defaultArgs: AlertProps = {
    children: 'Alert text',
    closeCallback: () => console.log('clicking close icon'),
}

export const Default = (args: any) => <Alert {...args} />
Default.args = defaultArgs

export const Success = (args: any) => <Alert {...args} />
Success.args = { ...defaultArgs, variant: 'green', icon: 'success' }

export const Warning = (args: any) => <Alert {...args} />
Warning.args = { ...defaultArgs, variant: 'yellow', icon: 'warning' }

export const Error = (args: any) => <Alert {...args} />
Error.args = { ...defaultArgs, variant: 'red', icon: 'error' }
