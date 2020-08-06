/**
 * Le parisien website:
 * - Remove paywall
 * - Make content readable
 */
(() => {
  const mutations = [
    // paywall type 1
    {
      target: document.querySelector('div#paywall-connect'),
      config: { childList: true, subtree: false },
      onChange: (mutation, observer) => {
        const wrapper = mutation.target.parentNode
        wrapper.parentNode.removeChild(wrapper)
        observer.disconnect()
      }
    },
    // content
    {
      target: document.querySelector('div.article-section'),
      config: { attributes: true, attributeFilter: ['class'], subtree: true },
      onChange: (mutation, observer) => {
        if (mutation.target.classList.contains('content')) {
          mutation.target.classList.remove('blurText')
          observer.disconnect()
        }
      }
    },
    // paywall type 2
    {
      target: document.querySelector('div#hpaywall-offer'),
      config: { childList: true, subtree: false },
      onChange: (mutation, observer) => {
        const wrapper = mutation.target.parentNode
        wrapper.parentNode.removeChild(wrapper)
        observer.disconnect()
      }
    },
    // reinject removed content
    {
      target: document.querySelector('div.comments-wrapper'),
      config: { childList: true, subtree: true },
      onChange: (mutation, observer) => {
        if (mutation.removedNodes.length) {
          const removedNode = mutation.removedNodes[0]

          mutation.target.appendChild(removedNode)
          observer.disconnect()
        }
      }
    }
  ]

  window.tssTssTss(mutations)
})()
