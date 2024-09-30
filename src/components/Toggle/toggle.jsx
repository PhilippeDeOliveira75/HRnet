import './toggle.scss'

function ToggleSwitch ({ isChecked, onChange }) {

  return (

    <div className="toggle-switch">
      <input
        type="checkbox"
        id="toggle"
        checked={isChecked}
        onChange={onChange}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-slider" />
      </label>
      <span className="toggle-text">{isChecked ? 'Local Storage' : 'No Persist'}</span>
    </div>
    
  )

}

export default ToggleSwitch
