import { prisma } from "../src/config/db.js";

const technicians = [
      { status:"ACTIVE",userName: "A.HASSAN", firstName: "Ali", lastName: "Hassan", email: "tech1@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000001" },
      { status:"ACTIVE",userName: "S.KHAN", firstName: "Sara", lastName: "Khan", email: "tech2@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000002" },
      { status:"INACTIVE",userName: "O.FAROUK", firstName: "Omar", lastName: "Farouk", email: "tech3@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000003" },
      { status:"ACTIVE",userName: "L.SAIDI", firstName: "Lina", lastName: "Saidi", email: "tech4@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000004" },
      { status:"ACTIVE",userName: "Y.AMRANI", firstName: "Youssef", lastName: "Amrani", email: "tech5@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000005" },
      { status:"ACTIVE",userName: "N.ZEROUALI", firstName: "Nadia", lastName: "Zerouali", email: "tech6@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000006" },
      { status:"ACTIVE",userName: "K.BENNANI", firstName: "Karim", lastName: "Bennani", email: "tech7@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000007" },
      { status:"INACTIVE",userName: "S.TAZI", firstName: "Salma", lastName: "Tazi", email: "tech8@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000008" },
      { status:"ACTIVE",userName: "H.EL IDRISSI", firstName: "Hicham", lastName: "El Idrissi", email: "tech9@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000009" },
      { status:"ACTIVE",userName: "M.CHRAIBI", firstName: "Meryem", lastName: "Chraibi", email: "tech10@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000010" },
      { status:"ACTIVE",userName: "A.FASSI", firstName: "Adil", lastName: "Fassi", email: "tech11@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000011" },
      { status:"INACTIVE",userName: "I.BOUSSAID", firstName: "Imane", lastName: "Boussaid", email: "tech12@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000012" },
      { status:"ACTIVE",userName: "R.MEKKI", firstName: "Rachid", lastName: "Mekki", email: "tech13@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000013" },
      { status:"ACTIVE",userName: "H.ALAOUI", firstName: "Houda", lastName: "Alaoui", email: "tech14@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000014" },
      { status:"ACTIVE",userName: "M.SBAI", firstName: "Mehdi", lastName: "Sbai", email: "tech15@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000015" },
      { status:"INACTIVE",userName: "K.LAHLOU", firstName: "Khadija", lastName: "Lahlou", email: "tech16@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000016" },
      { status:"ACTIVE",userName: "T.OUALI", firstName: "Tarik", lastName: "Ouali", email: "tech17@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000017" },
      { status:"INACTIVE",userName: "S.BENALI", firstName: "Samira", lastName: "Benali", email: "tech18@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000018" },
      { status:"ACTIVE",userName: "Z.AIT SAID", firstName: "Zakaria", lastName: "Ait Said", email: "tech19@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000019" },
      { status:"INACTIVE",userName: "F.OUAZZANI", firstName: "Fatima", lastName: "Ouazzani", email: "tech20@example.com", password: "hashedpassword", role: "TECHNICIAN", phone: "0600000020" },
    ]

const main = async ()=>{
    await prisma.user.createMany({
        data:technicians
    })
    console.log(`${technicians.length} row of technicians inserted`)
    
}    
main()
.catch(err=>{console.log(err);process.exit(1);})
.finally(()=>{prisma.$disconnect()});
