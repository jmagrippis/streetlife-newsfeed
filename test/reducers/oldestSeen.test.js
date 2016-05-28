import reducer, { defaultState, SET_OLDEST_SEEN } from 'reducers/oldestSeen'
import { expect } from 'chai'

describe('(Redux) oldestSeen', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
    it('sets the oldest message seen', () => {
      let date = new Date(1464438560 * 1000)
      let action = {
        type: SET_OLDEST_SEEN,
        date
      }
      expect(reducer(undefined, action)).to.equal(date)

      let newDate = new Date(1464248560 * 1000)
      action = {
        type: SET_OLDEST_SEEN,
        date: newDate
      }
      expect(reducer(date, action)).to.equal(newDate)
    })
  })
})
