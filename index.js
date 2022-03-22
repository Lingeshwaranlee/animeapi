async function foo() {

    try {
        let s1 = await fetch('https://animechan.vercel.app/api/random')
        let res = await s1.json();
        // console.log(res)

        let anime = document.getElementById('anime')
        let quote = document.getElementById('quote')
        let character = document.getElementById('character')

        anime.innerHTML = ` ANIME : <span class="font-weight-bold font-italic">${res.anime}</span>`
        quote.innerHTML = `<span class=" font-italic">"${res.quote}" </span>`
        character.innerHTML = `CHARACTER: <span class="font-weight-bold font-italic">${res.character}</span> `

    } catch (error) {
        console.log("Error")

    }
}


foo()


function search() {



    let val = document.getElementById("search").value
    if (val == "" || null) {
        alert("Enter character name in search box")

    } else {
        display(val)
    }
}


async function display(val) {

    try {


        let div = document.getElementById("div")

        let s1 = await fetch('https://animechan.vercel.app/api/quotes/character?name=' + val)
        let res = await s1.json();

        div.innerHTML = ""

        div.innerHTML += `  <div class="col-12">
 <div class="text-center text-white align">
                    <h5 class="card-title  mb-3" id="anime"></h5>
                    <p class="card-text mb-3" id="quote"></p>
                    <p class="card-text mb-2" id="character"></p>
                    <button type="button" class="btn btn-outline-warning" onclick="foo()">Next</button>
                </div>
    </div>`




        for (var i of res) {

            let anime = document.getElementById('anime')
            let quote = document.getElementById('quote')
            let character = document.getElementById('character')

            anime.innerHTML = ` ANIME : <span class="font-weight-bold font-italic">${i.anime}</span>`
            quote.innerHTML = `<span class=" font-italic">"${i.quote}" </span>`
            character.innerHTML = `CHARACTER: <span class="font-weight-bold font-italic">${i.character}</span> `



        }






        val = ""



    } catch (error) {
        alert("Sorry  character  not available")
        foo()

    }
}