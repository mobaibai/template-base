import { GradientItem } from '../components/Gradient.js'

console.log('Load index.js')

setPageComponent()

function setPageComponent() {
  $('.list').html(/* html */ `
    <div class="gradient-items space-y-20px w-100 mx-auto">
      ${['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c']
        .map((item, index) => {
          return /* html */ `
          ${GradientItem({ className: `bg-${item} active:animate-bounce hover:cursor-pointer active:opacity-100 opacity-80` })}
        `
        })
        .join('')}
    </div>
  `)
}
