// KAN-6: Kullanıcı Yönetimi Modülü

const users = [];

function isValidEduEmail(email) {
  if (!email) {
    return false;
  }

  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.edu\.tr$/i;
  return pattern.test(email);
}

function createUser(name, email, role = "student") {
  if (!name || !email) {
    throw new Error("İsim ve e-posta alanları zorunludur.");
  }

  if (!isValidEduEmail(email)) {
    throw new Error("Sadece .edu.tr uzantili e-posta adresleri kabul edilir.");
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    role,
    createdAt: new Date().toISOString()
  };

  users.push(newUser);
  return newUser;
}

function getUsers() {
  return users;
}

function findUserByEmail(email) {
  return users.find(user => user.email === email);
}

module.exports = {
  createUser,
  getUsers,
  findUserByEmail,
  isValidEduEmail
};
