import React from 'react'

export type ImageStyle = 'simple' | 'circle' | 'simpleRaised' | 'circleRaised'

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
    imageStyle?: ImageStyle
}

export const Image = React.forwardRef(function Image(props: ImageProps, ref: React.Ref<any>) {
    const { src, imageStyle = 'simple', ...restProps } = props

    let classNames = 'image max-w-full h-auto align-middle border-none'

    if (imageStyle === 'simple') classNames += 'shadow rounded'

    if (imageStyle === 'circle') classNames += 'shadow rounded-full'

    if (imageStyle === 'simpleRaised') classNames += 'shadow-lg rounded'

    if (imageStyle === 'circleRaised') classNames += 'shadow-lg rounded-full'

    return <img src={src} className={classNames} {...restProps} {...ref} />
})
