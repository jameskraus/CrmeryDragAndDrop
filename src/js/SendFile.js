// @flow

import 'whatwg-fetch'

import SerializeDocument from './SerializeDocument'

export const PostLocation =
  '/index.php?option=com_crmery&task=documents.uploadDocument&format=raw&tmpl=component'

export const MockableSendFile = (fetch: (*, *) => Promise<Response>) => (
  SerializeDocument: typeof SerializeDocument
) => (id: number, model: string) => (file: File): Promise<Response> => {
  const formdata = SerializeDocument(file, id, model)
  return fetch(PostLocation, {
    body: formdata,
    method: 'POST',
    credentials: 'same-origin',
  })
}

const SendFile = MockableSendFile(fetch)(SerializeDocument)

export default SendFile
