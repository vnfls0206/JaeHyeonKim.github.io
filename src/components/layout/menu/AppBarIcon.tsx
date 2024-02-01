import React, { useMemo } from 'react';
import { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar/AppBar";
import { alpha, styled, useTheme } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import { Box, Button, Divider } from "@mui/material";
// import AppBarDropMenu from "./AppBarDropMenu";
import {
    AssignmentTurnedInOutlined,
    DriveFileRenameOutlineOutlined,
    ManageAccountsOutlined,
    VolumeUp
} from "@mui/icons-material";



export interface IAppBarIconProps {
    //children?: React.ReactNode,
    open: boolean,
    handleDrawerOpen: () => void,
    drawerWidth: number,
    position: any,
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}


const AppBarIcon = (
    {
        open,
        handleDrawerOpen,
        drawerWidth,
        position,

    }: IAppBarIconProps) => {

    const AppBar = styled(MuiAppBar, {
        shouldForwardProp: (prop) => prop !== 'open',
    })<AppBarProps>(({theme, open}) => ({
        zIndex    : theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing  : theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            marginLeft: drawerWidth,
            width     : `calc(100% - ${drawerWidth}px)`,
            transition: theme.transitions.create(['width', 'margin'], {
                easing  : theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
    }));
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const open2 = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <AppBar
                position={position}
                open={open}
                sx={{
                    boxShadow      : "0",
                    backgroundColor: "#fff",
                    height: '50px'
                }}
            >
                <Toolbar
                    className={'h-[50px] min-h-[50px] mx-0 pr-[30px] pl-[14px]'}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            //marginRight: 5,
                            marginLeft: '0px',
                            ...(open && {display: 'none'}),
                        }}
                    >

                        <MenuIcon color='disabled'/>

                    </IconButton>


                    <Box sx={{flexGrow: 1}}>


                    </Box>
                    <Box className={'flex smm:block gap-x-[30px] items-center'}>
                        <Typography
                            variant="h6" component="div"
                            sx={{color: '#333333', fontSize: '14px', marginRight: '10px'}}
                            className={'my-auto flex gap-x-2 items-center mr-0'}
                        >
                            {/*<div>{'admin@cludy.co.kr'}</div>*/}
                            {/*<div className={'opacity-50'}>{'|'}</div>*/}
                            {/*<div>{'강감찬'}</div>*/}
                            {/*<div className={'opacity-50'}>{'|'}</div>*/}
                            {/*<div>{'(주)씨에이웨이브'}</div>*/}
                        </Typography>

                        <Box className={'text-[#acadb9] text-sm bg-[#f5f5f5] rounded-full mx-auto'}
                             sx={{
                                 display   : 'flex',
                                 alignItems: 'center',
                                 width     : 'fit-content',
                                 //border: (theme) => `1px solid ${theme.palette.divider}`,
                                 borderRadius: 1,
                                 bgcolor     : 'background.paper',
                                 color       : 'text.secondary',
                                 '& svg'     : {
                                     m: 0.025,
                                 },
                                 '& hr'      : {
                                     mx: 0.25,
                                 },
                             }}
                        >
                            <Button
                                //onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <VolumeUp className={'text-[17px]'}/>
                            </Button>
                            <Divider orientation="vertical" variant="middle" flexItem/>
                            <Button
                                //onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AssignmentTurnedInOutlined className={'text-[17px]'}/>
                            </Button>
                            <Divider orientation="vertical" variant="middle" flexItem/>
                            <Button
                                //onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <DriveFileRenameOutlineOutlined className={'text-[17px]'}/>
                            </Button>
                            <Divider orientation="vertical" variant="middle" flexItem/>
                            <Button
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <ManageAccountsOutlined className={'text-[17px]'}/>
                            </Button>
                        </Box>

                    </Box>
                </Toolbar>
                <Divider className={'border-[#e0e0e0]'}/>

            </AppBar>


            {/*<AppBarDropMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl}/>*/}

        </React.Fragment>
    );
};


AppBarIcon.defaultProps = {};

export default AppBarIcon;