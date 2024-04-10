# Django Website with Tailwind CSS, Bootstrap, JavaScript, and GSAP

This is a Django web application that incorporates Tailwind CSS, Bootstrap, JavaScript, and the GSAP animation library for styling and interactivity. The project includes a blog section, pages for different content types (e.g., about, timeline), and various static assets.

## Table of Contents

- [Project Structure](#project-structure)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Dockerization](#Dockerization)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Project Structure

The project follows a typical Django structure with the following main directories:

```
├── blog/
│   ├── migrations/
│   ├── templates/
│   │   └── blog/
│   │       └── post/
│   └── templatetags/
├── media/
│   ├── images/
│   └── None/
├── pages/
│   ├── migrations/
│   ├── templates/
│   │   ├── about/
│   │   ├── home/
│   │   └── timeline/
│   └── templatetags/
├── static/
│   ├── css/
│   │   ├── base/
│   │   └── tw/
│   ├── js/
│   │   └── gsap/
│   ├── media/
│   └── src/
├── staticfiles/
│   ├── admin/
│   ├── css/
│   ├── js/
│   └── media/
└── website/
    └── templates/
```

Got it, I'll update the environment creation part without rewriting the entire README:

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-project.git
   ```

2. Navigate to the project directory:
   ```
   cd your-project
   ```

3. Create a virtual environment and activate it:
   ```
   python3 -m venv env
   source env/bin/activate  # On Windows, use `env\Scripts\activate`
   ```

4. Install the required Python packages:
   ```
   pip install -r pipRequirements.txt  # For Python virtual environment
   ```
   Or, if you're using Conda:
   ```
   conda create --name your-env-name --file condaRequirements.txt
   conda activate your-env-name
   ```

Note that this project provides two separate files: `pipRequirements.txt` and `condaRequirements.txt`. You can use either of these files to create a Python virtual environment or a Conda environment, respectively, with the required packages.

## Setup

This project uses PostgreSQL as the database. If the settings file is not provided, you can initialize the project by creating a new `settings.py` file in the appropriate location and configuring the database connection details.

For example, in the `your-project/website/settings.py` file, add the following lines:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your-database-name',
        'USER': 'your-username',
        'PASSWORD': 'your-password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

Replace `'your-database-name'`, `'your-username'`, and `'your-password'` with the appropriate values for your PostgreSQL setup.

After configuring the database settings, you can proceed with the following steps:

1. Apply the database migrations:
   ```
   python manage.py migrate
   ```

2. Create a superuser (optional):
   ```
   python manage.py createsuperuser
   ```

## Usage

To run the development server, use the following commands in separate terminal windows:

```bash
npm run dev
python manage.py livereload
python manage.py runserver
```

1. This command starts the Webpack development server, which watches for changes in your JavaScript and CSS files, and automatically rebuilds them when changes are detected. This is useful for efficient development and instant feedback.

   ```bash
   npm run dev
   ```

   **NOTE**: This command runs the Tailwind CSS development script, which watches for changes in your Tailwind CSS input file (static/css/tw/tailwind-input.css) and automatically compiles it to the output CSS file (static/css/base/main.css) whenever changes are detected. This allows you to work with Tailwind CSS utility classes and see the changes reflected in your application immediately.

2. The `livereload` command watches for changes in your Django project files and automatically reloads the development server when changes are detected, eliminating the need to manually restart the server after each change.

   ```bash
   python manage.py livereload
   ```

3. This command starts the Django development server, which serves your web application and makes it accessible at `http://localhost:8000` by default.

   ```bash
   python manage.py runserver
   ```

To run the server and access it from other devices on the same network, this command starts the Django development server and binds it to the `0.0.0.0` IP address, allowing other devices on the same network to access the web application by entering the server's IP address and port in their web browsers.

   ```
   python3 manage.py runserver 0.0.0.0:8000
   ```

Once the server is running, you can explore the different sections of the website, including the blog, about page, timeline, and other content types. The website utilizes Tailwind CSS, Bootstrap, JavaScript, and the GSAP library for styling and interactivity.

For more detailed usage instructions and customization options, please refer to the documentation within the project.


## Dockerization


### Step 1: Configure `settings.py`

To start, it's crucial to configure the `settings.py` file correctly to utilize environment variables for settings such as `ALLOWED_HOSTS`, `SECRET_KEY`, `DEBUG`, and `DATABASES`.

Ensure that you have `os` imported at the top of your `settings.py` file to utilize the `os.environ.get` method. This method is commonly used for setting a development environment for Django and Docker deployment, enabling you to connect your Django project to a database and configure other settings dynamically


### Step 2: Create a Development Environment

Next, create a `.env` file in the root of your project to define your environment variables. This file should not be included in version control to keep your secrets safe. Here's an example `.env` file:

```
DJANGO_ALLOWED_HOSTS=localhost
SECRET_KEY=your_secret_key_here
DEBUG=1
SQL_ENGINE=django.db.backends.postgresql
SQL_DATABASE=your_database_name
SQL_USER=your_database_user
SQL_PASSWORD=your_database_password
SQL_HOST=db
SQL_PORT=5432
```

### Step 3: Docker Compose Configuration

Additionally, you need a `docker-compose.yml` file to define your Docker services. 


### Step 4: Dockerfile

The `Dockerfile` recommended (used in this project) is configured starting with a base image of **Alpine Linux version 3.18**. `apk`, the package manager for Alpine Linux, is used for updating the package index and installs py3-pip for managing Python packages. 


### Step 5: Entry Point Script

Create the `ENTRYPOINT` directive is set to execute the `entrypoint.sh` script, which contains startup commands for the Django website. 


### Step 5: Build and Run Your Docker Containers

Finally with your `settings.py`, `.env`, and `docker-compose.yml` configured, you can now build and run your Docker containers using the following command:

```Bash
docker-compose up --build
```

Your Django project should now be running in a Docker container, allowing for easy development and deployment.




## Technologies Used

- Django ([Python web framework](https://www.djangoproject.com/))
- Tailwind CSS ([CSS utility framework](https://tailwindcss.com/))
- Bootstrap ([CSS framework](https://getbootstrap.com/))
- JavaScript
- GSAP ([JavaScript animation library](https://gsap.com/))

## Contributing

Contributions to this project are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request. When contributing, please follow the existing code style and conventions.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, feel free to reach out:

- Email: [harrubla.96@gmail.com](mailto:harrubla.96@gmail.com)
- Twitter: [@haarrublar](https://twitter.com/haarrublar)