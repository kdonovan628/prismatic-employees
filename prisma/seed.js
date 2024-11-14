const prisma = require("./index");

const seed = async () => {
  const employeeNames = [
    "Emily Reynolds",
    "Jack Harrington",
    "Mia Lawson",
    "Ethan Caldwell", 
    "Sophie Blake",
    "Lucas Montgomery", 
    "Olivia Price", 
    "Noah Grant",
    "Ava Sullivan",
    "Henry Bishop"
  ];

  const employees = employeeNames.map((name) => ({ name } ));

  await prisma.employee.createMany({ data: employees });
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });