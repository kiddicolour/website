"use strict"

function enhanceMenu(menu) {

  if (!menu) return []
  return menu.map(entry => {
    const { node } = entry
    node.groupOrder = node.strapiParent?.order || node.order
    return node
  })
}


function sortMenu(menu) {

  if (!menu) return []
  // add parent order to each entry to be sortable / groupable
  return menu.sort((a, b) => {
    // if both group orders are the same, sort by parent order
    if (a.groupOrder == b.groupOrder) {
      // if no parent exists, put this one first as it is the parent of the others in the same group
      if (!a.strapiParent) return -1
      if (!b.strapiParent) return 1
      return a.strapiParent.order < b.strapiParent.order
    } else {
      return a.groupOrder > b.groupOrder
    }
  })

}

function groupMenu(menu) {
  let grouped = []

  for (const entry in menu) {
    const { groupOrder, ...rest } = menu[entry]
    if (!grouped[1 * groupOrder]) {
      grouped[1 * groupOrder] = { ...rest, children: []}
    } else {
      grouped[1*groupOrder].children.push(rest)
    }
  }
  console.log('grouped', grouped, 'menu', menu)
  return grouped.filter(g => g)
}

module.exports = {
  enhanceMenu,
  groupMenu,
  sortMenu,
}
