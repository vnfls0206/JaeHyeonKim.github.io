import React from "react"
import { IMenuItem } from "@/components/layout/menu/MenuLayout"
import { Button } from "@mui/material"
import MenuIcon, { MenuIconType } from "@/components/layout/menu/MenuIcon"


export interface ISubMenuCategoryProps {
    //children?: React.ReactNode,
    menu: IMenuItem[],

}

const SubMenuCategory = (
    {
        menu
    }: ISubMenuCategoryProps
) => {
    console.log(menu)

    return (
        <div className={"flex justify-center p-2"}>
            <Button className={"w-[52px] h-[48px]"} color={"inherit"}>
                <MenuIcon iconType={MenuIconType.REACT} />

            </Button>
        </div>
    )
}

export default SubMenuCategory