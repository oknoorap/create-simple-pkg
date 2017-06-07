import {readdirSync} from 'fs'
import path from 'path'
import test from 'ava'
import createSimplePkg from '../bin/create-simple-pkg'

const fileList = readdirSync(path.resolve(__dirname, '..', 'template'))

test.before(() => {
  createSimplePkg.then(() => {
    console.log('Init')
  })
})

test.after(() => {
  console.log(fileList)
})

test('file list should be completed', t => {
  t.pass()
})
