function night_mode(self) {
  var target = document.querySelector('body');
  if(self.value === 'night'){
   target.style.backgroundColor = 'black';
   target.style.color = 'white';
   self.value = 'day';
  } else{
   target.style.backgroundColor = 'white';
   target.style.color = 'black';
   self.value = 'night';
  }
}
 /*
 아래 함수는
 startMogo에서 큐를 받아 수행되게되며
 menuList에 속한 리스트만큼
 ul 태그 하위에 li 태그를 추가한 뒤 반환하게 됩니다.
 */
 function mogo(menuList,site){
   var n=1, i=0;
   var list = document.createElement('ul');
   var out = '';
   while(i<menuList.length){
     out += '<li><a href="http://hstimer.com/'+site+n+'">'+ menuList[i]+'</a></li>';
     n++;
     i++;
   }
   list.innerHTML = out;
   return list;
 }

 /*
 아래 함수는,
 body 영역에 app이라는 클래스를 가진 태그의 갯수만큼 반복하며
 mogo() 함수를 수행하고 리턴받은 결과를 자신의 하위에 appendChild로 추가하게 됩니다.
 단점; 똑같은 것만 계속 생성 된다.
 */
 function startMogo(menuList, i){
   var app = document.getElementsByClassName('app');
   var arr1 = menuList
     app[i].appendChild(mogo(menuList,'h'));
 }
