---
layout: page
title: Professional Research
permalink: /research/
---

My research is highly interdisciplinary, spanning linguistics, mathematics, philosophy, and computer science. My domains of interest are in mathematical linguistics, theoretical deep learning, neuro-symbolic artificial intielligence, and philosophy of science.

### Category-theoretic semantics

**Formal semantics** analyzes language meaning using mathematical structures and logical models, which are categorized as either **extensional** (meaning is derived from observable realities), or **intensional** (meaning depends on context including modalities like necessity and possibility). These frameworks help map linguistic expressions to reality. In contrast, **distributional semantics** (the underlying linguistics of modern machine language understanding) posits that meaning arises from usage context, aligned with Firth’s principle: ‘You shall know a word by the company it keeps’. This approach models word meanings as vectors in a high-dimensional space, where semantic relationships are defined by proximity and interaction, often represented on a geodesically convex Riemannian manifold, allowing for semantic analysis through various interpolative methods.

One may wonder: to what extent do formal semantics and distributional semantics relate as computational processes for understanding natural language? To what extent does one formal structure relate to the other?

This is a natural question in the domain of **category theory**, which is, itself, the study of structures and relationships by abstraction; that is, category theory is the study of structures by abstracting them and their relationships. It is the natural tool of choice, then, with which to study structures; the structures in which we are interested here are those which represent meaning in natural language.

<img src="/assets/modint.PNG" alt="Category of formal models" style="float: right; margin-left: 20px; width: 180px;">

By using category theory as the connection between formal semantics and distributional semantics, I am exploring how we may integrate the two otherwise disparate paradigms and elucidate transformations that preserve structure and semantic information between them. My work here has three main objectives:

1. Reformulate and prove model-theoretic morphisms between extensional and intensional models.
2. Connect formal logic models from model theory and vector space semantic models, uncovering any underlying shared structures and dynamics between the two.
3. Use category theory to bring a coherent framework to both paradigms; by grounding these connections in the framework of category theory, I aim to provide a rigorous mathematical foundation for these integrated models, giving a map of semantics that is flexibly formal and distributional.

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

**Categorical Deep Learning** [(Gavranović, et al., 2024)](https://arxiv.org/abs/2402.15332) give a general-purpose framework for specifying and studying deep learning architectures through the framework of category theory. In particular, Geometric Deep Learning is, in fact, contained within such a categorical framework; furthermore, Categorical Deep Learning establishes a common, unifying framework for how category theory can be applied to AI. Something must be said as well for the aesthetic, the beauty, of mathematics, and it is my opinion that category theory has that in spades; application to deep learning brings in a consistent beauty toa  computer science otherwise hindered by ad hoc characterizations.

Each of these perspectives endeavor to derive, explain, and provide methods to construct new types of problem-specific inductive biases. Geometric Deep Learning serves two purposes: first, to provide a common mathematical framework to derive the most successful neural network architectures, and second, give a constructive procedure to build future architectures in a principled way. Effective Deep Learning Theory argues for a general theory of deep learning derived from first principles, in which the guiding philosophy is that nearly-simple phenomena in practice should correspond to nearly-simple effective theories. Categorical Deep Learning seeks to give a general-purpose framework for deep learning architectures that otherwise subsumes the afforementioned theories.

