// @flow
/*global it expect jest*/

import BindFileDropListener from './BindFileDropListener'

it('Should bind the listener on drop events', () => {
  const div = document.createElement('div')
  const listener = jest.fn()
  BindFileDropListener(listener)(div)

  const unrelatedEvent = new Event('unrelated')
  const dropEvent = new Event('drop')

  div.dispatchEvent(unrelatedEvent)
  div.dispatchEvent(dropEvent)

  expect(listener).toHaveBeenCalledTimes(1)
})
