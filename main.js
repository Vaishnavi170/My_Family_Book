var images =
            ["https://tse4.mm.bing.net/th/id/OIP.n6MCg_pS0lChv5kpU2rpeQHaHa?pid=ImgDet&w=920&h=920&rs=1" ,
            "https://p7.hiclipart.com/preview/8/82/517/cartoon-grandparent-clip-art-grandma-cliparts.jpg" ,
            "https://i.pinimg.com/originals/92/44/79/924479e26163f1e6d9cc6cb24843e535.jpg" ,
            "https://www.pngitem.com/pimgs/m/309-3099203_commerce-vector-cartoon-business-man-hq-image-free.png" ,
            "https://i.pinimg.com/originals/9d/a0/db/9da0dbfe8620a55b9330b320f2b3c6f2.png"
            ];
            var names = ["Family Book", "Mani Kumari", "Kanthisree", "Chandra Kiran",
"Vaishnavi", "Ramachandra Rao"];
var i = 0;
function update(){
i++;
var numbers_of_family_member_in_array = 5
if(i > numbers_of_family_member_in_array){
    i = 0;
}
var updatedImage = images[i];
var updatedName = names[i];
document.getElementById("family_member_image").src = updatedImage;
document.getElementById("family_member_name").innerHTML = updatedName;
}