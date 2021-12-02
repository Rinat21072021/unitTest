import {mult, splitWord, sum} from "./01";
let a:number
let b:number
let c:number
beforeEach(()=>{
    a=1
    b=2
    c=3
    }

)

test ('sum should be correct', ()=>{
    //data
    // let a= 1
    // let b = 2
    // let c =3

    //action
    const result1 = sum(a,b)
    c=100
    const result2 = sum(c,b)

    //expect result
    expect(result1).toBe(3)
    expect(result2).toBe(102)

})
test ('multiply should be correct', ()=>{
    //data
    // let a= 1
    // let b = 2
    // let c =3

    //action
    const result1 = mult(a,b)
    const result2 = mult(c,b)

    //expect result
    expect(result1).toBe(2)
    expect(result2).toBe(6)

})

test ('splitting word be correct', ()=>{
    let sent1 = 'hello my friend'
    let sent2 = 'JS - the best programming language.'

    const result1 = splitWord(sent1)
    const result2 = splitWord(sent2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friend')

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe('js')
    expect(result2[1]).toBe('the')
    expect(result2[2]).toBe('best')
    expect(result2[3]).toBe('programming')
    expect(result2[4]).toBe('language')
})