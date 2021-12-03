import {
    addNewBooks,
    makeHairstyle,
    moveUser, moveUserToOtherHouse, removeBooks, replaceBooks,
    upgradeLaptop,
    UserType,
    UserWhithBooksType,
    UserWhithLaptopType
} from "./immutability";


test("referens type test", () => {

    let user: UserType = {
        name: 'Dymych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(awesomeUser.hair).toBe(16)
    expect(user.hair).toBe(32)
    expect(awesomeUser.address.city).toBe(user.address.city)
})

test("change address", () => {

    let user: UserWhithLaptopType = {
        name: 'Dymych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user.address).not.toBe(movedUser.address)
    expect(user).not.toBe(movedUser)
    expect(user.laptop.title).toBe(movedUser.laptop.title)
    expect(movedUser.address.city).toBe('Kiev')
})
test("upgrade  laptop to Macbook", () => {

    let user: UserWhithLaptopType = {
        name: 'Dymych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const upgradeUserLaptop = upgradeLaptop(user, 'Macbook')


    expect(user.laptop).not.toBe(upgradeUserLaptop.laptop)
    expect(user).not.toBe(upgradeUserLaptop)
    expect(user.address.city).toBe(upgradeUserLaptop.address.city)
    expect(upgradeUserLaptop.laptop.title).toBe('Macbook')
    expect(user.laptop.title).toBe('ZenBook')
})
test("upgrsade  laptop to Macbook", () => {

    let user: UserWhithLaptopType & UserWhithBooksType = {
        name: 'Dymych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = moveUserToOtherHouse(user, 99)


    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.books).toBe((copyUser.books))
    expect(user.laptop.title).toBe(copyUser.laptop.title)
    expect(user.address).not.toBe(copyUser.address)
    expect(copyUser.address.house).toBe(99)

})
test("add new books to user", () => {

    let user: UserWhithLaptopType & UserWhithBooksType = {
        name: 'Dymych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = addNewBooks(user, ['ts', 'rest api'])


    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.laptop.title).toBe(copyUser.laptop.title)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[4]).toBe('ts')
    expect(copyUser.books[5]).toBe('rest api')

})
test("replace book to user", () => {

    let user: UserWhithLaptopType & UserWhithBooksType = {
        name: 'Dymych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = replaceBooks(user, 'js', 'ts')


    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.laptop.title).toBe(copyUser.laptop.title)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[2]).toBe('ts')


})
test("remove book to user", () => {

    let user: UserWhithLaptopType & UserWhithBooksType = {
        name: 'Dymych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react']
    }

    const copyUser = removeBooks(user, 'js')

    expect(user.laptop).toBe(copyUser.laptop)
    expect(user.laptop.title).toBe(copyUser.laptop.title)
    expect(user.address).toBe(copyUser.address)
    expect(user.books).not.toBe(copyUser.books)
    expect(copyUser.books[2]).toBe('react')

})