import User from '../models/Users.js';

export function getAllUsers() {
    return User.all();
}

export function getUserById(id) {
    return User.find(id);
}



export function searchUsers(q) {
    const list = User.all();
    const lower = q.toLowerCase();
    return list.filter((user) => user.name.toLowerCase().includes(lower));
}

export function createUser(data) {
    return User.create(data);
}

export function updateUser(id, data) {
    return User.update(id, data);
}

export function deleteUser(id) {
    return User.remove(id);
}