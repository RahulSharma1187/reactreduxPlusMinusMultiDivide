const initialState = 5;

const multDivideNumber = (state = initialState, action) => {
    switch(action.type){
        case "MULT" : return state * action.payload;
        case "DIVIDE" : return state / action.payload;
        default : return state;
    }
}

export default multDivideNumber;