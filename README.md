# AJ_Portfolio
A portfolio containing data science and research projects.

# [Project 1: US Senate Committees Tableau Story](https://github.com/liberatorea94/US-Senate-Committees)
Created by AJ Liberatore (liberatorea@wit.edu) and Jayden Butts (buttsj@wit.edu)

## Summary
Created a Tableua story to illustrate the interconnectedness of the US Senate, as well as to illustrate issues with diversity. This was accomplished with:
* Tableau to create an interactive dashboard, allowing users to explore demographics of specific committees compared to the US as a whole
* Tableau Story to create a story with points to guide user through how the dashboard works, as well as the technicality of the network visualization
* Pandas and Numpy to organize and clean Senate committee data so that it may be used in Gephi
* Gephi to create a network illustrating the interconnected nature of the Senate, where nodes are committees and edges are shared members, weighted by quantity of members

## Visualizations
My main work in this project was in collecting and cleaning the Senate committee data in order to create out network visualization, as well as assembling the story in Tableau. Below is the network visualization itself.

![](/images/Committee_Network.png)

## Data
The data we used was collected from two places. We used the [demographics and economy section of the Kaiser Family Foundation website](https://www.kff.org/state-category/demographics-and-the-economy/) for up to date US demographics, and we used the [US Senate website](https://www.senate.gov/reference/stats_and_lists.htm) to collect information about Senators and committees.

# [Project 2: PCA Dimensionality Reduction Effects on Training Handwritten Digit Classifier](https://github.com/lees19atwit/DS-Final)
Created by Sunny Lee (lees19@wit.edu) and AJ Liberatore (liberatorea@wit.edu)

## Introduction
The objective of this project is to see the effects of dimensionality reduction on training neural networks, specifically to see the effects of dimensionality reduction on a MLPClassifier for recognizing handwritten digits and how dimensionality reduction can help with saving both space and time. 

## Data
We used the MNIST Handwritten data set. MNIST comes with 60,000 samples of 28x28 handwritten digits and an additional 10,000 samples as training data. Here are 100 samples of the training data set:

![](/images/mnist.png)
