import React, {Component} from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import ImageSearchOutlinedIcon from '@material-ui/icons/ImageSearchOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';

import { withStyles } from '@material-ui/core/styles';

const drawerWidth = 240;

const styles = theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
      },
      drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      drawerClose: {
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9) + 1,
        },
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
            ...theme.mixins.toolbar,
      },
  });

class DrawerComponent extends Component {
    state = {
        menuItems: [
            { 
                icon: (<ImageSearchOutlinedIcon/>),
                text: 'Search'
            },
            { 
                icon: (<ImageOutlinedIcon/>),
                text: 'Images'
            },
            { 
                icon: (<AccountCircleOutlinedIcon/>),
                text: 'Profile'
            }
        ],
    };
        
    render() {
        const { classes, theme } = this.props;
        return (
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: this.props.open,
                    [classes.drawerClose]: !this.props.open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: this.props.open,
                        [classes.drawerClose]: !this.props.open,
                    }),
                }}
                open={this.props.open}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={this.props.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {this.state.menuItems.map((menuItem, index) => (
                        <ListItem button key={menuItem.text}>
                            <ListItemIcon>{menuItem.icon}</ListItemIcon>
                            <ListItemText primary={menuItem.text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
        );
    }
}

export default withStyles(styles, { withTheme: true })(DrawerComponent);
