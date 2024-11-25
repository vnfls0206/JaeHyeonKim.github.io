import React from "react"
import { Tab } from "@mui/material"

export interface IPostTabProps {
    //children?: React.ReactNode,
    label: string
}

const PostTab = (
    {
        label
    }: IPostTabProps
) => {
    console.log(label)

    return (
        <Tab key={label} value={label} label={label} icon={<div>{}</div>} />
    )
}

export default PostTab;