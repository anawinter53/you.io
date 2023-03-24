const entryPage1 = document.querySelector('#entryPage1')
const datePage1 = document.querySelector('#datePage1')

async function getEntries () {
    const data = await fetch('http://localhost:3000/diary')
    datePage1.textContent = data.date
    typingEntry1(data)
}

function typingEntry1 (data) {
    const letters = data.text.split("")
    for(let i=0; i < letters.length;i++){
        setTimeout(()=>{
            entryPage1.textContent += letters[i]
        },100)
    } 
}