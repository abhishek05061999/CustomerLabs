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

## Data Format

When saving a segment, the application sends data in the following JSON format:

```json
{
  "segment_name": "your_segment_name",
  "schema": [
    {"first_name": "First Name"},
    {"last_name": "Last Name"}
  ]
}
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Running the Application

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Building for Production

To create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── SegmentModal.js      # Modal component for segment creation
│   └── SegmentModal.css     # Styles for the modal
├── App.js                   # Main application component
├── App.css                  # Main application styles
├── index.js                 # Application entry point
└── index.css                # Global styles
```

## Usage

1. Click the "Save segment" button on the main page
2. Enter a name for your segment in the text input
3. Select schemas from the dropdown and click "+ Add new schema"
4. Remove schemas by clicking the "−" button on individual schema items
5. Click "Save the Segment" to save your segment
6. The data will be logged to the console and displayed in an alert

## Customization

To add more schema options, modify the `schemaOptions` array in `src/components/SegmentModal.js`:

```javascript
const schemaOptions = [
  { value: 'your_value', label: 'Your Label' },
  // ... existing options
];
```

## Technologies Used

- React 18
- JavaScript (ES6+)
- CSS3
- HTML5
