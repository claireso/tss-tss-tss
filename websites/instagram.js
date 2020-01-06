/**
 * Instagram website:
 * - Remove the banner "Log in to instagram" at the bottom
 * - Remove the modal "Log in to instagram" which appears during the navigation
 * - Unlock the scroll after modal display
 */
(() => {
  const mutations = [
    // banner "log in to instagram"
    {
      target: document.querySelector('body'),
      type: 'childList',
      config: { childList: true, subtree: true },
      onChange: (mutation, observer) => {
        const xpath = "//div[contains(text(),'Log In to Instagram')]"
        const matchingElement = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue

        if (matchingElement !== null) {
          const banner = matchingElement.parentNode.parentNode.parentNode.parentNode
          banner.parentNode.removeChild(banner)
          observer.disconnect()
        }
      }
    },
    // modal "log in to instagram"
    {
      target: document.querySelector('body'),
      type: 'childList',
      config: { childList: true, subtree: false },
      onChange: (mutation) => {
        if (mutation.addedNodes.length) {
          const addedNode = mutation.addedNodes[0]

          if (addedNode.getAttribute('role') === 'presentation' && addedNode.parentNode) {
            addedNode.classList.add('tss_tss_tss_hidden')
          }
        }
      }
    },
    // unlock scroll
    {
      target: document.querySelector('body'),
      type: 'attributes',
      config: { attributes: true, attributeFilter: ['style'], subtree: false },
      onChange: (mutation) => {
        if (mutation.target.getAttribute('style') === 'overflow: hidden;') {
          mutation.target.removeAttribute('style')
        }
      }
    }
  ]

  window.tssTssTss(mutations)
})()
