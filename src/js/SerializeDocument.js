// @flow

// type should be 'company' or 'person'
const SerializeDocument = (file: File, id: number, type: string): FormData => {
  const data = new FormData()
  data.append('document', file)
  data.append('association_id', id.toString())
  data.append('association_type', type)
  return data
}

export default SerializeDocument
