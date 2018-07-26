import React, { Component } from 'react';

class JobForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            pay: "",
            description: ""
        }
        this.titleChange = this.titleChange.bind(this);
        this.payChange = this.payChange.bind(this);
        this.descriptionChange = this.descriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    titleChange(event) {
        this.setState({title: event.target.value}) 
        }
    payChange(event) {
        this.setState({pay: event.target.value}) 
        }
    descriptionChange(event) {
        this.setState({description: event.target.value}) 
        }
    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        this.props.formCallback(data);

        this.setState({
            title: "",
            pay: "",
            description: ""
        })
    }
    render () {
        return (
        <aside id="side-bar">
            <h3>Add a Job</h3>
            <form className="job-form" onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title</label>
                <input type="text" name="title" value={this.state.title} onChange={this.titleChange}/>
                <label htmlFor="pay">Compensation</label>
                <input type="text" name="pay" value={this.state.pay} onChange={this.payChange}/>
                <label htmlFor="description">Description</label>
                <textarea name="description" rows="8" cols="40" value={this.state.description} onChange={this.descriptionChange}></textarea>
                <input type="submit" name="submit" value="Submit"/>
            </form>
        </aside>)
    }
}



export default JobForm;