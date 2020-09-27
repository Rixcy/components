import React from 'react'
import { Footer, FooterProps } from '.'
import { faTwitter, faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default {
    title: 'Footer',
    component: Footer,
}

const defaultArgs: FooterProps = {
    title: "Let's keep in touch!",
    leadingText: 'Find us on our socials below.',
    socials: [
        { iconProps: { icon: faTwitter }, iconColour: 'blue-400' },
        { iconProps: { icon: faFacebook }, iconColour: 'blue-600' },
        { iconProps: { icon: faGithub }, iconColour: 'gray-900' },
        { iconProps: { icon: faLinkedin }, iconColour: 'blue-700' },
    ],
    columns: [
        {
            heading: 'Useful Links',
            items: [
                { text: 'About Us', linkProps: { href: '#' } },
                { text: 'Portfolio', linkProps: { href: '#' } },
                { text: 'Contact Us', linkProps: { href: '#' } },
            ],
        },
        {
            heading: 'Other Resources',
            items: [
                { text: 'Privacy Policy', linkProps: { href: '#' } },
                { text: 'Terms & Conditions', linkProps: { href: '#' } },
                { text: 'MIT License', linkProps: { href: '#' } },
            ],
        },
    ],
}

export const Default = (args: any) => <Footer {...args} />
Default.args = defaultArgs
