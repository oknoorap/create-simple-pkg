import {readdirSync, unlinkSync} from 'fs'
import path from 'path'
import test from 'ava'
import createSimplePkg from '../bin/create-simple-pkg'

const exampleDir = path.join(__dirname, 'example')
const expectedFileList = [
  '.editorconfig',
  '.eslintrc.js',
  '.travis.yml',
  '.gitignore',
  'appveyor.yml',
  'package.json'
]

test.before(() => {
  createSimplePkg.then(() => {
    console.log('Init')
  })
})

test.after(() => {
  expectedFileList.forEach(item => {
    unlinkSync(path.join(exampleDir, item))
  })
})

test('file list should be correct', t => {
  const exampleFileList = readdirSync(exampleDir)
  t.true(exampleFileList.includes('.editorconfig'))
  t.true(exampleFileList.includes('.eslintrc.js'))
  t.true(exampleFileList.includes('.travis.yml'))
  t.true(exampleFileList.includes('.gitignore'))
  t.true(exampleFileList.includes('appveyor.yml'))
  t.true(exampleFileList.includes('package.json'))
})
