(function () {
  function getRuleState(password) {
    return {
      case: /[a-z]/.test(password) && /[A-Z]/.test(password),
      length: password.length >= 10,
      number: /[0-9]/.test(password),
    }
  }

  function setRuleState(item, isValid) {
    const checkbox = item.querySelector("[data-password-check]")
    const checkPath = item.querySelector("[data-password-check-path]")
    const label = item.querySelector("[data-password-label]")
    const strike = item.querySelector("[data-password-strike]")

    if (checkbox instanceof HTMLElement) {
      checkbox.classList.toggle("border-emerald-700", isValid)
      checkbox.classList.toggle("bg-emerald-700", isValid)
      checkbox.classList.toggle("text-white", isValid)
      checkbox.classList.toggle("scale-105", isValid)
      checkbox.classList.toggle("dark:border-emerald-200", isValid)
      checkbox.classList.toggle("dark:bg-emerald-200", isValid)
      checkbox.classList.toggle("dark:text-zinc-950", isValid)
      checkbox.classList.toggle("border-zinc-400", !isValid)
      checkbox.classList.toggle("bg-white", !isValid)
      checkbox.classList.toggle("text-transparent", !isValid)
      checkbox.classList.toggle("scale-100", !isValid)
      checkbox.classList.toggle("dark:border-zinc-500", !isValid)
      checkbox.classList.toggle("dark:bg-zinc-900", !isValid)
    }

    if (checkPath instanceof SVGPathElement) {
      checkPath.classList.toggle("[stroke-dashoffset:0]", isValid)
      checkPath.classList.toggle("[stroke-dashoffset:18]", !isValid)
    }

    item.classList.toggle("text-emerald-700", isValid)
    item.classList.toggle("dark:text-emerald-200", isValid)
    item.classList.toggle("text-muted-foreground", !isValid)
    item.classList.toggle("dark:text-zinc-300", !isValid)

    if (label instanceof HTMLElement) {
      label.classList.toggle("opacity-80", isValid)
      label.classList.toggle("opacity-100", !isValid)
    }

    if (strike instanceof HTMLElement) {
      strike.classList.toggle("scale-x-100", isValid)
      strike.classList.toggle("scale-x-0", !isValid)
    }
  }

  function updatePasswordRequirements(input) {
    const form = input.closest("form")
    const requirements = form?.querySelector("[data-password-requirements]")
    const hint = form?.querySelector("[data-password-requirements-hint]")
    if (!(requirements instanceof HTMLElement)) {
      return
    }

    const hasPassword = input.value.length > 0
    requirements.classList.toggle("mt-3", hasPassword)
    requirements.classList.toggle("mt-0", !hasPassword)
    requirements.classList.toggle("max-h-32", hasPassword)
    requirements.classList.toggle("max-h-0", !hasPassword)
    requirements.classList.toggle("translate-y-0", hasPassword)
    requirements.classList.toggle("translate-y-1", !hasPassword)
    requirements.classList.toggle("opacity-100", hasPassword)
    requirements.classList.toggle("opacity-0", !hasPassword)

    if (hint instanceof HTMLElement) {
      hint.classList.toggle("max-h-0", hasPassword)
      hint.classList.toggle("max-h-8", !hasPassword)
      hint.classList.toggle("-translate-y-1", hasPassword)
      hint.classList.toggle("translate-y-0", !hasPassword)
      hint.classList.toggle("opacity-0", hasPassword)
      hint.classList.toggle("opacity-100", !hasPassword)
    }

    const ruleState = getRuleState(input.value)

    for (const item of requirements.querySelectorAll("[data-password-rule]")) {
      if (!(item instanceof HTMLElement)) {
        continue
      }

      const rule = item.dataset.passwordRule
      setRuleState(item, Boolean(rule && ruleState[rule]))
    }
  }

  function setConfirmPasswordStatus(status, isVisible, isMatch) {
    const matchIcon = status.querySelector('[data-confirm-password-icon="match"]')
    const mismatchIcon = status.querySelector('[data-confirm-password-icon="mismatch"]')
    const message = status.querySelector("[data-confirm-password-message]")

    status.classList.toggle("max-h-8", isVisible)
    status.classList.toggle("max-h-0", !isVisible)
    status.classList.toggle("translate-y-0", isVisible)
    status.classList.toggle("-translate-y-1", !isVisible)
    status.classList.toggle("opacity-100", isVisible)
    status.classList.toggle("opacity-0", !isVisible)
    status.classList.toggle("text-emerald-700", isVisible && isMatch)
    status.classList.toggle("dark:text-emerald-200", isVisible && isMatch)
    status.classList.toggle("text-rose-700", isVisible && !isMatch)
    status.classList.toggle("dark:text-rose-300", isVisible && !isMatch)

    if (matchIcon instanceof SVGElement) {
      matchIcon.classList.toggle("hidden", !isMatch)
    }

    if (mismatchIcon instanceof SVGElement) {
      mismatchIcon.classList.toggle("hidden", isMatch)
    }

    if (message instanceof HTMLElement) {
      message.textContent = isMatch ? "cocok dengan password" : "tidak cocok dengan password"
    }
  }

  function updateConfirmPasswordStatus(form) {
    const password = form.querySelector("[data-password-input]")
    const confirmPassword = form.querySelector("[data-confirm-password-input]")
    const status = form.querySelector("[data-confirm-password-status]")

    if (
      !(password instanceof HTMLInputElement) ||
      !(confirmPassword instanceof HTMLInputElement) ||
      !(status instanceof HTMLElement)
    ) {
      return true
    }

    const isVisible = confirmPassword.value.length > 0
    const isMatch = password.value === confirmPassword.value
    setConfirmPasswordStatus(status, isVisible, isMatch)
    confirmPassword.setCustomValidity(isVisible && !isMatch ? "Konfirmasi password tidak cocok." : "")

    return !isVisible || isMatch
  }

  function bindPasswordValidation(root = document) {
    const forms = root.querySelectorAll("form")

    for (const form of forms) {
      if (!(form instanceof HTMLFormElement) || form.dataset.passwordValidationBound === "true") {
        continue
      }

      const password = form.querySelector("[data-password-input]")
      const confirmPassword = form.querySelector("[data-confirm-password-input]")

      if (!(password instanceof HTMLInputElement)) {
        continue
      }

      form.dataset.passwordValidationBound = "true"
      password.addEventListener("input", () => {
        updatePasswordRequirements(password)
        updateConfirmPasswordStatus(form)
      })

      if (confirmPassword instanceof HTMLInputElement) {
        confirmPassword.addEventListener("input", () => updateConfirmPasswordStatus(form))
      }

      form.addEventListener(
        "submit",
        (event) => {
          if (updateConfirmPasswordStatus(form)) {
            return
          }

          event.preventDefault()
          event.stopImmediatePropagation()
          confirmPassword?.focus()
        },
        true
      )

      updatePasswordRequirements(password)
      updateConfirmPasswordStatus(form)
    }
  }

  document.addEventListener("DOMContentLoaded", () => bindPasswordValidation())
  document.addEventListener("au7h:contentupdated", () => bindPasswordValidation())
})()
