import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../Common';
import { searchAllBreweries, selectBrewery } from './SearchActions';
import BreweryCard from './BreweryCard';
import { MaxWidth } from '../../Config/styles';

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
    const { searchSuggestions, selectedBrewery } = this.props;
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
          {selectedBrewery && (
          <BreweryCard
            {...selectedBrewery}
/>
          )}
          {}
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
    paddingTop: 70,
    width: '70%',
    maxWidth: MaxWidth.form,
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  textStyle: {
    textAlign: "center",
    paddingBottom: 20
  }
});

const mapStateToProps = ({ SearchReducer }) => {
  const { searchSuggestions, selectedBrewery } = SearchReducer;
  return {
    searchSuggestions,
    selectedBrewery
  };
};
const SearchView = reduxForm({
  form: 'brewerySearch'
})(Search);
export default connect(mapStateToProps, { searchAllBreweries, selectBrewery })(SearchView);
