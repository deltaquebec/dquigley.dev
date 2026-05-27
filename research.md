---
layout: page
title: Professional Research
permalink: /research/
---

My research develops mathematical frameworks for meaning, reasoning, and abstraction to study symbolic and subsymbolic approaches to language and cognition. My current work applies categorical and relational methods to abstraction and analogy in ARC-style reasoning tasks.

In addition to my work on abstraction and analogy, I am woking on various aspects of meaning representation and grounding problems, including the geometry and topology of representation spaces, time-evolving semiotics, and typologies of writing systems as relevant to semiotics and meaning representation.


### Geometry and topology of semantic space

**Word embeddings** are mathematical objects by construction: finite point clouds in $\mathbb{R}^{300}$ with a natural metric, a definite intrinsic dimension, definite curvature, a definite $k$-nearest-neighbor graph. These properties exist whether or not anyone measures them; the question is what attitude to take toward them. Folk geometry imports two- and three-dimensional intuitions (clusters, directions) to high-dimensional sets, where they rarely survive contact with calibrated estimators. Task evaluation, the engineering default, leaves the object itself uncharacterized. I am interested in the following: treat the point cloud as the metric measure space it is, submit candidate descriptions to falsifiable tests, and accept that several familiar verbal characterizations may fail. That is: what is the semantic space as a mathematical object?

<p align="center"> 
<img src="/assets/research/geometry_topology_semantics.png" alt="Cartoon model of semantic space",style="float: left; margin-right: 20px; width: 180px;">
</p>

The methodological complication is that geometric statistics on high-dimensional point clouds return non-trivial values on essentially any input, including a Gaussian whose covariance matches the embedding's own. Distance concentration, $k$NN hubness, anisotropy-driven graph structure: each produces qualitative signatures in the range one would intuitively read as evidence of specific embedding properties. The resulting characterization is of a low-dimensional anisotropic manifold with diffuse positive curvature throughout, hosting a small fraction of distributional artifacts that are not where the geometric signal lives. This is a claim about two specific computational artifacts, not about meaning, language, or cognition.

Any geometric statistic on a high-dimensional point cloud is susceptible to the same class of artifacts (distance concentration, anisotropy-driven hubness, rank-deficient covariance), so the matched-null framework ports directly. The static-embedding case is the cleanest first application. Transformer-derived contextual representations are context-dependent, layer-specific, and trained against objectives unlike static ones; whether the diffuse-manifold picture survives, breaks down, or stratifies across layers is an open question worth asking. Other classes of high-dimensional representation (image embeddings, gene-expression vectors, neural activation patterns) face the same calibration problem when claims about "cluster structure" or "tree-like organization" are at stake, and the matched-null framework should travel.

<img src="/assets/hyperbolic.png" alt="Hyperbolic space" style="float: left; margin-right: 20px; width: 240px;">

A separate line of work asks not whether to test embedding geometry under discipline, but which geometry the embeddings should live in. The motivation for hyperbolic embeddings, for example, is that linguistic structure has hierarchical aspects (knowledge graphs, taxonomies, syntactic parse trees, sense lattices), and a space with negative curvature accommodates exponential branching at constant volume in a way Euclidean space does not. The matched-null testing reported here partially updates the motivation: for the static distributional embeddings I examined, the tree-likeness signal (low Gromov $\delta$) tracks the covariance null, and the local curvature is positive throughout. Hyperbolic embedding is the wrong tool for those particular point clouds; that result is about what GloVe and Word2Vec specifically contain, not about whether hyperbolic geometry is appropriate for representing objects that are hierarchical by construction. Parse trees, knowledge graphs, and taxonomic ontologies remain natural targets; so do contextual representations, whose empirical geometry has not been tested under the same discipline and could stratify across layers in ways the static case does not predict. 

<img src="/assets/padic.png" alt="3-adic space" style="float: right; margin-left: 20px; width: 240px;">

A still less explored direction is $p$-adic representation: the metric is ultrametric, every triangle is isosceles, and hierarchical containment is a structural property of the geometry rather than something one optimizes for. The matched-null framework can follow the geometry: draws from an isotropic wrapped Gaussian on hyperbolic space, the corresponding analog on a $p$-adic tree, against which the observed structure of the actual representation can be measured. The discipline travels; only the ambient changes.

### Calendars and the tropical year

