
const textarea = document.querySelector('#textarea')
const button = document.querySelector('button')
const output = document.querySelector('.output')

button.addEventListener('click', function() {
    textCleaner(textarea.value)


    function textCleaner(string) {
        let res = []
        string = string.replace(/ +/g, ' ');
        string = string.replace(/[\n\r]+/g, '');
        string = string.split(' ')
    
        // делаем заглавную первому слову
        firstWord = []                                     
        for (i=0; i < string[0].length; i++) {
            i == 0 ? firstWord.push(string[0][i].toUpperCase()) : firstWord.push(string[0][i])
        }
        res.push( firstWord.join('') )
        
        // делаем все прописными
        for (i = 1; i < string.length; i++) {
            let tempWord = []
            string[i] == string[i].toUpperCase() ? tempWord.push(string[i].toLowerCase()) : tempWord.push(string[i].toLowerCase())
            res.push(tempWord.join(''))
        }
        output.innerHTML = 'Изменено и скопировано в буфер обмена'

        function addToClipboard() {
            let tempTextarea = document.createElement('textarea')
            document.body.appendChild(tempTextarea)
            tempTextarea.value = res.join(' ')
            tempTextarea.select()
            navigator.clipboard.writeText(tempTextarea.value)
            document.body.removeChild(tempTextarea)
        }
        addToClipboard()
        return res.join(' ')
    }
    
    
    
})


