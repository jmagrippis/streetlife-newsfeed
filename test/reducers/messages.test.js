import { expect } from 'chai'
import { OrderedMap } from 'immutable'

import reducer, { defaultState, addMessages } from 'reducers/messages'
import Message from 'records/Message'

describe('(Redux) messages', () => {
  describe('(Reducer)', () => {
    it('sets up initial state', () => {
      const action = {}
      expect(reducer(undefined, action)).to.equal(defaultState)
    })
    it('adds the given messages to the OrderedMap', () => {
      let messages = [
        { id: 'ab2', posted_at: '2016-03-21T11:34:15.549079+00:00' },
        { id: 'sdas2', posted_at: '2016-03-21T11:37:15.549079+00:00' },
        { id: 'fasasd56', posted_at: '2016-03-25T11:34:15.549079+00:00' },
        { id: 'c5231asa', posted_at: '2016-03-27T11:34:15.549079+00:00' },
        { id: 'sff12', posted_at: '2016-03-21T11:04:15.549079+00:00' }
      ]
      let action = addMessages(messages)
      let expected = {
        c5231asa: new Message({ id: 'c5231asa', posted_at: '2016-03-27T11:34:15.549079+00:00' }),
        fasasd56: new Message({ id: 'fasasd56', posted_at: '2016-03-25T11:34:15.549079+00:00' }),
        sdas2: new Message({ id: 'sdas2', posted_at: '2016-03-21T11:37:15.549079+00:00' }),
        ab2: new Message({ id: 'ab2', posted_at: '2016-03-21T11:34:15.549079+00:00' }),
        sff12: new Message({ id: 'sff12', posted_at: '2016-03-21T11:04:15.549079+00:00' })
      }
      let state = reducer(undefined, action)
      expect(state).to.equal(new OrderedMap(expected))

      messages = [
        { id: 'yy44', posted_at: '2016-05-28T11:34:15.549079+00:00' },
        { id: 'ee33', posted_at: '2016-05-21T11:37:15.549079+00:00' },
        { id: 'fasasd56', posted_at: '2016-05-27T11:34:15.549079+00:00' },
        { id: 'asv44', posted_at: '2016-05-23T11:34:15.549079+00:00' },
        { id: 'oo00', posted_at: '2016-05-26T11:04:15.549079+00:00' }
      ]
      action = addMessages(messages)
      expected = {
        yy44: new Message({ id: 'yy44', posted_at: '2016-05-28T11:34:15.549079+00:00' }),
        oo00: new Message({ id: 'oo00', posted_at: '2016-05-26T11:04:15.549079+00:00' }),
        asv44: new Message({ id: 'asv44', posted_at: '2016-05-23T11:34:15.549079+00:00' }),
        ee33: new Message({ id: 'ee33', posted_at: '2016-05-21T11:37:15.549079+00:00' }),
        c5231asa: new Message({ id: 'c5231asa', posted_at: '2016-03-27T11:34:15.549079+00:00' }),
        fasasd56: new Message({ id: 'fasasd56', posted_at: '2016-03-25T11:34:15.549079+00:00' }),
        sdas2: new Message({ id: 'sdas2', posted_at: '2016-03-21T11:37:15.549079+00:00' }),
        ab2: new Message({ id: 'ab2', posted_at: '2016-03-21T11:34:15.549079+00:00' }),
        sff12: new Message({ id: 'sff12', posted_at: '2016-03-21T11:04:15.549079+00:00' })
      }
      expect(reducer(state, action)).to.equal(new OrderedMap(expected))
    })
  })
})
