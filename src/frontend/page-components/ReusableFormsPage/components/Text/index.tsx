import { Container } from './styles'

import { Field } from 'formik'
import React from 'react'

interface Props {
  name: string
  label: string
  defaultValue?: string
}

const Text = ({ name, label, defaultValue }: Props) => (
  <Container htmlFor={name}>
    {label}
    <Field id={name} name={name} defaultValue={defaultValue} />
  </Container>
)

export default Text
