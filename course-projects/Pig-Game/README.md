# Pig Game

## Game Logic

Pig Game is a two-player turn-based dice game where players roll a die to accumulate points. The goal is to reach **100 points** before your opponent.

### Rules:
1. Players take turns rolling a six-sided die.
2. On each turn:
   - If the player rolls **any number except 1**, that number is added to their **current score**.
   - If the player rolls **1**, their **current score resets to 0**, and the turn switches to the next player.
3. A player can choose to **"Hold"** their score instead of rolling:
   - Their **current score is added to their total score**.
   - Their turn ends, and the next player rolls.
4. The first player to reach **100 points** **wins the game**.

### Winning Condition:
- The first player to reach **100 points** triggers the game-over state.
- The winning player’s section gets a **winner highlight**.

### Controls:
- **Roll Dice:** Generates a random dice roll (1-6).
- **Hold:** Saves the current score and switches turns.
- **New Game:** Resets the game.

