import { List, Record } from 'immutable'

const Loc = new Record({
  id: undefined,
  area_id: undefined,
  point: new List(),
  name: undefined
},
'Loc'
)

export default Loc
