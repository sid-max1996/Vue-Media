exports.fileToBase64 = function(file) {
    return new Promise((resolve, reject) => {
        var reader = new FileReader();
        reader.onload = function(event) {
            var dataUri = event.target.result;
            resolve(dataUri);
        };
        reader.onerror = function(event) {
            reject(new Error("файл не может быть прочитан"));
        };
        reader.readAsDataURL(file);
    });
}