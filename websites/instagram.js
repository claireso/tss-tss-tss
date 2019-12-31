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
      type: 'attributes',
      config: { attributes: true, attributeFilter: ['style'], subtree: false },
      onChange: (mutation) => {
        if (mutation.target.getAttribute('style') === 'overflow: hidden;') {
          mutation.target.removeAttribute('style')

          const modal = mutation.target.querySelector('div[role="presentation"]')

          if (modal) {
            modal.parentNode.removeChild(modal)
          }
        }
      }
    }
  ]

  window.tssTssTss(mutations)
})()
