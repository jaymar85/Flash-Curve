import React, { Component } from 'react'
import './UserLanding.scss'
import EditTopic from './EditTopic/EditTopic'
// import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {accessUserTopics, addTopic, deleteTopic, updateTopicName, updateTopicDescription} from '../../Redux/reducers/cardReducer';

class UserLanding extends Component {

    constructor() {
        super();
        this.state = {
            topics: [],
            name: '',
            description: '',
        }
        this.addNewTopic = this.addNewTopic.bind(this);
        this.deleteThisTopic = this.deleteThisTopic.bind(this);
        this.updateThisTopicName =  this.updateThisTopicName.bind(this);
        this.updateThisTopicDescription = this.updateThisTopicDescription.bind(this);
        this.handleTopicInput = this.handleTopicInput.bind(this);
    }

    componentDidMount() {
        this.props.accessUserTopics(); // ** debug ** have to click refresh for topics to show
    }

    addNewTopic() {
        if (!this.state.description) return;
        const {name, description} = this.state;
        const { addTopic } = this.props;  //deleted topic_id as it was not being used
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
    updateThisTopicName(id, newName) { 
        // const {name} = this.state;
        const {updateTopicName} = this.props;
        updateTopicName({id, newName}).then(results => {
            this.setState({topics: results.data});
        })
    }
    updateThisTopicDescription(id, newDescription) {
        // const {description} = this.state;
        const {updateTopicDescription} = this.props;
        updateTopicDescription({id, newDescription}).then(results => {
            this.setState({topics: results.data});
        })
    }

    handleTopicInput(e) {
        this.setState({ [e.target.name]: e.target.value }); 
    };

    render() {
                
        const topicsDisplay = this.props.topics.map((topic, i) => {            
            return (
                <div >
                    <EditTopic key={i}                   
                        id={topic.topic_id}
                        name={topic.name}
                        description={topic.description}
                        updateThisTopicName={this.updateThisTopicName}
                        updateThisTopicDescription={this.updateThisTopicDescription}
                        deleteThisTopic={this.deleteThisTopic}
                        
                    />
                </div>              
            )
        })

        return (                      
        <div className="topic-content-section">   
            <div className="add-container">
                <h3 id="add-title">Add a study topic</h3>
                    <form className="add-form" name="add_topic" autoComplete="off">
                        <div className="input-wrapper">
                            <div className="name-input">
                                
                                <input 
                                className="add-name"
                                name="name"
                                type="text"
                                placeholder="Name your topic"
                                onChange={this.handleTopicInput}
                                />
                            </div>
                            <div className="description-input">
                                <input 
                                className="add-description"
                                name="description"
                                type="text"
                                placeholder="Describe your goal for this topic"
                                onChange={this.handleTopicInput}
                                />
                            </div>
                        </div>
                        <div className="add-btn-wrapper">                     
                        <button className="add-btn" onClick={this.addNewTopic}>+</button>  
                        </div>                         
                    </form>
                </div>
            
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
        deleteTopic,
        updateTopicName,
        updateTopicDescription
    }
)(UserLanding);