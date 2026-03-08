let allIssues = []; 

const loaddata = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data =>{ 
        allIssues = data.data;
        displayAll(allIssues)
    });

}
const showAll = () =>{
displayAll(allIssues);
setActiveButton('all-btn');
}

const showOpen = () =>{
const openData = allIssues.filter(item => item.status === 'open');
displayAll(openData);
// console.log(openData.labels)
setActiveButton('open-btn');
}

const showClosed = () =>{
const closeData = allIssues.filter(item => item.status === 'closed');
displayAll(closeData);
setActiveButton('closed-btn');
}

function setActiveButton(activeId){

const buttons = ['all-btn','open-btn','closed-btn'];

buttons.forEach(id=>{
const btn = document.getElementById(id);

btn.classList.remove('btn-primary','text-white');
btn.classList.add('btn-outline','text-neutral-500');
})

const activeBtn = document.getElementById(activeId);

activeBtn.classList.remove('btn-outline','text-neutral-500');
activeBtn.classList.add('btn-primary','text-white');

}

// assignee: "jane_smith"
// author: "john_doe"
// createdAt: "2024-01-15T10:30:00Z"
// description: "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior."
// id: 1
// labels: (2) ['bug', 'help wanted']
// priority: "high"
// status: "open"
// title: "Fix navigation menu on mobile devices"
// updatedAt: "2024-01-15T10:30:00Z
const displayAll = (posts) => {
    //1 get the container and empty the container
 const allCard = document.getElementById('all-card');
 allCard.innerHTML='';
// console.log(posts)
posts.forEach(post => {
    // console.log(post)
    //2 get element
    const card = document.createElement('div');
    card.innerHTML=`<div class="card shadow-xl border-t-4 border-[#00A96E]  p-4 bg-indigo-200 space-y-2" >
    <div class="flex justify-between items-center">
        <img src="./assets/Open-Status.png" alt="">
        <p class="border rounded-[50px] px-3
         text-white bg-orange-300">${post.priority}</p>
    </div>
    <h2 class="font-semibold text-xl">Fix navigation menu on mobile devices</h2>
    <p class="text-neutral-400 text-sm">
    ${post.title}</p>
    <div class="flex gap-3">
        <p class="rounded-full px-3 border
         bg-orange-100 text-[#EF4444] ">
         <img src="./assets/Vector (2).png" alt="">${post.labels[0]}</p>
        
        ${post.labels[1] ? `
        <p class="rounded-full px-4 border bg-[#FFF8DB] text-[#D97706]">
        <img src="./assets/Vector (3).png" alt=""> ${post.labels[1]}
        </p>
        ` : ''}
    </div>
    <hr class=" border border-slate-400">
    <p class="text-neutral-400">#${post.id} ${post.author}</p>
    <p class="text-neutral-400">${post.createdAt}</p>
   </div>`;
    //3 add the appendchild
    allCard.appendChild(card)
})
}
loaddata();






