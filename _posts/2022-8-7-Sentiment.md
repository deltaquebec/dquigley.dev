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

## Methods

## Results

## Discussion

## Conclusion
