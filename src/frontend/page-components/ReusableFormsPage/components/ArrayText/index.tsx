import { Container } from './styles'
import Text from '../Text'
import minus from '../../assets/minus.png'
import add from '../../assets/add.png'

import { FieldArray, FieldArrayRenderProps } from 'formik'
import React from 'react'

interface Props {
  name: string
  legend?: string
  values: any
  fields: {
    name: string
    label: string
  }[]
}

const ArrayText = ({ name, values, fields, legend }: Props) => {
  const onAddButtonClick = (arrayHelpers: FieldArrayRenderProps) => {
    if (fields.length > 1) {
      const names = fields.map(({ name }) => name)
      const newObj = {}

      for (let i = 0; i < names.length; i++) {
        newObj[names[i]] = ''
      }

      arrayHelpers.push(newObj)
    } else arrayHelpers.push(' ')
  }

  return (
    <FieldArray
      name={name}
      render={arrayHelpers => (
        <Container>
          <legend>{legend}</legend>

          <ul>
            {values[name] &&
              values[name].map((_value, index) => (
                <li key={index}>
                  <div>
                    {fields.length > 1 ? (
                      fields.map((field, fieldIndex) => (
                        <Text
                          key={fieldIndex}
                          label={field.label}
                          name={`${name}[${index}].${field.name}`}
                        />
                      ))
                    ) : (
                      <Text
                        label={fields[0].label}
                        name={`${fields[0].name}[${index}]`}
                      />
                    )}
                  </div>

                  <button type='button'>
                    <img
                      src={minus}
                      onClick={() => arrayHelpers.remove(index)}
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
    />
  )
}

export default ArrayText
