let msg = document.getElementsByClassName("text")[0];
let msg2 = document.getElementsByClassName("text2")[0];
let wrapper = document.querySelector(".demo");
let btn2 = document.querySelector(".btn2");
let wrappreact = wrapper.getBoundingClientRect();
let btnreact = btn2.getBoundingClientRect();
let a = 1;
btn2.addEventListener("click", () => {
    if (a === 1) {
        let box = document.getElementById("gif");
        if (
            box.src.match(
                "https://i.pinimg.com/originals/fe/b3/e8/feb3e8d8eb274ea0b76195a7a1a485a0.gif"
            )
        ) {
            box.src =
                "https://media.tenor.com/OhR0IV22NSQAAAAi/zulum-pinch.gif";
        } else {
            box.src =
                "https://i.pinimg.com/originals/fe/b3/e8/feb3e8d8eb274ea0b76195a7a1a485a0.gif";
            msg.innerHTML = "<h2>Soch Le Achhe see..<h2>";
            msg2.innerHTML = "--Itni Jldi bhi mt bolo yarr--&#x1F644;";
            a = 1;
        }
        a++;
    } else if (a === 2) {
        let box = document.getElementById("gif");
        if (
            box.src.match(
                "https://i.pinimg.com/originals/6f/fe/03/6ffe0393b155bec82987e1b7a9e17889.gif"
            )
        ) {
            box.src =
                "https://i.pinimg.com/originals/fe/b3/e8/feb3e8d8eb274ea0b76195a7a1a485a0.gif";
        } else {
            box.src =
                "https://i.pinimg.com/originals/6f/fe/03/6ffe0393b155bec82987e1b7a9e17889.gif";
            msg.innerHTML = "<h2>Ek Aur Barr achhe se soch le..!!<h2>";
            msg2.innerHTML = "Asa kyu krtee hoo...&#x1F641;";
            a = 2;
        }
        a++;
    } else if (a === 3) {
        let box = document.getElementById("gif");
        if (
            box.src.match(
                "https://i.pinimg.com/originals/13/8b/0f/138b0fe2a0a735c359ac9bd27ee8c88b.gif"
            )
        ) {
            box.src =
                "https://i.pinimg.com/originals/6f/fe/03/6ffe0393b155bec82987e1b7a9e17889.gif";
        } else {
            box.src =
                "https://i.pinimg.com/originals/13/8b/0f/138b0fe2a0a735c359ac9bd27ee8c88b.gif";
            msg.innerHTML = "<h2>Manjaa abhiii Nhiii toooo....&#x1F620;<h2>";
            msg2.innerHTML = "Ye bhut galat he..";
            btn2.addEventListener("mouseover", () => {
                const i =
                    Math.floor(
                        Math.random() * (wrappreact.width - btnreact.width)
                    ) + 1;
                const j =
                    Math.floor(
                        Math.random() * (wrappreact.height - btnreact.height)
                    ) + 1;
                console.log(i);
                btn2.style.left = i + "px";
                btn2.style.top = j + "px";
            });
            a++;
        }
    }
});

function success() {
    let done = document.getElementById("gif");
    if (
        done.src.match(
            "https://custom-doodle.com/wp-content/uploads/doodle/milk-mocha-bear-heart-love/milk-mocha-bear-heart-love-doodle.gif"
        )
    ) {
        done.src = "https://media.tenor.com/OhR0IV22NSQAAAAi/zulum-pinch.gif";
    } else {
        done.src =
            "https://custom-doodle.com/wp-content/uploads/doodle/milk-mocha-bear-heart-love/milk-mocha-bear-heart-love-doodle.gif";
        msg.innerHTML = "<h2>heheheheh....!I Know It !!!!<h2>";
        msg2.innerHTML = "You are my favorite&#x1F618;";
        btn2.style.display = "none";
    }
}
