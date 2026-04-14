(function () {
  const MatrixAnimationCtor = window.MatrixAnimation?.MatrixAnimation

  if (!MatrixAnimationCtor) {
    return
  }

  const originalPlay = MatrixAnimationCtor.prototype.play
  if (!MatrixAnimationCtor.prototype.__au7hFadePatched) {
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

    MatrixAnimationCtor.prototype.__au7hFadePatched = true
    MatrixAnimationCtor.prototype.__au7hOriginalPlay = originalPlay
  }

  function refineTrailRenderer(instance) {
    const sampleDrop = instance.raindrops?.[0]
    if (!sampleDrop) {
      return
    }

    const rainDropProto = Object.getPrototypeOf(sampleDrop)
    if (!rainDropProto || rainDropProto.__au7hTrailRefined) {
      return
    }

    // Repaint a short gradient tail while locally washing the previous glyph cells.
    rainDropProto.clear = function clearRefinedTrail(ctx) {
      if (!Array.isArray(this.trailChars) || this.trailChars.length === 0) {
        return
      }

      const fontSize = Number(this.config.fontSize ?? 14)
      const cellWidth = Math.max(fontSize * 1.8, 18)
      const cellHeight = Math.max(fontSize * 1.55, 20)
      const trailColors = Array.isArray(this.config.trailColors) ? this.config.trailColors : null
      const eraseColor = this.matrixAnimation.options.eraseColor ?? "rgba(255,255,255,0.38)"

      ctx.save()
      ctx.font = this.font
      ctx.shadowColor = "rgba(0,0,0,0)"
      ctx.shadowBlur = 0

      for (let index = this.trailChars.length - 1; index >= 0; index -= 1) {
        const trailChar = this.trailChars[index]
        if (!trailChar) {
          continue
        }

        ctx.fillStyle = eraseColor
        ctx.fillRect(
          trailChar.x - cellWidth / 2,
          trailChar.y - cellHeight * 0.82,
          cellWidth,
          cellHeight
        )

        ctx.fillStyle = trailColors?.[index] ?? this.config.trailColor ?? "rgba(24,24,27,0.4)"
        ctx.fillText(trailChar.char, trailChar.x, trailChar.y)
      }

      ctx.restore()
    }

    rainDropProto.__au7hTrailRefined = true
  }

  const matrixPreset = {
    rainWidth: 100,
    rainHeight: 18,
    minFrameTime: 48,
    syncFrame: false,
    trailColorLogic: "sequential",
    eraseColor: "rgba(255,255,255,0.38)",
    rainDrop: {
      direction: "TD",
      charArrays: [
        "⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿⡀⡁⡂⡃⡄⡅⡆⡇⡈⡉⡊⡋⡌⡍⡎⡏⡐⡑⡒⡓⡔⡕⡖⡗⡘⡙⡚⡛⡜⡝⡞⡟⡠⡡⡢⡣⡤⡥⡦⡧⡨⡩⡪⡫⡬⡭⡮⡯⡰⡱⡲⡳⡴⡵⡶⡷⡸⡹⡺⡻⡼⡽⡾⡿⢀⢁⢂⢃⢄⢅⢆⢇⢈⢉⢊⢋⢌⢍⢎⢏⢐⢑⢒⢓⢔⢕⢖⢗⢘⢙⢚⢛⢜⢝⢞⢟⢠⢡⢢⢣⢤⢥⢦⢧⢨⢩⢪⢫⢬⢭⢮⢯⢰⢱⢲⢳⢴⢵⢶⢷⢸⢹⢺⢻⢼⢽⢾⢿⣀⣁⣂⣃⣄⣅⣆⣇⣈⣉⣊⣋⣌⣍⣎⣏⣐⣑⣒⣓⣔⣕⣖⣗⣘⣙⣚⣛⣜⣝⣞⣟⣠⣡⣢⣣⣤⣥⣦⣧⣨⣩⣪⣫⣬⣭⣮⣯⣰⣱⣲⣳⣴⣵⣶⣷⣸⣹⣺⣻⣼⣽⣾⣿",
      ],
      headColor: "rgba(9,9,11,0.88)",
      trailColor: "rgba(24,24,27,0.56)",
      trailColors: [
        "rgba(24,24,27,0.48)",
        "rgba(24,24,27,0.36)",
        "rgba(24,24,27,0.27)",
        "rgba(24,24,27,0.18)",
        "rgba(24,24,27,0.1)",
      ],
      fontSize: 14,
      fontFamily: "Backwards",
      randomizePosition: true,
      frameDelay: 50,
      minFrameDelay: 50,
      maxFrameDelay: 130,
      randomizeFrameDelay: true,
      jitterLeftStrength: 0.75,
      jitterRightStrength: 0.75,
      jitterUpStrength: 0,
      jitterDownStrength: 10,
    },
    trailBloomSize: 0,
    trailBloomColor: "rgba(24,24,27,0)",
    headBloomSize: 0,
    headBloomColor: "rgba(9,9,11,0)",
    warmupIterations: 50,
    fadeStrength: 0.03,
    fadeColor: "rgba(255,255,255,0.03)",
  }

  function initializeMatrixRain(container) {
    if (container.__matrixRainInstance) {
      return
    }

    const config = structuredClone(matrixPreset)
    config.fadeColor = container.dataset.rainFadeColor ?? config.fadeColor
    config.eraseColor = container.dataset.rainEraseColor ?? config.eraseColor
    config.rainDrop.headColor = container.dataset.rainHeadColor ?? config.rainDrop.headColor
    config.rainDrop.trailColor = container.dataset.rainColor ?? config.rainDrop.trailColor

    container.style.backgroundColor = container.dataset.rainBackground ?? "#ffffff"

    const instance = new MatrixAnimationCtor(container, config)
    refineTrailRenderer(instance)
    instance.ctx.fillStyle = container.dataset.rainBackground ?? "#ffffff"
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
