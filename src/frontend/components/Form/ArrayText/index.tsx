import { Container } from './styles'
import Text from '../Text'

import Channel from 'types/routes/channel'

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
  updatedValues: any[]
}

interface Props {
  values: any
  name: string
  legend?: string
  removeHandler?: (_id: ObjectId) => Promise<void>
  fields: { name: string; label: string; placeholder?: string }[]
}

const ArrayText = React.forwardRef<Ref, Props>(
  ({ name, values, fields, legend }, ref) => {
    const [updatedValues, setUpdatedValues] = useState<Channel[]>()
    const [removedIds, setRemovedIds] = useState<ObjectId[]>()

    const onMinusButtonClick: OnMinusButtonClick = (arrayHelpers, index) => {
      const idToRemove = values[name][index]._id

      arrayHelpers.remove(index)

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

    const onTextClick = (index: number) => {
      const haveId = values[name][index]._id
      const alreadyClicked = !updatedValues?.find(
        oldUpdated => oldUpdated._id === values[name][index]._id
      )

      if (alreadyClicked && haveId)
        setUpdatedValues(prev =>
          prev ? [...prev, values[name][index]] : [values[name][index]]
        )

      console.log(values[name][index])
    }

    useImperativeHandle(ref, () => ({ removedIds, updatedValues }), [
      removedIds,
      updatedValues
    ])

    return (
      <FieldArray name={name}>
        {arrayHelpers => (
          <Container ref={ref as any}>
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
                        onClick={() => onTextClick(index)}
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
)

export default ArrayText
