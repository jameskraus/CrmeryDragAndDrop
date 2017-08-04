// @flow

// Takes a FileList acceptor and returns a function that accepts DragEvents
const DragEventAcceptor = <T>(f: FileList => T) => (e: DragEvent): void | T => {
  const dataTransfer = e.dataTransfer
  if (!dataTransfer) {
    // No dataTransfer available on event
    return
  }

  e.preventDefault()
  e.stopPropagation()

  try {
    dataTransfer.dropEffect = 'copy'
  } catch (err) {
    // toss out any errors
  }

  const files = dataTransfer.files
  if (!files || files.length < 1) {
    // No items in dataTransfer
    return
  }

  return f(files)
}

export default DragEventAcceptor
