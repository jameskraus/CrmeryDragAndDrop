// @flow
/*global it expect*/

import SerializeDocument from './SerializeDocument'

it('Should serialize a document into a FormData object', done => {
  const testFile = new File(['CONTENT'], 'file.ext')
  const id = 12
  const type = 'company'

  const actual = SerializeDocument(testFile, id, type)
  const actualId = actual.get('association_id')
  const actualType = actual.get('association_type')
  const actualFiles = actual.getAll('document')

  expect(actualId).toEqual(id.toString())
  expect(actualType).toEqual(type)
  expect(actualFiles.length).toEqual(1)

  const actualFile = actualFiles[0]

  if (typeof actualFile === 'string') {
    throw new Error('actualfiles was a string for some reason')
  }

  const fr = new FileReader()
  fr.onload = () => {
    expect(fr.result).toBe('CONTENT')
    done()
  }
  fr.readAsText(actualFile)
})
