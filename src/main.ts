import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
// import './toturial.ts';
// import './typePrac.ts';
// import './uniontypes.ts';
// import './anytype.ts';
// import './arrayfunction.ts'
// import './unionQuest.ts'
// import './array.ts'
// import './carObjects.ts'
// import './objectTask.ts'
// import './functionLear.ts'
// import './calculate.ts'
// import './addThree.ts'
import './namechecker.ts'
// import './calculationfunc.ts'
// import './sumfunc.ts'
// import './voidtype.ts'
// import './typechallenge.ts'
// import './objectin.ts'
// import './createStduent.ts'
// import './processData.ts'
// import './alias.ts'
// import './employeeTask.ts'
// import './intersectionType.ts'
// import './dynamicAlias.ts'
// import './typeInterface.ts'
// import './discountedBook.ts'
// import './ramUpgrade.ts'
// import './interfaceMarge.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
