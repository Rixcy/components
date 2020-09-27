import React from 'react'
import { Hero, HeroProps } from '.'

export default {
    title: 'Hero',
    component: Hero,
}

const defaultArgs: HeroProps = {
    title: 'Rick Booth',
    introText:
        '<p class="mb-4">For years parents have espoused the health benefits of eating garlic bread with cheese to their children, with the food earning such an iconic status in our culture that kids will often dress up as warm, cheesy loaf for Halloween.</p><p>But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases springing up around the country.</p>',
    buttons: [
        { children: 'Button One', variant: 'red' },
        { children: 'Button Two', variant: 'gray' },
    ],
}

export const Default = (args: any) => <Hero {...args} />
Default.args = defaultArgs
