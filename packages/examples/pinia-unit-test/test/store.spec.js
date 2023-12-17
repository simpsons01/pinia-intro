import { describe, beforeEach, it, expect } from "vitest"
import { setActivePinia, createPinia } from 'pinia'
import { useStore } from '../src/store'

describe('store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('increments', () => {
    const store = useStore()
    expect(store.count).toBe(0)
    store.addCountByOne()
    expect(store.count).toBe(1)
  })
})