import React, { Component } from 'react'
import {Link} from "react-router-dom";


class EditTopic extends Component {
    constructor() {
        super();
        this.state = {
            editName: false,
            editDescription: false,
            showTopicMenu: false,
            text: ''
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

    handleUpdateNameText(val) {
        this.setState({text: val})
    }

    updateTopicFieldsFinish = () => {
        const {text, hideEditName, hideEditDescription} = this.state;
        const {id, updateThisTopicName, updateThisTopicDescription} = this.props;
        updateThisTopicName(id, text);
        updateThisTopicDescription(id, text);
        hideEditName();
        hideEditDescription();
    }

    render() {
        const {editName, editDescription, showTopicMenu, text} = this.state;
        const {updateThisTopicName, updateThisTopicDescription, id, name, description} = this.props; //id = topic_id

        return (
            
            <section className="Topic_parent" onClick={this.hideTopicMenu}> 
                <div className="topic_content">
                    <div className="topic_hamburger">
                        <span onClick={this.toggleTopicMenu}>:::</span>

                        <div class="hamburger" style={ {display: showTopicMenu ? "flex" : "none"} }>
                            <span onClick={this.showEditName}>Edit Name</span>
                            <span onClick={this.showEditDescription}>Edit Description</span>
                            <span onClick={() => this.props.deleteThisTopic(id)}>Delete</span>
                        </div>
                    </div>
                <Link to={`/topics/${id}`}>My Flash Cards</Link>
                {   editName 
                    ?
                    <div>
                    {name}
                    {id}
                    {text}
                    {this.hideEditName}
                    {updateThisTopicName}
                    </div>
                    :
                    <span className="name_text">{text}</span>
                }

                {   editDescription
                    ?
                    <div>
                    {description}
                    {id}
                    {text}
                    {this.hideEditDescription}
                    {updateThisTopicDescription}
                    </div>
                    :
                    <span className="description_text">{text}</span>                    
                }

                </div>
            </section>
            
        )
    }
}

export default EditTopic;

// create state with edit status to false *
// conditional render based on edit status *
// buttons to toggle edit status *