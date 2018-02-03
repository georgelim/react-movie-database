import React, {Component} from 'react'
import {connect} from 'react-redux'
import AppBar from 'material-ui/AppBar'
import {pink700} from 'material-ui/styles/colors'
import NavDrawer from './layout/NavDrawer'
import {typography} from 'material-ui/styles'
import withWidth, {LARGE} from 'material-ui/utils/withWidth'
import {Route, Switch} from 'react-router-dom'
import {bindActionCreators} from 'redux';

import Dashboard from './dashboard'
import JobsContainer from './jobs/JobsContainer'
import {receiveJobs} from "../actions/jobs";
import {fetchJobs} from "../api/jobs";


class App extends Component {
    constructor() {
        super()
        this.state = {
            nav: {open: false}
        }
    }

    getStyles() {
        const styles = {
            appBar: {
                position: 'fixed',
                top: 0,
                color: typography.textFullWhite
            },
            app: {},
            logo: {
                cursor: 'pointer',
                fontSize: 24,
                color: typography.textFullWhite,
                fontWeight: typography.fontWeightLight,
                backgroundColor: pink700
            }
        }

        return styles
    }

    componentDidMount() {

        fetchJobs()
            .then(jobs => this.props.receiveJobs(jobs))

    }

    toggleNav = () => {
        this.setState({nav: {open: !this.state.nav.open}})
    }

    closeNav = () => {
        this.setState({nav: {open: false}})
    }

    render() {
        let docked = false
        let navDrawerOpen = this.state.nav.open
        let styles = this.getStyles()

        if (this.props.width === LARGE) {
            docked = true
            navDrawerOpen = true
            styles.app.paddingLeft = 256
        }

        return (
            <div className="main-view">
                <AppBar
                    title="Course Manager"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.toggleNav}
                    className="app-bar"
                />
                <NavDrawer
                    open={navDrawerOpen}
                    toggleNav={this.toggleNav}
                    closeNav={this.closeNav}
                    styles={styles}
                    docked={docked}
                />
                <div className="view-container" style={styles.app}>
                    <Switch>
                        <Route exact path="/" component={Dashboard}/>
                        {<Route path="/jobs" component={JobsContainer} />}
                        {/*<Route path="/users" component={UserListContainer} />*/}
                        {/*<Route path="/workshops" component={WorkshopListContainer} />*/}
                    </Switch>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        jobs: state.jobs.jobs,
    }),
    (dispatch) => bindActionCreators({
        receiveJobs
    }, dispatch)
)(App);
