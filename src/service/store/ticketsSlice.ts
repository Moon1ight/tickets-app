import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axios, { AxiosError } from "axios"

export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async function(_, {rejectWithValue}) {
        try {
            const response = await axios.get('./tickets.json').then(res => res)
            return response.data
        } catch (e) {
            const error = e as AxiosError
            return rejectWithValue(error)
        }
    }
)

export type TicketType = {
    id: string, 
    price: string, 
    transfersCount: string, 
    from: string, 
    to: string,
    departure: string,
    arrival: string,
    companyLogo: string
}

type TicketsState = {
    tickets: TicketType[],
    status:  null | string,
    error:  AxiosError | any
}

const initialState = {
    tickets: [],
    status: null,
    error: null
} as TicketsState

const ticketsSlice = createSlice({
    name: "tickets",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchTickets.pending, (state) => {
            state.status = "loading"
            state.error = null
        }) 
        builder.addCase(fetchTickets.fulfilled, (state, action) => {
            state.status = 'resolved'
            state.tickets = action.payload
        }) 
        builder.addCase(fetchTickets.rejected, (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }) 
    }
})

export default ticketsSlice.reducer