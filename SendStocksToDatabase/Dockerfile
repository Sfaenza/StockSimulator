
FROM python:3.10

ADD nasdaq_api.py .
ADD database.json .

RUN pip3 install requests pymongo  certifi pytz
RUN python -m pip install "pymongo[srv]" 

CMD ["python", "./nasdaq_api.py"]