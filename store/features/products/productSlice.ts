import { products } from '@utils/dummyData';
import { createSlice , PayloadAction } from "@reduxjs/toolkit"


const initialState = {
    recent:products['RecentProducts'],
    bestSelling:products['bestSellingProducts'],
    count:0
}

const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        filterProducts:(state,action:PayloadAction<string>)=>{
            state.recent = products.RecentProducts.filter(p=>p.title.toLowerCase().includes(action.payload.toLowerCase()))
            state.bestSelling = products.bestSellingProducts.filter(p=>p.title.toLowerCase().includes(action.payload.toLowerCase()))
        },
        toggleProductFavourite:(state,action:PayloadAction<number>)=>{
            const selectedProductIndex = state.recent.findIndex(p=>p.id == action.payload)
            if(selectedProductIndex > -1){
                state.recent[selectedProductIndex].favourite=!state.recent[selectedProductIndex].favourite
                products['RecentProducts'][selectedProductIndex].favourite=!products['RecentProducts'][selectedProductIndex].favourite
            }
        },
        increment:(state)=>{
            state.count++
        }
    }
})

export const {filterProducts,toggleProductFavourite,increment} = productSlice.actions
export default productSlice