Calendar scholarship is shaped by an astronomical bias. Standard definitions in astronomy, computational calendrics, and history of science place astronomical anchoring at the constitutive center, which excludes systems most observers would still call calendars: the Balinese Pawukon; the Maya Long Count; the ISO 8601 week date; the Mesopotamian schematic calendar that Old Babylonian astronomers themselves used for their astronomical work. I am interested in the broader conception of timekeeping, of calendars from both sides of this divide. For the calendars that do commit to astronomical referents, I am interested in pushing the underlying mathematics as far as it will go; for the wider class, I am interested in working out what a calendar must do structurally, independent of the sky.


A solar calendar aligns the civil year with the tropical year, but the tropical year itself depends on which point on the ecliptic is chosen as the reference. The interval between successive passages of the sun through a given ecliptic longitude *L* is a function of *L*, denoted *Y*(*L*); averaged over many crossings and a long baseline, it is a precise scalar. I compute *Y*(*L*) from Meeus's low-precision solar polynomial over J2000 ± 1500 years, using a wrap-aware modified Newton iteration that converges to 10⁻⁹ degrees per crossing. The resulting *Y*(*L*) is near-sinusoidal with roughly 98 seconds peak-to-peak amplitude, with extrema approximately 17° past the solstices, at the longitudes Earth crosses near perihelion and aphelion. Agreement with Meeus's 2002 tabulated values is within 2.2 seconds over the full domain.

<img src="/assets/research/epoch_overlay.png" alt="Overlay of tropical year length along ecliptic longitude over several epochs">

*Y*(*L*) gives a scalar-valued diagnostic for arithmetic calendars: the crossing difference. For any calendar that fixes a reference longitude to define its mean year, the difference between that calendar's mean year and *Y* evaluated at the fixed longitude measures how accurately the calendar tracks the sun's return to its chosen reference. The Gregorian calendar scores 17.7 seconds; the Milanković (reformed Eastern Orthodox) calendar scores 13.4 seconds, the best of any arithmetic calendar I measured; the Bahá'í calendar pre-2015 scores 15.6 seconds; Birashk's Iranian proposal scores 15.9 seconds; Khayyām's historical proposal scores approximately 15 seconds, with the caveat that polynomial extrapolation over a millennium carries ±2 seconds of uncertainty at that horizon. Observational calendars (the present Iranian Solar Hijrī, the Bahá'í calendar post-2015, the French Republican) have no fixed scalar to diagnose; they commit to observed astronomical events directly. A floor sets the limit of the whole exercise: no arithmetic calendar can score below roughly one second on the crossing difference, because secular drift in *Y* itself yields about 57,000 years of alignment before the reference longitude has shifted enough to require renegotiation. The diagnostic discriminates among existing calendars without making any of them correct in an absolute sense.

<img src="/assets/research/crossings_multi.png" alt="Overlay of tropical year length along ecliptic longitude over several specific historical epochs">

Calendars are human artifacts whose alignment with the heavens, when present at all, is only one commitment among several, made for particular reasons by particular communities. I am interested in this relationship between the arithmetic case and otherwise what makes it conceptually portable to everywhere else.


### Historical typography

Historical typographic design codified the relation between page and text block as proportioning systems intended to survive changes in page size, binding, or paper stock: Van de Graaf divides the page into ninths; Villard de Honnecourt gives a family parameterized by integer *N*; Tufte's wide outer margin is reserved for marginalia; the modular grid generalizes the lot. 

<img src="/assets/canon_graaf.png" alt="Van de Graaf canon" style="float: left; margin-left: 20px; width: 240px;">

A **page canon**, formalized, is a scale-equivariant map from a declared frame *W* × *H* to a text-block-and-margins solution; under two stronger invariances (dimensional separability and aspect preservation), the canons nest into three regions, and the four margin modes decompose into two independent binary choices whose side-swap action induces a usable equivalence among canons. The grid canon subsumes the classical families exactly or approximately, with the exact-versus-approximate boundary tracking the invariance class.

<img src="/assets/canon_honnecourt.png" alt="Villard de Honnecourt canon" style="float: right; margin-right: 20px; width: 240px;">

