const loaddata = () => {
    fetch('https://phi-lab-server.vercel.app/api/v1/lab/issues')
    .then(res => res.json())
    .then(data => displayAll(data.data))
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
    card.innerHTML=`<div class="card shadow p-4 bg-emerald-100 space-y-2" >
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
         <i class="fa-solid fa-bug"></i> Bug </p>
        <p class="rounded-full px-4 border
         bg-[#FFF8DB] text-[#D97706] ">help wanted</p>
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