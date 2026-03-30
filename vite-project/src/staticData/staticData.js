export const requestStatus=[  
        { status:"all",value:"All Status"},
        { status:"opened",value:"opened"},
        { status:"solved",value:"solved"},
        { status:"canceled",value:"canceled"},
];

export const requests = [
  { id: "REQ-001", product: "MacBook Pro 14\"", brand: "Apple", client: "Alice Martin", issue: "Screen flickering issue", status: "Opened", payment: "Not Requested", date: "2026-03-19" },
  { id: "REQ-002", product: "LaserJet Pro", brand: "HP", client: "Bob Chen", issue: "Paper jam recurring", status: "On Going", payment: "Requested", date: "2026-03-18" },
  { id: "REQ-003", product: "iPhone 15 Pro", brand: "Apple", client: "Clara Dupont", issue: "Battery replacement", status: "Solved", payment: "Paid", date: "2026-03-17" },
  { id: "REQ-004", product: "XPS 15", brand: "Dell", client: "David Kim", issue: "Keyboard malfunction", status: "Canceled", payment: "Not Requested", date: "2026-03-16" },
  { id: "REQ-005", product: "Galaxy S24", brand: "Samsung", client: "Eva Lopez", issue: "Cracked screen", status: "On Going", payment: "Not Requested", date: "2026-03-15" }
];

export const ColorsRendering = {
  status: {
    "Opened": {
      text: "text-blue-600",
      bg: "bg-blue-100",
      dot: "bg-blue-600"
    },
    "On Going": {
      text: "text-orange-500",
      bg: "bg-orange-100",
      dot: "bg-orange-500"
    },
    "Solved": {
      text: "text-green-600",
      bg: "bg-green-100",
      dot: "bg-green-600"
    },
    "Canceled": {
      text: "text-red-600",
      bg: "bg-red-100",
      dot: "bg-red-600"
    }
  },

  payment: {
    "Requested": {
      text: "text-orange-500",
      bg: "bg-orange-100",
      dot: "bg-orange-500"
    },
    "Paid": {
      text: "text-green-600",
      bg: "bg-green-100",
      dot: "bg-green-600"
    },
    "Not Requested": {
      text: "text-gray-500",
      bg: "bg-gray-200",
      dot: "bg-gray-500"
    }
  }
};
