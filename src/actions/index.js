export const incNumber = (num) => {
    return{
        type: "INCREMENT",
        payload: num
    }
}

export const decNumber = (num) => {
    return{
        type: "DECREMENT",
        payload: num
    }
}

export const multNumber = (num) => {
    return{
        type: "MULT",
        payload: num
    }
}

export const dividNumber = (num) => {
    return{
        type: "DIVIDE",
        payload: num
    }
}