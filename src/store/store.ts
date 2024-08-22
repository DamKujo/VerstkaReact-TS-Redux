import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface FormState {
    name: string;
    number: string;
    agreement: boolean;
};

export interface GeneralState{
    form: FormState | undefined;
    isSend: boolean;
};

const initialState: GeneralState = {
    form: undefined,
    isSend: false
};

export const generalSlice = createSlice({
    name: "generalState",
    initialState,
    reducers: {
        toSendForm: (state, action: PayloadAction<FormState>) => {
            state.form = action.payload;
        },
        turnIsSend: (state) => {
            state.isSend = !state.isSend;
        },
    }
});

export const {toSendForm, turnIsSend} = generalSlice.actions;
export default generalSlice.reducer;

export const store = configureStore({
    reducer: {
        form: generalSlice.reducer,
    },
});