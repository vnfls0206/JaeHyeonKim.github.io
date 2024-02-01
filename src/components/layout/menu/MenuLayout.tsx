import React, { useState } from "react"
import CssBaseline from "@mui/material/CssBaseline"
import { useEffectOnce, useEventListener } from "usehooks-ts"
import { debounce } from "lodash"
// import { IBreadCrumble } from "../../../routing/helpers/getBreadCrumbleRoute";
import { Box } from "@mui/material"
import { IMdxData } from "../Layout"
import DrawerMenu from "../menu/DrawerMenu"
import AppBarIcon from "../../layout/menu/AppBarIcon"


export interface IMenuItem {
  totalCount: number,
  fieldValue: string
}

export interface IMenuLayoutProps {
  //children?: React.ReactNode,
  menu: IMenuItem[],
  currentPage: IMdxData,
}

const drawerWidth = 250

const MenuLayout = (
  {
    menu,
    currentPage
  }: IMenuLayoutProps
) => {

  /**
   * open : sidebar 전체 메뉴 (depth1)
   * subOpen : menu 중 하위 메뉴 존재 (depth2)
   * saveSubOpen : sub-menu 중 open 되어 있는 것(re-open 시 보이도록)
   */

  console.log(menu);

  const [open, setOpen] = useState(true)



  useEffectOnce(() => {
    if (window.innerWidth <= 1440) {
      handleDrawerClose()
    }
  })



  useEventListener("resize", debounce(() => {
    if (window.innerWidth <= 1440) {
      handleDrawerClose()
    } else if (window.innerWidth > 1440) {
      setOpen(true)
    }
  }, 50))

  // const handleDrawerOpen = () => {
  //     setOpen(true);
  //     setSubOpen(saveSubOpen);
  // };

  const handleDrawerClose = () => {
    setOpen(false)
    // setSaveSubOpen(subOpen);
    setSideOpen(false)
    //setSubOpen(false);
  }


  const [sideOpen, setSideOpen] = useState(false)


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarIcon
          open={open}
          handleDrawerOpen={setOpen.bind(this, true)}
          position={"fixed"}
          drawerWidth={drawerWidth}
      />
      {/*<Demo open={open}*/}
      {/*      setOpen={setOpen}*/}
      {/*/>*/}
      <DrawerMenu
          drawerWidth={drawerWidth}
          menu={menu}
          currentPage={currentPage}
          open={open}
          menuOnClickHandler={()=> console.log('click')}
          sideOpen={sideOpen}
          setSideOpen={setSideOpen}
          handleDrawerClose={handleDrawerClose}
          // menuOnClickHandler={menuOnClickHandler}
      />
    </Box>
  )
}


MenuLayout.defaultProps = {}

export default MenuLayout