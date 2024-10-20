FROM python:3.12-alpine
WORKDIR /app
COPY . .

RUN pip install --upgrade pip \
	&& pip install -r ./backend/requirements.txt

EXPOSE 5000
CMD ["python", "./backend/run.py"]
