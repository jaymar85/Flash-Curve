import React, { Component } from 'react'
import './UserLanding.scss'
// import axios from 'axios';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {accessUserTopics, addTopic} from '../../Redux/reducers/cardReducer';

class UserLanding extends Component {

    constructor() {
        super();
        this.state = {
            topics: [],
            name: '',
            description: ''
        }
        this.addNewTopic = this.addNewTopic.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    componentDidMount() {
        this.props.accessUserTopics();
    }

    addNewTopic() {
        const {name, description} = this.state;
        const { addTopic } = this.props;
        addTopic({ name, description})
            .then(response => {
            this.setState({topics: response.data})
        })
    }

    handleInput(e) {
        this.setState({ [e.target.name]: e.target.value }); 
    };

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
                <div className="sub-nav">
                    <div className="topicslist">
                        <Link to="/topics">Study Cases</Link>
                    </div>
                    <div className="statSheet">
                        <Link>My Stats</Link>
                    </div>
                    <div className="profile">
                        <Link to="/profile/user">My Profile</Link>
                    </div>
                </div>

                <h1>User's Page</h1>
                <h1>Topics</h1>
                <div className="pop-up-form">
                <h2>Add a new study case</h2>
                    <form className="add-form" name="add_topic">
                        <label>name</label>
                            <span/>
                            <input 
                            className="add-name"
                            name="name"
                            type="text"
                            placeholder="Name your case"
                            onChange={this.handleInput}
                            />
                        <label>description</label>
                            <input 
                            className="add-description"
                            name="description"
                            type="text"
                            placeholder="Describe your case"
                            onChange={this.handleInput}
                            />
                            <button className="add-sum-mow" onClick={this.addNewTopic}>Add</button>
                    </form>
                </div>
                <button className="create-topic">+</button>
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
        accessUserTopics,
        addTopic
    }
)(UserLanding);