import React from 'react';
import { BorderRadius, Colors } from '../../Config/styles';

const BreweryCard = ({
  name, city, state, postal_code, street, website_url, brewery_type, country
}) => (
  <div style={styles.cardStyle}>
    <div style={styles.rowStyle}>
      <div style={styles.headerStyle}>{name}</div>
      {brewery_type && (
        <div style={styles.textStyle}>
(
          {brewery_type}
)
        </div>
      )}
    </div>
    <div style={styles.rowStyle}>
      <div style={styles.textStyle}>{street || ''}</div>
    </div>
    <div style={styles.rowStyle}>
      <div style={styles.textStyle}>{city || ''}</div>
      {city && state && (<div style={{ paddingRight: 5 }}>,</div>)}
      <div style={styles.textStyle}>{state || ''}</div>
      {postal_code && state && (<div style={{ paddingRight: 5 }}>,</div>)}
      <div style={styles.textStyle}>{postal_code || ''}</div>
      {country && state && (<div style={{ paddingRight: 5 }}>,</div>)}
      <div style={styles.textStyle}>{country || ''}</div>
    </div>
    {website_url && (
      <a style={styles.linkStyle} href={website_url} target="_blank" rel="noopener noreferrer">{website_url}</a>
    )}
  </div>
);
const styles = Object.freeze({
  cardStyle: {
    width: '100%',
    backgroundColor: Colors.brandPrimary,
    padding: 10,
    marginTop: 30,
    borderRadius: BorderRadius.small.all,
    color: Colors.white,
    textAlign: 'left'
  },
  textStyle: {
    fontSize: 15,
    textAlign: 'left',
  },
  headerStyle: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingRight: 5,
  },
  rowStyle: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 5
  },
  linkStyle: {
    textDecoration: 'none',
    color: Colors.white,
    fontSize: 15,
  }
});

export default BreweryCard;
