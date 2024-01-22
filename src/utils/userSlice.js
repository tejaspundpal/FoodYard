import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: {
        id: 1,
        name: 'Tejas Pundpal',
        mobileNumber: '7620872033',
        email:'tejaspundpal55@gmail.com',
        orders: [
          { orderId: '12345', items: ['Burger', 'Pizza'], total: 25.99 },
          // Add more orders as needed
        ],
      },
    },
    reducers: {

    },
});

export default userSlice.reducer;