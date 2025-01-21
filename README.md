# Metin2 - Fish Bot

To install dependencies:
```bash
npm install
```
## Usage

1. Set up Metin in window mode.
2. Set the resolution to 1920 x 1080.
3. Position the window in the top-left corner of the screen.
4. Run the script.

## Information

This script operates by checking pixels at specific positions. It is configured to work on ZorinOS with Wine, which means the settings might differ on Windows. You may need to customize the following variables:

- **fishingBox**: The position of the fishing box. The fishing box has a 1px black (#000000) border, which is necessary to determine if the user is currently fishing.
- **fishingArea**: Defines the fishing area (fishingArea + boxSize). We use a square because the fish becomes hittable only when it is inside the circle and its border turns "red".
- **circlePos**: This is the circle that changes color when the fish is inside. When it turns RED, the bot will attempt to catch the fish; otherwise, it will wait.

## Running the Script

To run the script, use the following command:

```bash
node index.js
```
