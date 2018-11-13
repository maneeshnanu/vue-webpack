import { mount, createLocalView } from '@vue/test-utils'
import App from '../App'

test('App has .center-content class', () => {
  const vue = createLocalView()
  const app = mount(App, { vue })

  expect(app.classes()).toContain('center-conteny')
})
