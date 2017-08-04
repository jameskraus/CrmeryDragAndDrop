// @flow
/*global it expect jest*/

import { MockableSendFile, PostLocation } from './SendFile'

it('Should send the data', done => {
  const MockSerializedDocument = new FormData()
  const SerializeDocument = () => MockSerializedDocument
  const file: File = new File(['Content'], 'name.ext')

  const fetch = jest.fn((loc, options) => {
    expect(loc).toEqual(PostLocation)
    expect(options.body).toEqual(MockSerializedDocument)
    expect(options.method).toEqual('POST')
    expect(options.credentials).toEqual('same-origin')
    done()
  })

  MockableSendFile(fetch)(SerializeDocument)(1, 'company')(file)
})
