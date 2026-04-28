export const requestStatus=[  
        { status:"all",value:"All Status"},
        { status:"on_going",value:"On Going"},
        { status:"opened",value:"Opened"},
        { status:"solved",value:"Solved"},
        { status:"canceled",value:"Canceled"},
];
export const paymentStatus =[
        { status:"all",value:"All Status"},
        { status:"not_requested",value:"Not Requested"},
        { status:"requested",value:"Requested"},
        { status:"paid",value:"Paid"}

]
export const userStatus =[
        { status:"all",value:"All Status"},
        { status:"ACTIVE",value:"Active"},
        { status:"INACTIVE",value:"Inactive"},
        { status:"paid",value:""}

]
export const ProductStatus =[
        { status:"all",value:"All Status"},
        { status:"ACTIVE",value:"Active"},
        { status:"INACTIVE",value:"Inactive"},
        { status:"OUT_OF_STOCK",value:"Out Of Stock"},

]
export const Category =[
        {value:'All Categories'},
        {status:'LAPTOP',value:'Laptop'},
        {status:'DESKTOP',value:'Desktop'},
        {status:'PRINTER',value:'Printer'},
        {status:'ACCESSORY',value:'Accessory'},
  
  
]
export const ColorsRendering = {
  status: {
    "opened": {
      text: "text-blue-600",
      bg: "bg-blue-100",
      dot: "bg-blue-600"
    },
    "on_going": {
      text: "text-orange-500",
      bg: "bg-orange-100",
      dot: "bg-orange-500"
    },
    "solved": {
      text: "text-green-600",
      bg: "bg-green-100",
      dot: "bg-green-600"
    },
    "canceled": {
      text: "text-red-600",
      bg: "bg-red-100",
      dot: "bg-red-600"
    }
  },

  payment: {
    "requested": {
      text: "text-orange-500",
      bg: "bg-orange-100",
      dot: "bg-orange-500"
    },
    "paid": {
      text: "text-green-600",
      bg: "bg-green-100",
      dot: "bg-green-600"
    },
    "not_requested": {
      text: "text-gray-500",
      bg: "bg-gray-200",
      dot: "bg-gray-500"
    }
  },
  user: {
   
    "ACTIVE": {
      text: "text-green-600",
      bg: "bg-green-100",
      dot: "bg-green-600"
    },
    "INACTIVE": {
      text: "text-gray-500",
      bg: "bg-gray-200",
      dot: "bg-gray-500"
    }
  },
  product: {
   
    "ACTIVE": {
      text: "text-green-600",
      bg: "bg-green-100",
      dot: "bg-green-600"
    },
    "INACTIVE": {
      text: "text-gray-500",
      bg: "bg-gray-200",
      dot: "bg-gray-500"
    },
     "OUT_OF_STOCK": {
      text: "text-red-500",
      bg: "bg-red-200",
      dot: "bg-red-500"
    },

  }
};


