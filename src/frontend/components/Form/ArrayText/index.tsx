import { Container } from './styles'
import Text from '../Text'

import add from 'frontend/assets/icons/add.png'
import minus from 'frontend/assets/icons/minus.png'

import { FieldArray, FieldArrayRenderProps } from 'formik'
import { ObjectId } from 'mongodb'
import React, { useImperativeHandle, useState } from 'react'

type OnMinusButtonClick = (
  arrayHelpers: FieldArrayRenderProps,
  index: number
) => void

export interface Ref {
  removedIds: ObjectId[]
  updatedIds: any[]
}

interface Props {
  values: any
  name: string
  legend?: string
  removeHandler?: (_id: ObjectId) => Promise<void>
  fields: {
    name: string
    label: string
    placeholder?: string
  }[]
}

const ArrayText = React.forwardRef<Ref, Props>(
  ({ name, values, fields, legend }, ref) => {
    const [removedIds, setRemovedIds] = useState<ObjectId[]>()
    const [updatedIds, setUpdatedIds] = useState<any[]>()

    const onMinusButtonClick: OnMinusButtonClick = (arrayHelpers, index) => {
      arrayHelpers.remove(index)

      const idToRemove = values[name][index]._id

      idToRemove &&
        setRemovedIds(prev => (prev ? [...prev, idToRemove] : [idToRemove]))
    }

    const onAddButtonClick = (arrayHelpers: FieldArrayRenderProps) => {
      if (fields.length > 1) {
        const newObj = {}
        const names = fields.map(({ name }) => name)

        for (let i = 0; i < names.length; i++) newObj[names[i]] = ''

        arrayHelpers.push(newObj)
      } else arrayHelpers.push(' ')
    }

    useImperativeHandle(ref, () => ({ removedIds, updatedIds }), [removedIds])

    return (
      <FieldArray
        name={name}
        render={arrayHelpers => (
          <Container ref={ref as any}>
            <legend>{legend}</legend>

            <ul>
              {values[name] &&
                values[name].map((_, index) => (
                  <li key={index}>
                    <div>
                      {fields.length > 1 ? (
                        fields.map((field, fieldIndex) => (
                          <Text
                            key={fieldIndex}
                            label={field.label}
                            placeholder={field.placeholder}
                            name={`${name}[${index}].${field.name}`}
                            onClick={() =>
                              setUpdatedIds(prev =>
                                prev
                                  ? [...prev, values[name][index]]
                                  : [values[name][index]]
                              )
                            }
                          />
                        ))
                      ) : (
                        <Text
                          label={fields[0].label}
                          name={`${fields[0].name}[${index}]`}
                          placeholder={fields[0].placeholder}
                        />
                      )}
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
      />
    )
  }
)

export default ArrayText
