// @flow

// Required or the drop event never makes it to our drop event handler
const swallowEvent = (e: Event) => {
  e.preventDefault()
  e.stopPropagation()
}

const BindFileDropListener = (listener: (e: DragEvent) => any) => (
  elem: HTMLElement
) => {
  elem.addEventListener('drop', listener)
  elem.addEventListener('dragover', swallowEvent)
}

export default BindFileDropListener
