import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { discogs } from '../../api/discogs';

const initialState = {
    wishlist: [],
    status: 'idle'
};

export const fetchWishlist = createAsyncThunk('collection/fetchWishlist', async () => {
    return await discogs.fetchWishlist();
});

export const addToWishlist = createAsyncThunk('collection/addToWishlist', async (releaseID) => {
    return await discogs.addToWishlist(releaseID);
});

export const deleteFromWishlist = createAsyncThunk(
    'collection/deleteFromWishlist', async (releaseID) => {
        return await discogs.deleteFromWishlist(releaseID);
    }
);

export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchWishlist.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchWishlist.fulfilled, (state, action) => {
                action.payload.wants
                    .forEach(want => state.wishlist.push(want));
                state.status = 'success';
            })
            .addCase(fetchWishlist.rejected, (state, action) => {
                state.status = 'rejected';
            })
            .addCase(addToWishlist.fulfilled, (state, action) => {
                state.wishlist.push(action.payload);
            })
            .addCase(deleteFromWishlist.fulfilled, (state, action) => {
                state.wishlist.splice(state.wishlist.indexOf(action.payload), 1);
            })
    }
});

export const selectWishlist = (state) => state.wishlist.wishlist;
export const selectStatus = (state) => state.wishlist.status;
export const selectWishlistItemFromID = (state, id) => state.wishlist.wishlist.find(item => item.id === parseInt(id));

export default wishlistSlice.reducer;