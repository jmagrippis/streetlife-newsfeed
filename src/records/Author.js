import { Record } from 'immutable'

import Location from 'records/Location'

const Author = new Record({
  id: undefined,
  display_name: undefined,
  profile_id: undefined,
  avatar: undefined,
  nearest_area: new Location()
},
'Author'
)

export default Author
