

function parser(input, startTag, endTag){
  var searching='s';
  var stored=[];
  var curr=''
  while(input.length>0){
    if(searching==='s'){
      if(input.startsWith(startTag)){
        input=input.substring(startTag.length);
        searching='e';
      }
      else{
        input=input.substring(1);
      }
    }
    else{
      if(input.startsWith(endTag)){
        input=input.substring(endTag.length);
        stored.push(curr);
        curr=''
        searching='s'
      }
      else{
        curr=curr+input.substring(0,1);
        input=input.substring(1);
      }
    }
  }
  return stored
}
var stTag='<editable>';
var eTag='</editable>'
$(document).ready(function(){
    $("#fetch").click(function(){
        // make ajax request
        console.log('click fired');
        var url=$('#url').val();
        console.log(url);
    });
});
// console.log(parser('atxxxbaatsssbaaaaatooooob', 't', 'b'))
//
// var html=`<div class="cbp-l-project-title">Project</div>
// <div class="cbp-l-project-subtitle">by xone</div>
//
// <div class="cbp-slider">
//     <ul class="cbp-slider-wrap">
//         <li class="cbp-slider-item">
//             <img src="./assets/images/w1.jpg" alt="">
//         </li>
//         <li class="cbp-slider-item">
//             <img src="./assets/images/w2.jpg" alt="">
//         </li>
//         <li class="cbp-slider-item">
//             <img src="./assets/images/w3.jpg" alt="">
//         </li>
//     </ul>
// </div>
//
// <div class="cbp-l-project-container">
//     <div class="cbp-l-project-desc">
//       <editable>
//         <div class="cbp-l-project-desc-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, cumque, earum blanditiis incidunt minus commodi consequatur provident quae. Nihil, alias, vel consequatur ab aliquam aspernatur optio harum facilis excepturi mollitia autem voluptas cum ex veniam numquam quia repudiandae in iure. Assumenda, vel provident molestiae perferendis officia commodi asperiores earum sapiente inventore quam deleniti mollitia consequatur expedita quaerat natus praesentium beatae aut ipsa non ex ullam atque suscipit ut dignissimos magnam!</div>
//       </editable>
//     </div>
//     <div class="cbp-l-project-details">
//         <ul class="cbp-l-project-details-list">
//             <li><strong>Client</strong>John Doe</li>
//             <li><strong>Date</strong>22 July 2015</li>
//             <li><strong>Categories</strong>Logo, Graphic</li>
//         </ul>
//         <a href="#" target="_blank" class="cbp-l-project-details-visit">OPEN PROJECT</a>
//     </div>
// </div>
//
// <div class="cbp-l-project-container">
//     <div class="cbp-l-project-related">
//         <div class="cbp-l-project-desc-title"><span>Related Projects</span></div>
//
//         <ul class="cbp-l-project-related-wrap">
//             <li class="cbp-l-project-related-item">
//                 <a href="ajax-awesome-work/project9.html" class="cbp-singlePage cbp-l-project-related-link" rel="nofollow">
//                     <img src="./assets/images/w8.jpg" alt="">
//                     <div class="cbp-l-project-related-title">Project Title</div>
//                 </a>
//             </li>
//             <li class="cbp-l-project-related-item">
//                 <a href="ajax-awesome-work/project2.html" class="cbp-singlePage cbp-l-project-related-link" rel="nofollow">
//                     <img src="./assets/images/w7.jpg" alt="">
//                     <div class="cbp-l-project-related-title">Project Title</div>
//                 </a>
//             </li>
//             <li class="cbp-l-project-related-item">
//                 <a href="ajax-awesome-work/project3.html" class="cbp-singlePage cbp-l-project-related-link" rel="nofollow">
//                     <img src="./assets/images/w6.jpg" alt="">
//                     <div class="cbp-l-project-related-title">Project Title</div>
//                 </a>
//             </li>
//         </ul>
//
//     </div>
// </div>
//
// <br><br><br>
// `
// console.log(parser(html,'<editable>','</editable>'));
