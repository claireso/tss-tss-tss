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
      config: { attributes: true, attributeFilter: ['style'], subtree: true },
      onChange: (mutation) => {
        if (mutation.target.classList.contains('content')) {
          mutation.target.classList.add('tss_tss_tss_force_visibility')
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
      target: document.querySelector('div.paywall-abo div.width_full'),
      config: { childList: true, subtree: true },
      onChange: (mutation, observer) => {
        if (mutation.removedNodes.length) {
          const removedNode = mutation.removedNodes[0]

          if (removedNode.classList.contains('content')) {
            mutation.target.appendChild(removedNode)
            observer.disconnect()
          }
        }
      }
    }
  ]

  window.tssTssTss(mutations)
})()
