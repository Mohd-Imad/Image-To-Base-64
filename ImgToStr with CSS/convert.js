let fileInput = document.getElementById('fileInput')
    fileInput.addEventListener("change", (event) => {
        event.preventDefault()                               /*  console.log(event); */
        const file = fileInput.files[0];
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.addEventListener('load', () => {
            image = reader.result
            console.log(reader.result);
            document.getElementById('outputString').innerHTML = reader.result
        })
    })