type GetNewValues = <ValuesType extends { _id: string }>(
  oldValues: ValuesType[],
  {
    addedValues,
    updatedValues,
    deletedValues
  }: {
    addedValues: ValuesType[]
    updatedValues: ValuesType[]
    deletedValues: ValuesType[]
  }
) => ValuesType[]

const getNewValues: GetNewValues = (
  oldValues,
  { addedValues, updatedValues, deletedValues }
) => {
  let newValues = oldValues ? oldValues : []

  if (!!addedValues) newValues = newValues.concat(addedValues)

  if (!!updatedValues)
    newValues = newValues.map(
      prev => updatedValues.find(({ _id }) => _id === prev._id) || prev
    )

  if (!!deletedValues)
    newValues = newValues.filter(
      prev => !deletedValues.find(({ _id }) => _id === prev._id)
    )

  return newValues
}

export default getNewValues
