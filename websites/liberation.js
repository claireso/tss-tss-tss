(() => {
  const mutations = [
    // paywall
    {
      target: document.querySelector('body'),
      type: 'childList',
      config: { childList: true, subtree: false },
      onChange: (mutation, observer) => {
        const paywall = mutation.target.querySelector('div.pws')

        if (paywall) {
          paywall.parentNode.removeChild(paywall)
          mutation.target.classList.remove('pws-open')
          observer.disconnect()
        }
      }
    }
  ]

  window.tssTssTss(mutations)
})()
