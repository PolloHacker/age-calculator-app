export default function Form() {
  return (
    <>
      <form>
        <div className="form-control">
          <label htmlFor="date">Day</label>
          <input type="number" id="day" placeholder="DD"/>
        </div>
        <div className="form-control">
          <label htmlFor="month">Month</label>
          <input type="number" id="month" placeholder="MM"/>
        </div>
        <div className="form-control">
          <label htmlFor="year">Year</label>
          <input type="number" id="year" placeholder="YYYY"/>
        </div>
      </form>
    </>
  )
}
