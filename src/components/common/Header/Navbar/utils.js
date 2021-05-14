"use strict"

function enhanceMenu(menu) {

  if (!menu) return []
  return menu.map(entry => {
    const { node } = entry
    node.groupOrder = node.strapiParent?.order || node.order
    // replace placeholders in url
    node.url = getFinalUrl(node)
    return node
  })
}


function sortMenu(menu) {
  if (!menu) return []
  // add parent order to each entry to be sortable / groupable
  return menu.sort((a, b) => {
    // if both group orders are the same, sort by parent order
    if (a.groupOrder === b.groupOrder) {
      // if no parent exists, put this one first as it is the parent of the others in the same group
      if (!a.strapiParent) return -1
      if (!b.strapiParent) return 1
      // if both are not a parent, sort them by order
      return a.order > b.order ? 1 : -1
    } else {
      return a.groupOrder > b.groupOrder ? 1 : -1
    }
  })
}

function groupMenu(menu) {
  let grouped = []
  for (const entry in menu) {
    const { groupOrder, ...rest } = menu[entry]
    if (!grouped[1 * groupOrder]) {
      grouped[1 * groupOrder] = { ...rest, children: [] }
    } else {
      grouped[1 * groupOrder].children.push(rest)
    }
  }
  return grouped.filter(g => g)
}

function getFinalUrl(item) {
  if (!item?.url) {
    return '/'
  }
  // checks if the url has a parameter and tries to replace it with the matching content
  // use a regex to get both parts, allthough indexOf might be faster..
  const pattern = new RegExp(':([a-z]+)\.([a-z]+)')
  const matches = item.url.match(pattern)
  const [, relation, field] = matches || [, ,]
  if (relation && field) {
    // try to match parts with actual item, eg matches[1] = 'age' & matches[2] = 'slug'
    if (item[relation] && item[relation][field]) {
      return item.url.replace(`:${relation}.${field}`, item[relation][field])
    }
  }
  return item.url
}

module.exports = {
  enhanceMenu,
  groupMenu,
  sortMenu,
}
