// @flow
/*global it expect jest*/

import DragEventAcceptor from './DragEventAcceptor'

const FailIfCalled = () => {
  throw new Error('Should not have been called')
}

it('Should not evaluate for events without dataTransfer', () => {
  const BadEvent: any = {
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
  }

  DragEventAcceptor(FailIfCalled)(BadEvent)
  expect(BadEvent.preventDefault).toHaveBeenCalledTimes(0)
  expect(BadEvent.stopPropagation).toHaveBeenCalledTimes(0)
})

it('Should not evaluate for events without dataTransfer.files', () => {
  const BadEvent: any = {
    dataTransfer: {},
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
  }

  DragEventAcceptor(FailIfCalled)(BadEvent)

  expect(BadEvent.preventDefault).toHaveBeenCalledTimes(1)
  expect(BadEvent.stopPropagation).toHaveBeenCalledTimes(1)
})

it('Should not evaluate for events with no files', () => {
  const BadEvent: any = {
    dataTransfer: {
      files: {
        length: 0,
      },
    },
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
  }

  DragEventAcceptor(FailIfCalled)(BadEvent)

  expect(BadEvent.preventDefault).toHaveBeenCalledTimes(1)
  expect(BadEvent.stopPropagation).toHaveBeenCalledTimes(1)
})

it('Should evaluate for events with files', done => {
  const GoodEvent: any = {
    dataTransfer: {
      files: {
        length: 1,
        files: [],
      },
    },
    preventDefault: jest.fn(),
    stopPropagation: jest.fn(),
  }

  const ShouldBeCalled = () => {
    expect(GoodEvent.dataTransfer.dropEffect).toBe('copy')
    expect(GoodEvent.preventDefault).toHaveBeenCalledTimes(1)
    expect(GoodEvent.stopPropagation).toHaveBeenCalledTimes(1)
    done()
  }

  DragEventAcceptor(ShouldBeCalled)(GoodEvent)
})
