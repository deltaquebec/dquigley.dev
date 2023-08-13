---
layout: page
title: Professional Research
permalink: /research/
---

My theoretical research is highly interdisciplinary, spanning linguistics, mathematics, philosophy, and computer science. My work aims to explore the theoretical foundations of well-defined and grounded foundations for explainable and human-interpretable artificial intelligence. My professional interests include the following: Category-theoretic morphisms in lingusitic semantics; non-Euclidean spaces for modeling data; theoretical foundations of neural networks.

### Category-theoretic morphisms in lingusitic semantics

Natural language processing is an interdisciplinary field that invites attention from linguistics, computer science, mathematics, philosophy; these fields coalesce to find efficient, precise, and comprehensive methods for respecting and processing semantic information. Two such frameworks are **Formal Semantics**, grounded in first order logic, and **Vector Space Models**, adapted from multi-linear algebra and differential geometry. The goal is to theoretically bridging these distinct approaches.

<img src="/assets/catmod.png" alt="Category of formal models" style="float: right; margin-left: 20px; width: 180px;">

By using **Category Theory** as the connecting bridge between Formal Semantics and Vector Space Semantics, I am exploring how we may integrate the two otherwise disparate paradigms and elucidate semantic morphisms — transformations that preserve structure and semantic information — between them.

This work has three main objectives:

1. Reformulate and prove model-theoretic morphisms between formal logic models in model theory.
2. Establish connections between formal logic models from model theory and vector space semantic models, uncovering their underlying shared structures and dynamics.
3. Use category theory to bring coherence and offer a holistic framework that can encapsulate both paradigms; by grounding these connections in the realm of category theory, I aim to provide a rigorous mathematical foundation for these integrated models.

### Non-Euclidean space of states

### Neural Network Theory

Much of machine learning (neural network machine learning, in particular) is a wild west, built from _ad hoc_ models. Though empiracally verifiable, there is a scarcity of a principled mathematically unified foundation. Two attractive approaches to equip neural networks with grounded theoretical foundations follow from: Geometric Deep Learning; Effective Deep Learning Theory.

**Geometric Deep Learning** [(Bronstein, et al., 2021)](https://arxiv.org/abs/2104.13478) is an attempt for geometric unification of a broad class of ML problems from the perspectives of **symmetry** and **invariance**. 

| Architecture          | Domain Ω           | Symmetry group G                  |
|-----------------------|--------------------|----------------------------------|
| CNN                   | Grid               | Translation                       |
| Spherical CNN         | Sphere / SO(3)     | Rotation SO(3)                    |
| Intrinsic / Mesh CNN  | Manifold           | Isometry Iso(Ω) / Gauge symmetry SO(2) |
| GNN                   | Graph              | Permutation Σn                   |
| Deep Sets             | Set                | Permutation Σn                   |
| Transformer           | Complete Graph     | Permutation Σn                   |
| LSTM                  | 1D Grid            | Time warping                      |


These principles provide a principled way to construct new types of problem-specific inductive biases. Geometric Deep Leadning serves two purposes: first, to provide a common mathematical framework to derive the most successful neural network architectures, and second, give a constructive procedure to build future architectures in a principled way.

**Effective Deep Learning Theory** [(Roberts, et al., 2022)](https://arxiv.org/abs/2106.10165) develops an effective theory approach to understanding deep neural networks.
