// @flow

import ParseDocumentUploadResponse from './ParseDocumentUploadResponse'

type handlerType = {
  success: (id: number) => void,
  error: (msg: string) => void,
}

const ShowCrmeryMessages = (handler: handlerType) => (res: Response) => {
  if (!res.ok) {
    handler.error('Failed to upload file')
  } else {
    res.text().then(text => {
      const CrmeryObj = ParseDocumentUploadResponse(text)
      if (CrmeryObj.status === 'ok') {
        handler.success(CrmeryObj.id)
      } else {
        handler.error(CrmeryObj.msg)
      }
    })
  }
}

export default ShowCrmeryMessages
