import React, {Component} from 'react'

import {AppBar, Drawer, IconButton, IconMenu, MenuItem} from 'material-ui'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
    }
    handleToggle() {
        this.setState({
            open: !this.state.open
        })
    }
    handleClose() {
        this.setState({ open: false })
    }
    render() {
        return (
            <div>
                <AppBar title="SPL Client"
                    iconElementRight={
                        <IconMenu iconButtonElement={<IconButton><MoreVertIcon/></IconButton> }
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Help"/>
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>}
                    onTouchTap={this.handleToggle.bind(this) } />
                <Drawer docked={false} width={200} open={this.state.open} onRequestChange={(open) => this.setState({ open }) }>
                    <MenuItem onTouchTap={this.handleClose.bind(this) }>Menu Item</MenuItem>
                    <MenuItem onTouchTap={this.handleClose.bind(this) }>Menu Item 2</MenuItem>
                </Drawer>
            </div>
        );
    }
}

export default Header;
