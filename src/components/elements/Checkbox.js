import React, { useContext } from 'react'
import { FormContext } from '../../FormContext'
const Checkbox = ({    
    fieldvalue,
    fieldtype,
    fieldname,
    fieldlabel,
    fieldoptions,}) => {
        const { handleCheckboxChange } = useContext(FormContext)

    return (
  <div className="form-check">
      <input className="form-check-input" type="checkbox" name={fieldname} value={fieldvalue} onChange={e=>handleCheckboxChange(e)}/>
    <label className="form-check-label" htmlFor="flexCheckDefault">
        {fieldlabel}
    </label>
  </div>
    )
}

export default Checkbox
