import React, { useRef } from 'react'
import Popper from 'popper.js'

export type DropdownProps = {
    items?: DropdownItem[]
}

export type DropdownItem = React.HTMLAttributes<HTMLAnchorElement>

export const Dropdown = (props: DropdownProps) => {
    const { items } = props
    // dropdown props
    const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false)
    const btnDropdownRef = useRef<HTMLButtonElement>(null!)
    const popoverDropdownRef = React.useRef<HTMLDivElement>(null!)
    const openDropdownPopover = () => {
        new Popper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: 'bottom-start',
        })
        setDropdownPopoverShow(true)
    }
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false)
    }
    return (
        <>
            <div className="flex flex-wrap">
                <div className="w-full sm:w-6/12 md:w-4/12 px-4">
                    <div className="relative inline-flex align-middle w-full">
                        <button
                            className={
                                'text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 bg-gray-800'
                            }
                            style={{ transition: 'all .15s ease' }}
                            type="button"
                            ref={btnDropdownRef}
                            onClick={() => {
                                dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover()
                            }}
                        >
                            Toggle Dropdown
                        </button>
                        <div
                            ref={popoverDropdownRef}
                            className={
                                (dropdownPopoverShow ? 'block ' : 'hidden ') +
                                'bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1'
                            }
                            style={{ minWidth: '12rem' }}
                        >
                            {items?.map((item, index) => (
                                <a
                                    key={index}
                                    className={
                                        'text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800'
                                    }
                                    onClick={(e) => e.preventDefault()}
                                    {...item}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
