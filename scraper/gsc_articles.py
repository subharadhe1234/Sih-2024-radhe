import requests
from selenium import webdriver
from bs4 import BeautifulSoup
import json

# requesting to serpapi for author data
data = requests.get(
    "https://serpapi.com/searches/0aa3c604b56ad7d3/66d8b0ddeda5f594da4bab25.json")
# Converting it to json
author_page_data = data.json()
# getting the articles
articles = author_page_data["articles"]


# Getting the link and title of first article
article_1_link = articles[0]["link"]
article_1_title = articles[0]["title"]

# sending a headless request from selenium to the GSC page
options = webdriver.ChromeOptions()
options.headless = True
driver = webdriver.Chrome(options=options)
driver.get(article_1_link)
html_content = driver.page_source
# print(html_content)

# Object where all data will be stored
article_data = {}

# using beautiful soup to scrape the html document
soup = BeautifulSoup(html_content, 'html.parser')

# scraping the description
description_div = soup.find("div", id="gsc_oci_descr")
description = description_div.find("div").text
article_data["description"] = description

# Scraping the link to the article
article_link_encoded = soup.find("a", string=article_1_title)
# print(article_link_encoded["href"])
article_data["article_link"] = article_link_encoded["href"]

# print(article_data)

with open("gsc_atrical.json",'w') as file:
    json.dump(article_data,file)

driver.quit()
