import './create.scss'

import { useState, useEffect } from 'react'
import { Form, ToggleSwitch } from '@components/import'

function Create () {

  const [isPersistent, setIsPersistent] = useState(true)

  const handleToggleChange = () => {
    setIsPersistent((prev) => !prev)
  };

  useEffect(() => {

  }, [isPersistent])

  return (

    <div className="create__Container">
      <h1 className="create__Title">Create Employee</h1>
      <ToggleSwitch isChecked={isPersistent} onChange={handleToggleChange} />
      <Form isPersistent={isPersistent} />
    </div>

  )

}

export default Create