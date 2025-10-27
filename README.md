# Segment Saver Application

A React application for creating and managing user segments with dynamic schema selection.

## Features

- **Save Segment Button**: Main interface with a button to open the segment creation modal
- **Modal Popup**: Clean modal interface for segment creation
- **Segment Name Input**: Text input for naming the segment
- **Dynamic Schema Management**: 
  - Dropdown with predefined schema options (First Name, Last Name, Gender, Age, Account Name, City, State)
  - Add new schemas dynamically
  - Remove schemas with individual remove buttons
  - Prevents duplicate schema selection
- **Data Submission**: Sends data to server in the required JSON format
- **Responsive Design**: Works on desktop and mobile devices

## Schema Options

The application includes the following predefined schema options:
- First Name (first_name)
- Last Name (last_name)
- Gender (gender)
- Age (age)
- Account Name (account_name)
- City (city)
- State (state)



The application will open  https://customer-labs-two.vercel.app/.


## Usage

1. Click the "Save segment" button on the main page
2. Enter a name for your segment in the text input
3. Select schemas from the dropdown and click "+ Add new schema"
4. Remove schemas by clicking the "−" button on individual schema items
5. Click "Save the Segment" to save your segment
6. The data will be logged to the console and displayed in an alert


## Technologies Used

- React 18
- JavaScript (ES6+)
- CSS3
- HTML5
