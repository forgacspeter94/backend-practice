window.addEventListener('load', () => {
    console.log('loaded from a public directory')

const formElement = document.querySelector('form');
formElement.addEventListener('submit', (event) => {
    event.preventDefault();

    const imageName = event.target.querySelector('input[type="text"]').value;
    const imageFile = event.target.querySelector('input[type="file"]').files[0];

    const formData = new FormData();
    formData.append('imgName','imageName');
    formData.append('imgFile', 'imageFile');

    const fetchSettings = {
        method: 'POST',
        body: formData
    }

    fetch('/uploadImg',fetchSettings).then(async (data) => {
        if(data.status === 200){
            console.log('OK')
        }
    })





    console.log(event.target, imageName, imageFile)
});
});

