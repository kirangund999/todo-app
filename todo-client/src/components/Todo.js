import React from 'react';
import {Modal, Button, FormGroup, ControlLabel, FormControl, HelpBlock} from 'react-bootstrap';

export default class Todo extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.state = {
        show: props.show,
        name : "",
        status : "Pending"
      };

      this.handleChange = this.handleChange.bind(this);
      this.saveModal = this.saveModal.bind(this);


    }
  
    handleChange(e){
        let frm = document.forms["newTodoForm"];
        this.setState({"name" : frm.elements.todoName.value});
        this.setState({"status" : frm.elements.todostatus.options[frm.elements.todostatus.selectedIndex].value});
    }
    
    saveModal(){
        if(this.state.name && this.state.status){
            const data = new FormData();
            data.append("name", this.state.name);
            data.append("status", this.state.status);
            const todo = {"name" : this.state.name, "status" : this.state.status};
            return this.props.submitForm(todo);
        }
        alert("Please fill the Todo form.");
    }
  
    render() {
        
      return (
       
          <Modal show={this.props.show} onHide={this.props.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>New Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
                <p>
                    <form name="newTodoForm">
                        <FormGroup controlId="todoName">
                            <ControlLabel>Todo Name</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter text"
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="todostatus">
                            <ControlLabel>Status</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" onChange={this.handleChange}>
                                <option value="Pending" selected>Pending</option>
                                <option value="Completed">Completed</option>
                            </FormControl>
                        </FormGroup>
                    </form>
                </p>
              
            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.saveModal}>Save</Button>
              <Button onClick={this.props.toggleModal}>Close</Button>
            </Modal.Footer>
          </Modal>
      );
    }
  }
  