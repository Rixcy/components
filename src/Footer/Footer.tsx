import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import React from 'react'

export type FooterProps = {
    title?: string
    leadingText?: string
    copyrightName?: string
    columns?: FooterColumn[]
    bottomNavProps?: BottomNavProps
    socials?: {
        iconProps?: FontAwesomeIconProps
        iconColour?: string
        linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>
    }[]
}

type FooterColumn = {
    heading?: string
    items?: {
        text?: React.ReactNode
        linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>
    }[]
}

export const Footer: React.FC<FooterProps> = (props) => {
    const { title, leadingText, columns, bottomNavProps, socials } = props

    return (
        <footer className="relative bg-gray-300 pt-8 pb-6">
            <div
                className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                style={{ height: '80px', transform: 'translateZ(0px)' }}
            >
                <svg
                    className="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        className="text-gray-300 fill-current"
                        points="2560 0 2560 100 0 100"
                    ></polygon>
                </svg>
            </div>
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-4">
                        {title && <h4 className="text-3xl font-semibold">{title}</h4>}
                        {leadingText && (
                            <h5 className="text-lg mt-0 mb-2 text-gray-700">{leadingText}</h5>
                        )}
                        <div className="mt-6">
                            {socials.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.linkProps?.href || '#'}
                                    className={`bg-white text-${
                                        social.iconColour || 'blue-400'
                                    } shadow-lg font-lg p-3 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 inline-block text-center leading-none`}
                                    {...social.linkProps}
                                >
                                    <FontAwesomeIcon {...social.iconProps} />
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            {columns.map((column, index) => (
                                <div
                                    key={index}
                                    className="w-full md:w-6/12 xl:w-4/12 pt-6 md:pt-0 md:px-4 ml-auto"
                                >
                                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                                        {column.heading}
                                    </span>
                                    <ul className="list-unstyled">
                                        {column.items.map((item, index) => (
                                            <li key={index}>
                                                <a
                                                    className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                                                    {...item.linkProps}
                                                >
                                                    {item.text}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <BottomNav {...bottomNavProps} />
            </div>
        </footer>
    )
}

Footer.defaultProps = {
    copyrightName: 'Rixcy',
}

export type BottomNavProps = {
    copyrightName?: string
    copyrightLinkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

export const BottomNav: React.FC<BottomNavProps> = (props) => {
    const { copyrightName, copyrightLinkProps } = props

    return (
        <>
            <hr className="my-6 border-gray-400" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-gray-600 font-semibold py-1">
                        Copyright © {new Date().getFullYear()}{' '}
                        <a {...copyrightLinkProps}>{copyrightName}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

BottomNav.defaultProps = {
    copyrightName: 'Rixcy',
    copyrightLinkProps: { href: 'https://rixcy.website', target: '_blank' },
}
