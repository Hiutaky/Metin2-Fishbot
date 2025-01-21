# Metin2 - Fish Bot

To install dependencies:

```bash
npm install
```
How to use:

- Setup Metin in window mode
- Setup 1920 x 1080 resolution
- Place che window in the top-left edge
- Run the script

Info:
this script works by checking pixels in specific positions, it's configurated to work on ZorinOS with Wine, this mean that the settings are probably not the same on Windows. Probably you've to customize the following variables:

- fishingBox: position of the fishing box, the fishing box have a 1px black (#000000) border, this is needed to know if the user is currently fishing or not
- fishingArea: define fishing area ( fishingArea + boxSize ), we use a square since the fish become hittable only when is into the circle and its border become "red"
- circlePos: it's the cicle that change color when the fish is in, when RED the bot will try to hit the fish, otherwise just wait


To run:

```bash
node index.js
```