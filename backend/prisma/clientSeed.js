import { prisma } from "../src/config/db.js";

const clients = [
  { userName: "J.DOE", firstName: "John", lastName: "Doe", email: "client1@example.com", password: "hashedpassword", role: "CLIENT", phone: "0700000001" },
  { userName: "M.SMITH", firstName: "Maria", lastName: "Smith", email: "client2@example.com", password: "hashedpassword", role: "CLIENT", phone: "0700000002" },
  { userName: "A.JOHNSON", firstName: "Ahmed", lastName: "Johnson", email: "client3@example.com", password: "hashedpassword", role: "CLIENT", phone: "0700000003" },
  { userName: "S.BROWN", firstName: "Sofia", lastName: "Brown", email: "client4@example.com", password: "hashedpassword", role: "CLIENT", phone: "0700000004" },
  { userName: "D.MARTIN", firstName: "David", lastName: "Martin", email: "client5@example.com", password: "hashedpassword", role: "CLIENT", phone: "0700000005" },
  { userName: "L.GARCIA", firstName: "Lina", lastName: "Garcia", email: "client6@example.com", password: "hashedpassword", role: "CLIENT", phone: "0700000006" },
  { userName: "Y.MOHAMED", firstName: "Yassine", lastName: "Mohamed", email: "client7@example.com", password: "hashedpassword", role: "CLIENT", phone: "0700000007" },
  { userName: "N.ALI", firstName: "Nour", lastName: "Ali", email: "client8@example.com", password: "hashedpassword", role: "CLIENT", phone: "0700000008" },
  { userName: "K.HADDAD", firstName: "Karim", lastName: "Haddad", email: "client9@example.com", password: "hashedpassword", role: "CLIENT", phone: "0700000009" },
  { userName: "F.ZAHRA", firstName: "Fatima", lastName: "Zahra", email: "client10@example.com", password: "hashedpassword", role: "CLIENT", phone: "0700000010" }
];

const main = async () => {
  await prisma.user.createMany({
    data: clients
  });

  console.log(`${clients.length} rows of clients inserted`);
};

main()
  .catch(err => {
    console.log(err);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });