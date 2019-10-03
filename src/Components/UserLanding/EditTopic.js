import React, { Component } from 'react'
import {Link} from "react-router-dom";


class EditTopic extends Component {
    constructor() {
        super();
        this.state = {
            editName: false,
            editDescription: false,
            showTopicMenu: false,
            newName: ''
        }

    }
    ////////// Topic Menu //////////
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
    ////////// Handle Input //////////
    handleInputNameText(e) {
        this.setState({[e.target.name]: e.target.value})
    }
    handleInputDescriptionText(val) {
        this.setState({text: val})
    }
    updateTopicFields = () => {
        const {text, hideEditName, hideEditDescription} = this.state;
        const {id, updateThisTopicName, updateThisTopicDescription} = this.props;
        updateThisTopicName(id, text);
        updateThisTopicDescription(id, text);
        hideEditName();
        hideEditDescription();
    }

    render() {
        const {editName, editDescription, showTopicMenu, text, hideEditName, hideEditDescription} = this.state;
        const {updateThisTopicName, updateThisTopicDescription, id, name, description} = this.props; //id = topic_id
        console.log(id)
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
                {   editName ?
                    <div>
                        <input 
                        className="name_textbox" 
                        name="newName" 
                        onChange={(e) => this.handleInputNameText(e)}
                        defaultValue={name}
                        ></input>
                        <div>
                            <button id="confirm_name_update"
                            onClick={this.updateTopicFields}
                            >Update</button>
                            <button id="cancel_name_update" 
                            onClick={this.hideEditName}
                            >Cancel</button>
                        </div>
                    
                    {id}
                    {text}                    
                    {updateThisTopicName}
                    </div>
                    :
                    <div>
                    {name}
                    <span className="name_text">{text}</span>
                    </div>
                }

                </div>
            </section>
        )
    }
}

export default EditTopic;

// {   editDescription ?
//     <div>
//         <textarea 
//         className="description_textbox" 
//         value={text} 
//         onChange={(e) => this.handleInputDescriptionText(e.target.value)}
        
//         ></textarea>
//         <div>
//             <button id="edit_controls_name"
//             className="confirm_description_update"
//             onClick={this.updateTopicFields}
//             >Update</button>
//             <button id="edit_controls_description"
//             className="cancel_name_update" 
//             onClick={this.hideEditDescription}
//             >Cancel</button>
//         </div>
//     {description}
//     {id}
//     {text}                    
//     {updateThisTopicDescription}
//     </div>
//     :
//     <span className="description_text">{text}</span>                    
// }