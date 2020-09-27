import React from 'react'
import { Pagination, PaginationProps } from '.'

export default {
    title: 'Pagination',
    component: Pagination,
}

const defaultArgs: PaginationProps = { prevItemProps: { href: '#' }, nextItemProps: { href: '#' } }

export const Default = (args: any) => <Pagination {...args} />
Default.args = defaultArgs

export const WithDisabledItems = (args: any) => <Pagination {...args} />
WithDisabledItems.args = {
    ...defaultArgs,
    items: [{ disabled: true }, { disabled: true }, {}, {}, {}],
}

export const WithPrevAndNextIcons = (args: any) => <Pagination {...args} />
WithPrevAndNextIcons.args = { ...defaultArgs, showPrevAndNext: true }

export const WithFirstAndLastIcons = (args: any) => <Pagination {...args} />
WithFirstAndLastIcons.args = { ...defaultArgs, showPrevAndNext: true, showFirstAndLast: true }
