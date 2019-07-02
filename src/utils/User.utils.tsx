export function getUserName(user) {
  return `${user.name.title} ${user.name.first} ${user.name.last}`;
}

export function getUserAddress(user) {
  return `${user.location.street} ${user.location.city}`;
}

export function isSameUser(user1, user2) {
  return user1.login.uuid === user2.login.uuid;
}
