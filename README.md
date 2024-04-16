# Django Website with Tailwind CSS, Bootstrap, JavaScript, and GSAP

   This is a Django web application that incorporates Tailwind CSS, Bootstrap, JavaScript, and the GSAP animation library for styling and interactivity. The project includes a blog section, pages for different content types (e.g., about, timeline), and various static assets.

## Table of Contents

   - [Project Structure](#project-structure)
   - [Installation](#installation)
   - [Setup](#setup)
   - [Usage](#usage)
   - [Sitemaps](#sitemaps)
   - [Dockerization](#Dockerization)
   - [Deployment with GUNICORN & NGINX](#deployment-with-gunicorn--nginx)
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


## Sitemaps 

   Sitemaps are an essential tool for improving your website's visibility and discoverability on search engines like Google. They provide a structured way to communicate the URLs on your website to search engine crawlers, ensuring that all your content is properly indexed and accessible.

   The `django.contrib.sites` app is required for generating fully-qualified URLs, and the `django.contrib.sitemaps` app provides the necessary functionality for creating and serving sitemaps.

### Sitemaps for Each App

   This project contains `blog` and `pages` apps. So, it is imperative to create a new file called `sitemaps.py` to define the sitemap classes for each app.

#### `blog/sitemaps.py`

   ```python
   from django.contrib.sitemaps import Sitemap
   from .models import Post

   class PostSitemap(Sitemap):
      changefreq = 'weekly'
      priority = 0.9
      def items(self):
         return Post.published.all()
      def lastmod(self,obj):
         return obj.updated
   ```


#### `pages/sitemaps.py`

   ```python
   from django.contrib.sitemaps import Sitemap
   from django.urls import reverse

   class StaticViewSitemap(Sitemap):
      priority = 0.5
      changefreq = "daily"

      def items(self):
         pages_views = [
               'home_view', 'about',  
         ]
         blog_views = [
               'post_list', 'post_list_by_tag', 'post_detail',  
         ]

         return pages_views + blog_views

      def location(self, item):
         if item in ['post_list', 'post_list_by_tag', 'post_detail']:
               if item == 'post_detail':
                  return reverse('blog:post_detail', args=[2023, 4, 12, 'sample-post'])
               elif item == 'post_list_by_tag':
                  return reverse('blog:post_list_by_tag', args=['sample-tag'])
               else:
                  return reverse('blog:post_list')
         else:
               return reverse('pages:' + item)
   ```


### Sitemaps in Project URLs

   In the Django project's `urls.py` file, both `sitemaps.py` classes are included.

   ```python
   from django.contrib import admin
   from django.urls import path, include
   from django.contrib.sitemaps import views as sitemap_views

   from blog.sitemaps import PostSitemap
   from pages.sitemaps import StaticViewSitemap

   sitemaps = {
      'post': PostSitemap,
      'static': StaticViewSitemap,
   }

   urlpatterns = [
      # ...
      path('sitemap.xml', sitemap_views.index, {'sitemaps': sitemaps}, name='sitemap'),
      path('sitemap-<section>.xml', sitemap_views.sitemap, {'sitemaps': sitemaps}, name='django.contrib.sitemaps.views.sitemap'),
   ]
   ```

   The `sitemap.xml` URL will serve an index of all available sitemaps, while `sitemap-<section>.xml` will serve the individual sitemap for a specific section (e.g., `sitemap-post.xml` or `sitemap-static.xml`).

### Step 4: Apply Migrations

   After making changes to your Django project's models or settings, it's essential to apply any pending database migrations:

   ```Bash
   python manage.py migrate
   ```



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



## Deployment with GUNICORN & NGINX

   After installing [gunicorn](https://docs.djangoproject.com/en/5.0/howto/deployment/wsgi/gunicorn/) and [nginx](https://uwsgi-docs.readthedocs.io/en/latest/tutorials/Django_and_nginx.html) and dockerazing the project, the way to build the project might be as follows (use the loaddata command in case you need to populate the database):

   1. Create the python environment and install `requirements.txt`.
   2. For simple deployment execute:

      ```Bash
      docker compose -f docker-compose.prod.yml up -d --build
      ```

   3. For extra executions using docker consider:

      ```bash
      # Stop and remove existing containers and volumes
      $ docker compose -f docker-compose.prod.yml down -v

      # Build and start the containers in detached mode
      $ docker compose -f docker-compose.prod.yml up -d --build

      # Execute Django management commands
      $ docker compose -f docker-compose.prod.yml exec web python manage.py makemigrations
      $ docker compose -f docker-compose.prod.yml exec web python manage.py migrate --noinput
      $ docker compose -f docker-compose.prod.yml exec web python manage.py loaddata data.json

      # Collect static files (if applicable)
      $ docker compose -f docker-compose.prod.yml exec web python manage.py collectstatic --no-input
      ```

   **NOTE**: In case there is port use consider using:

   ```Bash
   sudo lsof -i :80
   sudo kill <PID>
   ```


### Regenerate the SSL certificate and key
SSH into your server and navigate to the `nginx/` directory. Run the following command to generate a new SSL certificate and key:

   ```
   openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout nginx-selfsigned.key -out nginx-selfsigned.crt
   ```

This will create the `nginx-selfsigned.key` and `nginx-selfsigned.crt` files in the `nginx/` directory.

Next, Update the Nginx Dockerfile.

   ```Dockerfile
   FROM nginx:1.25

   RUN rm /etc/nginx/conf.d/default.conf
   COPY nginx.conf /etc/nginx/conf.d/
   COPY nginx-selfsigned.crt /etc/ssl/certs/
   COPY nginx-selfsigned.key /etc/ssl/private/
   RUN chmod 644 /etc/ssl/certs/nginx-selfsigned.crt \
      && chmod 600 /etc/ssl/private/nginx-selfsigned.key
   ```

Finally, Update the `nginx.conf` file to ensure that the paths for the SSL certificate and key files match the locations where you're copying them in the Dockerfile.

   ```nginx
   server {
      listen 443 ssl;
      server_name haarrublar.com;

      ssl_certificate /etc/ssl/certs/nginx-selfsigned.crt;
      ssl_certificate_key /etc/ssl/private/nginx-selfsigned.key;

      location / {
            proxy_pass http://website;
            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
            proxy_set_header Host $host;
            proxy_redirect off;
      }
   }
   ```



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