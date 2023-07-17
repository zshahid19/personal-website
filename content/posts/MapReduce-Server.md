---
title: MapReduce Server - Python
date: 2022-03-05T05:00:00Z
image: /images/posts/Mapreduce.png
categories:
   - Software Engineering
   - Web Development
draft: false
---

#### Introduction
In this project, I developed a MapReduce server in Python, inspired by Google's original MapReduce paper. The server executes user-submitted MapReduce jobs with multi-server capability, enabling distributed processing on a cluster of computers. The project aimed to provide hands-on experience with MapReduce program execution, basic distributed systems, fault tolerance, OS-provided concurrency facilities, and networking using sockets. The MapReduce server project showcased the utilization of Python to build a distributed data processing framework. The implementation of multi-server capability and fault tolerance demonstrated my ability to tackle challenges in distributed systems. Through this project, I gained hands-on experience in MapReduce program execution and acquired a deeper understanding of the concepts behind distributed computing.

#### Technologies Used
- Python: The MapReduce server was implemented using Python, leveraging its powerful features for efficient data processing and networking.

#### Project Details
The MapReduce framework consists of two major components: a Manager and multiple Workers. The Manager listens for user-submitted MapReduce jobs and distributes the workload among the Workers. Each Worker receives instructions from the Manager and executes map and reduce tasks, collectively forming a MapReduce program.

To interact with the MapReduce server, a command-line interface was implemented. Users can submit their MapReduce jobs by providing the necessary input files and configuration parameters through the command line. The Manager then distributes the tasks to the Workers, which execute the program in a distributed manner.

#### Highlighted Achievements
- **MapReduce Server**: Developed a MapReduce server in Python to execute user-submitted MapReduce jobs with distributed processing.
- **Multi-Server Capability**: Implemented multi-server functionality using multi-threaded TCP and UDP sockets for effective master-worker communication.
- **Fault Tolerance**: Added fault tolerance functionality to enhance program resiliency in case a worker unexpectedly terminates.

This project provided valuable insights into MapReduce program execution, distributed systems, fault tolerance, concurrency facilities, and networking using sockets. By leveraging Python's versatility, I successfully implemented a MapReduce server capable of executing complex data processing tasks on a cluster of computers.
