function getImageBlob(url) {
    return fetch(url).then((response) => {
        console.log(response)
        if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
        }
        return response.blob();
    });
}

let cat = getImageBlob(
    'https://upload.wikimedia.org/wikipedia/commons/4/43/Siberian_black_tabby_blotched_cat_03.jpg'
);
let dog = getImageBlob(
    'https://upload.wikimedia.org/wikipedia/commons/a/af/Golden_retriever_eating_pigs_foot.jpg'
);


Promise.any([cat, dog])
    .then((data) => {
        let objectURL = URL.createObjectURL(data);
        let image = document.createElement('img');
        image.src = objectURL;
        document.body.appendChild(image);
    })
    .catch((e) => {
        console.log(e.message)
    })
