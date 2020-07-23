import React, { Fragment } from 'react'
import Form from './Form.js'
import Names from './Names'

export default () => (
  <Fragment>
    <h1 className="avenir f4 bold center mw5">Add A Person</h1>
    <Form />
    <h1 className="avenir f4 bold center mw5">Names</h1>
    <Names />
  </Fragment>
)
