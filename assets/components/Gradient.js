import { IconLayui } from './icons/IconLayui.js'

/**
 * @description: 渐变色
 * @return {type}
 */
export const GradientItem = ({ className = '' }) => {
  return /* html */ `
    <div class="gradient-item-component w-full h-50px center space-x-10px ${className}">
      <div class="icon c-white text-30px hover:animate-pulse">
        <iconify-icon icon="f7:dog" inline />
      </div>
      <div class="icon c-white text-30px center space-x-20px hover:animate-pulse">
        ${IconLayui()}
      </div>
    </div>
  `
}
