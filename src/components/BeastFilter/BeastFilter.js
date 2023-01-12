import React from 'react';

class BeastFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHorns: 'All',
      hornSort: 'Name'
    }
  }

  handleHorns = (event) => {
    event.preventDefault();
    this.setState({
      selectedHorns: event.target.value,
    })
    this.props.handleFilter(event.target.value, this.state.hornSort);
  }

  handleSort = (event) => {
    event.preventDefault();
    this.setState({
      hornSort: event.target.value,
    })
    this.props.handleFilter(this.state.selectedHorns, event.target.value);
  }

  render() {
    return (
      <>
        <main id='hornForm'>
          <h2>Beast Selector</h2>
          <form className='hornForm'>
            <fieldset>
              <label htmlFor='horns'>Number of Horns</label>
              <select id='horns' name='selectedHorns' onChange={this.handleHorns}>
                <option value='All'>All</option>
                <option value='1'>One</option>
                <option value='2'>Two</option>
                <option value='3'>Three</option>
                <option value='100'>One Hundred</option>
              </select>
            </fieldset>
          </form>
          <form className='hornForm' onChange={this.handleSort}>
            <fieldset>
              <label htmlFor='horns'>Sort</label>
              <select id='horns' name='selectedHorns'>
                <option value='Name Ascending'>Name Acending</option>
                <option value='Name Decending'>Name Decending</option>
                <option value='Horns Acending'>Horns Acending</option>
                <option value='Horns Decending'>Horns Decending</option>
              </select>
            </fieldset>
          </form>

        </main>

      </>
    );
  }
}

export default BeastFilter;