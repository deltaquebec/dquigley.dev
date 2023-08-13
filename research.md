---
layout: page
title: Professional Research
permalink: /research/
---

My theoretical research is highly interdisciplinary, spanning linguistics, mathematics, philosophy, and computer science. My work aims to explore the theoretical foundations of well-defined and grounded foundations for explainable and human-interpretable artificial intelligence. My professional interests include the following: Category-theoretic morphisms in lingusitic semantics; non-Euclidean spaces for modeling data; theoretical foundations of neural networks.

### Category-theoretic morphisms in lingusitic semantics

Natural language processing is an interdisciplinary field that invites attention from linguistics, computer science, mathematics, philosophy; these fields coalesce to find efficient, precise, and comprehensive methods for respecting and processing semantic information. Two such frameworks are **Formal Semantics**, grounded in first order logic, and **Vector Space Models**, adapted from multi-linear algebra and differential geometry. The goal is to theoretically bridge these distinct approaches.

<img src="/assets/catmod.png" alt="Category of formal models" style="float: right; margin-left: 20px; width: 180px;">

By using **Category Theory** as the connecting bridge between Formal Semantics and Vector Space Semantics, I am exploring how we may integrate the two otherwise disparate paradigms and elucidate semantic morphisms — transformations that preserve structure and semantic information — between them.

My work here has three main objectives:

1. Reformulate and prove model-theoretic morphisms between formal logic models in model theory.
2. Establish connections between formal logic models from model theory and vector space semantic models, uncovering their underlying shared structures and dynamics.
3. Use category theory to bring coherence and offer a holistic framework that can encapsulate both paradigms; by grounding these connections in the realm of category theory, I aim to provide a rigorous mathematical foundation for these integrated models.

### Non-Euclidean geometries

Language is not necessarily linear, and Euclidean space for representing language structures suffers from the curse of dimensionality rather catastrophically. Assuming all words live in some space $N$ of size $dim(N)$, then the dimensionality of a sentence of $n$ words is $dim(N)^n$ (!). Two possible alternative geometries to Euclidean space come naturally equipped to handle hierarchical, non-linear linguistic data: hyperbolic space and p-adic space.

Recent work has shown that hyperbolic spaces significantly improve the performance of various tasks that benefit from hierarchical structure. Relevant language, such structures are the relationships between words in space, phrases in the sentence space, knowledge graph representations, and syntactic phrase hierarchies. Such structures better fit not in the easily conceptualized Euclidean space, but in curved **hyperbolic space**.

<img src="/assets/hyperbolic.png" alt="Hyperbolic space" style="float: left; margin-right: 20px; width: 200px;">

Hyperbolic spaces are geometries with a **negative (sectional) curvature**. It is precisely this negative curvature that grants us access to efficient representation of hierarchical and non-linear information. In hyperbolic space, the distance between points grows exponentially as we move away from a central point. Hyperbolic space allows for a larger number of points to be represented within a given radius than is possible in Euclidean space. This increased capacity for representation can be especially useful in modeling large datasets or complex systems.

An alternative and intriguing geometry is built from the p-adic numbers. **p-adic** space is a geoemtry defined by the p-adic numbers. There is no evidence that p-adic spaces represent the human management of language, but for machine-interpretability, it promises some interesting (and largely unexplored) directions with which to rescue efficiency of processing and understanding. p-adic spaces represent an alternative semantic space within which to measure word meanings. a p-adic space is a type of metric space that is constructed using p-adic numbers, which are an alternative to real numbers. In brief: To define a p-adic space, we start with a prime number p and a sequence of digits representing an integer in base-p notation. Using this representation, we can define a distance metric on the p-adic numbers. The distance between two p-adic numbers a and b is defined as the reciprocal of the highest power of p that divides the difference between a and b. This distance metric satisfies the axioms of a metric space, including the triangle inequality. A p-adic space is a metric space that is defined using the p-adic numbers as the underlying set of points and the p-adic distance metric.

<img src="/assets/padic.png" alt="3-adic space" style="float: right; margin-left: 20px; width: 200px;">

In the same way that we rescued spatial efficiency with moving to hyperbolic space, so, too, so we rescue efficiency (computationally with the distance function) with p-adic spaces. p-adic spaces should provide better clustering of related data points than Euclidean space or hyperbolic space. This is because p-adic spaces can more accurately capture the hierarchical structure of the data, which is often present in natural language. p-adic spaces allow for more fine-grained distinctions between similar points and can identify clusters that may not be detected in Euclidean or hyperbolic space. p-adic spaces can provide a larger capacity for representing data than Euclidean or hyperbolic space. This is because p-adic spaces can represent more points within a given radius than Euclidean or hyperbolic space. This can be especially useful for modeling large datasets or complex systems.

In the same vein as moving between tensor spaces, there is no real reason to assume (besides perhaps visualization) that computational models should involve floating point approximations of points in a continuous Euclidean space. Intuition might invite the notion that integers, not floats, should make a better foundation for modeling (language), but done so such that the usual tools are still available such as calculus. Hence, the introduction of a framework of p-adic space, which happily (if you squint a little) support calculus and the triangle inequality (read, geometry), among others. It is the hope of the author that this can be pursued as a tool for machine modeling (of language).


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
