// @flow

const BindFileDropListener = (listener: (e: DragEvent) => any) => (
  elem: HTMLElement
) => {
  elem.addEventListener('drop', listener)
}

export default BindFileDropListener
