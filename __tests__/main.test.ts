// import {wait} from '../src/wait'
// import * as process from 'process'
import {test} from '@jest/globals'
import {run} from '../src/main'

/* test('throws invalid number', async () => {
  const input = parseInt('foo', 10)
  await expect(wait(input)).rejects.toThrow('milliseconds not a number')
})

test('wait 500 ms', async () => {
  const start = new Date()
  await wait(500)
  const end = new Date()
  const delta = Math.abs(end.getTime() - start.getTime())
  expect(delta).toBeGreaterThan(450)
}) */

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  run()
})
