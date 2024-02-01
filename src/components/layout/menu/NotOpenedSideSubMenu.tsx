import React, { useState } from 'react';
import { MenuItem, MenuList, Paper } from "@mui/material";
import { IMenuItem } from "./MenuLayout";
import { IBreadCrumble } from "../../../routing/helpers/getBreadCrumbleRoute";


export interface INotOpenedSideSubMenuProps {
    //children?: React.ReactNode,
    menu: IMenuItem[],

    open: boolean,
    positionY: number,
    subSelected: any,
    sideKey: any,

    handleClick: Function,
    handleLeave: () => void,
    handleSubSelect: Function,
    menuOnClickHandler: Function,

    breadCrumble: Array<IBreadCrumble>
}

const NotOpenedSideSubMenu = (
    {
        menu,

        open,
        positionY,
        subSelected,
        sideKey,

        handleClick,
        handleSubSelect,
        handleLeave,
        menuOnClickHandler,

        breadCrumble,
    }: INotOpenedSideSubMenuProps) => {

    const [subOpen, setSubOpen] = useState(false);


    return (
        <>
            {
                menu.map((list, index) => (

                  <MenuItem
                    className={'px-3'}
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      // handleSubSelect(list.key, child.key);
                      // handleClick(list);
                      // menuOnClickHandler(child, true);
                    }}
                    onMouseEnter={()=>{
                      setSubOpen(!subOpen);
                    }}
                    onMouseLeave={()=>{
                      setSubOpen(!subOpen);
                    }}
                    // selected={child.key === subSelected}
                  >
                    <div className={`text-[15px] font-[600'}`}>
                      {list.filedValue}
                    </div>

                  </MenuItem>

                        // list.children.length > 0 && list.key === sideKey &&
                        // <Paper
                        //     className={'bg-[#464646] rounded-none shadow-none'}
                        //     key={list.key}
                        //     onMouseLeave={handleLeave}
                        //     sx={{
                        //         zIndex  : '9999',
                        //         width   : '200px',
                        //         position: 'absolute',
                        //         top     : positionY,
                        //         left    : '70px'
                        //     }}>
                        //     <MenuList
                        //         autoFocusItem={open}
                        //         id="composition-menu"
                        //         aria-labelledby="composition-button"
                        //     >
                        //         {list.children.map((child, index) => (
                        //             <MenuItem
                        //                 className={'px-3'}
                        //                 key={child.key}
                        //                 onClick={(e) => {
                        //                     e.stopPropagation();
                        //                     handleSubSelect(list.key, child.key);
                        //                     handleClick(list);
                        //                     menuOnClickHandler(child, true);
                        //                 }}
                        //                 onMouseEnter={()=>{
                        //                     setSubOpen(!subOpen);
                        //                 }}
                        //                 onMouseLeave={()=>{
                        //                     setSubOpen(!subOpen);
                        //                 }}
                        //                 selected={child.key === subSelected}
                        //             >
                        //                 <div className={`text-[15px] font-[600] ${child.key === breadCrumble[1].key ? 'text-white' : 'text-[#acacac]'}`}>
                        //                     {child.title}
                        //                 </div>
                        //
                        //             </MenuItem>
                        //         ))}
                        //     </MenuList>
                        //
                        // </Paper>
                    )
                )
            }
        </>
    )
};


NotOpenedSideSubMenu.defaultProps = {};

export default NotOpenedSideSubMenu;