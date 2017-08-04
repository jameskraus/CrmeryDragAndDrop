// @flow
/*eslint no-console: ["error", { allow: ["error"] }] */

// Because Crmery only responds with a script to execute upon completion, we're
// going to just get the pertinent info from that response and then we'll
// call the function ourselves. This way we don't have to try and execute
// the script by appending it to the document or something like that.

const successRegex = /<script type="text\/javascript">window\.top\.window\.uploadSuccess\((\d+)\);<\/script>/

const errorRegex = /<script type="text\/javascript">window\.top\.window\.uploadError\("(.+)"\);<\/script>/

type CrmeryOkResponse = {
  status: 'ok',
  id: number,
}

type CrmeryErrorResponse = {
  status: 'error',
  msg: string,
}

type CrmeryResponse = CrmeryOkResponse | CrmeryErrorResponse

const ParseDocumentUploadResponse = (res: string): CrmeryResponse => {
  const successMatches = res.match(successRegex)
  if (successMatches != null) {
    const match = successMatches[1]
    return {
      status: 'ok',
      id: parseInt(match, 10),
    }
  }

  const errorMatches = res.match(errorRegex)
  if (errorMatches != null) {
    const match = errorMatches[1]
    return {
      status: 'error',
      msg: match,
    }
  }

  console.error('Unable to match Crmery response to regex: ', res)

  // Send our own error up the same way
  return {
    status: 'error',
    msg: 'Unknown error uploading file',
  }
}

export default ParseDocumentUploadResponse
