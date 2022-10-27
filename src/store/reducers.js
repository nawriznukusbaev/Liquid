
function reducer(state='In between', action) {
    switch (action.type) {
        case 'ADD':
           if(action.value==='Liquid'){
               state='Watery'
           }
           else if(action.value==='Gas'){
               state='Like Vapor'
           }
           else if(action.value==='Solid'){
               state='Ice Ice'
           }
           return state;

        default:
            return state;
    }
}

export default reducer;