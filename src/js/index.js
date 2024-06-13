import { GradientItem } from '../components/Gradient.js'
const { $ } = layui

console.log('Load index.js')

const loading = layer.load(0)
setPageComponent()

/**
 * @description: 设置页面事件
 * @return {type} Element
 */
function bindPageEvent() {
  /** 列表点击 */
  $('.gradient-items')
    .off('click', '.gradient-item-component')
    .on('click', '.gradient-item-component', function () {
      $(this).addClass('animate-bounce').siblings().removeClass('animate-bounce')
      $('#clickRecoveryEvent').removeClass('hidden').addClass('show')
    })

  /** 恢复按钮点击 */
  $('#clickRecoveryEvent')
    .off('click')
    .on('click', function () {
      $('.gradient-items').find('.gradient-item-component').removeClass('animate-bounce')
    })
}

/**
 * @description: 设置页面组件
 * @return {type} Element
 */
function setPageComponent() {
  $('.list').html(/* html */ `
    <div class="gradient-items space-y-20px w-100 mx-auto">
      ${['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#f1c40f', '#e67e22', '#e74c3c']
        .map((item, index) => {
          return /* html */ `
          ${GradientItem({ className: `bg-${item} hover:cursor-pointer` })}
        `
        })
        .join('')}
    </div>
  `)

  setTimeout(() => {
    bindPageEvent()
    layer.close(loading)
  }, 600)
}
