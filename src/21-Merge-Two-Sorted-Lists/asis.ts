class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function traverse(listNode: ListNode | null): number[] {
  const array: number[] = []
  if (!listNode) return []

  const addToArray = (node: ListNode): number[] => {
    if (node.val === undefined) {
      return array
    }

    array.push(node.val)
    return node.next ? addToArray(node.next) : array
  }

  return addToArray(listNode)
}

function insertAtEnd(listNode: ListNode | null, data: number): ListNode {
  const node = new ListNode(data)
  if (!listNode) {
    return node
  } else {
    const getLast = (node: ListNode): ListNode => {
      return node.next ? getLast(node.next) : node
    }

    const lastNode = getLast(listNode)
    lastNode.next = node
  }
  return listNode
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const sorted = [...traverse(list1), ...traverse(list2)].sort((a, b) => a - b)
  if (sorted.length === 0) {
    return null
  }
  const sortedLinkedList = new ListNode(sorted[0])
  for (let i = 1; i < sorted.length; i++) {
    insertAtEnd(sortedLinkedList, sorted[i])
  }

  return sortedLinkedList
}
