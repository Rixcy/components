import React from 'react'
import { Header, HeaderProps } from '.'

export default {
    title: 'Header',
    component: Header,
}

const defaultArgs: HeaderProps = {
    fixed: false,
    logo: "<div>rickbooth<span class='font-bold text-red-800'>dot</span>me</div>",
    logoLink: {
        href: '/',
        onClick: (e) => {
            e.preventDefault()
            console.log('hello')
        },
    },
    menuItems: ['home', 'about me', 'blog', 'contact'].map((l) => ({
        text: l,
        link: {
            href: `/${l}`,
            onClick: (e) => {
                e.preventDefault()
                console.log(`clicking ${l} link`)
            },
        },
    })),
}

export const Default = (args: any) => <Header {...args} />
Default.args = defaultArgs
