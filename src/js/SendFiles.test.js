// @flow
/*eslint-env node*/
/*global it expect jest*/

import SendFiles from './SendFiles'
import MockFileList from './MockFileList'

const f1 = new File(['Content'], 'c1.txt')
const f2 = new File(['Content2'], 'c2.txt')

const MockedFileList = MockFileList([f1, f2])

const noop = () => Promise.resolve({})

it('Accepts function which will submit each file', () => {
  expect(typeof SendFiles(noop)).toBe('function')
})

it('Accepts a file list', () => {
  SendFiles(noop)(MockedFileList)
})

it('Calls function for each file in FileList and return promise', done => {
  const cb = jest.fn()
  SendFiles(cb)(MockedFileList).then(() => {
    expect(cb).toHaveBeenCalledTimes(2)
    done()
  })
})
