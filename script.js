window.onload=function(){
var list = document.getElementById("shuffleAndSort_cards"),
button = document.getElementById("shuffleCards");
function shuffle(items)
{
    var cached = items.slice(0), temp, i = cached.length, rand;
    while(--i)
    {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
function shuffleCards()
{
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    for(i=0;i< nodes.length;i++)
    {
        list.appendChild(nodes[i]);

    }
} 
function sortCards()
{
    var nodes = list.children, i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = nodes.sort((i,j)=>Number(i.innerText)-Number(j.innerText));
    for(i=0;i< nodes.length;i++)
    {
        list.appendChild(nodes[i]);

    }
} 
document.getElementById("shuffleCards").onclick = shuffleCards;
document.getElementById("sortCards").onclick = sortCards;

}