---
title: Scalable Search Engine - Python, Flask
date: 2022-05-02T06:00:00+00:00
image: /images/posts/post-3.jpg
categories:
  - Web-Development
  - Software-Engineering
draft: false
---

#### Introduction
In this project, I built a scalable search engine in Python, utilizing concepts such as PageRank and TF-IDF. The search engine was designed to handle large amounts of data and provide accurate search results. The project focused on information retrieval concepts, parallel data processing using MapReduce, and creating a service-oriented architecture for scalability.The Scalable Search Engine project demonstrated the utilization of Python and Flask to build a powerful search engine. By incorporating information retrieval techniques and parallel data processing, I developed a search engine capable of handling large amounts of data efficiently. This project enhanced my understanding of search engine architecture, data indexing, and user interface design.

#### Technologies Used
- Python: The search engine was built using Python, leveraging its capabilities for efficient data processing and algorithm implementation.
- Flask: Flask, a lightweight web framework, was used to create the REST API backend and the HTML search interface for displaying search results.

#### Project Details
The goal of the project was to create a scalable search engine similar to Google or Bing. The key components of the search engine were:

1. **Segmented Inverted Index**: I implemented a pipeline of MapReduce programs to parse and index over 30 MB of Wikipedia pages. This allowed for efficient storage and retrieval of information.

2. **Index Server**: I built an Index server that served as a REST API app. It handled user search queries and returned search results in JSON format. The server utilized Flask to handle the routing and communication with the search backend.

3. **Search Server**: The Search server provided a user interface similar to Google or Bing. It accepted user search queries and displayed the search results in a user-friendly manner. The server communicated with the Index server to retrieve the relevant search results.

By combining the segmented inverted index, the Index server with a REST API, and the Search server with a user-friendly interface, I created a working search engine capable of handling large amounts of data and returning accurate search results.

#### Highlighted Achievements
- **Scalable Search Engine**: Built a scalable search engine in Python, incorporating concepts like PageRank and TF-IDF for accurate search results.
- **MapReduce**: Utilized MapReduce to efficiently parse and index over 30 MB of Wikipedia pages, enabling faster retrieval of information.
- **Flask Integration**: Designed an HTML search interface and implemented a REST API backend using Flask, allowing for seamless communication between the user interface and the search engine backend.

This project provided hands-on experience in information retrieval concepts, parallel data processing, and building scalable web applications. By combining Python, Flask, and MapReduce, I successfully built a search engine capable of handling large datasets and delivering accurate search results.
