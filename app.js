
const hamburger_icon = document.getElementById('ham_id');
const ham_div = document.querySelector('.hamburger');
const card_section = document.querySelector('.comment_section');
const cover_details = document.querySelector('.cover_details');
const cards = document.querySelectorAll('.card');
const cells = document.querySelectorAll('.cell');
const links = document.querySelector('.links')
   const observer= new IntersectionObserver(cards =>{
        cards.forEach(card=>{
            card.target.classList.toggle('show',card.isIntersecting);          
        })
    },{threshold:.3,})
    cards.forEach(card=>{
        observer.observe(card);
    })
    const observer_table = new IntersectionObserver(cells=>{
        cells.forEach(cell=>{
            cell.target.classList.toggle('show',cell.isIntersecting)
        })
       
        },{threshold:1,})
        cells.forEach(cell=>{
            observer_table.observe(cell);
    })
const navbar = document.querySelector("nav");
const handle_hamburger=()=>{
    hamburger_icon.addEventListener('click',()=>{ 
      navbar.classList.toggle('show');
      links.classList.toggle('show')
      const hamburger_line = document.querySelectorAll('.line');
      hamburger_line.forEach(element => {
          element.classList.toggle('white_ham');
          
      });
      ham_div.classList.toggle('ham_div_fixed');
    })
 
}
handle_hamburger();