export const requests = [
  { id: "REQ-001", product: "MacBook Pro 14\"", brand: "Apple", client: "Alice Martin", issue: "Screen flickering issue", status: "opened", payment: "not_requested", date: "2026-03-19" },
  { id: "REQ-002", product: "LaserJet Pro", brand: "HP", client: "Bob Chen", issue: "Paper jam recurring", status: "on_going", payment: "requested", date: "2026-03-18" },
  { id: "REQ-003", product: "iPhone 15 Pro", brand: "Apple", client: "Clara Dupont", issue: "Battery replacement", status: "solved", payment: "paid", date: "2026-03-17" },
  { id: "REQ-004", product: "XPS 15", brand: "Dell", client: "David Kim", issue: "Keyboard malfunction", status: "canceled", payment: "not_requested", date: "2026-03-16" },
  { id: "REQ-005", product: "Galaxy S24", brand: "Samsung", client: "Eva Lopez", issue: "Cracked screen", status: "on_going", payment: "not_requested", date: "2026-03-15" },
  { id: "REQ-006", product: "iPhone 16 Pro", brand: "Apple", client: "Oussama Aznag", issue: "Battery replacement", status: "solved", payment: "paid", date: "2026-03-20" },

  { id: "REQ-007", product: "ThinkPad X1 Carbon", brand: "Lenovo", client: "Sarah Johnson", issue: "Overheating problem", status: "opened", payment: "not_requested", date: "2026-03-14" },
  { id: "REQ-008", product: "Surface Laptop 5", brand: "Microsoft", client: "Michael Brown", issue: "Touchpad not working", status: "on_going", payment: "requested", date: "2026-03-13" },
  { id: "REQ-009", product: "iPad Air", brand: "Apple", client: "Emma Wilson", issue: "Charging port issue", status: "solved", payment: "paid", date: "2026-03-12" },
  { id: "REQ-010", product: "Galaxy Tab S9", brand: "Samsung", client: "Lucas Martin", issue: "Screen not responding", status: "opened", payment: "not_requested", date: "2026-03-11" },
  { id: "REQ-011", product: "Inspiron 15", brand: "Dell", client: "Noah Garcia", issue: "Battery draining fast", status: "on_going", payment: "requested", date: "2026-03-10" },
  { id: "REQ-012", product: "MacBook Air M3", brand: "Apple", client: "Sophia Lee", issue: "Wi-Fi connectivity issue", status: "solved", payment: "paid", date: "2026-03-09" },
  { id: "REQ-013", product: "HP Pavilion 14", brand: "HP", client: "Daniel White", issue: "Blue screen error", status: "canceled", payment: "not_requested", date: "2026-03-08" },
  { id: "REQ-014", product: "iPhone 14", brand: "Apple", client: "Olivia Perez", issue: "Speaker not working", status: "opened", payment: "not_requested", date: "2026-03-07" },
  { id: "REQ-015", product: "Galaxy A55", brand: "Samsung", client: "James Anderson", issue: "Camera blurry", status: "on_going", payment: "requested", date: "2026-03-06" },
  { id: "REQ-016", product: "ASUS VivoBook", brand: "ASUS", client: "William Thomas", issue: "Keyboard keys stuck", status: "solved", payment: "paid", date: "2026-03-05" },
  { id: "REQ-017", product: "Mac Mini M2", brand: "Apple", client: "Charlotte Martin", issue: "System not booting", status: "opened", payment: "not_requested", date: "2026-03-04" },
  { id: "REQ-018", product: "Lenovo IdeaPad 3", brand: "Lenovo", client: "Henry Walker", issue: "Screen turns black randomly", status: "on_going", payment: "requested", date: "2026-03-03" },
  { id: "REQ-019", product: "iMac 24\"", brand: "Apple", client: "Amelia Scott", issue: "Slow performance", status: "solved", payment: "paid", date: "2026-03-02" },
  { id: "REQ-020", product: "HP EliteBook", brand: "HP", client: "Benjamin Young", issue: "Fingerprint sensor not working", status: "canceled", payment: "not_requested", date: "2026-03-01" },
  { id: "REQ-021", product: "Samsung Monitor 27\"", brand: "Samsung", client: "Mia King", issue: "No signal detected", status: "opened", payment: "not_requested", date: "2026-02-28" },
  { id: "REQ-022", product: "Acer Aspire 5", brand: "Acer", client: "Alexander Wright", issue: "Fan making noise", status: "on_going", payment: "requested", date: "2026-02-27" },
  { id: "REQ-023", product: "iPhone 13 Pro", brand: "Apple", client: "Isabella Green", issue: "Face ID not working", status: "solved", payment: "paid", date: "2026-02-26" },
  { id: "REQ-024", product: "Dell Monitor 24\"", brand: "Dell", client: "Logan Hall", issue: "Flickering display", status: "opened", payment: "not_requested", date: "2026-02-25" },
  { id: "REQ-025", product: "MacBook Pro 16\"", brand: "Apple", client: "Ethan Adams", issue: "Trackpad not clicking", status: "on_going", payment: "requested", date: "2026-02-24" },
  { id: "REQ-026", product: "HP DeskJet 2710", brand: "HP", client: "Liam Nelson", issue: "Printer offline error", status: "solved", payment: "paid", date: "2026-02-23" },
  { id: "REQ-027", product: "Lenovo ThinkCentre", brand: "Lenovo", client: "Nathan Moore", issue: "PC not turning on", status: "opened", payment: "not_requested", date: "2026-02-22" },
  { id: "REQ-028", product: "iPad Pro 12.9\"", brand: "Apple", client: "Chloe Taylor", issue: "Screen touch not working", status: "on_going", payment: "requested", date: "2026-02-21" },
  { id: "REQ-029", product: "ASUS TUF Gaming Laptop", brand: "ASUS", client: "Ryan Harris", issue: "Overheating while gaming", status: "solved", payment: "paid", date: "2026-02-20" },
  { id: "REQ-030", product: "Samsung Smart TV 55\"", brand: "Samsung", client: "Hannah Clark", issue: "Wi-Fi connection issue", status: "opened", payment: "not_requested", date: "2026-02-19" },
  { id: "REQ-031", product: "HP Envy x360", brand: "HP", client: "Aaron Lewis", issue: "Touchscreen not responding", status: "canceled", payment: "not_requested", date: "2026-02-18" },
];

