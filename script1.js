const products = [
    { name: "מחשב נייד", description: "מחשב נייד חזק ומעולה", price: 2500 },
    { name: "טלפון סלולרי", description: "טלפון חכם עם מצלמה מעולה", price: 1500 },
    { name: "שואב אבק", description: "שואב אבק רובוטי", price: 1200 },
    { name: "טלוויזיה", description: "טלוויזיה חכמה 50 אינץ'", price: 3000 }
]

function test2(num) {
    const existingDivs = document.querySelectorAll(".product")
    existingDivs.forEach(div => div.remove())

    for (let i = 0; i < products.length; i++) {
        const product = products[i]

        if (product.price <= num) {
            const div = document.createElement("div")
            div.classList.add("product")
            div.innerText = `מוצר: ${product.name}, תיאור: ${product.description}, מחיר: ${product.price}`
            document.body.appendChild(div)
        }
    }

}