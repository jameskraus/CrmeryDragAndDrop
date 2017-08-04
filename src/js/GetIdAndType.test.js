// @flow
/*global it expect*/

import GetIdAndType from './GetIdAndType'

it('Should get id and type from a given global scope', () => {
  const globalScope = {
    id: 1,
    association_type: 'great!',
  }
  const { id, type } = GetIdAndType(globalScope)
  expect(id).toEqual(1)
  expect(type).toEqual('great!')
})

it('Should throw an error if id or association_type are not correct', () => {
  expect(() => {
    GetIdAndType({})
  }).toThrowError()
  expect(() => {
    GetIdAndType({ id: 1 })
  }).toThrowError()
  expect(() => {
    GetIdAndType({ association_type: 'yay' })
  }).toThrowError()
  expect(() => {
    // $FlowInvalidInputTest
    GetIdAndType({ id: 'yay' })
  }).toThrowError()
  expect(() => {
    // $FlowInvalidInputTest
    GetIdAndType({ association_type: 32 })
  }).toThrowError()
})