The framework has two executable instantiations. [`page-canons.sty`](https://www.ctan.org/pkg/page-canons) is a LaTeX package implementing the major historical canons under a common interface, with an in-house margin-note and sidenote system with PDF/UA-2 semantic tagging. 

<img src="/assets/canon_tufte.png" alt="Tufte canon" style="float: left; margin-left: 20px; width: 240px;">

A companion Python tool, `page_canon.py`, with a wxPython GUI, handles the design-time side: computing margins for named sizes, custom dimensions, or width-plus-ratio input; handling gutter in two well-defined modes (geometry-like shift versus strict KOMA satzspiegel); emitting LaTeX `geometry` snippets in any unit; rendering recto/verso diagrams with marginpar zones. Both extend naturally to a three-dimensional depth axis for books conceived as volumes rather than as open spreads.

<img src="/assets/canon_atelier.png" alt="Canon des Ateliers canon" style="float: right; margin-right: 20px; width: 240px;">

Beyond the formal canon work, my typographic interests are art-historical and cognitive at once: the history of design, and of book design specifically; decorated initials and the medieval grammar of page hierarchy; paragraph-level conventions like *per cola et commata*, in which sense-units are broken across lines to cue parsing; the cognitive-science work on how such conventions guide reading. The formalism is one place where these get made computable; the interests themselves are older than the formalism.

<img src="/assets/canon_grid.png" alt="Grid canon" style="float: left; margin-left: 20px; width: 240px;">

<!---
Intelligence manifests across substrates, be they neural, artificial, or collective, but research often proceeds in isolation. I am interested in whether formal frameworks can identify shared principles, particularly around representation and generalization.


Some core questions of interest include:

- What structural correspondences hold between discrete symbolic systems and continuous learned representations?
- Can category-theoretic methods characterize abstraction substrate-neutrally?
- How do we measure whether formal models are tracking something cognitively real?


### Category-theoretic semantics

**Formal semantics** analyzes language meaning using mathematical structures and logical models, which are categorized as either **extensional** (meaning is derived from observable realities), or **intensional** (meaning depends on context including modalities like necessity and possibility). These frameworks help map linguistic expressions to reality. 

<img src="/assets/fsint.PNG" alt="Intensional model" style="float: left; margin-right: 20px; width: 340px;">

In contrast, **distributional semantics** (the underlying linguistics of modern machine language understanding) posits that meaning arises from usage context, aligned with Firth’s principle: ‘You shall know a word by the company it keeps’. This approach models word meanings as vectors in a high-dimensional space, where semantic relationships are defined by proximity and interaction, often represented on a geodesically convex Riemannian manifold, allowing for semantic analysis through various interpolative methods.

One may wonder: to what extent do formal semantics and distributional semantics relate as computational processes for understanding natural language? To what extent does one formal structure relate to the other?

This is a natural question in the domain of **category theory**, which is, itself, the study of structures and relationships by abstraction; that is, category theory is the study of structures by abstracting them and their relationships. It is the natural tool of choice, then, with which to study structures; the structures in which we are interested here are those which represent meaning in natural language.

<img src="/assets/modint.PNG" alt="Category of formal models" style="float: right; margin-left: 20px; width: 340px;">

By using category theory as the connection between formal semantics and distributional semantics, I am exploring how we may integrate the two otherwise disparate paradigms and elucidate transformations that preserve structure and semantic information between them. 

My work here has three main objectives:

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

Much of machine learning (neural networks, in particular) is a wild west, built from black box _ad hoc_ models. Though empirically verifiable, there is a scarcity of a principled and mathematically unified foundation. Three attractive approaches to equip neural networks with grounded theoretical foundations follow from: Geometric Deep Learning; Effective Deep Learning Theory; Categorical Deep Learning.

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

**Categorical Deep Learning** [(Gavranović, et al., 2024)](https://arxiv.org/abs/2402.15332) give a general-purpose framework for specifying and studying deep learning architectures through the framework of category theory. In particular, Geometric Deep Learning is, in fact, contained within such a categorical framework; furthermore, Categorical Deep Learning establishes a common, unifying framework for how category theory can be applied to AI. Something must be said as well for the aesthetic, the _beauty_, of mathematics, and it is my opinion that category theory has that in spades; application to deep learning brings in a consistent beauty toa  computer science otherwise hindered by _ad hoc_ characterizations.

Each of these perspectives endeavor to derive, explain, and provide methods to construct new types of problem-specific inductive biases. Geometric Deep Learning serves two purposes: first, to provide a common mathematical framework to derive the most successful neural network architectures, and second, give a constructive procedure to build future architectures in a principled way. Effective Deep Learning Theory argues for a general theory of deep learning derived from first principles, in which the guiding philosophy is that nearly-simple phenomena in practice should correspond to nearly-simple effective theories. Categorical Deep Learning seeks to give a general-purpose framework for deep learning architectures that otherwise subsumes the afforementioned theories.
-->
