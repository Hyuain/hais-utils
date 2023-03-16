function throttle(fn, interval = 300) {
  // 冷却时间
  // 指定时间间隔内只会执行一次任务
  let canRun = true
  return function() {
    if (!canRun) return
    fn.apply(this, arguments)
    canRun = false
    setTimeout(() => {
      canRun = true
    }, interval)
  }
}
