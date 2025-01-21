import robotjs from "robotjs";

robotjs.setKeyboardDelay(0);
const boxCol = "000000"

const fishingBox = {
    x: 816,
    y: 446
}

const square = 128 // px
const fishingArea = {
    x: 960 - 64,
    y: 525
}

const circlePos = {
    x: 903,
    y: 563
}

let runs = 0;

robotjs.moveMouse(50, 50)
robotjs.mouseClick()

let locked = false;
while(true) {
    if( ! locked ) {
        const now = performance.now();
        robotjs.keyTap("1")
        robotjs.keyTap(" ")
        await sleep(200)
        const isBoxOpen = robotjs.getPixelColor(fishingBox.x, fishingBox.y) === boxCol
        if( isBoxOpen ) {
            console.log("Start Fishing")
            while( robotjs.getPixelColor(fishingBox.x, fishingBox.y) === boxCol ) {
                const color = robotjs.getPixelColor(circlePos.x, circlePos.y);
                if( color == "7fa4d7") {
                    for (let x = 0; x <= square; x += 8) {
                        for (let y = 0; y <= square; y += 8) {
                            const checkX = fishingArea.x + x;
                            const checkY = fishingArea.y + y;
                            const checkColor = robotjs.getPixelColor(checkX, checkY);
                            if (checkColor.slice(0, 2) === "3b") {
                                const prev = robotjs.getMousePos();
                                robotjs.moveMouse(checkX, checkY)
                                robotjs.mouseClick();
                                robotjs.moveMouse(prev.x, prev.y);
                                await sleep(1000)
                            }
                        }
                    }
                }
            } 
            runs++
            await sleep(1600)
            console.log("Exiting Fishing", `Time: ${((performance.now() - now ) / 1000 ).toFixed(2)}`, "Runs", runs, "\n")
        } else await sleep(1200)
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
