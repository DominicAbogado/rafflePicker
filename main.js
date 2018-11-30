$(document).ready(function () {



    var prizeList = [
        {
            name: "Battlefoam: Infinity Alpha Bag 2.0 (Vertical Standard Load Out)",
            price: 93.95,
            link: "http://www.meeplemart.com/store/p/2251-Battlefoam-Infinity-Alpha-Bag-2-0-Vertical-Standard-Load-Out.aspx",
            image: "http://www.meeplemart.com/resize/Shared/Images/Product/Infinity_Alpha_Bag.jpg?bw=250",
            donations: 0,
            prizeID: 1
        },
        {
            name: "Warhammer Underworlds: Nightvault",
            price: 70.00,
            link: "https://www.games-workshop.com/en-CA/Wh-Underworlds-Nightvault-2018-eng",
            image: "https://www.games-workshop.com/resources/catalog/product/920x950/60010799006_ENGNightvault01.jpg",
            donations: 0,
            prizeID: 2
        },
        {
            name: "PanOceania Military Orders 300Pt Pack",
            price: 91.95,
            link: "https://catalog.infinitythegame.com/panoceania/ver/280022-0742-panoceania-military-orders-300pt-pack#menuAnchor",
            image: "https://assets.corvusbelli.net/store/images/products/280022-0742-panoceania-military-orders-300pt-pack.jpg",
            donations: 0,
            prizeID: 3
        },
        {
            name: "Dire Foes Candy Cloud Mission Pack 7",
            price: 50.95,
            link: "https://assets.corvusbelli.net/store/images/products/280018-0709-dire-foes-mission-pack-7-candy-cloud.jpg",
            image: "https://assets.corvusbelli.net/store/images/products/280018-0709-dire-foes-mission-pack-7-candy-cloud.jpg",
            donations: 0,
            prizeID: 4
        },
        {
            name: "Operation Cold Front 2 Player Starter",
            price: 99.95,
            link: "http://www.meeplemart.com/infinity-operation-coldfront.aspx",
            image: "https://assets.infinitythegame.net/web/articles/images/Compras_relacionadas_Operation_Coldfront/280020-0730-operation-coldfront.jpg",
            donations: 0,
            prizeID: 5
        },
        {
            name: "Citadel Battle Figure Case",
            price: 100.00,
            link: "https://www.games-workshop.com/en-CA/Citadel-Battle-Figure-Case",
            image: "https://www.games-workshop.com/resources/catalog/product/920x950/99239999075_CitadelBattleCase01.jpg",
            donations: 0,
            prizeID: 6
        },
        {
            name: "Board Game Bundle: Personally Incorrect, Gyrating Hamsters and something else",
            price: 90.00,
            link: "https://www.brewwizards.ca/",
            image: "https://www.personallyincorrect.com/newpi/wp-content/uploads/2018/06/pi-originalbox.png",
            donations: 0,
            prizeID: 7
        },
        {
            name: "Infinity PanOceania (#511): Starter Pack",
            price: 47.95,
            link: "http://www.meeplemart.com/store/p/36980-Infinity-PanOceania-511-Starter-Pack.aspx",
            image: "http://www.meeplemart.com/resize/Shared/Images/Product/Infinity-PanOceania-511-Starter-Pack/Infinity-PanOceania-511-Starter-Packb.jpg?bw=550&w=550&bh=550&h=550",
            donations: 0,
            prizeID: 8
        },
        {
            name: "Paint Commission from KeyLimePrime",
            price: 50.00,
            link: "https://www.twitch.tv/keylimeprime",
            image: "https://pbs.twimg.com/profile_images/982039373800771585/pjUqWXwF_400x400.jpg",
            donations: 0,
            prizeID: 9
        },
    ]

    function showPrizeList() {

        for (var i = 0; i < prizeList.length; i++) {
            $(".prizeList").append(
                `
            <li>
            Name | ${prizeList[i].name}
            <br>
            Estimated Price | ${prizeList[i].price}
            </li>
            `
            )
        }
    }

    function prizeDisplay() {
        for (var i = 0; i < prizeList.length; i++) {
            $(".prizeRender").append(
                `
        <div class="col-lg-4">

                <p class="prizeName">Name: ${prizeList[i].name}
                <br> | Price: ${prizeList[i].price} </p>
                <img src="${prizeList[i].image}" class="imageDesc">

        </div>
             `
            )
        }
    };



    var lottery = ["Dominic", 'Kyle', 'Carl', 'Jeremy', 'Doug', 'Rylnd', 'Chester']

    var ballotTotal = 0;

    // $("button").on("click","#prizeList[i].name", function(){
    //     var rafNumber = Math.floor(Math.random() * lottery.length)
    //     var rafWinner = lottery[rafNumber];
    //     //Generates number between 1 and 10
    //     $("#prizeID-${prizeList[i].name}").empty();
    //     $("#prizeID-${prizeList[i].name}").append("HELLO WORLD");
    //     console.log(rafNumber)
    //     });

    $(".btn").on("click", "", function () {
        console.log("Hello World")
    });



    prizeDisplay();
    showPrizeList();

});
