import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Input from '../Common/Input';
import { searchAllBreweries, selectBrewery } from './SearchActions';

class Search extends Component {
  handleSearch = (e) => {
    this.props.change("searchString", e.target.value);
    this.props.searchAllBreweries({ query: e.target.value });
  }

  handleSelect = (id, name) => {
    this.props.selectBrewery({ id });
    this.props.change("searchString", name);
  }

  render() {
    const { searchSuggestions } = this.props;
    return (
      <div style={{ ...styles.hero, backgroundImage: `url("images/hero.jpg")` }}>
        <div style={styles.containerStyle}>
          <div style={styles.textStyle}>What are you looking for?</div>
          <Field
            name="searchString"
            component={Input}
            options={searchSuggestions}
            handleSelect={this.handleSelect}
            onChange={this.handleSearch} />
        </div>
      </div>
    );
  }
}

const styles = Object.freeze({
  hero: {
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  },
  containerStyle: {
    width: '100%',
    paddingTop: 70,
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column'
  },
  textStyle: {
    textAlign: "center",
    paddingBottom: 20
  }
});

const mapStateToProps = ({ SearchReducer }) => {
  const { searchSuggestions } = SearchReducer;
  return {
    searchSuggestions
  };
};
const SearchView = reduxForm({
  form: 'brewerySearch'
})(Search);
export default connect(mapStateToProps, { searchAllBreweries, selectBrewery })(SearchView);
