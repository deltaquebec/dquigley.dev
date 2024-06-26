---
layout: page
title: Professional Research
permalink: /research/
---

My research is highly interdisciplinary, spanning linguistics, mathematics, philosophy, and computer science. My work explores the theoretical fundamentals of well-defined and grounded foundations for explainable and human-interpretable artificial intelligence and language processing. My professional research interests include: category-theoretic morphisms in lingusitic semantics; non-Euclidean geometries for data representation; neural network theory.

### Category-theoretic morphisms in linguistic semantics

Natural language processing is an interdisciplinary field that invites attention from linguistics, computer science, mathematics, philosophy; these fields coalesce to find efficient, precise, and comprehensive methods for respecting and processing semantic information. Two such frameworks are **Formal Semantics**, grounded in first order logic, and **Vector Space Models**, adapted from multi-linear algebra and differential geometry. The goal is to theoretically bridge these distinct approaches.

<img src="/assets/catmod.png" alt="Category of formal models" style="float: right; margin-left: 20px; width: 180px;">

By using **Category Theory** as the connection between Formal Semantics and Vector Space Semantics, I am exploring how we may integrate the two otherwise disparate paradigms and elucidate semantic morphisms — transformations that preserve structure and semantic information — between them.

My work here has three main objectives:

1. Reformulate and prove model-theoretic morphisms between formal logic models.
2. Connect formal logic models from model theory and vector space semantic models, uncovering any underlying shared structures and dynamics.
3. Use category theory to bring a coherence, consistent, and holistic framework that encapsulates both paradigms; by grounding these connections in the framework of category theory, I aim to provide a rigorous mathematical foundation for these integrated models.

This work is a part of the movement for explainable AI. To that end, category theory offers a universal language that facilitates dialogue between otherwise disparate paradigms, and so encourages interdisciplinary collaboration.

### Non-Euclidean geometries

Language is not necessarily linear, and using Euclidean spaces for representing language structures suffers from the curse of dimensionality rather catastrophically. Assuming all words live in some space $N$ of size $dim(N)$, then the dimensionality of a sentence of $n$ words is $dim(N)^n$. Euclidean spaces are ubiquitous, but run the risk of distorting data as the dimensionality of the data increases. 

Some hierarchical data, such as a tree, has a branching factor such that $b$ has $(b + 1)b^{l-1}$ nodes at level $l$ and $(b+1)b^l −2 \over b-1$ nodes on levels less than or equal to $l$; as we grow the levels of the tree, the number of nodes grows exponentially. Two possible alternative geometries to Euclidean space come naturally equipped to handle high dimensional, hierarchical, non-linear linguistic data: hyperbolic space and $p$-adic space.

Recent work has shown that hyperbolic spaces significantly improve the performance of various tasks that benefit from hierarchical structure. Relevant to language, such structures are the relationships between words in space, phrases in the sentence space, knowledge graph representations, and syntactic phrase hierarchies. Such structures better fit not in the easily conceptualized Euclidean space, but in curved **hyperbolic space**.

<img src="/assets/hyperbolic.png" alt="Hyperbolic space" style="float: left; margin-right: 20px; width: 240px;">

Hyperbolic spaces are geometries with a **negative (sectional) curvature**. It is precisely this negative curvature that grants us access to efficient representations of hierarchical and non-linear information. In hyperbolic space, the distance between points grows exponentially as we move away from a central point. Hyperbolic space allows for a larger number of points to be represented within a given radius than is possible in Euclidean space. This increased capacity for representation can be especially useful in modeling large datasets or complex systems.

An intriguing geometry is built from the $p$-adic numbers. **$p$-adic space** is a geometry defined by the $p$-adic numbers. There is no evidence that $p$-adic spaces represent the human management of language, but for machine-interpretability, it promises some interesting (and largely unexplored) directions with which to rescue efficiency of processing and understanding.

{% comment %}
In brief, to build a $p$-adic space:

1. Start with a prime number $p$ and a sequence of digits representing an integer in base-$p$ notation.
2. Using this representation, we can define a distance metric on the $p$-adic numbers. The distance between two $p$-adic numbers $a$ and $b$ is defined as the reciprocal of the highest power of $p$ that divides the difference between $a$ and $b$. This distance metric satisfies the axioms of a metric space, including the triangle inequality.

A $p$-adic space is a metric space that is defined using the $p$-adic numbers as the underlying set of points and the $p$-adic distance metric.
{% endcomment %}

<img src="/assets/padic.png" alt="3-adic space" style="float: right; margin-left: 20px; width: 240px;">

$p$-adic spaces should provide better clustering of related data points than Euclidean space or hyperbolic space. This is because $p$-adic spaces can represent more points within a given radius than Euclidean or hyperbolic space.

There is no real reason to assume (besides perhaps visualization) that computational models should involve floating point approximations of points in a continuous Euclidean space. Intuition might invite the notion that integers, not floats, should make a better foundation for modeling (language), but done so such that the usual tools are still available such as calculus. Hence, the introduction of a framework of $p$-adic space, which happily (if you squint a little) supports calculus and the triangle inequality (read, geometry), is an encouraging direction.

### Neural network theory

Much of machine learning (neural networks, in particular) is a wild west, built from black box _ad hoc_ models. Though empirically verifiable, there is a scarcity of a principled and mathematically unified foundation. Two attractive approaches to equip neural networks with grounded theoretical foundations follow from: Geometric Deep Learning and Effective Deep Learning Theory.

**Geometric Deep Learning** [(Bronstein, et al., 2021)](https://arxiv.org/abs/2104.13478) is an attempt for a geometric unification of a broad class of ML problems from the perspectives of **symmetry** and **invariance**. 

| Architecture          | Domain Ω           | Symmetry group G                  |
|-----------------------|--------------------|----------------------------------|
| CNN                   | Grid               | Translation                       |
| Spherical CNN         | Sphere / SO(3)     | Rotation SO(3)                    |
| Intrinsic / Mesh CNN  | Manifold           | Isometry Iso(Ω) / Gauge symmetry SO(2) |
| GNN                   | Graph              | Permutation Σn                   |
| Deep Sets             | Set                | Permutation Σn                   |
| Transformer           | Complete Graph     | Permutation Σn                   |
| LSTM                  | 1D Grid            | Time warping                      |

**Effective Deep Learning Theory** [(Roberts, et al., 2022)](https://arxiv.org/abs/2106.10165) develops an **effective theory approach** to understanding deep neural networks that borrows from theoretical physics. The approach here provides a clear and pedagogical explanation of how deep neural networks work. 

$$f(x; θ^*) ≈ f (x)$$

Each of these theory-first perspectives endeavor to derive, explain, and provide methods to construct new types of problem-specific inductive biases. Geometric Deep Learning serves two purposes: first, to provide a common mathematical framework to derive the most successful neural network architectures, and second, give a constructive procedure to build future architectures in a principled way. Effective Deep Learning Theory argues for a general theory of deep learning derived from first principles, in which the guiding philosophy is that nearly-simple phenomena in practice should correspond to nearly-simple effective theories.

