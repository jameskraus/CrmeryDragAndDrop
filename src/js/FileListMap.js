// @flow

const FileListMap = <O>(xs: FileList, f: File => O): Array<O> => {
  const max = xs.length
  let res = []
  for (let i = 0; i < max; i++) {
    res.push(f(xs.item(i)))
  }
  return res
}

export default FileListMap
