import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { discogs } from '../../api/discogs';

const initialState = {
    collection: [],
    status: 'idle'
};

export const fetchCollection = createAsyncThunk('collection/fetchCollection', async () => {
    return await discogs.fetchCollection();
});

export const addToCollection = createAsyncThunk('collection/addToCollection', async (releaseID) => {
    return await discogs.addToCollection(releaseID);
});

export const deleteFromCollection = createAsyncThunk(
    'collection/deleteFromCollection', async (release) => {
        return await discogs.deleteFromCollection(release.id, release.instance_id);
    }
);

export const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchCollection.pending, (state, action) => {
                state.status = 'loading';
            })
            .addCase(fetchCollection.fulfilled, (state, action) => {
                action.payload.releases
                    .forEach(release => state.collection.push(release));
                state.status = 'success';
            })
            .addCase(fetchCollection.rejected, (state, action) => {
                state.status = 'rejected';
            })
            .addCase(addToCollection.fulfilled, (state, action) => {
                state.collection.push(action.payload);
            })
            .addCase(deleteFromCollection.fulfilled, (state, action) => {
                state.collection.splice(state.collection.indexOf(action.payload), 1);
            })
    }
});

export const selectCollection = (state) => state.collection.collection;
export const selectStatus = (state) => state.collection.status;
export const selectCollectionItemFromID = (state, id) => state.collection.collection.find(item => item.id === parseInt(id));

export default collectionSlice.reducer;