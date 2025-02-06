from flask import Flask, render_template, request
import time

app = Flask(__name__, static_folder='static')

# Password cracker function
def passwordCracker(password):
    startTime = time.time()  # Record the start time to measure how long the cracking process takes
    
    # Define the dictionary of all possible characters for the password (lowercase, uppercase, digits, special characters)
    dictionary = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',  # lowercase letters
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',  # uppercase letters
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',  # digits
        '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '{', '|', '}', '~',  # special characters
    ]
    
    letter = []  # Initialize an empty list to store matched characters progressively
    pWord = password  # Store the input password for comparison
    cracked_progress = []  # To store the progressively cracked password

    # Loop over each character in the password
    for x in range(0, len(pWord)):
        # Loop through the dictionary to find a matching character for the current password position
        for y in range(0, len(dictionary)):
            if pWord[x] == dictionary[y]:  # If a match is found
                letter.append(dictionary[y])  # Append the matched character to the 'letter' list
                cracked_progress.append(''.join(letter))  # Store the current progress
                break  # Break out of the inner loop once a match is found, moving on to the next character
    
    # Calculate and return the elapsed time for the password cracking process
    endTime = time.time()  # Record the end time
    elapsedTime = endTime - startTime  # Calculate the elapsed time
    
    # Convert time to milliseconds if less than 1 second
    if elapsedTime < 1:
        elapsedTime = round(elapsedTime * 1000, 3)  # Convert to milliseconds (ms)
        time_format = f"{elapsedTime} milliseconds"
    else:
        time_format = f"{round(elapsedTime, 3)} seconds"
    
    return cracked_progress, time_format  # Return cracked progress and formatted time

# Home route
@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        password = request.form["password"]
        cracked_progress, time_format = passwordCracker(password)  # Get the cracked progress
        return render_template("index.html", cracked_progress=cracked_progress, elapsed_time=time_format, original_password=password)
    return render_template("index.html", cracked_progress=[], elapsed_time=None, original_password=None)

if __name__ == "__main__":
    app.run(debug=True)
