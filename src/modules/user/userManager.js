// KAN-6: Kullanıcı Yönetimi Modülü

const users = [];

function createUser(name, email, role = "student") {
  if (!name || !email) {
    throw new Error("İsim ve e-posta alanları zorunludur.");
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
  findUserByEmail
};