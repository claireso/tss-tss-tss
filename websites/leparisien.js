(() => {
  const mutations = [
    // paywall type 1
    {
      target: document.querySelector('div#paywall-connect'),
      type: 'childList',
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
      type: 'attributes',
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
      type: 'childList',
      config: { childList: true, subtree: false },
      onChange: (mutation, observer) => {
        const wrapper = mutation.target.parentNode
        wrapper.parentNode.removeChild(wrapper)
        observer.disconnect()
      }
    }
  ]

  window.tssTssTss(mutations)
})()
