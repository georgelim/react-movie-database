import React, { Component } from 'react';
import { connect } from 'react-redux';
import {receiveJobs} from '../../actions/jobs'
import {fetchJobs} from '../../api/jobs'


class JobsContainer extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        fetchJobs().then(jobs => {
           this.props.onSetJobs(jobs);
        });
    }

    render(){
        return(
            <div>
                { this.props.jobs.map((job, index) => (
                    <div key={index} >{job.node.ageLevel}</div>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    jobs: state.jobs
});

const mapDispatchToProps = dispatch => ({
    onSetJobs: jobs => dispatch(receiveJobs(jobs))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JobsContainer);
