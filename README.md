# Music Recommendation Project

This project is a Django-based web application that provides music recommendations based on user-selected moods. 

## Project Structure

```
music-recommendation-project
├── music_recommendation
│   ├── static
│   │   ├── css
│   │   │   └── styles.css
│   │   └── js
│   │       └── scripts.js
│   ├── templates
│   │   └── music_recommendation
│   │       └── home.html
│   ├── views.py
│   └── __init__.py
├── manage.py
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd music-recommendation-project
   ```

2. **Install dependencies:**
   Make sure you have Python and Django installed. You can install Django using pip:
   ```
   pip install django
   ```

3. **Run the server:**
   Use the following command to start the Django development server:
   ```
   python manage.py runserver
   ```

4. **Access the application:**
   Open your web browser and go to `http://127.0.0.1:8000/` to view the application.

## Usage

- On the home page, select a mood from the available options.
- Click the button to get music recommendations based on the selected mood.
- The recommendations will be displayed dynamically on the page.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements for the project. 

## License

This project is open-source and available under the MIT License.