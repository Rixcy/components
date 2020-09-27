import React from 'react'

export type HeaderProps = {
    logo: string
    logoLink?: React.AnchorHTMLAttributes<HTMLAnchorElement>
    /** whether or not the header should be fixed */
    fixed?: boolean
    menuItems: {
        text: string
        link: React.AnchorHTMLAttributes<HTMLAnchorElement>
    }[]
}

export const Header: React.FC<HeaderProps> = (props) => {
    const { logo, logoLink, fixed, menuItems } = props

    const fixedClasses = fixed ? 'top-0 fixed z-50' : null
    const textClasses = 'uppercase text-gray-800 hover:text-gray-600'

    return (
        <header
            className={`w-full bg-white flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow-lg ${fixedClasses}`}
        >
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <a {...logoLink} className={`logo-link text-sm ${textClasses}`}>
                    <div
                        className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
                        dangerouslySetInnerHTML={{ __html: logo }}
                    />
                </a>
                <div className="lg:flex flex-grow items-center hidden">
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        {menuItems.map(({ link, text }, index) => (
                            <li key={index}>
                                <a
                                    {...link}
                                    className={`px-3 py-2 flex items-center text-xs font-bold ${textClasses}`}
                                >
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    fixed: true,
}
