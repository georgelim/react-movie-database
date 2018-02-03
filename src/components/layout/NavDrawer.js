import React, {Component} from 'react'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'

class NavDrawer extends Component {
  menuItemClicked(path) {
    this.props.history.push(path)
    this.props.toggleNav()
  }

  render() {
    return (
      <Drawer
        open={this.props.open}
        docked={true}
        onRequestChange={this.props.toggleNav}
      >
        <AppBar
          style={this.props.styles.logo}
          onLeftIconButtonTouchTap={this.props.toggleNav}
          onTitleTouchTap={this.props.toggleNav}
          title="Course Manager"
        />
        <MenuItem onClick={() => { this.menuItemClicked('/users') }}>Users</MenuItem>
        <MenuItem onClick={() => { this.menuItemClicked('/workshops') }}>Courses</MenuItem>
      </Drawer>
    )
  }
}

NavDrawer.propTypes = {
    toggleNav: PropTypes.func.isRequired,
}

export default withRouter(NavDrawer)
