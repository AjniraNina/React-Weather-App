import React, { Component } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';


class ComplaintForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      complaint: "",
      showDialogue: false,
      submitSuccess: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        complaint: this.state.complaint
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        if (response.status === 400) {
          this.setState({ submitSuccess: false });
        } else {
          this.setState({ submitSuccess: true });
        }
        console.log("response", this.state);
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.setState({
          name: "",
          email: "",
          complaint: "",
          showDialogue: true
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  handleDialogue() {
    this.setState({ showDialogue: false });
  }

  render() {
    const form = (
      <div className="complaint-form-container">
        <form onSubmit={this.handleSubmit}>
          <FormField
            type="text"
            name="name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <FormField
            type="text"
            name="email"
            label="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <FormField
            type="textarea"
            name="complaint"
            label="Complaint"
            value={this.state.complaint}
            onChange={this.handleChange}
          />
          <Button className="Button-Submit" type="submit">
            Complain
          </Button>
        </form>
      </div>
    );

    const successMessage = <p>Your complaint has been submitted</p>;
    const failureMessage = (
      <p>Your complain has not been submitted, try again.</p>
    );

    const dialogue = (
      <div>
        {this.state.submitSuccess === true ? successMessage : failureMessage}
        <button onClick={() => this.handleDialogue()}>Continue</button>
      </div>
    );

    return <>{this.state.showDialogue === false ? form : dialogue}</>;
  }
}
export default ComplaintForm;