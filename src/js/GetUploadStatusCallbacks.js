// @flow

type scopeType = {
  uploadSuccess?: (x: number) => any,
  uploadError?: (error: string) => any,
}

const GetUploadStatusCallbacks = (globalScope: scopeType) => {
  const success = globalScope.uploadSuccess
  const error = globalScope.uploadError

  if (typeof success !== 'function' || typeof error !== 'function') {
    throw new Error('Document success/error callbacks not found')
  }

  return { success, error }
}

export default GetUploadStatusCallbacks
