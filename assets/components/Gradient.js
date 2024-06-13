import { IconLayui } from './icons/IconLayui.js'

/**
 * @description: 渐变色
 * @return {type}
 */
export const GradientItem = ({ className = '' }) => {
  return /* html */ `
    <div class="gradient-item-component w-full h-50px center ${className}">
      <div class="icon c-white text-20px center">
        ${IconLayui()}
      </div>
    </div>
  `
}
