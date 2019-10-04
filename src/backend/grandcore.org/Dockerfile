FROM python:alpine

# This prevents Python from writing out pyc files
ENV PYTHONDONTWRITEBYTECODE 1

# This keeps Python from buffering stdin/stdout
ENV PYTHONUNBUFFERED 1

# Initialize
RUN mkdir -p /var/www/grandcore.org
WORKDIR /var/www/grandcore.org
COPY requirements.txt /var/www/grandcore.org

# Setup
RUN apk update
RUN apk upgrade
RUN apk add --update bash postgresql-dev gcc python3-dev musl-dev
RUN pip3 install --upgrade pip

# Installing packages
RUN pip install -r requirements.txt

# Clean
RUN apk del -r python3-dev postgresql

# Prepare
COPY . /var/www/grandcore.org