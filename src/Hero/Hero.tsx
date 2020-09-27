import React from 'react'
import { Button, ButtonProps } from '../Button'

export type HeroProps = {
    title: string
    introText?: string
    buttons?: ButtonProps[]
}

export const Hero: React.FC<HeroProps> = (props) => {
    const { title, introText, buttons } = props
    return (
        <section className="hero relative pt-16 items-center flex h-screen">
            <div className="container mx-auto items-center flex flex-wrap">
                <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
                    <div className="pt-32 sm:pt-0">
                        <h1 className="font-semibold text-4xl text-gray-700">{title}</h1>
                        <p
                            className="mt-4 text-lg leading-relaxed text-gray-600"
                            dangerouslySetInnerHTML={{ __html: introText }}
                        />
                        <div className="mt-12">
                            {buttons?.map((button, index) => (
                                <Button {...button} key={index} className="mr-4" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
