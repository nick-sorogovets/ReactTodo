import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from 'actions';

export class TodoSearch extends Component {
  render() {
    const { dispatch, showCompleted, searchText } = this.props;
    const onSearchTextChange = () => {
      const text = this.refs.searchText.value;
      dispatch(actions.setSearchText(text));
    }
    const onShowCompletedChange = () => {
      dispatch(actions.toggleShowCompleted());
    }
    return (
      <div className="container__header">
        <div>
          <input
            type="search"
            ref="searchText"
            placeholder="Search todos"
            value={searchText}
            onChange={onSearchTextChange}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              ref="showCompleted"
              checked={showCompleted}
              onChange={onShowCompletedChange}
            />
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
}

export default connect((state) => {
  return {
    showCompleted: state.showCompleted,
    searchText: state.searchText
  };
})(TodoSearch);