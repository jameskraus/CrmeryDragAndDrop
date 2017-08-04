// @flow
/*eslint-env node*/
/*global Response it expect jest*/
/*eslint no-console: ["error", { allow: ["error"] }] */

import ShowCrmeryMessages from './ShowCrmeryMessages'

const doNoCall = () => {
  throw 'Should not have been called'
}

const CrmerySuccessMessage = (id: number) =>
  `<script type="text/javascript">window.top.window.uploadSuccess(${id});</script>`
const MockCrmerySucessResponse = (id: number) =>
  new Response(CrmerySuccessMessage(id))

const CrmeryErrorMessage = (msg: string) =>
  `<script type="text/javascript">window.top.window.uploadError("${msg}");</script>`
const MockCrmeryErrorResponse = (msg: string) =>
  new Response(CrmeryErrorMessage(msg))

const CrmeryInvalidMessage = `~~WTF is this response~~`
const MockCrmeryInvalidResponse = new Response(CrmeryInvalidMessage)

it('Should show message for successful upload', done => {
  const handlers = {
    success: i => {
      expect(i).toBe(12)
      done()
    },
    error: doNoCall,
  }
  const res = MockCrmerySucessResponse(12)
  ShowCrmeryMessages(handlers)(res)
})

it('Should show error message for crmery error', done => {
  const handlers = {
    success: doNoCall,
    error: msg => {
      expect(msg).toBe('no go')
      done()
    },
  }
  const res = MockCrmeryErrorResponse('no go')
  ShowCrmeryMessages(handlers)(res)
})

it('Should show error message for unexpected crmery message', done => {
  const prevConsole = global.console
  global.console = { error: jest.fn() }

  const handlers = {
    success: doNoCall,
    error: msg => {
      expect(msg).toBe('Unknown error uploading file')
      expect(console.error).toBeCalled()
      global.console = prevConsole
      done()
    },
  }

  ShowCrmeryMessages(handlers)(MockCrmeryInvalidResponse)
})

it('Should show error message for total failure', done => {
  const handlers = {
    success: doNoCall,
    error: msg => {
      expect(msg).toBe('Failed to upload file')
      done()
    },
  }
  const res = new Response('', { status: 500 })
  ShowCrmeryMessages(handlers)(res)
})
