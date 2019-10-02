import React, { Component } from 'react'
import './UserLanding.scss'
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {accessUserTopics, addTopic, deleteTopic} from '../../Redux/reducers/cardReducer';

class UserLanding extends Component {

    constructor() {
        super();
        this.state = {
            topics: [],
            name: '',
            description: '',
            showTopicMenu: false
        }
        this.addNewTopic = this.addNewTopic.bind(this);
        this.deleteThisTopic = this.deleteThisTopic.bind(this);
        this.handleTopicInput = this.handleTopicInput.bind(this);
    }

    componentDidMount() {
        this.props.accessUserTopics();
    }

    addNewTopic() {
        if (!this.state.description) return;
        const {name, description} = this.state;
        const { addTopic, topic_id } = this.props;
        addTopic({ name, description }).then(results => {
            this.setState({topics: results.data})
        })
    }
    deleteThisTopic(topic_id) {    
        const confirmed = window.confirm('Delete this Topic?');
        if (!confirmed) return;                  
        const {deleteTopic} = this.props;
        deleteTopic(topic_id).then(results => {
            this.setState({topics: results.data});
        })
    }

    handleTopicInput(e) {
        this.setState({ [e.target.name]: e.target.value }); 
    };


    hideTopicMenu() {
        if(this.state.showTopicMenu === true) {
            this.setState({showTopicMenu: false});
        }
    }

    render() {
        const {showTopicMenu} = this.state;
        const topicsDisplay = this.props.topics.map((topic, i) => {
            return (
                <div key={i} className='topics' >
                    <Link to={`/topics/${topic.topic_id}`} >
                        <h4>{topic.name}</h4>
                    </Link>
                    <button onClick={() => this.deleteThisTopic(topic.topic_id)}>-</button>
                </div>              
                    )
                })
        
        return (                      
        <div className="topic-content">   
            <div className="add-container">
                <h3>Add a study topic</h3>
                    <form className="add-form" name="add_topic">
                        <div className="input-wrapper">
                            <div className="name-input">
                                <span/>
                                <input 
                                className="add-name"
                                name="name"
                                type="text"
                                placeholder="Name your case"
                                onChange={this.handleTopicInput}
                                />
                            </div>
                            <div className="description-input">
                                <input 
                                className="add-description"
                                name="description"
                                type="text"
                                placeholder="Describe your case"
                                onChange={this.handleTopicInput}
                                />
                            </div>
                        </div>                        
                            <button className="add-btn" onClick={this.addNewTopic}>+</button>                        
                    </form>
                </div>
            {/*<button className="create-topic">+</button>*/}
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
        addTopic,
        deleteTopic
    }
)(UserLanding);

// style={ {display: showTopicMenu ? 'flex' : 'none'} }