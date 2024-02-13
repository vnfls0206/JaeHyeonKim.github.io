import React, { useContext, useState } from "react"
import { Icon, IconButton } from "@mui/material"
import { CSSObject, styled, Theme, useTheme } from "@mui/material/styles"
import MuiDrawer from "@mui/material/Drawer"
import { Box } from "@mui/material"
import { IMenuItem } from "./MenuLayout"
// import logo from '../../../shared/image/cludy_logo.png'
import MenuCategory from "./MenuCategory"
import NotOpenedSideSubMenu from "./NotOpenedSideSubMenu"
// import { IBreadCrumble } from "../../../routing/helpers/getBreadCrumbleRoute"
import { Menu, ChevronRight } from "@mui/icons-material"
import Path from "../../routing/path"
import { navigate } from "gatsby"
import { IMdxData } from "components/layout/Layout"
import { Header } from "../../../components/header"
import { pageContext } from "../../../app/AppContainer"

export interface IDrawerProps {
  //children?: React.ReactNode,
  drawerWidth: number,
  open: boolean,

  handleDrawerClose: () => void,

  menu: IMenuItem[],
  menuOnClickHandler: Function,


}

const openedMixin = (theme: Theme): CSSObject => ({
  width: 250,
  paddingLeft: "3px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    display: "none"
  }
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  "&::-webkit-scrollbar": {
    display: "none"
  },
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8.5)} + 1px)`
  }
})

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    width: 250,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    "&::-webkit-scrollbar": {
      display: "none"
    },
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme)
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme)
    })
  })
)

export default function DrawerMenu(
  {
    drawerWidth,
    open,


    handleDrawerClose,

    menu,
    menuOnClickHandler,

  }: IDrawerProps) {


  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "50px",
    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  }))

  /**
   * open : sidebar 전체 메뉴 (depth1)
   * subOpen : menu 중 하위 메뉴 존재 (depth2)
   * saveSubOpen : sub-menu 중 open 되어 있는 것(re-open 시 보이도록)
   * selected : depth 1 중 선택된 메뉴
   * saveSubSelected : depth2 중 선택된 메뉴
   * sideOpen : mini-menu sidebar
   */

  const pageData = useContext(pageContext);

  const [selected, setSelected] = useState(pageData?.categories?.at(-1) || "")
  // const [subSelected, setSubSelected] = useState(breadCrumble[1]?.key || "")

  // const [sideKey, setSideKey] = useState(breadCrumble[0]?.key || "")

  const handleClick = (list: any) => {
    const { key, children } = list

    // if (children.length) { //서브메뉴 있을 때
    //
    //   setSubOpen({
    //     ...subOpen,
    //     [key]: !subOpen[key]
    //   })
    //   if (open || third) {
    //     setSubSelected("")
    //   }
    //   setSaveSubOpen(subOpen)
    //   return
    // }

    setSelected(key)
    // setSubSelected("")
  }

  const handleSubSelect = (listKey: string, childKey: string) => {
    setSelected(listKey)
    // setSubSelected(childKey)
  }
  const handleSubChildSelect = (listKey: string, childKey: string) => {
    // setSubSelected(listKey)
    // setSubChildSelected(childKey)
  }

  const handleOver = (key: string, event: any) => {
    // if (sideKey === key) {
    //
    // } else {
    //   if (!open) {
    //     setSideKey(key)
    //     setPositionY(event.target.getBoundingClientRect().top)
    //   }
    // }
  }


  const onNavHome = () => {
    navigate(Path.HOME_PATH)
  }


  return (
    <React.Fragment>
      <Drawer
        variant="permanent"
        open={open}

        sx={{

          maxWidth: drawerWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",
          color: "#ffffff",
          "& .MuiDrawer-paper": {
            maxWidth: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#464646"

          }
        }}
      >
        <DrawerHeader className={'h-[50px] min-h-[50px]'}>
          <div
            className={"hover:bg-transparent w-full"}
          >
            {
              open ?
                (<Box
                  className={"pl-1 flex items-center justify-between w-full border-0 border-b border-solid border-[#e0e0e0]/10"}>
                  <div className={"px-[4px] flex w-full justify-between"}>
                    <IconButton onClick={onNavHome}>
                      <Header siteTitle={"SDBlog"} />

                      {/*<img className={'w-[90px]'} src={logo}/>*/}
                    </IconButton>
                    <IconButton onClick={handleDrawerClose}>
                      <Menu className={"text-white"} />

                    </IconButton>
                  </div>
                </Box>)
                :
                (<ChevronRight onClick={handleDrawerClose} color="disabled" />)
            }
          </div>
        </DrawerHeader>

        <MenuCategory
          menu={menu}
          handleClick={handleClick}
          menuOnClickHandler={menuOnClickHandler}
          handleOver={handleOver}
          handleSubSelect={handleSubSelect}
          handleSubChildSelect={handleSubChildSelect}
          selected={selected} setSelected={setSelected}
          // subSelected={subSelected}
          open={open}
        />

      </Drawer>
      {/*{*/}
      {/*  !open && sideOpen &&*/}
      {/*  <React.Fragment>*/}
      {/*    <NotOpenedSideSubMenu*/}
      {/*      menu={menu} open={open} positionY={positionY}*/}
      {/*      subSelected={subSelected} sideKey={sideKey}*/}
      {/*      handleSubSelect={handleSubSelect}*/}
      {/*      menuOnClickHandler={menuOnClickHandler}*/}
      {/*      handleLeave={handleLeave}*/}
      {/*      handleClick={handleClick}*/}
      {/*      breadCrumble={breadCrumble}*/}
      {/*    />*/}
      {/*  </React.Fragment>*/}

      {/*}*/}


    </React.Fragment>
  )
};
