import reducer, { defaultState, setLoading } from 'reducers/loaders'
import { expect } from 'chai'
import { Map } from 'immutable'

describe('(Redux) loaders', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
    it('sets the given key to true', () => {
      let action = setLoading('messages', true)
      let state = reducer(undefined, action)
      expect(state).to.equal(Map({
        messages: true,
        comments: false
      }))

      action = setLoading('comments', true)
      state = reducer(state, action)
      expect(state).to.equal(Map({
        messages: true,
        comments: true
      }))

      action = setLoading('messages', true)
      state = reducer(state, action)
      expect(state).to.equal(Map({
        messages: true,
        comments: true
      }))
    })
    it('sets the given key to false', () => {
      let action = setLoading('messages', false)
      let previousState = Map({
        messages: true,
        comments: true
      })
      let state = reducer(previousState, action)
      expect(state).to.equal(Map({
        messages: false,
        comments: true
      }))

      action = setLoading('comments', false)
      state = reducer(state, action)
      expect(state).to.equal(Map({
        messages: false,
        comments: false
      }))

      action = setLoading('messages', false)
      state = reducer(state, action)
      expect(state).to.equal(Map({
        messages: false,
        comments: false
      }))
    })
  })
})
