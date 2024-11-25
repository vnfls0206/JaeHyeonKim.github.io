import React from "react"
import { withPrefix } from "gatsby"
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BugReportIcon from '@mui/icons-material/BugReport';

export enum MenuIconType {
    HOME = 'Home',
    POST = 'Post',
    GAME = 'Game',
    TEST = 'Test'
}

export interface IMenuIconProps {
    //children?: React.ReactNode,
    iconType: string
}

const MenuIcon = (
    {
        iconType
    }: IMenuIconProps
) => {

    const form: {[T in MenuIconType | string]: React.ReactElement} = {
        [MenuIconType.HOME]: <HomeIcon/>,
        [MenuIconType.POST]: <EditNoteIcon/>,
        [MenuIconType.GAME]: <SportsEsportsIcon/>,
        [MenuIconType.TEST]: <BugReportIcon/>,
    }

    return (
        form[iconType] || <div/>
    )
}

export default MenuIcon