import { utilService } from './utilService.js'
export const userService = {
    getUser,
    signup,
    addMove,
    getMoves,
    logout
}

const USER_KEY = 'user'

function getUser() {
    return utilService.loadFromStorage(USER_KEY)
}

function signup(name) {
    const user = {
        name,
        coins: 100,
        moves: []
    }
    utilService.saveToStorage(USER_KEY, user)
}

function logout() {
    utilService.removeFromStorage(USER_KEY)
}

function addMove(contact, amount) {
    const user = utilService.loadFromStorage(USER_KEY)
    const move = {
        toId: contact._id,
        to: contact.name,
        at: new Date().toLocaleString(),
        amount,
    }
    user.moves.unshift(move)
    user.coins -= amount
    utilService.saveToStorage(USER_KEY, user)
}

function getMoves(contactId) {
    const user = utilService.loadFromStorage(USER_KEY)
    const moves = contactId ? user.moves.filter(move => move.toId === contactId) : user.moves.slice(0, 3)
    return moves
}