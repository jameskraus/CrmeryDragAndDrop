// @flow

import FileListMap from './FileListMap'

export const SendFiles = (sendFile: File => Promise<any>) => (
  xs: FileList
): Promise<Array<Response>> => {
  const sender = (file: File) => sendFile(file)
  return Promise.all(FileListMap(xs, sender))
}

export default SendFiles
