import React, { Component } from 'react'
import {Link} from "react-router-dom";


class EditTopic extends Component {
    constructor() {
        super();
        this.state = {
            editName: false,
            editDescription: false,
            showTopicMenu: false
        }

    }
    showEditName = () => {
        this.setState({editName: true, showTopicMenu: false});
    }
    hideEditName = () => {
        this.setState({editName: false});
    }
    showEditDescription = () => {
        this.setState({editDescription: true, showTopicMenu: false});
    }
    hideEditDescription = () => {
        this.setState({editDescription: false});
    }
    toggleTopicMenu = () => {
        const {showTopicMenu} = this.state;
        this.setState({showTopicMenu: !showTopicMenu});
    }
    hideTopicMenu = () => {
        const {showTopicMenu} = this.state;
        if(showTopicMenu === true) {
            this.setState({showTopicMenu: false});
        }
    }

    render() {
        const {editName, editDescription, showTopicMenu} = this.state;
        const {updateThisTopicName, updateThisTopicDescription, id, name, description} = this.props; //id = topic_id
        // create state with edit status to false *
        // conditional render based on edit status
        // buttons to toggle edit status
        return (
            <div>
                <Link to={`/topics/${id}`} >
                <h4>{name}</h4>
                </Link>
                <p>{description}</p>
                <button onClick={() => this.deleteThisTopic(id)}>-</button>
            </div>
        )
    }
}

export default EditTopic;
