(() => {
  window.tssTssTss = (mutations = []) => {
    mutations.map((_mutation = {}) => {
      if (!_mutation.target) return

      const spy = new MutationObserver((mutationsList, observer) => {
        for (let mutation of mutationsList) {
          _mutation.onChange && _mutation.onChange(mutation, observer)
        }
      })

      spy.observe(_mutation.target, _mutation.config)
    })
  }
})()
