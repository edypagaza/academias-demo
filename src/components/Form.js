import React from 'react';
import '../styles/form.css';


class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {title: '',description:''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleType = this.handleType.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const message = this.state.title + '\n' + this.state.description
    alert(message);
    this.props.history.push('/');
  }
  handleType(e) {
    this.setState({[e.target.name]: e.target.value});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Im a Form</h1>
          <label>Title:
            <input type="text" name ="title" value={this.state.title} onChange={this.handleType}/>
          </label>
          <br></br>
          <label>Description:
            <input type="text" name="description" value={this.state.description} onChange={this.handleType} />
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
        <button name="Back" history={this.props.history}>Back</button>
      </div>);
  }
};

export default Form;