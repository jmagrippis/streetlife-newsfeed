import { List, Record } from 'immutable'

import Author from 'records/Author'

const Message = new Record({
  id: undefined,
  subject: undefined,
  body: undefined,
  posted_at: undefined,
  author: new Author(),
  comments: new List(),
  tags: new List(),
  comments_count: 0
},
'Message'
)

export default Message
