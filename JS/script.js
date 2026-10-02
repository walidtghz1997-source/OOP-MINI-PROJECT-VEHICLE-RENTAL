let numberTotal = document.querySelector("#numberTotal")
let numTotalTogo = document.querySelector("#numTotalTogo")
let numTotalOut = document.querySelector("#numTotalOut")
let form = document.querySelector("#form")
let inputName = document.querySelector("#inputName")
let inputPrice = document.querySelector("#inputPrice")
let inputSelect = document.querySelector("#inputSelect")
let btnAddCars = document.querySelector("#btnAdd")

let btnEstimate = document.querySelector("#btnEstimate")
let btnRent = document.querySelector("#btnRent")
let inputDays = document.querySelector("#daysInput")
let inputSearch = document.querySelector("#searchInput")
let vehicleCount = document.querySelector(".vehicleCount")
let boxCardsVehicle = document.querySelector(".boxCardsVehicle")
// let  = document.querySelector("#")
// let  = document.querySelector("#")

let arrayCards = [];


form.addEventListener("submit", e => {
    e.preventDefault();
});

class Vehicle {
    #dailyPrice;
    #isAvailable;
    constructor(name, price, isAvaible) {
        this.name = name;
        this.#dailyPrice = price;
        this.#isAvailable = isAvaible;
    };

    get price() {
        return this.#dailyPrice;
    };
    set price(amount) {
        if (amount < 0) {
            return;
        };
        return this.#dailyPrice = amount;
    };
    get availability() {
        return this.#isAvailable;

    };

    set availability(value) {
        return this.#isAvailable = value;

    };

    rent() {
        if (this.#isAvailable === true) {
            this.set.availability = false;
            return;
        }
        console.log("not exist ");
    }
    returnVehicle() {
        if (this.#isAvailable === false) {
            this.set.availability = false;
            return;
        }
        console.log("this car valid ");
    }
    calculateCost(days) {
        return this.get.price * days;
    }

};

class cars extends Vehicle {
    constructor(name, price, isAvaible, hasAC) {
        super(name, price, isAvaible)
        this.hasAC = hasAC;
    };
    calculateCost(days) {
        if (days < 0) {
            return;
        }
        return this.get.price * days + 100;
    }
};

// Motorcycle    helmetIncluded = true    Price × days + 30 MAD

class Motorcycle extends Vehicle {
    constructor(name, price, isAvaible, helmetIncluded) {
        super(name, price, isAvaible)
        this.helmetIncluded = helmetIncluded;
    };
    calculateCost(days) {
        if (days < 0) {
            return;
        }
        return this.get.price * days + 30;
    }
};
// Bicycle    isElectric = false    Price × days


class Bicycle extends Vehicle {
    constructor(name, price, isAvaible, isElectric) {
        super(name, price, isAvaible)
        this.isElectric = isElectric;
    };
    calculateCost(days) {
        if (days < 0) {
            return;
        }
        return this.get.price * days;
    }
};

function addVehicle() {
    let

}

function displayeCards() {
    arrayCards.forEach(card => {
        card.boxCardsVehicle.innerHTML = `
   <div class="vehiclesContainer">
   <div class="cardVehicle">
                        <div class="cardBadgeRow">
                            <span class="badgeStatus available"><span class="greenDot"></span> Available</span>
                            </div>
                        <div class="cardImgBox carBg">
                            <span class="watermark">ROAM COLLECTION</span>
                        </div>
                        <div class="cardDetails">
                            <span class="vType">${inputSelect.value}</span>
                            <h3 class="vName">${inputName.value}</h3>
                            <div class="vPriceBox">
                                <span class="vPrice">${inputPrice.value}</span>
                                <span class="vUnit">MAD / day</span>
                            </div>
                        </div>
                        <div class="cardFooter">
                            <div class="estimateRow">
                                <div class="daysInputBox">
                                    <label>Rental days</label>
                                    <input type="number" value="1" min="1" id="daysInput" class="daysInput">
                                    </div>
                                    <button class="btnEstimate" id="btnEstimate">Estimate &rarr;</button>
                                    </div>
                                    <button class="btnRent" id="btnRent"><i class="fa-solid fa-key"></i> Rent vehicle</button>
                                    </div>
                                    `
    });



    btnAddCars.addEventListener("click", function () {
        if
                                    let vehicle = new
                arrayCards.push()

    })
}
console.log(arrayCards);
