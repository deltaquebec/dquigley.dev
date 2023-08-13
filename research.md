---
layout: page
title: Research Projects
permalink: /research/
---

Research stuff goes here

$$ L = T - V $$

$$ x = y ^2 $$

### PhD Research


<img src="/assets/category_formal.png" alt="Category of formal models" style="float: right; margin-left: 20px; width: 180px;">

### Masters Research

### Hyperbolic Spaces

### Geoemtric Neural Networks

Much of machine learning (neural network machine learning, in particular) is a wild west, built from _ad hoc_ models. Though empiracally verifiable, there is a scarcity of a principled mathematically unified foundation. **Geometric Deep Learning** is an attempt for geometric unification of a broad class of ML problems from the perspectives of **symmetry** and **invariance**. 

| Architecture          | Domain Ω           | Symmetry group G                  |
|-----------------------|--------------------|----------------------------------|
| CNN                   | Grid               | Translation                       |
| Spherical CNN         | Sphere / SO(3)     | Rotation SO(3)                    |
| Intrinsic / Mesh CNN  | Manifold           | Isometry Iso(Ω) / Gauge symmetry SO(2) |
| GNN                   | Graph              | Permutation Σn                   |
| Deep Sets             | Set                | Permutation Σn                   |
| Transformer           | Complete Graph     | Permutation Σn                   |
| LSTM                  | 1D Grid            | Time warping                      |


These principles not only underlie the breakthrough performance of convolutional neural networks and the recent success of graph neural networks but also provide a principled way to construct new types of problem-specific inductive biases. Geometric Deep Leadning serves two purposes: first, to provide a common mathematical framework to derive the most successful neural network architectures, and second, give a constructive procedure to build future architectures in a principled way.
