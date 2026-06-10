
# 📘 Assignment: Hangman Game Challenge

## 🎯 Objective

Build a command-line Hangman game that lets a player guess letters to reveal a hidden word before running out of attempts. The assignment practices string manipulation, control flow, and user I/O in Python.

## 📝 Tasks

### 🛠️ Implement the Hangman game

#### Description
Create a playable Hangman game using Python. The program should run in the terminal, accept single-letter input from the player, and display the current word progress and remaining attempts after each guess.

#### Requirements
Completed program should:

- Randomly select a word from a predefined list
- Accept letter guesses and update and display the current progress (e.g., `_ a _ _ _`)
- Track and display remaining incorrect attempts
- Prevent repeated penalties for letters already guessed
- End the game with a clear win or lose message

## 📁 Files

- Starter code: `assignments/games-in-python/starter-code.py`
- Data (optional): `assignments/games-in-python/data.txt` (if provided)

## 🎓 Learning Outcomes

- Use lists and strings for game state
- Implement loops and conditionals to control program flow
- Handle user input and basic validation
- Use the `random` module to select words

## ⏱️ Estimated Time

60 - 90 minutes

## 💡 Hints

- Start by writing functions to select the word and to render the current progress.
- Use a set to track guessed letters and avoid duplicate penalties.
- Test edge cases: repeated guesses, non-letter input, and uppercase vs lowercase.

---

For more examples and starter guidance see the project `templates/assignment-template.md`.
