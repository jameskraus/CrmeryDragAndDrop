// @flow
/*global it*/

import DragEventAcceptor from './DragEventAcceptor'

const FailIfCalled = () => {
  throw new Error('Should not have been called')
}

it('Should not evaluate for events without dataTransfer', () => {
  const BadEvent: any = {}
  DragEventAcceptor(FailIfCalled)(BadEvent)
})

it('Should not evaluate for events without dataTransfer.files', () => {
  const BadEvent: any = {
    dataTransfer: {},
    preventDefault: () => {},
  }
  DragEventAcceptor(FailIfCalled)(BadEvent)
})

it('Should not evaluate for events with no files', () => {
  const BadEvent: any = {
    dataTransfer: {
      files: {
        length: 0,
      },
    },
    preventDefault: () => {},
  }
  DragEventAcceptor(FailIfCalled)(BadEvent)
})

it('Should evaluate for events with files', done => {
  const ShouldBeCalled = () => done()

  const GoodEvent: any = {
    dataTransfer: {
      files: {
        length: 1,
        files: [],
      },
    },
    preventDefault: () => {},
  }

  DragEventAcceptor(ShouldBeCalled)(GoodEvent)
})
