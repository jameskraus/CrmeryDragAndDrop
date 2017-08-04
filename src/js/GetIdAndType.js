// @flow

const GetIdAndType = (globalScope: {
  id?: number,
  association_type?: string,
}) => {
  const id = globalScope.id
  const type = globalScope.association_type

  if (typeof id === 'number' && typeof type === 'string') {
    return { id, type }
  } else {
    throw new Error('id and association_type not found in global scope')
  }
}

export default GetIdAndType
