function generateRandomCoffee() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  const participantsSheet = ss.getSheetByName("Participants");
  const previousPairsSheet = ss.getSheetByName("PreviousPairs");
  const newPairsSheet =
    ss.getSheetByName("NewPairs") || ss.insertSheet("NewPairs");

  newPairsSheet.clearContents();

  newPairsSheet.appendRow(["Name 1", "Name 2"]);

  const participants = participantsSheet
    .getRange(2, 1, participantsSheet.getLastRow() - 1)
    .getValues()
    .filter((name) => name && name.toString().trim() !== "")
    .flat();

  const previousPairs = new Set(
    previousPairsSheet
      .getRange(2, 1, previousPairsSheet.getLastRow(), 2)
      .getValues()
      .map((pair) => [pair[0], pair[1]].sort().join("|"))
  );

  const shuffled = participants.sort(() => Math.random() - 0.5);
  const used = new Set();
  const newPairs = [];

  for (let i = 0; i < shuffled.length - 1; i++) {
    if (used.has(shuffled[i])) continue;

    for (let j = i + 1; j < shuffled.length; j++) {
      if (used.has(shuffled[j])) continue;

      const pair = [shuffled[i], shuffled[j]].sort();
      const key = pair.join("|");

      if (!previousPairs.has(key)) {
        newPairs.push(pair);
        previousPairs.add(key);
        used.add(pair[0]);
        used.add(pair[1]);
        break;
      }
    }
  }

  newPairs.forEach((pair) => {
    newPairsSheet.appendRow(pair);
    newPairsSheet
      .getRange(newPairsSheet.getLastRow(), 1, 1, 2)
      .setFontColor("black");
  });

  const unpaired = shuffled.find((p) => !used.has(p));
  if (unpaired) {
    newPairsSheet.appendRow(["Attention! No pair for:", unpaired]);
    newPairsSheet
      .getRange(newPairsSheet.getLastRow(), 1, 1, 2)
      .setFontColor("red");
  }

  newPairs.forEach((pair) => {
    previousPairsSheet.appendRow(pair);
  });

  if (newPairs.length === 0) {
    SpreadsheetApp.getUi().alert("All pairs already matched each other.");
  } else {
    SpreadsheetApp.getUi().alert(
      `${newPairs.length} new pairs created for the next round!`
    );
  }
}