export const Calls= [
  {
    id:1,
    type: "Rendez-vous",
    phone: "+33 6 12 34 56 78",
    date: "2026-03-19 10:30",
    comment: "Client wants appointment for next week",
    createdBy: "Admin User"
  },
  {
    id:2,
    type: "Immediate",
    phone: "+33 6 12 34 56 78",
    date: "2026-03-18 14:15",
    comment: "Urgent screen issue, dispatched tech",
    createdBy: "Admin User"
  }
];

export const technicians = [
  { id: "TECH-001", fullName: "Ahmed Benali", username: "ahmed.b", status: "active" },
  { id: "TECH-002", fullName: "Sara Mansouri", username: "sara.m", status: "active" },
  { id: "TECH-003", fullName: "Karim Haddad", username: "karim.h", status: "inactive" },
  { id: "TECH-004", fullName: "Fatima Zahra", username: "fatima.z", status: "active" },
  { id: "TECH-005", fullName: "Youssef Amrani", username: "youssef.a", status: "active" },

 
];

export const clients = [
  { id: "CLT-001", firstName: "Alice", lastName: "Martin", email: "alice.martin@email.com", status: "active" },
  { id: "CLT-002", firstName: "Mohamed", lastName: "El Fassi", email: "mohamed.elfassi@email.com", status: "inactive" },
  { id: "CLT-003", firstName: "Sophie", lastName: "Dupont", email: "sophie.dupont@email.com", status: "active" },
  { id: "CLT-004", firstName: "Jean", lastName: "Bernard", email: "jean.bernard@email.com", status: "active" },
  { id: "CLT-005", firstName: "Amina", lastName: "Rahimi", email: "amina.rahimi@email.com", status: "inactive" },
  { id: "CLT-006", firstName: "Youssef", lastName: "Amrani", email: "youssef.amrani@email.com", status: "active" },
  { id: "CLT-007", firstName: "Laura", lastName: "Moreau", email: "laura.moreau@email.com", status: "inactive" },
  { id: "CLT-008", firstName: "Hassan", lastName: "Bennani", email: "hassan.bennani@email.com", status: "active" },
  { id: "CLT-009", firstName: "Emma", lastName: "Laurent", email: "emma.laurent@email.com", status: "active" },
  { id: "CLT-010", firstName: "Karim", lastName: "Tazi", email: "karim.tazi@email.com", status: "inactive" },
  { id: "CLT-011", firstName: "Chloe", lastName: "Girard", email: "chloe.girard@email.com", status: "active" },
  { id: "CLT-012", firstName: "Rachid", lastName: "Ouali", email: "rachid.ouali@email.com", status: "inactive" },
  { id: "CLT-013", firstName: "Nora", lastName: "Kabbaj", email: "nora.kabbaj@email.com", status: "active" },
  { id: "CLT-014", firstName: "Lucas", lastName: "Fournier", email: "lucas.fournier@email.com", status: "active" },
  { id: "CLT-015", firstName: "Samir", lastName: "Zerouali", email: "samir.zerouali@email.com", status: "inactive" },
  { id: "CLT-016", firstName: "Ines", lastName: "Benali", email: "ines.benali@email.com", status: "active" },
  { id: "CLT-017", firstName: "Mehdi", lastName: "Chraibi", email: "mehdi.chraibi@email.com", status: "inactive" },
  { id: "CLT-018", firstName: "Sarah", lastName: "Lemoine", email: "sarah.lemoine@email.com", status: "active" },
  { id: "CLT-019", firstName: "Omar", lastName: "Idrissi", email: "omar.idrissi@email.com", status: "active" },
  { id: "CLT-020", firstName: "Julie", lastName: "Petit", email: "julie.petit@email.com", status: "inactive" }
];