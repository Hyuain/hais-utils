function debounce(fn, delay = 300) {
  // 等了一段时间，没有新的人上车了再发车
  // 任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行
  let timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}
