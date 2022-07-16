/**
 * @param  {string} selector
 * @param  {HTMLElement} node=document
 * @returns {HTMLElement}
 */
export function $ (selector, node = document){
    return node.querySelector(selector)
}
/**
 * @param  {string} selector
 * @param  {HTMLElement} node=document
 * @returns {HTMLElement[]}
 */
export function $$ (selector, node = document){
    return [...node.querySelectorAll(selector)]
}