// @flow

const MockFileList = (files: Array<File>) => {
  const mockedFileList: any = []
  files.forEach((f, i) => (mockedFileList[i] = f))
  mockedFileList.item = (i: number) => mockedFileList[i]
  return mockedFileList
}

export default MockFileList
