import './style.css'
import { ThreeScene } from './scene'

// Create app container
const app = document.querySelector<HTMLDivElement>('#app')!
app.innerHTML = ''
app.style.width = '100vw'
app.style.height = '100vh'
app.style.overflow = 'hidden'
app.style.margin = '0'
app.style.padding = '0'

// Initialize Three.js scene
new ThreeScene(app)
