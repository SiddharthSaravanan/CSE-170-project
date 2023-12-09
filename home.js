
let imageURLs = [
    "https://www.hussle.com/blog/wp-content/uploads/2020/12/Gym-structure-1080x675.png", 
    "https://zebraathletics.com/wp-content/uploads/2018/11/ZC-RINGTS_TRAINING_RING-PRODUCT1-scaled.jpg",
    "https://i0.wp.com/asmanyreviewsaspossible.com/wp-content/uploads/2020/11/image.png?fit=840%2C493&ssl=1"  
      ];

let captions = ["Brand New Large Industrial ceiling Fans Have been installed at the Encinitas location!",
    "New Boxing Section Comping Soon to the Carlsbad location!",
    "Check out our exciting Black Friday and Cyber Monday deals in the Merchandise Catalogue!"];
  
let len = imageURLs.length;
let a = 0;

function changeImg(val){
    let n = Number(document.getElementsByClassName("carousel")[0].id);
    n = n+val;

    if(n >= len){n = 0;}
    else if(n<0){n = len-1;}

    let new_elt = document.createElement('img');
    new_elt.src = imageURLs[n];
    new_elt.className = "carousel";
    new_elt.id = n.toString();
    document.getElementsByClassName("carousel")[0].replaceWith(new_elt);

    document.getElementsByTagName("h6")[0].innerHTML = captions[n];
}
