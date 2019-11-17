import React, {Component} from 'react'

import MenuBarComponent from './MenuBarComponent';
import DrawerComponent from './DrawerComponent';

class MenuComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
   
    handleDrawerOpen = () => {
        this.setState({
            open: true
        })
    };

    handleDrawerClose = () => {
        this.setState({
            open: false
        })
    };

    render() {
        return (
            <div>
                <MenuBarComponent handleDrawerOpen={this.handleDrawerOpen} open={this.state.open}/>
                <DrawerComponent handleDrawerClose={this.handleDrawerClose} open={this.state.open}/>
            </div>
        );
    }
}

export default MenuComponent;
