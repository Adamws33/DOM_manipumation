
console.log(document.getElementsByTagName('p'))
console.log(document.getElementsByClassName('sample'))
console.log(document.querySelectorAll('p.sample'))
console.log(document.querySelector('p.sample'))
console.log(document.getElementById('test'))

document.getElementById('test').style.color='red'

document.querySelectorAll('p.sample')[0].style.color = 'red'
document.querySelectorAll('p.sample')[2].style.color = 'red'

console.log(document.getElementById('test').innerHTML)

for(element of document.querySelectorAll('p.sample')){
  element.style.color = 'red';
  console.log(element)
}
document.getElementById('clickThisButton').addEventListener('click', (e) =>{
  alert('CLICKED!')
  console.log(e)
})
document.getElementById('clickThisButton').addEventListener('click', () =>{
  for(i of document.querySelectorAll('p.sample')){
    i.style.color = 'blue';
  }})

document.getElementsByClassName('sample')

for (element of document.getElementsByClassName('sample')){
  element.addEventListener('mouseover',function(){
    this.style.color='black'
  })
}

for (element of document.getElementsByClassName('sample')){
  element.addEventListener('click',function(){
    this.style.border='2px solid black'
  })
}
for (element of document.getElementsByClassName('sample')){
  element.addEventListener('mouseleave',function(){
    this.style.color='red'
  })
}

