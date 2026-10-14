import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="center">

  <div>

  </div>S
</section>

<div class="ticks"></div>

<section id="next-steps">
  
</section>

<div class="ticks"></div>
<section id="spacer">
</section>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
