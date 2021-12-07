/* Fill your code*/
class Blog
{
    constructor(title, detail)
    {
        this.title=title
        this.detail=detail
    }
    
    // Adding the Title of Blog Post
    addTitle()
    {
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        document.querySelector("#card-text").appendChild(title_card);
        title_card.innerHTML += this.title;
    }

    // Adding the Description of Blog Post
    addDescription() 
    {
        var card_description = document.createElement('p');
        card_description.setAttribute("id","blog-description");
        document.querySelector("#card-text").appendChild(card_description);
        card_description.innerHTML += this.detail;
    }

}

let addPostButton = document.querySelector("#addBlog")
addPostButton.addEventListener("click", function()
{
    document.querySelector("#popupContact").style.display = "block"
}
)

let closeButton = document.querySelector("#close")
closeButton.addEventListener("click", function()
{
document.querySelector("#popupContact").style.display = "none"
}
)

let postButton = document.querySelector("#post")

postButton.onclick = function ()
{
    let title = document.querySelector("#title").value
    let detail = document.querySelector("#detail").value


    let addPost=new Blog(title, detail)

    addPost.addTitle()
    addPost.addDescription()

    document.querySelector("#popupContact").style.display = "none";
    document.querySelector("#postImg").style.display = "block";

}

