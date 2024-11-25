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
        // <React.Fragment>
        //   <List className={"text-[#acacac]"}>
        //     {menu.map((list, index) => (
        //       <ListItem
        //         key={index}
        //         button
        //         disableRipple
        //         disablePadding
        //         onClick={() => {
        //           handleClick(list)
        //           menuOnClickHandler(list)
        //         }}
        //         // onMouseOver={(event) => {
        //         //     handleOver(list.key, event)
        //         // }}
        //         className={"pb-0.5"}
        //         sx={{
        //           px: open ? 0.5 : 1,
        //           display: "block",
        //           "&:hover": {
        //             backgroundColor: "transparent"
        //           },
        //           "&& > .Mui-selected": {
        //             borderRadius: "0.75rem",
        //             backgroundColor: "rgba(145, 158, 171, 0.15)",
        //             //color: "rgb(32, 101, 209)",
        //             color: "rgba(255, 255, 255, 1)",
        //             fontWeight: "bold"
        //           },
        //           "&& > .Mui-selected span": {
        //             fontWeight: "bold"
        //           },
        //           "&& > .Mui-selected > div >  svg": {
        //             color: "rgba(255, 255, 255, 1)"
        //           }
        //         }}
        //       >
        //         <ListItemButton
        //           className={"flex items-center h-full"}
        //           sx={{
        //             minHeight: 48,
        //             alignItems: "center",
        //             justifyContent: open ? "initial" : "center",
        //             pl: 2,
        //             pr: 1,
        //             py: 0.5,
        //             "&:hover": {
        //               backgroundColor: "rgba(145, 158, 171, 0.15)",
        //               borderRadius: "0.75rem"
        //             }
        //           }}
        //           selected={list.key === breadCrumble[0]?.key}
        //         >
        //           {open === false &&
        //           <ListItemIcon
        //             className={`${list.key === breadCrumble[0]?.key ? "text-white" : "text-[#acacac]"}`}
        //             sx={{
        //               minWidth: 0,
        //               mr: open ? 1.5 : "auto",
        //               justifyContent: "center"
        //             }}
        //           >
        //             <list.icon fontSize="small" />
        //           </ListItemIcon>
        //           }
        //           {
        //             open &&
        //             <div className={"flex items-center w-full h-full text-[14px] font-bold text-white/60"}>
        //               <div>
        //                 {list.title}
        //               </div>
        //             </div>
        //           }
        //
        //         </ListItemButton>
        //         {
        //           list.children.length > 0 &&
        //           <Collapse in={open && subOpen[list.key]}
        //                     timeout="auto"
        //                     unmountOnExit
        //           >
        //             <List component="div" disablePadding>
        //               {list.children.map(
        //                 (child, index) => {
        //                   return <div key={child.key}>
        //                     <ListItem className={"p-0 "}
        //                               sx={{
        //                                 pl: 2.5,
        //                                 "&&.Mui-selected": {
        //                                   backgroundColor: "transparent",
        //                                   color: "rgba(255, 255, 255, 1)"
        //                                 },
        //                                 "&&.Mui-selected span": {
        //                                   fontWeight: "600"
        //                                 },
        //                                 "&&.Mui-selected > div >  svg": {
        //                                   color: "rgba(255, 255, 255, 1)"
        //                                 }
        //                               }}
        //                               key={child.key}
        //                               button
        //                               onClick={(e) => {
        //                                 e.stopPropagation()
        //                                 if (child.children.length === 0) {
        //                                   handleSubSelect(list.key, child.key)
        //                                   menuOnClickHandler(child)
        //                                 } else {
        //                                   handleClick(child)
        //                                   setSelected(list.key)
        //                                 }
        //
        //                               }}
        //                               selected={child.key === breadCrumble[1]?.key}
        //                               disableRipple
        //                     >
        //
        //                       <ListItemButton className={"pr-2 pl-4 w-full"}>
        //
        //                         <ListItemIcon
        //                           className={`${child.key === breadCrumble[1]?.key ? "text-white" : "text-[#acacac]"}`}
        //                           sx={{
        //                             minWidth: 0,
        //                             mr: open ? 1.5 : "auto",
        //                             justifyContent: "center"
        //                           }}
        //                         >
        //                           <child.icon fontSize="small" />
        //                         </ListItemIcon>
        //
        //                         <ListItemText primaryTypographyProps={{ className: "text-[14px] " }}
        //                                       primary={child.title} />
        //
        //                         {
        //                           child.children.length > 0 && (third && subOpen[child.key] ?
        //                             <ExpandMore className={"text-[18px]"} /> :
        //                             <KeyboardArrowRightIcon className={"text-[18px]"} />)
        //                         }
        //                       </ListItemButton>
        //
        //                     </ListItem>
        //
        //                   </div>
        //                 })}
        //             </List>
        //           </Collapse>
        //         }
        //       </ListItem>
        //     ))}
        //   </List>
        //
        // </React.Fragment>
    )
}


MenuCategory.defaultProps = {}

export default MenuCategory