import { ObjectId } from 'mongodb'

const getFormData = <Values extends { _id: ObjectId }>(
  storeValues: Values[],
  values: Values[]
): {
  idsToRemove: ObjectId[]
  dataToUpdate: Values[]
  dataToCreate: Values[]
} => {
  const dataToCreate = values.filter(value => !value._id)

  const dataToUpdate = values.filter(value => {
    if (!value._id) return false
    const oldValue = storeValues.find(({ _id }) => _id === value._id)
    return oldValue !== value
  })

  const idsToRemove = storeValues
    .filter(stored => !values.find(({ _id }) => _id === stored._id))
    .map(({ _id }) => _id)

  return { dataToUpdate, idsToRemove, dataToCreate }
}

export default getFormData
