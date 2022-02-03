import { Container } from './styles'
import Text from '../Text'

import add from 'frontend/assets/icons/add.png'
import minus from 'frontend/assets/icons/minus.png'

import { FieldArray, FieldArrayRenderProps } from 'formik'
import { ObjectId } from 'mongodb'
import React from 'react'

type OnMinusButtonClick = (
  arrayHelpers: FieldArrayRenderProps,
  index: number
) => void

export interface Ref {
  removedIds: ObjectId[]
  updatedValues: any[]
}

interface Props {
  values: any
  name: string
  legend?: string
  removeHandler?: (_id: ObjectId) => Promise<void>
  fields: { name: string; label: string; placeholder?: string }[]
}

const ArrayText = ({ name, values, fields, legend }: Props) => {
  const onMinusButtonClick: OnMinusButtonClick = (arrayHelpers, index) => {
    arrayHelpers.remove(index)
  }

  const onAddButtonClick = (arrayHelpers: FieldArrayRenderProps) => {
    if (fields.length >= 1) {
      const newObj = {}
      const names = fields.map(({ name }) => name)

      for (let i = 0; i < names.length; i++) newObj[names[i]] = ''

      arrayHelpers.push(newObj)
    } else arrayHelpers.push(' ')
  }

  return (
    <FieldArray name={name}>
      {arrayHelpers => (
        <Container>
          <legend>{legend}</legend>

          <ul>
            {values[name]?.map((_, index) => (
              <li key={index}>
                <div>
                  {fields.map((field, fieldIndex) => (
                    <Text
                      key={fieldIndex}
                      label={field.label}
                      placeholder={field.placeholder}
                      name={`${name}[${index}].${field.name}`}
                    />
                  ))}
                </div>

                <button type='button'>
                  <img
                    src={minus}
                    onClick={() => onMinusButtonClick(arrayHelpers, index)}
                  />
                </button>
              </li>
            ))}

            <div id='add'>
              <button
                type='button'
                onClick={() => onAddButtonClick(arrayHelpers)}
              >
                <img src={add} />
              </button>
            </div>
          </ul>
        </Container>
      )}
    </FieldArray>
  )
}

export default ArrayText
