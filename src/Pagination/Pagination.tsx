import React from 'react'
import { ColourVariant } from '../../utils'
import times from 'lodash/times'
import classNames from 'classnames'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import omit from 'lodash/omit'

export type PaginationProps = {
    /** choose a variant for the pagination */
    variant?: ColourVariant
    /** whether or not to show the prev and next buttons either side of the numbers */
    showPrevAndNext?: boolean
    /** whether or not to show the first and last buttons either side of the numbers */
    showFirstAndLast?: boolean
    items?: PaginationItem[]
    prevItemProps?: PaginationItem
    nextItemProps?: PaginationItem
    firstItemProps?: PaginationItem
    lastItemProps?: PaginationItem
}

export type PaginationItem = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean
    disabled?: boolean
}

export const Pagination: React.FC<PaginationProps> = (props) => {
    const {
        variant,
        showPrevAndNext,
        showFirstAndLast,
        items,
        prevItemProps,
        nextItemProps,
        firstItemProps,
        lastItemProps,
    } = props

    const itemClasses = ({ active, disabled }: PaginationItem) =>
        classNames(
            'first:ml-0',
            'text-xs',
            'font-semibold',
            'flex',
            'w-8',
            'h-8',
            'mx-1',
            'p-0',
            'rounded-full',
            'items-center',
            'justify-center',
            'leading-tight',
            'relative',
            'border',
            'border-solid',
            {
                // non-active states
                [`text-${variant}-500`]: !active && !disabled,
                [`hover:bg-${variant}-100`]: !active && !disabled,
                'bg-white': !active && !disabled,
                // active states
                [`bg-${variant}-500`]: active && !disabled,
                'text-white': active || disabled,
                // non-disabled states
                [`border-${variant}-500`]: !disabled,
                // disabled states
                [`border-${variant}-200`]: disabled,
                [`bg-${variant}-200`]: disabled,
                'cursor-not-allowed': disabled,
            },
        )

    type CustomItem = 'Prev' | 'Next' | 'First' | 'Last'

    const CustomItem = ({ type }: { type: CustomItem }) => {
        return (
            <li>
                <a className={itemClasses({ active: false, disabled: false })} {...nextItemProps}>
                    {type === 'First' && <FaChevronLeft className="-ml-px" />}
                    {(type === 'Prev' || type === 'First') && <FaChevronLeft className="-ml-px" />}
                    {(type === 'Next' || type === 'Last') && <FaChevronRight className="-mr-px" />}
                    {type === 'Last' && <FaChevronRight className="-mr-px" />}
                </a>
            </li>
        )
    }

    return (
        <div className="py-2">
            <nav className="block">
                <ul className="flex pl-0 rounded list-none flex-wrap">
                    {showFirstAndLast && <CustomItem type="First" />}
                    {showPrevAndNext && <CustomItem type="Prev" />}
                    {items?.map(
                        ({ active, disabled, href = '#', onClick, ...itemProps }, index) => (
                            <li key={index}>
                                <a
                                    href={href}
                                    onClick={(e) => (disabled ? e.preventDefault() : onClick(e))}
                                    className={itemClasses({ active, disabled })}
                                    {...itemProps}
                                >
                                    {index + 1}
                                </a>
                            </li>
                        ),
                    )}
                    {showPrevAndNext && <CustomItem type="Next" />}
                    {showFirstAndLast && <CustomItem type="Last" />}
                </ul>
            </nav>
        </div>
    )
}

Pagination.defaultProps = {
    variant: 'red',
    items: [{ active: true }, {}, {}, {}, {}],
}
