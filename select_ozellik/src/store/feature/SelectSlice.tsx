import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import  Ozellikler  from "../../utils/Ozellikler.json";
import { IOzellik } from "../../models/IOzellik";
interface ISelectSlice {
    OzellikList: IOzellik[],
    SelectedOzellikList: IOzellik[],
    isSevenSelected: boolean
}

const initialSelectState: ISelectSlice = {
    OzellikList: Ozellikler,
    SelectedOzellikList: [],
    isSevenSelected: false
}

const SelectSlice = createSlice({
    name: 'SelectSlice',
    initialState : initialSelectState,
    reducers: {
        addOzellik: (state, action: PayloadAction<IOzellik>) => {
           if ( !state.SelectedOzellikList.some(ozellik => ozellik.name === action.payload.name)) {
            if(state.SelectedOzellikList.length < 6){
                state.SelectedOzellikList.push(action.payload);
            }
            else {
                state.isSevenSelected = true;
            }
        }
          },
          removeOzellik: (state, action: PayloadAction<IOzellik>) => {
            state.SelectedOzellikList = state.SelectedOzellikList.filter(ozellik => ozellik.name !== action.payload.name); 
            state.isSevenSelected = false;
          },

    },
});
export const { addOzellik, removeOzellik } = SelectSlice.actions;
export default SelectSlice.reducer;