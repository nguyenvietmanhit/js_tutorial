const imagelist = document.querySelector('.image-list');
const fileInput = document.querySelector('.files');
const dropzone = document.querySelector('.dropzone');

const setActive = (dropzone, active = true) => {
    const hasActiveClass = dropzone.classList.contains('active');
    if (active && !hasActiveClass) {
        return dropzone.classList.add('active');
    }

    if (!active && hasActiveClass) {
        return dropzone.classList.remove('active');
    }
}

dropzone.addEventListener('dragenter', (e) => {
    e.preventDefault();
    setActive(dropzone)
})

dropzone.addEventListener('dragover', (e) => {
    e.preventDefault();
    setActive(dropzone)
})

dropzone.addEventListener('dragleave', (e) => {
    e.preventDefault();
    setActive(dropzone, false)
})

dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    setActive(dropzone, false)

    // Get the FileList
    const { files } = e.dataTransfer;
    handleImages(files);

})

const handleImages = (files) => {
    // get valid images
    console.log([...files])
    let validImages = [...files].filter((file) =>
        // console.log(file);
        // console.log(['image/jpeg', 'image/png'].includes(file.type));
       ['image/jpeg', 'image/png'].includes(file.type)
    )
    console.log(validImages)

    // Show the image
    validImages.forEach(showImage);

    // upload all images
    uploadImages(validImages)
}

const showImage = (image) => {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.addEventListener('load',  e => {
        const div = document.createElement('div');
        div.classList.add('image');
        div.innerHTML = `
            <img src="${e.target.result}" alt="${image.name}">
            <p>${image.name}</p>
            <p>${formatBytes(image.size)}</p>
        `;
        imagelist.appendChild(div)
    })
}

function formatBytes(size, decimals = 2) {
    if (size === 0) {
        return '0 bytes';
    }
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(size) / Math.log(k));
    return parseFloat((size / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const uploadImages = async (images) => {
    const formData = new FormData();
    console.log(images);
    console.log([...images]);
    images.forEach((image) => {
        formData.append('images[]', image, image.name);
    })

    const response = await fetch('upload.php', {
        method: 'POST',
        body: formData
    })

    return await response.json();
}


fileInput.addEventListener('change', (e) => {
    const {files} = e.target;
    handleImages(files)
})

document.addEventListener('dragover', e => e.preventDefault());
document.addEventListener('drop', e => e.preventDefault());
