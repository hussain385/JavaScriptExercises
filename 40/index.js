const make_album = (artist_name, album_title, no_tracks) => {
    if (no_tracks) {
        return {
            name: artist_name,
            title: album_title,
            tracks: no_tracks
        }
    }

    return {
        name: artist_name,
        title: album_title,
    }
}

console.log(make_album('hussain', "good songs"))
console.log(make_album('hussain1', "good songs twice"))
console.log(make_album('hussain2', "good songs third", 3))
