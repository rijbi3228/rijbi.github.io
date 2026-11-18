// Rijbi portfolio script: scroll animations and the counting numbers.
document.documentElement.classList.add('js');
(function(){var els=document.querySelectorAll('.rv');
if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return}
var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.12});
els.forEach(function(e){io.observe(e)});})();
document.querySelectorAll('.num').forEach(function(el){
if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;
var t=+el.dataset.n,i=0;el.textContent='0';
var id=setInterval(function(){i++;el.textContent=i;if(i>=t)clearInterval(id)},90);});
