(function () {
  const MatrixAnimationCtor = window.MatrixAnimation?.MatrixAnimation

  if (!MatrixAnimationCtor) {
    return
  }

  const originalPlay = MatrixAnimationCtor.prototype.play
  if (!MatrixAnimationCtor.prototype.__kamsisFadePatched) {
    MatrixAnimationCtor.prototype.play = function playWithCustomFade() {
      if (this.fadeInterval) clearInterval(this.fadeInterval)
      if (this.frameId) cancelAnimationFrame(this.frameId)

      this.stopAnimation = false
      this.fadeInterval = setInterval(() => {
        this.ctx.fillStyle = this.options.fadeColor ?? `rgba(0,0,0,${this.options.fadeStrength ?? 0.05})`
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)
      }, 20)

      this.render()
    }

    MatrixAnimationCtor.prototype.__kamsisFadePatched = true
    MatrixAnimationCtor.prototype.__kamsisOriginalPlay = originalPlay
  }

  const matrixPreset = {
    rainWidth: 10,
    rainHeight: 18,
    minFrameTime: 125,
    syncFrame: false,
    rainDrop: {
      direction: "TD",
      charArrays: [
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZアァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン",
      ],
      headColor: "rgba(9,9,11,0.98)",
      trailColor: "rgba(24,24,27,0.74)",
      fontSize: 16,
      fontFamily: "Backwards",
      randomizePosition: true,
      frameDelay: 50,
      minFrameDelay: 50,
      maxFrameDelay: 130,
      randomizeFrameDelay: true,
      jitterLeftStrength: 0,
      jitterRightStrength: 0,
      jitterUpStrength: 0,
      jitterDownStrength: 0,
    },
    trailBloomSize: 0,
    trailBloomColor: "rgba(0,0,0,0)",
    headBloomSize: 0,
    headBloomColor: "rgba(0,0,0,0)",
    warmupIterations: 50,
    fadeStrength: 0.05,
  }

  function initializeMatrixRain(container) {
    if (container.__matrixRainInstance) {
      return
    }

    const config = structuredClone(matrixPreset)
    config.fadeColor = container.dataset.rainFadeColor ?? "rgba(228,228,231,0.18)"
    config.rainDrop.headColor = container.dataset.rainHeadColor ?? config.rainDrop.headColor
    config.rainDrop.trailColor = container.dataset.rainColor ?? config.rainDrop.trailColor

    container.style.backgroundColor = container.dataset.rainBackground ?? "#e4e4e7"

    const instance = new MatrixAnimationCtor(container, config)
    instance.ctx.fillStyle = container.dataset.rainBackground ?? "#e4e4e7"
    instance.ctx.fillRect(0, 0, instance.canvasWidth, instance.canvasHeight)

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      instance.pause()
    }

    container.__matrixRainInstance = instance
  }

  function boot() {
    document.querySelectorAll("[data-matrix-rain]").forEach(initializeMatrixRain)
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot, { once: true })
  } else {
    boot()
  }
})()
