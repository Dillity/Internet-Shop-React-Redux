import {SEARCH_RESULT} from "./searchActionType";

let initialState = {
        items: [
            {
                id: 1,
                name: 'Bolivar Belicosos Finos Cigar - Cabinet Selection - 1 Single',
                price: 31.99,
                description: 'Simon Bolivar was one of the great historic figures of the 19th Century who liberated much of South America from Spanish rule.',
                img: 'https://www.cgarsltd.co.uk/images/thumbs/500x500_BBF_Cabinet3.JPG'
            },
            {
                id: 2,
                name: 'Bolivar Petit Coronas Cigar - 1 Single',
                price: 18.99,
                description: 'Simon Bolivar was one of the great historic figures of the 19th Century who liberated much of South America from Spanish rule.',
                img: 'https://www.cgarsltd.co.uk/images/thumbs/500x500_BoliPetitCorona_Box66.JPG'
            },
            {
                id: 3,
                name: 'Bolivar Coronas J Cigar - 1 Single',
                price: 16.99,
                description: 'Simon Bolivar was one of the great historic figures of the 19th Century who liberated much of South America from Spanish rule.',
                img: 'https://www.cgarsltd.co.uk/images/thumbs/500x500_BoliCoroJ_New6.JPG'
            },
            {
                id: 4,
                name: 'Bolivar Belicosos Finos Cigar - 1 Single in Varnished Slide Lid Box (Coffin)',
                price: 41.99,
                description: 'Simon Bolivar was one of the great historic figures of the 19th Century who liberated much of South America from Spanish rule.',
                img: 'https://www.cgarsltd.co.uk/images/thumbs/500x500_BBF_Cabinet3.JPG'
            }
        ],

    filteredItems: []
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_RESULT:
            return {
                ...state,
                filteredItems: state.items.filter(item => {
                    return item.name.toLowerCase().includes(action.parameters.toLowerCase());
                })
            }

        default:
            return state;
    }
}
export default searchReducer;


