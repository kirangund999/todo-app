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

      this.handleTextChange = this.handleTextChange.bind(this);
      this.handleSelectChange = this.handleSelectChange.bind(this);
      this.saveModal = this.saveModal.bind(this);


    }
  
    handleTextChange(e){
        this.setState({"name" : e.target.value});
        this.setState({"status" : e.target[e.target.selectedIndex].value});
    }

    handleSelectChange(e){
        this.setState({"name" : e.target.value});
        this.setState({"status" : e.target[e.target.selectedIndex].value});
    }
    
    saveModal(){
        if(this.state.name && this.state.status){
            return this.props.submitForm({name:this.state.name, status:this.state.status});
        }
        alert("Please fill the Todo form.");
    }
  
    render() {
        
      return (
       
          <Modal show={this.props.show} onHide={this.props.toggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              
                <h4>New Todo</h4>
                <p>
                    <form>
                        <FormGroup controlId="todoName">
                            <ControlLabel>Todo Name</ControlLabel>
                            <FormControl
                                type="text"
                                value={this.state.value}
                                placeholder="Enter text"
                                onChange={this.handleTextChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="todostatus">
                            <ControlLabel>Status</ControlLabel>
                            <FormControl componentClass="select" placeholder="select" onChange={this.handleSelectChange}>
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
  