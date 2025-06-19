# Random Coffee Generator

☕ A Random Coffee Pair Generator implemented with Google Apps Script for Google Sheets.

---

## Overview

**generateRandomCoffee** helps teams randomly pair participants for informal coffee chats, promoting connection and collaboration. The script reads a list of participants from a Google Sheet, generates unique pairs while avoiding repeats based on previous pairings, and outputs the new pairs directly into the sheet.

---

## Features

- Randomly pairs participants from a list  
- Avoids repeating previous pairs  
- Supports dynamic participant lists  
- Handles odd numbers of participants with a notification  
- Highlights special messages (e.g., unpaired participant) with formatting  
- Automatically logs new pairs to a history sheet  

---

## Google Sheets Setup

Create a Google Sheet with the following sheets and columns:

### Participants

| Name        |
|-------------|
| Alice Smith |
| Bob Jones   |
| ...         |

*List of participants starting at cell A2*

### PreviousPairs

| Name 1     | Name 2     |
|------------|------------|
| Alice Smith| Bob Jones  |
| ...        | ...        |

*Historical record of all previous pairs*

### NewPairs

*This sheet will be created or overwritten by the script to show the new pairs.*

---

## Installation and Usage

1. Open your Google Sheet.  
2. Go to **Extensions > Apps Script**.  
3. Copy and paste the `generateRandomCoffee` function into the script editor.  
4. Save the project.  
5. Run the `generateRandomCoffee` function (you may need to authorize the script).  
6. New coffee pairs will appear in the `NewPairs` sheet, and the pairs will be logged in `PreviousPairs`.

---

## Customization

- You can add a button to trigger the script from the Google Sheets UI.
  <img width="1462" alt="image" src="https://github.com/user-attachments/assets/03717541-ceb6-4eeb-abd5-84d111ab2b8a" />
- Modify the script to support trios or groups if needed.  
- Change formatting styles within the script for custom visuals.

---

## Contributing

Feel free to open issues or submit pull requests to improve this script!

---

## License

This project is licensed under the MIT License.

---

## Author

Beatriz Yordaky  
[GitHub Profile](https://github.com/beatrizyordaky)
