import React, { Component } from 'react'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {accessUserTopics} from '../../Redux/reducers/cardReducer';

class UserLanding extends Component {

    componentDidMount() {
        this.props.accessUserTopics();
    }

    render() {
        const topicsDisplay = this.props.topics.map((topic, i) => {
            return (
                <div key={i} className='topics'>
                    <Link to={`/topics/${topic.topic_id}`} >
                        <h1>{topic.name}</h1>
                    </Link>
                </div>
            )
        })
            return (
            <div>
                User's Page
                <h1>Topics</h1>
                <Link to="/post">Create</Link>
                <Link to="/myprofile">My Profile</Link>
                {topicsDisplay}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    return {
        topics: reduxState.cardReducer.topics
    }
}

export default connect(mapStateToProps, 
    {
        accessUserTopics
    }
)(UserLanding);