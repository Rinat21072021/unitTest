

export function sum(a: number, b: number) {
    return a + b
}

export function mult(a: number, b: number) {
    return a * b
}

export function splitWord(sentense: string) {
    return sentense.toLowerCase().split(' ')
        .filter(w=>w !== '-')
        .map(m=>m
            .replace('!','')
            .replace('.','')

        )
}