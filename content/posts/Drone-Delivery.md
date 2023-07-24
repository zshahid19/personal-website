---
title: "Drone Delievery Using TSP & MST"
date: 2022-07-13T05:00:00Z
image: /images/posts/drone-delivery.jpeg
categories:
   - Software Engineering
   - Data Structure & Algorithims
draft: false
---

#### Introduction
Welcome to my blog post! Today, I am excited to share an intriguing project that involves the development of software for a drone delivery service on college campuses. Our aim is to create a scalable and efficient solution for on-campus deliveries using drones, starting with the University of Michigan (UM) and expanding to other campuses.

In this project, we focus on two types of drones: Drone Type I, which is ten times faster but requires drone director beacons for control, and Drone Type II, a regular drone with proportional energy usage. Our goal is to optimize drone delivery routes and cater to the unique requirements of different clients (A, B, and C).

Using MST algorithms, TSP heuristics, and visualization tools, we tackle challenges such as minimizing costs, optimizing beacon placement, and finding efficient delivery routes. Join me as we delve into the technologies utilized, project details, and the remarkable achievements we have accomplished along the way. Let's explore the world of drone deliveries and the power of algorithmic optimization in enhancing on-campus delivery services.

#### Technologies Utilized
To ensure effective drone delivery services, we employed a range of technologies. Here are some of the key technologies used:

MST Algorithms: We implemented Minimum Spanning Tree (MST) algorithms, such as Prim's algorithm and Kruskal's algorithm, to determine the optimal placement of high-speed drone beacons. Our analysis of each algorithm's efficiency in specific scenarios guided us in choosing the most suitable approach.

Branch and Bound Algorithm: In addition to MST algorithms, we implemented a Branch and Bound algorithm. This algorithm played a pivotal role in finding fast and effective bounding approaches, optimizing the drone delivery routes.

TSP Heuristics: To achieve nearly-optimal solutions quickly, we explored various TSP (Traveling Salesperson Problem) heuristics. By leveraging these heuristic approaches, we were able to provide efficient delivery routes for the drones. Extensive web searches enabled us to discover TSP heuristics with better-than-O(n^2) complexity.

#### Project Overview
The core of our project revolves around creating a software solution for on-campus drone deliveries. We developed two types of drones to cater to different needs:

Drone Type I: This high-speed drone moves ten times faster than other drones, enabling rapid delivery. However, to ensure proper control, it requires the installation of drone director beacons along the flight path. The cost of installing these beacons is directly proportional to the desired path's distance, and our clients aim to minimize beacon costs.

Drone Type II: This drone is similar to regular drones available on the market. Its energy usage is directly proportional to the distance it travels.

We categorized our clients into three types: A, B, and C, each with different requirements and tasks. To address these diverse needs, we divided the project into three parts.

Part A: MST Mode
In Part A, our primary goal was to devise an optimal path for placing high-speed drone beacons while minimizing the total distance and cost. To achieve this, we implemented an MST algorithm to connect all the campus locations. We took into account the boundary between the medical campus and other locations, ensuring that the MST did not directly connect a medical campus location to one outside without passing through a location on the border.

The output of Part A included the total weight of the MST, representing the sum of the weights of all edges in the MST. Additionally, we printed all the edges in the MST, showcasing the connections between the campus locations.

Parts B & C: FASTTSP & OPTTSP Modes
In Parts B and C, our focus shifted to solving the Traveling Salesperson Problem (TSP) to determine the optimal delivery route. The route begins at location index 0, visits every other location exactly once, and returns to the starting location.

Part B (FASTTSP mode): We implemented TSP heuristics to provide a solution that is close to optimal. Although not perfectly optimal, our solution aimed to be highly efficient and significantly faster than finding the exact optimal solution.

Part C (OPTTSP mode): We employed algorithms to find the optimal solution to the TSP, ensuring the minimum Euclidean distance necessary for the delivery route.

By incorporating MST algorithms, TSP heuristics, and optimization techniques, we developed efficient delivery routes for both Drone Type I and Drone Type II, addressing the specific requirements of our diverse client base.

#### Highlighted Achievements

Scalable Drone Delivery System: We successfully developed a scalable software solution for on-campus drone deliveries, tailored to the requirements of different client types.

Optimal Beacon Placement: By implementing MST algorithms and a Branch and Bound algorithm, we determined the optimal placement of high-speed drone beacons, effectively minimizing the total distance and cost.

Efficient Delivery Routes: Leveraging TSP heuristics, we created fast and near-optimal delivery routes in Part B (FASTTSP mode). In Part C (OPTTSP mode), we employed algorithms to find the optimal routes, ensuring efficient drone deliveries.

Visualization and Debugging: Utilizing visualization tools, we gained valuable insights into the efficiency and accuracy of our algorithms, enabling effective debugging and refinement of the drone delivery routes.

This project provided me with valuable experience in developing scalable software solutions, implementing optimization algorithms, and utilizing heuristic approaches to tackle complex problems. We take pride in presenting this innovative drone delivery system that caters to the needs of different clients, ensuring efficient and accurate deliveries on college campuses.