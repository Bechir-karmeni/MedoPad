From python:3.9-slim-buster
WORKDIR /app
COPY . /app
RUN pip install --trusted-host pypi.python.org -r requirements.txt
Expose 80
CMD ["python", "app.py"]