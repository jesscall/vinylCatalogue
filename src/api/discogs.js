const collectionRequest = 'https://api.discogs.com/users/jesscall/collection/folders/3927115/releases';
const wishlistRequest = 'https://api.discogs.com/users/jesscall/wants';
const releaseRequest = 'https://api.discogs.com/releases/';
const searchRequest = 'https://api.discogs.com/database/search?type=release&format=vinyl&';
const token = 'UssUQmSNfJqtaTBFkclXrpyakuyAPCwFMXPmGotV';
const header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization' : `Discogs token=${token}`,
    'Host': 'api.discogs.com',
}

export const discogs = (endpoint, method) => (async () => {
    return await fetch(endpoint, {
        method: method,
        headers: header,
    }).then(response => {
        if (response.ok) {
            if (method === 'DELETE') {
                return response.text();
            } else {
                return response.json();
            }
        }
    }).then(data => {
        console.log(data);
        return {
            ...data
        };
    }).catch(error => {
        console.log(error);
        return Promise.reject(error.message);
    })
})();

discogs.fetchCollection = () => {
    return discogs(collectionRequest, 'GET');
}

discogs.addToCollection = (releaseID) => {
    return discogs(collectionRequest + '/' + releaseID, 'POST');
}

discogs.deleteFromCollection = (releaseID, instanceID) => {
    return discogs(
        collectionRequest + '/' + releaseID + '/instances/' + instanceID, 
        'DELETE'
    );
}

discogs.fetchWishlist = () => {
    return discogs(wishlistRequest, 'GET');
}

discogs.addToWishlist = (releaseID) => {
    return discogs(wishlistRequest + '/' + releaseID, 'PUT');
}

discogs.deleteFromWishlist = (releaseID) => {
    return discogs(wishlistRequest + '/' + releaseID, 'DELETE');
}

discogs.fetchRelease = (releaseID) => {
    return discogs(releaseRequest + releaseID, 'GET');
}

discogs.search = (queryParams) => {
    return discogs(searchRequest + queryParams, 'GET');

}