import PropTypes from 'prop-types';

export default function Form({setYear, setMonth, setDay}) {
  const handleChange = (field) => (e) => {
    if(field === 'year') {
      setYear(e.target.value);
    } else if(field === 'month') {
      setMonth(e.target.value);
    } else if(field === 'day') {
      setDay(e.target.value);
    }
  }

  return (
    <>
      <form>
        <div className="form-control">
          <label htmlFor="date">Day</label>
          <input type="number" id="day" placeholder="DD" onChange={handleChange('day')}/>
        </div>
        <div className="form-control">
          <label htmlFor="month">Month</label>
          <input type="number" id="month" placeholder="MM" onChange={handleChange('month')}/>
        </div>
        <div className="form-control">
          <label htmlFor="year">Year</label>
          <input type="number" id="year" placeholder="YYYY" onChange={handleChange('year')}/>
        </div>
      </form>
    </>
  )
}

Form.propTypes = {
  setYear: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
  setDay: PropTypes.func.isRequired
}
