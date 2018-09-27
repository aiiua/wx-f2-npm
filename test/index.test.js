const _ = require('./utils')

let componentId
let component

beforeAll(async () => {
  componentId = await _.load('index', 'comp')
})

test('render', async () => {
  component = _.render(componentId, {canvasId: 'canvasId'})

  const parent = document.createElement('parent-wrapper')
  component.attach(parent)

  expect(_.match(component.dom, '<wx-canvas class="f2-canvas"></wx-canvas>')).toBe(true)
})
