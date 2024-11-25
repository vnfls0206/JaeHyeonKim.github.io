import React from "react"
import { withPrefix } from "gatsby"

export enum PostIconType {
    All = "All",
    REACT = "React",
    TAILWIND = "Tailwind"
}

export interface IPostIconProps {
    //children?: React.ReactNode,
    iconType: string
}

const TabIcon = (
    {
        iconType
    }: IPostIconProps
) => {

    const form: { [T in PostIconType | string]: React.ReactElement } = {
        [PostIconType.All]: <div />,
        [PostIconType.REACT]: <img alt={"react-icon"} className={"w-[20px]"}
                                   src={withPrefix("/image/react.svg")} />,
        [PostIconType.TAILWIND]: <img alt={"tailwind-icon"} className={"w-[20px]"}
                                      src={withPrefix("/image/tailwind-logo.png")} />

    }

    return (
        <div className={'pb-2.5'}>
            {form[iconType] || <div />}
        </div>
    )
}

export default TabIcon