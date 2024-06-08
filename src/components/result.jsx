import PropTypes from 'prop-types';

export default function DisplayResult({years, months, days}) {
  return (
    <div>
        <span className='display-years'>{years} years</span>
        <span className='display-months'>{months} months</span>
        <span className='display-days'>{days} days</span>
    </div>
  )
}


DisplayResult.propTypes = {
  years: PropTypes.string.isRequired,
  months: PropTypes.string.isRequired,
  days: PropTypes.string.isRequired
};