import {readdirSync, unlinkSync} from 'fs'
import path from 'path'
import test from 'ava'
import createSimplePkg from '../bin/create-simple-pkg'

const fileList = readdirSync(path.resolve(__dirname, '..', 'template'))
const exampleDir = path.join(__dirname, 'example')
const exampleFileList = readdirSync(exampleDir)
const expectedFileList = [
  '.editorconfig',
  '.eslintrc.js',
  '.travis.yml',
  'appveyor.yml',
  'gitignore',
  'package.json'
]

test.before(() => {
  createSimplePkg.then(() => {
    console.log('Init')
  })
})

test.after(() => {
  exampleFileList.forEach(item => {
    unlinkSync(path.join(exampleDir, item))
  })
})

test('file list should be completed', t => {
  t.deepEqual(exampleFileList, expectedFileList)
})
