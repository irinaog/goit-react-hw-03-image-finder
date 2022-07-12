import { Component } from "react";
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    imagesName: '',
  };
  static propTypes = {
    onSubmit:PropTypes.func.isRequired
  }

  handleChange = evt => {
    this.setState({ imagesName: evt.currentTarget.value })
    // console.log(evt.currentTarget.value)
  };

  handleSubmit = evt => {
    evt.preventDefault();

    if (this.state.imagesName.trim() === '') {
      alert('Please enter something')
      return;
    }
    this.props.onSubmit(this.state.imagesName)
    this.setState({imagesName:''})
    // console.log(this.state.imagesName)
  }

  render() {
    const { imagesName } = this.state;

        return <header onSubmit={this.handleSubmit} className="searchbar">
          <form className="form" >
            <button type="submit"  className="button">
              <span className="button-label">Search</span>
            </button>

            <input
                onChange={this.handleChange}
                className="input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                value={imagesName}
            />
          </form>
</header>
    }
    
}