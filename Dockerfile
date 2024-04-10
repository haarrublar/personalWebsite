FROM alpine:3.18

# prevent Python from writing .pyc files
ENV PYTHONDONTWRITEBYTECODE=1

# ensure Python output is sent directly to the terminal without buffering, allowing for immediate display of output
ENV PYTHONBUFFERED=1

# project working directory
WORKDIR /usr/src/website

# --------------------------------------- #
# REQUIREMENTS INSTALLATION AND ACTIVATION #

RUN apk update && apk add --no-cache py3-pip
RUN pip install --upgrade pip
COPY pipRequirements.txt /usr/src/website/requirements.txt
RUN pip install -r requirements.txt

# --------------------------------------- #


# --------------------------------------- #
# STORAGING ENTRYPOINT & PERMISSIONS #

COPY entrypoint.sh /usr/src/website/entrypoint.sh
RUN sed -i 's/\r$//g' /usr/src/website/entrypoint.sh
RUN chmod +x /usr/src/website/entrypoint.sh

# --------------------------------------- #

# --------------------------------------- #
# STORAGING THE PROJECT #

COPY . /usr/src/website/

# --------------------------------------- #


ENTRYPOINT [ "/usr/src/website/entrypoint.sh" ]