import React from 'react'
import { Image, ImageProps } from '.'

export default {
    title: 'Image',
    component: Image,
    decorators: [
        (Story: any) => (
            <div className="flex flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                    <Story />
                </div>
            </div>
        ),
    ],
}

const defaultArgs: ImageProps = {
    alt: 'Cute puppies',
    src: 'https://placedog.net/400/400/?random',
}

export const Default = (args: any) => <Image {...args} />
Default.args = defaultArgs

export const Simple = (args: any) => <Image {...args} />
Simple.args = { ...defaultArgs, imageStyle: 'simple' }

export const Circle = (args: any) => <Image {...args} />
Circle.args = { ...defaultArgs, imageStyle: 'circle' }

export const SimpleRaised = (args: any) => <Image {...args} />
SimpleRaised.args = { ...defaultArgs, imageStyle: 'simpleRaised' }

export const CircleRaised = (args: any) => <Image {...args} />
CircleRaised.args = { ...defaultArgs, imageStyle: 'circleRaised' }
