const categoryList = document.querySelector("#categories");
const itemList = categoryList.querySelectorAll("li.item");
console.log(`Number of categories: ${itemList.length}`);
itemList.forEach(item => {
    const textList = item.querySelector("h2").textContent;
    const elements = item.querySelectorAll("li").length;
    console.log(`Category:${textList}`);
    console.log(`Elements:${elements}`);
}
)

