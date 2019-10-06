import React, { Component } from 'react'
import {Link} from "react-router-dom";
import './EditTopic.scss'

class EditTopic extends Component {
    constructor() {
        super();
        this.state = {
            editName: false,
            editDescription: false,
            showTopicMenu: false,
            newName: '',
            newDescription: ''
        }

    }
    ////////// Show/Hide Name //////////
    showEditName = () => {
        this.setState({editName: true, showTopicMenu: false});
    }
    hideEditName = () => {
        this.setState({editName: false});
    }
    ////////// Show/Hide Description //////////
    showEditDescription = () => {
        this.setState({editDescription: true, showTopicMenu: false});
    }
    hideEditDescription = () => {
        this.setState({editDescription: false});
    }
    ////////// Topic Menu //////////
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
    ////////// Handle Inputs //////////
    handleInputNameText(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    handleInputDescriptionText(e) {
        this.setState({[e.target.description]: e.target.value})
    }
    ////////// Update  //////////
    updateTopicFields = () => {
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
        // console.log(id)
        return (                 
        <div className="topics_container" onClick={this.hideTopicMenu}>
                    <div className="topic_hamburger">
                        <span className="topic_hamburger_menu" onClick={this.toggleTopicMenu}>:::</span>
                        <Link className="to_flashcards" to={`/topics/${id}`}>Flash Cards</Link>

                        <div className="hamburger_menu" style={ {display: showTopicMenu ? "flex" : "none"} }>
                            <span onClick={this.showEditName}>Edit Name</span>     
                            
                            <span onClick={this.showEditDescription}>Edit Goal</span>     
                            
                            <span onClick={() => this.props.deleteThisTopic(id)}>Delete</span>
                        </div>
                    </div>
                {   editName ?
                    <div className="name_input_div">
                        <input 
                        className="name_textbox" 
                        name="newName" 
                        onChange={(e) => this.handleInputNameText(e)}
                        defaultValue={name}
                        ></input>
                        <div className="edit_name_btn">
                            <button id="confirm_name_update"
                            onClick={this.updateTopicFields}
                            >Update</button>
                            <button id="cancel_name_update" 
                            onClick={this.hideEditName}
                            >Cancel</button>
                        </div>
                    
                    {text}                    
                    {updateThisTopicName}
                    </div>
                    :
                    <div className="name_text">
                    {name}                    
                    <span >{text}</span>
                    </div>
                }
                

                
                {   editDescription ?
                    <div className="description_input_div">
                        <input 
                        className="description_textbox" 
                        name="newDescription" 
                        onChange={(e) => this.handleInputDescriptionText(e)}
                        defaultValue={description}
                        ></input>
                        <div className="edit_description_btn">
                            <button id="confirm_description_update"
                            onClick={this.updateTopicFields}
                            >Update</button>
                            <button id="cancel_description_update"
                            onClick={this.hideEditDescription}
                            >Cancel</button>
                        </div>
                        
                    {text}                    
                    {updateThisTopicDescription}
                    </div>
                    :
                    <div className="description_text">
                    {description}
                    <span >{text}</span> 
                    </div>                   
                }               
        </div>           
        )
    }
}

export default EditTopic;
