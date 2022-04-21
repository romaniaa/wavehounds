import React, { useState, useEffect } from "react";

function ToggleSwitch() {
  // const [isToggled, setIsToggled] = useState(false);
  const [ darkMode, setDarkMode ] = useState(false)
  const onToggle = () => darkMode === false ? setDarkMode(true) : setDarkMode(false);
  
  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')

    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])

  return (
    <label className="toggle-switch toggle-inner">
      <input type="checkbox"  onChange={onToggle} />
      <span className="switch" />
    </label>
  );
}

export default ToggleSwitch;