import React, { useEffect } from "react"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import { IMenuItem } from "./MenuLayout"
import { navigate } from "gatsby"
import MenuIcon, { MenuIconType } from "@/components/layout/menu/MenuIcon"
import { useQueryParam, StringParam } from "use-query-params"


export interface IMenuCategoryProps {
    //children?: React.ReactNode,
    menu: IMenuItem[],

    handleClick: Function,
    menuOnClickHandler: Function,
    handleOver: Function,
    handleSubSelect: Function,
    handleSubChildSelect: Function,

    selected: any,
    setSelected: Function,

    open: boolean,
}

const MenuCategory = (
    {
        menu,

        handleClick,
        menuOnClickHandler,
        handleOver,
        handleSubSelect,
        handleSubChildSelect,

        selected, setSelected,
        open = true,
        subOpen,

        breadCrumble

    }: IMenuCategoryProps
) => {

    const [category, setCategory] = useQueryParam("category", StringParam)


    const onNav = (link: string) => {
        navigate(`${link}`, {})
    }

    const onMenuClick = (value: string) => {
        setCategory(value)
    }

    return (
        <div className={"pt-2"}>
            {
                Object.values(MenuIconType).map((value, index) =>
                    <ListItemButton className={"px-4 w-full h-12"} key={index} onClick={() => onMenuClick(value)}>
                        <ListItemIcon
                            className={"text-white flex justify-center text-center pl-[8px]"}
                            // onClick={onNav.bind(this, value.fieldValue)}
                            sx={{
                                minWidth: 0,
                                mr: open ? 1.5 : "auto",
                                justifyContent: "center"
                            }}
                        >
                            <MenuIcon iconType={value} />
                            {/*<child.icon fontSize="small" />*/}
                        </ListItemIcon>
                        {
                            open &&
                          <React.Fragment>
                            <ListItemText
                              primaryTypographyProps={{ className: "px-1 text-[14px] text-white/80" }}
                              primary={value}
                            />

                          </React.Fragment>
                        }
                    </ListItemButton>)
            }
        </div>

    )
}


MenuCategory.defaultProps = {}

export default MenuCategory