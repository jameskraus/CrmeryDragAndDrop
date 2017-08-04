// @flow
/*global it expect*/

import GetUploadStatusCallbacks from './GetUploadStatusCallbacks'

it('Should throw if the success or error callbacks are unavailable', () => {
  expect(() => {
    const globalScope = {}
    GetUploadStatusCallbacks(globalScope)
  }).toThrow('Document success/error callbacks not found')
})

it('Should return the success and error callbacks for a document', () => {
  const uploadSuccess = () => {}
  const uploadError = () => {}
  const globalScope = {
    uploadSuccess,
    uploadError,
  }
  const { success, error } = GetUploadStatusCallbacks(globalScope)
  expect(typeof success).toBe('function')
  expect(typeof error).toBe('function')
})
