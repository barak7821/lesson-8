function test1(name, lastname) {
    const div1 = document.createElement("div")

    const p1 = document.createElement("p")
    p1.style.color = "red"
    p1.style.textDecoration = "underline"
    p1.innerText = name

    const p2 = document.createElement("p")
    p2.style.fontSize = "50px"
    p2.style.border = "1px solid black"

    div1.appendChild(p1)
    div1.appendChild(p2)
    document.body.appendChild(div1)
}

test1("Barak", "Gal")