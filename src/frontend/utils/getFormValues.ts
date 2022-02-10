type GetFormData = <Values extends { _id?: string }>(
  storeValues: Values[],
  values: Values[]
) => {
  idsToDelete?: string[]
  dataToUpdate?: Values[]
  dataToCreate?: Values[]
  dataToRemove?: Values[]
}

const minOneOrNull = (array: any[]) => (array?.length > 0 ? array : null)

const getFormData: GetFormData = (storeValues, values) => {
  const dataToCreate = values.filter(value => !value?._id)

  const dataToUpdate = values
    .filter(value => {
      if (!value?._id) return false
      const oldValue = storeValues.find(({ _id }) => _id === value?._id)
      return oldValue !== value
    })
    .map(data => ({ ...data }))

  const idsToDelete = storeValues
    ?.filter(stored => !values.find(({ _id }) => _id === stored?._id))
    .map(({ _id }) => _id)

  const dataToRemove = storeValues
    ?.filter(stored => !values.find(({ _id }) => _id === stored?._id))
    .map(data => ({ ...data }))

  return {
    dataToCreate: minOneOrNull(dataToCreate),
    dataToUpdate: minOneOrNull(dataToUpdate),
    dataToRemove: minOneOrNull(dataToRemove),
    idsToDelete: minOneOrNull(idsToDelete)
  }
}

export default getFormData
