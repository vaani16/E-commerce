export const initialState={
    basket:[],
    user:null,
};
function Reducer(state,action){
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {...state,
                basket:[...state.basket,action.item]
            }
        

        case 'REMOVE_FROM_BASKET':
           
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);

            if(index>=0){
                const newBasket = [...state.basket.slice(0, index), ...state.basket.slice(index + 1)];
                return { ...state, basket: newBasket }; }
            else{
                console.warn('cant remove the product as it doesnt exist');
                return state;}
          
        default:
            return state;
    }
}

export default Reducer;