import React from 'react'
import { SimpleFooter, SimpleFooterProps } from '.'

export default {
    title: 'SimpleFooter',
    component: SimpleFooter,
}

const defaultArgs: SimpleFooterProps = {
    items: [
        { text: 'About me', linkProps: { href: '#' } },
        { text: 'Projects', linkProps: { href: '#' } },
        { text: 'Contact me', linkProps: { href: '#' } },
    ],
}

export const Default = (args: any) => <SimpleFooter {...args} />
Default.args = defaultArgs
