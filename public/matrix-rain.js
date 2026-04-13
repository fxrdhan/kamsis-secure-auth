class MatrixRain {
  constructor(container, options = {}) {
    this.container = container
    this.options = {
      background: options.background ?? "#e4e4e7",
      color: options.color ?? "rgba(24,24,27,0.58)",
      headColor: options.headColor ?? "rgba(9,9,11,0.96)",
      fontSize: options.fontSize ?? 16,
      fadeAlpha: options.fadeAlpha ?? 0.14,
      minSpeed: options.minSpeed ?? 0.65,
      maxSpeed: options.maxSpeed ?? 1.45,
      density: options.density ?? 0.88,
      characters:
        options.characters ??
        "アイウエオカキクケコサシスセソタチツテトナニヌネノ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    }

    this.columns = []
    this.frameHandle = 0
    this.lastFrameTime = 0
    this.running = false

    this.canvas = document.createElement("canvas")
    this.canvas.setAttribute("aria-hidden", "true")
    this.canvas.className = "absolute inset-0 h-full w-full"
    this.context = this.canvas.getContext("2d")
    this.container.append(this.canvas)

    this.resizeObserver = new ResizeObserver(() => this.resize())
    this.resizeObserver.observe(this.container)

    this.onVisibilityChange = () => {
      if (document.hidden) {
        this.stop()
      } else {
        this.start()
      }
    }

    document.addEventListener("visibilitychange", this.onVisibilityChange)

    this.resize()
    this.start()
  }

  resize() {
    const ratio = window.devicePixelRatio || 1
    const width = Math.max(1, this.container.clientWidth)
    const height = Math.max(1, this.container.clientHeight)

    this.width = width
    this.height = height
    this.canvas.width = Math.floor(width * ratio)
    this.canvas.height = Math.floor(height * ratio)
    this.context.setTransform(ratio, 0, 0, ratio, 0, 0)
    this.context.textBaseline = "top"
    this.context.textAlign = "center"
    this.context.font = `${this.options.fontSize}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace`

    const columnWidth = Math.max(this.options.fontSize * 0.95, 14)
    const columnCount = Math.max(10, Math.floor(width / columnWidth))
    this.columns = Array.from({ length: columnCount }, (_, index) =>
      this.createColumn(index * columnWidth + columnWidth / 2)
    )

    this.paintBackground(1)
  }

  createColumn(x) {
    const charArray = Array.from(this.options.characters)
    const baseLength = Math.max(8, Math.floor(this.height / this.options.fontSize / 3))

    return {
      x,
      y: Math.random() * -this.height,
      speed: this.random(this.options.minSpeed, this.options.maxSpeed) * this.options.fontSize,
      length: Math.max(7, Math.floor(baseLength * this.random(0.7, 1.35))),
      chars: charArray,
      interval: this.random(36, 84),
      nextStep: 0,
      active: Math.random() < this.options.density,
    }
  }

  random(min, max) {
    return Math.random() * (max - min) + min
  }

  paintBackground(alpha = this.options.fadeAlpha) {
    this.context.fillStyle = this.options.background
    this.context.globalAlpha = alpha
    this.context.fillRect(0, 0, this.width, this.height)
    this.context.globalAlpha = 1
  }

  start() {
    if (this.running || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      this.paintBackground(1)
      return
    }

    this.running = true
    this.lastFrameTime = performance.now()
    this.frameHandle = window.requestAnimationFrame((time) => this.render(time))
  }

  stop() {
    this.running = false
    window.cancelAnimationFrame(this.frameHandle)
  }

  destroy() {
    this.stop()
    this.resizeObserver.disconnect()
    document.removeEventListener("visibilitychange", this.onVisibilityChange)
    this.canvas.remove()
  }

  render(time) {
    if (!this.running) {
      return
    }

    const elapsed = Math.min(64, time - this.lastFrameTime)
    this.lastFrameTime = time

    this.paintBackground()

    for (const column of this.columns) {
      if (!column.active) {
        if (Math.random() > 0.9975) {
          column.active = true
          column.y = Math.random() * -this.height * 0.35
        }
        continue
      }

      column.nextStep += elapsed
      if (column.nextStep < column.interval) {
        continue
      }

      column.nextStep = 0
      column.y += column.speed
      this.drawColumn(column)

      const tailLimit = this.height + column.length * this.options.fontSize
      if (column.y > tailLimit) {
        column.y = Math.random() * -this.height * 0.45
        column.speed = this.random(this.options.minSpeed, this.options.maxSpeed) * this.options.fontSize
        column.length = Math.max(7, Math.floor(column.length * this.random(0.75, 1.25)))
        column.interval = this.random(36, 84)
        column.active = Math.random() < this.options.density
      }
    }

    this.frameHandle = window.requestAnimationFrame((nextTime) => this.render(nextTime))
  }

  drawColumn(column) {
    const fontSize = this.options.fontSize

    for (let offset = 0; offset < column.length; offset += 1) {
      const y = column.y - offset * fontSize
      if (y < -fontSize || y > this.height + fontSize) {
        continue
      }

      const character = column.chars[Math.floor(Math.random() * column.chars.length)]
      const alpha = offset === 0 ? 1 : Math.max(0.08, 1 - offset / column.length)

      this.context.fillStyle = offset === 0 ? this.options.headColor : this.options.color
      this.context.globalAlpha = alpha
      this.context.fillText(character, column.x, y)
    }

    this.context.globalAlpha = 1
  }
}

const rainInstances = new WeakMap()

function initMatrixRain() {
  document.querySelectorAll("[data-matrix-rain]").forEach((element) => {
    if (rainInstances.has(element)) {
      return
    }

    const instance = new MatrixRain(element, {
      background: element.dataset.rainBackground,
      color: element.dataset.rainColor,
      headColor: element.dataset.rainHeadColor,
    })

    rainInstances.set(element, instance)
  })
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initMatrixRain, { once: true })
} else {
  initMatrixRain()
}
