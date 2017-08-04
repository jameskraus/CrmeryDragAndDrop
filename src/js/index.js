// @flow

import GetIdAndType from './GetIdAndType'
import GetUploadStatusCallbacks from './GetUploadStatusCallbacks'
import ShowCrmeryMessages from './ShowCrmeryMessages'
import SendFile from './SendFile'
import SendFiles from './SendFiles'
import DragEventAcceptor from './DragEventAcceptor'
import BindFileDropListener from './BindFileDropListener'

// Get unknown stuff from window/document
const body = document.body
if (!body) throw new Error('Body not found')
const { id, type } = GetIdAndType(window)
const handlers = GetUploadStatusCallbacks(window)

// By your powers combined, create the function that
// will accept dropped files, send them, and send
// notifications to the built-in crmery functions
const NotifyCrmery = ShowCrmeryMessages(handlers)
const SendFileForOurPage = SendFile(id, type)
const SendAndNotify = (file: File) => {
  return SendFileForOurPage(file).then(res => {
    NotifyCrmery(res)
    return res
  })
}
const SendOnFileDrop = DragEventAcceptor(SendFiles(SendAndNotify))
BindFileDropListener(SendOnFileDrop)(body)
