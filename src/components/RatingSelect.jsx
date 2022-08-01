import React from 'react'

function RatingSelect({ selectRating, selected }) {

  const onChangeHandler = (e) => {
    selectRating(+e.currentTarget.value)
  }

  return (
    <div>
      <ul className="rating">
        {
          Array.from({length: 10}, (v, k) => (
            <li key={`rating-${k+1}`}>
              <input 
                type='radio'
                id={`num-${k+1}`}//each has different id for label
                name='rating'//group all in one. rating=? variable remain one that will be set by all inputs.
                value={k+1}//value of it
                onChange={onChangeHandler}
                checked={selected === k + 1} //intially some value should be checked/selected
              />
              <label htmlFor={`num-${k+1}`}>{k+1}</label>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default RatingSelect