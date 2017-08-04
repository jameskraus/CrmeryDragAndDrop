// @flow
/*global global it expect jest*/
/*eslint no-console: ["error", { allow: ["error"] }] */

import ParseDocumentUploadResponse from './ParseDocumentUploadResponse'

const Success =
  '<script type="text/javascript">window.top.window.uploadSuccess(10);</script>'
const ErrorRes =
  '<script type="text/javascript">window.top.window.uploadError("INVALID EXTENSION");</script>'
const Invalid =
  '<script type="text/javascript">window.top.window.wtf(10);</script>'

it('Should parse out the document_id for valid returns', () => {
  const res = ParseDocumentUploadResponse(Success)
  if (res.status === 'ok') {
    expect(res.id).toBe(10)
  } else {
    throw new Error('Wrong status')
  }
})

it('Should parse out the message for error returns', () => {
  const res = ParseDocumentUploadResponse(ErrorRes)
  if (res.status === 'error') {
    expect(res.msg).toBe('INVALID EXTENSION')
  } else {
    throw new Error('Wrong status')
  }
})

it('Should error on anything but success', () => {
  const prevConsole = global.console
  global.console = { error: jest.fn() }

  const res = ParseDocumentUploadResponse(Invalid)

  if (res.status === 'error') {
    expect(res.msg).toBe('Unknown error uploading file')
    expect(console.error).toBeCalled()
    global.console = prevConsole
  } else {
    throw new Error('Wrong status')
  }
})
