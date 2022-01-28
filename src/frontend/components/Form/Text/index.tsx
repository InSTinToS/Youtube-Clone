import { Container } from './styles'

import { Field, FieldAttributes } from 'formik'
import React from 'react'

interface Props extends FieldAttributes<any> {}

const Text = ({ name, label, ...props }: Props) => (
  <Container htmlFor={name}>
    {label}
    <Field id={name} name={name} {...props} />
  </Container>
)

export default Text
