import React from 'react'

export type SimpleFooterProps = {
    copyrightName?: string
    items?: SimpleFooterItem[]
}

type SimpleFooterItem = {
    text?: React.ReactNode
    linkProps?: React.AnchorHTMLAttributes<HTMLAnchorElement>
}

export const SimpleFooter: React.FC<SimpleFooterProps> = (props) => {
    const { copyrightName, items } = props

    return (
        <footer className="block py-4">
            <div className="container mx-auto px-4">
                <hr className="mb-4 border-b-1 border-gray-300" />
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 px-4">
                        <div className="text-sm text-gray-600 font-semibold py-1">
                            Copyright {new Date().getFullYear()} {copyrightName}
                        </div>
                    </div>
                    <div className="w-full md:w-8/12 px-4">
                        <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                            {items?.map((item, index) => (
                                <li key={index}>
                                    <a
                                        {...item.linkProps}
                                        className="text-gray-700 hover:text-gray-900 text-sm font-semibold block py-1 px-3"
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

SimpleFooter.defaultProps = {
    copyrightName: 'Rixcy',
}
