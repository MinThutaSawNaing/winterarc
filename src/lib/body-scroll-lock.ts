const LOCK_COUNT_KEY = 'scrollLockCount'
const ORIGINAL_OVERFLOW_KEY = 'scrollLockOriginalOverflow'

function getLockCount(body: HTMLElement) {
  const value = Number(body.dataset[LOCK_COUNT_KEY] ?? '0')
  return Number.isFinite(value) && value > 0 ? value : 0
}

export function lockBodyScroll() {
  if (typeof document === 'undefined') {
    return
  }

  const body = document.body
  const lockCount = getLockCount(body)

  if (lockCount === 0) {
    body.dataset[ORIGINAL_OVERFLOW_KEY] = body.style.overflow || ''
    body.style.overflow = 'hidden'
  }

  body.dataset[LOCK_COUNT_KEY] = String(lockCount + 1)
}

export function unlockBodyScroll() {
  if (typeof document === 'undefined') {
    return
  }

  const body = document.body
  const lockCount = getLockCount(body)

  if (lockCount <= 1) {
    body.style.overflow = body.dataset[ORIGINAL_OVERFLOW_KEY] ?? ''
    delete body.dataset[LOCK_COUNT_KEY]
    delete body.dataset[ORIGINAL_OVERFLOW_KEY]
    return
  }

  body.dataset[LOCK_COUNT_KEY] = String(lockCount - 1)
}
