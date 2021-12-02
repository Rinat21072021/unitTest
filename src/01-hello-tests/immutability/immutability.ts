export type UserType={
    name:string
    hair:number
    address:{city:string, house?:number}
}
export type lapTopType={
    title:string
}
export type UserWhithLaptopType = UserType & {
    laptop:lapTopType
}
export type UserWhithBooksType = UserType & {
    books:Array<string>
}
export function makeHairstyle(u: UserType, power: number) {
    const copy = {...u,hair:u.hair / 2}
    return copy

}

export const moveUser = (u:UserWhithLaptopType,city:string)=>{
return {...u, address:{...u.address, city:city}}
}

export const moveUserToOtherHouse = (u:UserWhithLaptopType & UserWhithBooksType,house:number)=>{
    return {...u, address:{...u.address, house:house}}
}

export const upgradeLaptop =(user:UserWhithLaptopType, title:string)=>{
    return {...user, laptop:{...user.laptop, title:title}}
}
export const addNewBooks = (user:UserWhithLaptopType & UserWhithBooksType , books:Array<string>)=>{
    return {...user,books:[...user.books.concat(books)]}
}