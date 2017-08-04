// @flow

// Required or the drop event never makes it to our drop event handler
export const addCopyEffect = (e: DragEvent) => {
  e.preventDefault()
  e.stopPropagation()

  const dataTransfer = e.dataTransfer
  if (dataTransfer) {
    try {
      dataTransfer.dropEffect = 'copy'
    } catch (err) {
      // toss out any errors
    }
  }
}

const BindFileDropListener = (listener: (e: DragEvent) => any) => (
  elem: HTMLElement
) => {
  elem.addEventListener('drop', listener)
  elem.addEventListener('dragover', addCopyEffect)
}

export default BindFileDropListener
