import *  as _ from 'lodash'

var opts = []

_.times(583, (n) =>
    opts.push({
      "cardClass": "neutral",
      "p": n
    })
)

_.times(90, (n) =>
    opts.push({
      "cardClass": "druid",
      "p": n
    })
)

_.times(92, (n) =>
    opts.push({
      "cardClass": "hunter",
      "p": n
    })
)

_.times(90, (n) =>
    opts.push({
      "cardClass": "mage",
      "p": n
    })
)

_.times(90, (n) =>
    opts.push({
      "cardClass": "paladin",
      "p": n
    })
)

_.times(90, (n) =>
    opts.push({
      "cardClass": "priest",
      "p": n
    })
)

_.times(90, (n) =>
    opts.push({
      "cardClass": "rogue",
      "p": n
    })
)

_.times(90, (n) =>
    opts.push({
      "cardClass": "shaman",
      "p": n
    })
)

_.times(90, (n) =>
    opts.push({
      "cardClass": "warlock",
      "p": n
    })
)

_.times(90, (n) =>
    opts.push({
      "cardClass": "warrior",
      "p": n
    })
)


export {
  opts
}

//export const opts = [{
  //"cardClass": "neutral",
  //"p":1
//},{
  //"cardClass": "neutral",
  //"p":2
//}]
