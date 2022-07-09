---
layout: post
title: Data Visualization and Sentiment Analysis of Movie Reviews across Four Neural Network NLP Models
---

Sentiment analysis is the computational study of opinions, sentiments, attitudes, and emotions expressed in (written) language, and is commonly used in natural language processing to determine the polarity of a text as expressing positive or negative sentiment. This project follows as: four NLP models --- CNN, RNN, RCNN, LSTM --- were trained and tested on the [Large Movie Review Dataset v1.0](http://ai.stanford.edu/~amaas/data/sentiment/) and compared for their metric scores --- loss, accuracy, F1 macro and micro, missclassification rate, training time --- across ten epochs controlled for validation loss. Each epoch's performance is tracked and averaged.

| **Model** | **Loss** | **Accuracy** | **F1<sub>macro</sub>** | **F1<sub>micro</sub>** | **Misclassification rate**  | **Training time (s)** | 
|-------|--------|---------|--------|---------|--------|---------|
| **CNN**   | 0.50 | 0.83 | 0.83 | 0.83 | 0.17 | 14.56 | 
| **RNN**   | 0.48 | 0.83 | 0.83 | 0.83 | 0.17 | 36.29 |
| **RCNN**  | 0.50 | 0.83 | 0.83 | 0.83 | 0.17 | 87.49 | 
| **LSTM**  | 0.38 | 0.84 | 0.84 | 0.84 | 0.16 | 114.31 |

An ideal model will minimize validation loss, misclassification rate, and training time while maximizing accuracy and F1 scores. Following from average scores, we see that a minimized loss and misclassification rate with best performing accuracy and F1 scores follow for the LSTM model, though optimized for time follows for the CNN model.

## Introduction

One task in natural language processing is so-called opinion mining, or sentiment analysis, in which we analyze a text and process whether the information it entails is positive or negative sentiment (Bodapati et al., 2019). Such a task involves methods devised in machine learning and artificial intelligence. With abundant and growing access to internet as a forum for expressing thoughts and opinions, the internet is a rich source of textual opinions and information. Online forums, shopping sites, and review sites are such examples of available sentiment data, and not least of all are movie reviews — either by professional critics or the general populace — that contain such sentiment for analysis.

Traditional text classification methods were exhasutively dictionary-based and required much computing power or were basic machine learning methods; recently, more efficient and accurate deep learning methods such as LSTM (Long Short-Term Memory) models have superseded them (Jang et al., 2020). Additionally, any of the species of BERT (Bidirectional Encoder Representations from Transformers) models (Hoang et al., 2019). This paper aims to explore and compare various methods at polarity sentiment analysis for the following reasons: learn machine learning methods for text classification; learn about optimization methods for machine learning; learn to apply text analyses for further linguistic research, such as analyses of the CHILDES database; design experiment relative to what we discussed in class.

The problem posed in this projects is that of binary classification of polarity: determination of whether a review is positive or negative. The Stanford IMDB dataset is used for the experiment, which consists of movie reviews classified as positive or negative. In the experiment, three kinds of ML models are compared for their performance in accurately predicting polarity. The question remains as: what optimized models yield best accuracy scores for polarity sentiment prediction? Following from this, it is predicted that an optimized CNN architecture yields the best overall scores on account of leveraging semantic embedding and sentiment embedding; this is perhaps counter to what is expected, in that pre-trained BERT models might be expected to outperform other LSTM models like CNN or RNN; because of the size of the data and that the BERT model used here is a DistilBERT model, it will follow that the LSTM model’s performance over the DistilBERT 1 model is significant.

## Methods

The Stanford IMDB review dataset (Maas et al., 2011) is a repository of training and testing data consisting of 50000 reviews. Out of the total records, 25000 are of positive polarity while the other 25000 are of negative polarity. 12500 positive reviews and 12500 negative reviews are in each of the training and test data.

The review dataset is cleaned for stopwords, punctuation, contractions, and is otherwise normalized to facilitate meaningful comparisons and analyses. Each model follows the same general schematic template with some variation: sequential model is appropriate for a plain stack of layers where each layer has exactly one input tensor and one output tensor; embedding layer turns positive integers (indexes) into dense vectors of fixed size; dropout layer randomly sets input units to 0 with a frequency of rate at each step during training time, which helps prevent overfitting; 1D convolution layer creates a convolution kernel that is convolved with the layer input over a single spatial (or temporal) dimension to produce a tensor of outputs; dense layer is a layer that is deeply connected with its preceding layer which means the neurons of the layer are connected to every neuron of its preceding layer; LSTM layer includes many LSTM units to recall past information; output does just that; compile gives specifications about the model such as optimization, minimization of error, and which metrics to evaluate and report.

| **Architecture** | **CNN** | **RNN** | **RCNN** | **LSTM** |
|-------|--------|---------|--------|---------|
| **sequential**      | <span>&#10003;</span> | <span>&#10003;</span> | <span>&#10003;</span>   | <span>&#10003;</span>  | 
| **embedding**       | <span>&#10003;</span> | <span>&#10003;</span> | <span>&#10003;</span>   | <span>&#10003;</span>  | 
| **dropout**         | x                     | <span>&#10003;</span> | <span>&#10003;</span>   | <span>&#10003;</span> |
| **convolutional**   | <span>&#10003;</span> | x                     | <span>&#10003;</span>   | x |
| **dense**           | <span>&#10003;</span> | x | x | x |
| **LSTM**            | x | <span>&#10003;</span> | <span>&#10003;</span> | <span>&#10003;</span> (multiple) |
| **Output**          | <span>&#10003;</span> | <span>&#10003;</span> | <span>&#10003;</span>   | <span>&#10003;</span>  | 
| **Compile**         | <span>&#10003;</span> | <span>&#10003;</span> | <span>&#10003;</span>   | <span>&#10003;</span>  | 

Each model is constructed with training epochs monitored for validation loss as the criteria for early stopping. Because too many epochs can result in an overfitted model that fits exactly against training data, which results in the model inaccurately performing against novel data, thus defeating its purpose. Loss quantifies how certain the model is about a prediction, whereas accuracy checks for the number of correct predictions (Kelleher et al., 2015). It follows, then, that stopping for loss on the validation set will best prevent overfitting.

To optimize completion time, each model was forced to perform on the GPU via CUDA. The GPU used is NVIDIA GeFORCE RTX 3070. Preliminary tests were done on the CPU: AMD Ryzen 7 3700X 8-Core Processor 3.59 GHz. Final results reported in this paper are those run on the GPU.

## Results

n-gram analyses for n={1, 2, 3} is visualized below. [n-grams](https://web.stanford.edu/~jurafsky/slp3/3.pdf) track the frquency in which (word) tokens appear. 1-grams (monograms) refer to the frequency in which single word tokens appear; 2-grams (bigrams) refer to the frequency in which two word tokens appear together; 3-grams (trigrams) refer to the frequency in which three word tokens appear together. Roughly, such frequencies will follow a [Zipf-like distribution](https://web.archive.org/web/20021010193014/http://linkage.rockefeller.edu/wli/zipf/). n-grams are useful in that they tell us exactly word distributions (once appropriately filtered). Word pairings are exceptionally useful in many contexts, not limited to sentiment. Reconstruction of broken or incomplete texts, for example, and auto-correct are applications of n-grams. The n-gram distributions are plotted accordingly.

![vis_data_ngram](https://github.com/deltaquebec/dquigley.dev/tree/master/assets/sentiment_imdb_reviews/vis_data_ngram.png)

Other visualizations such as wordclouds, number of characters in cleaned texts, number of words in cleaned texts, and average word length in cleaned texts are provided in the appendices. Note that the average word length is represented by a _probability density_, the values of which may be greater than 1; the distribution itself, however, will integrate to 1. The values of the y-axis, then, are useful for relative comparisons between categories. Converting to a probability (in which the bar heights sum to 1) in the code is simply a matter of changing the argument stat='density' to stat='probability', which is essentially equivalent to finding the area under the curve for a specific interval. See [this article](https://towardsdatascience.com/histograms-and-density-plots-in-python-f6bda88f5ac0) for more details.

An ideal model will minimize validation loss, misclassification rate, and training time while maximizing accuracy and F1 scores.

| **Training Epoch** | **CNN** | **RNN** | **RCNN** | **LSTM** |
|-------|--------|---------|--------|---------|
| **Epoch1**    | 0.82 | 0.84 | 0.83 | 0.82 | 
| **Epoch1**    | 0.84 | 0.83 | 0.85 | 0.84 |
| **Epoch1**    | 0.83 | 0.84 | 0.84 | 0.85 |
| **Epoch1**    | 0.83 | 0.83 | 0.83 | 0.85 |
| **Epoch1**    | 0.83 | 0.83 | 0.83 | 0.84 |
| **Epoch1**    | 0.83 | 0.83 | 0.82 | 0.85 |
| **Epoch1**    | 0.82 | 0.83 | 0.82 | 0.84 |
| **Epoch1**    | 0.82 | 0.82 | 0.82 | 0.85 | 
| **Epoch1**    | 0.82 | 0.82 | 0.82 | 0.84 | 
| **Epoch1**    | 0.82 | 0.82 | 0.82 | 0.84 | 
| **Average**   | 0.83 | 0.83 | 0.83 | 0.84 | 



## Discussion

## Conclusion
