// @flow
/*global it expect*/

import FileListMap from './FileListMap'

import MockFileList from './MockFileList'

it('Should map over a FileList', () => {
  // Must be mocked since FileList constructor is read-only
  const f1 = new File(['Content1'], 'c1.txt')
  const f2 = new File(['Content2'], 'c2.txt')

  const mockedFileList = MockFileList([f1, f2])

  const getName: File => string = (x: File) => x.name
  const names: Array<string> = FileListMap(mockedFileList, getName)

  expect(names[0]).toBe('c1.txt')
  expect(names[1]).toBe('c2.txt')
})
