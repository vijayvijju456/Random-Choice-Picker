const tagsElement = document.getElementById('tags');
const textArea = document.getElementById('textarea');

textArea.focus();




textArea.addEventListener('keyup',(e) => {
    createTags(e.target.value);

    if(e.key === 'Enter'){
        setTimeout(()=>{
            e.target.value ="";
        },100);

        randomSelect();
    }
})




function createTags(input){
    const tags = input.split(",").filter(tag => tag.trim() !== '').map(tag => tag.trim());
    tagsElement.innerText = "";

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsElement.appendChild(tagEl);
    });
}


function randomSelect(){
    console.log("Random select ");
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();
        highlightTag(randomTag);
    
        setTimeout(() =>{
            unHighlightTag(randomTag);
        },100)

    },100);


    setTimeout(() =>{
        clearInterval(interval);

        setTimeout(() => {
                const randomTag = pickRandomTag();
                highlightTag(randomTag);
        },100);
    }, times *100);
    
}


function pickRandomTag(){
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(t){
    t.classList.add('highlight');
}

function unHighlightTag(t){
    t.classList.remove('highlight');
}