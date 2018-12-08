export const asyncAction = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })
}