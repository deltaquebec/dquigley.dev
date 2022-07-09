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

An ideal model will minimize validation loss, misclassification rate, and training time while maximizing accuracy and F1 scores. All other metrics relatively equal across epochs, this particular architecture favors either three or four epochs. Following from average scores, we see that a minimized loss and misclassification rate with best performing accuracy and F1 scores follow for the LSTM model, though optimized for time follows for the CNN model.

## Introduction

One task in natural language processing is so-called opinion mining, or sentiment analysis, in which we analyze a text and process whether the information it entails is positive or negative sentiment (Bodapati et al., 2019). Such a task involves methods devised in machine learning and artificial intelligence. With abundant and growing access to internet as a forum for expressing thoughts and opinions, the internet is a rich source of textual opinions and information. Online forums, shopping sites, and review sites are such examples of available sentiment data, and not least of all are movie reviews — either by professional critics or the general populace — that contain such sentiment for analysis.

Traditional text classification methods were exhasutively dictionary-based and required much computing power or were basic machine learning methods; recently, more efficient and accurate deep learning methods such as LSTM (Long Short-Term Memory) models have superseded them (Jang et al., 2020). Additionally, any of the species of BERT (Bidirectional Encoder Representations from Transformers) models (Hoang et al., 2019). This paper aims to explore and compare various methods at polarity sentiment analysis for the following reasons: learn machine learning methods for text classification; learn about optimization methods for machine learning; learn to apply text analyses for further linguistic research, such as analyses of the CHILDES database; design experiment relative to what we discussed in class.

The problem posed in this projects is that of binary classification of polarity: determination of whether a review is positive or negative. The Stanford IMDB dataset is used for the experiment, which consists of movie reviews classified as positive or negative. In the experiment, three kinds of ML models are compared for their performance in accurately predicting polarity. The question remains as: what optimized models yield best accuracy scores for polarity sentiment prediction? Following from this, it is predicted that an optimized CNN architecture yields the best overall scores on account of leveraging semantic embedding and sentiment embedding; this is perhaps counter to what is expected, in that pre-trained BERT models might be expected to outperform other LSTM models like CNN or RNN; because of the size of the data and that the BERT model used here is a DistilBERT model, it will follow that the LSTM model’s performance over the DistilBERT 1 model is significant.

## Methods

The Stanford IMDB review dataset (Maas et al., 2011) is a repository of training and testing data consisting of 50000 reviews. Out of the total records, 25000 are of positive polarity while the other 25000 are of negative polarity. 12500 positive reviews and 12500 negative reviews are in each of the training and test data.

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

## Discussion

## Conclusion
