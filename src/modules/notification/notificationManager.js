// KAN-10: Basit bildirim ve ödül sistemi

const notifications = [];
const rewards = [];

function sendNotification(userEmail, message) {
  if (!userEmail || !message) {
    throw new Error("Kullanıcı e-postası ve mesaj zorunludur.");
  }

  const notification = {
    id: Date.now(),
    userEmail,
    message,
    isRead: false,
    isSeen: false,
    createdAt: new Date().toISOString()
  };

  notifications.push(notification);
  return notification;
}

function addReward(userEmail, point) {
  if (!userEmail || point <= 0) {
    throw new Error("Geçerli kullanıcı e-postası ve puan gereklidir.");
  }

  const reward = {
    id: Date.now(),
    userEmail,
    point,
    createdAt: new Date().toISOString()
  };

  rewards.push(reward);
  return reward;
}

module.exports = {
  sendNotification,
  addReward
};