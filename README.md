### Under Construction as of 09/2025
# AJ_Portfolio
A portfolio containing data science and research projects. I can be reached via [LinkedIn](https://www.linkedin.com/in/aj-liberatore-118b551a0/) or email (liberatorea94@gmail.com). A copy of my resume can viewed [here](https://github.com/liberatorea94/AJ_Portfolio/blob/main/images/Online%20Resume%20092025.pdf), up to date with September 2025.

## About AJ
AJ Liberatore is a professional data scientist who has specialized in business intelligence and investigative analytics. In previous roles, he has taken on a variety of projects, most notably including the support of VA hiring, training, and project management initiatives as well as contributions to numerous public healthcare programs. 

At his alma mater Wentworth, he conducted research with professors and peers to investigate dimensional reduction in quantum gravity via diffusion which culminated in a January 2025 publication, took up several roles as a tutor, and graduated with high honors earning a bachelor's of science in applied mathematics with a minor in data science. 

In his free time, AJ pursues personal training and fitness, competing in bodybuilding contests since April 2023 and offering online coaching services to help others reach their goals while promoting health and wellness.

# Publications

## [Anomalous diffusion and factor ordering in (1+ 1)-dimensional Lorentzian quantum gravity](https://www.sciencedirect.com/science/article/pii/S0550321324003456?via%3Dihub)
Authored by Elijah Sanderson (sandersone1@wit.edu), Rachel Lash Maitra (maitrar@wit.edu), AJ Liberatore (liberatorea94@gmail.com). Published in journal Nuclear Physics B on December 17, 2024.

### Abstract
Using properties of diffusion according to a quantum heat kernel constructed as an expectation over classical heat kernels on, we probe the non-manifold-like nature of quantized space in a model of (1+1)-dimensional quantum gravity. By computing the mean squared displacement of a diffusing particle, we find that diffusion is anomalous, behaving similarly to that on a porous substrate, network, or fractal over short distances. The walk dimension of the path for a particle diffusing in quantized space is calculated to have an infimum of 4, rising to arbitrarily large values depending on a parameter labeling the choice of factor ordering in the quantum Hamiltonian for our model and figuring in the asymptotic behavior of the wavefunction used to construct the quantum heat kernel. Additionally, we derive an expansion for return probability of a diffusing particle, whose modifications from the classical power-series form depend on the factor-ordering parameter.

## [A Hybrid System Dynamics/Input-Output Model for Studying the Impact of Transportation Delays on the Resiliency of National Supply Chains](https://ieeexplore.ieee.org/document/10407498)
Authored by William S. Bland (wbland@mitre.org), Lissette Escobar (lescobar@mitre.org), Andrew E. Hong (ahong@mitre.org), Grace Kenneally (gkenneally@mitre.org), AJ Liberatore (liberatorea94@gmail.com), Scott L. Rosen (srosen@mitre.org). Published in journal Institute of Electronical and Electronics Engineers on Janyary 31, 2024.

### Abstract
In today’s globally interconnected economy, transportation delays that impact a specific industry’s supply chain can quickly propagate to other industries, dramatically impacting inventory levels and economic production on the local, state, national, and global levels. This research proposes a hybrid System Dynamics and Input-Output simulation model that represents the impact of transportation delays on the flow of goods across industries and between geographic regions. The model is applied to a case study involving the port of Los Angeles to quantify the direct and indirect effects of a 30- and 60-day delay in container movement on gross output across the 55 major industries in the United States. The capability to predict the scope and scale of the economic impact resulting from various transportation delays provides decision makers the opportunity to conduct preliminary what-if analyses which can support the development of potential mitigation strategies before the actual shock occurs.

# [Package: ACAGPM](https://github.com/mitre/ACAGPM)
R package authored by AJ Liberatore (liberatorea94@gmail.com) and Principal Investigator Hannah De los Santos, PhD (hdelossantos@mitre.org). 

## Summary
Particulate Matter (PM2.5) is a term referring to microscopic particles, not greater than 2.5 micro-meters in diameter, suspended in air. These particles have a variety of adverse health effects on humans, given their ability to quickly enter the bloodstream via inhalation.

Research initiatives, especially those relating to climate and human health, can greatly benefit from access to PM2.5 data; this package aims to provide users with easy access to that data by aligning [WUSTL's Atmospheric Composition Analysis Group](https://sites.wustl.edu/acag/) Particulate Matter 2.5 raster files with 2019 state, county, and census tract shape files.

# [Undergrad Project: US Senate Committees](https://github.com/liberatorea94/US-Senate-Committees)
Created by AJ Liberatore (liberatorea94@gmail.com) and Jayden Butts (buttsj@wit.edu). This project had a focus on data collection and data visualization.

## Summary
Created a Tableau story to illustrate the interconnectedness of the US Senate, as well as to illustrate issues with diversity. This was accomplished with:
* Tableau to create an interactive dashboard, allowing users to explore demographics of specific committees compared to the US as a whole
* Tableau Story to create a story with points to guide user through how the dashboard works, as well as the technicality of the network visualization
* Pandas and Numpy to organize and clean Senate committee data so that it may be used in Gephi
* Gephi to create a network illustrating the interconnected nature of the Senate, where nodes are committees and edges are shared members, weighted by quantity of members

## Visualizations

The Tableau dashboard provides insight into Senate demographics compared to the US as a whole, contains bios for each Senator in the 116th US Congress, and most importantly allows the user to dig in and come to their own conclusions. Below is a screenshot of the dashboard.

![Committee Dashboard](/images/Committee_Dashboard1.png)

Each dot is scaled based on the number of committees and seat of power a Senator holds, and are colored based on their identified party. If the user wishes to view the demographics of a specific group of committees, they may go to the middle of the dashboard and select up to 10 committees they wish to view.

My main work in this project was in collecting and cleaning the Senate committee data in order to create out network visualization, as well as assembling the story in Tableau. Below is the network visualization itself.

![Committee Network](/images/Committee_Network.png)

Though the viz contains some technical jargon, the story specifies the following:
* There are 136 possible pairs of committees
* There is an average of almost 4 Senators shared among any two committees
* There are only 12 committee pairs which do not share a Senator
* 91% of committee pairs share at least one Senator
* The average committee shares a Senator with over 14 other committees

## Data
The data we used was collected from two places. We used the [demographics and economy section of the Kaiser Family Foundation website](https://www.kff.org/state-category/demographics-and-the-economy/) for up to date US demographics, and we used the [US Senate website](https://www.senate.gov/reference/stats_and_lists.htm) to collect information about Senators and committees.

# [Undergrad Project: PCA Effects on Training Handwritten Digit Classifier](https://github.com/lees19atwit/DS-Final)
Created by Sunny Lee (lees19@wit.edu) and AJ Liberatore (liberatorea94@gmail.com). This project had a focus on dimensionality reduction and classification.

## Summary
The objective of this project was to analyze the effects of dimensionality reduction on training neural networks, specifically to see the effects of PCA dimensionality reduction on a MLPClassifier for recognizing handwritten digits and how dimensionality reduction can help with saving both memory and computation time. 

## Results
After utilizing PCA, it was recognized that the first 100 components captured quite a lot of variance over the entire training set. Below is a graph of the variance against the number of components.

![Variance](/images/variance.png)

Using a reverse transform, we can intuitively see that the first 100 components give a good approximation to the original dataset.

![Reduced Data](/images/mnistreduced.png)

When we used the reduced train and test set, we achieved an accuracy of 95.95% in about 18 seconds while the original train and test set achieved an accuracy of 96.15% in about 64 seconds.

## Data
We used the MNIST Handwritten data set imported with Keras. MNIST comes with 60,000 samples of 28x28 handwritten digits and an additional 10,000 samples as training data. Here are 100 samples of the training data set:

![mnist Data](/images/mnist.png)
