---
layout: page
title: Research Interests
permalink: /research/
---

My research develops mathematical frameworks for meaning, reasoning, and abstraction, with applications across language, cognition, calendars, typography, and the historical record of intellectual craft. The goal in each case is to make differences between traditions or intuitions visible, such that formalisms can be combined or compared, rather than treated as rivals, or trusted by default.
<!--- 

Three themes of interest follow:

1. Reasoning, abstraction, and the representations they require. Analogy and abstraction; math NLI and inverse formalization; phase semantics; semantic-space geometry.
2. Time, language, and the structures that organize them. Calendars; TAME.
3. Craft and the externalization of tacit knowledge. Typography; semiotics and writing systems.

Among the questions that organize what follows: at what levels does reasoning and abstraction take place, and where do errors enter, in machines, adults, and children? How can we reason over prose-language mathematics, and how lossy is the translation between mathematics and language? What semantics are encoded in complex-valued representations, and is interference a meaningful semantic process? What is semantic space, what are its geometric and topological properties, and is real Euclidean space the right ambient at all? What history of mathematics, culture, art, and science resides in the calendar? How should we study representations of time? What makes for beautiful design, and what does the historical record of design conventions reveal about how aesthetic judgment and cognitive function constrain one another? How do tactile signs like writing relate to language and to the history of cognitive tools?

-->
## Reasoning, abstraction, and representations

### Analogy and abstraction

<img src="/assets/research/analogy.png" alt="Tufte canon" style="float: left; margin-right: 20px; width: 240px;">

**Analogy** is the recognition that two situations share a structural relation despite differing in surface content, and the transfer of inference from one to the other across that recognized relation. Its minimal form is the four-term proportion *S* : *S'* :: *T* : *T'*, which asserts that whatever relation holds between *S* and *S'* holds also between *T* and *T'*, and licenses inferring *T'* from *S*, *S'*, *T*. More generally, an analogy is a partial correspondence between two structured representations under which selected relations are preserved; the partiality matters, since perfect correspondence is identity rather than analogy, and the structure-preservation is selective, since not every relation in the source has a counterpart in the target.

**Abstraction** is the operation of moving from a particular to a description that holds across a class of particulars, typically by suppressing features that distinguish members of the class and retaining features they share. The retained features need not be intrinsic: an abstraction can pick out a relation, a role, a pattern of variation, or a position in a larger structure, none of which is a property of any single member taken alone. Abstractions are evaluated by what they let one do (predict, infer, classify, transfer) rather than by fidelity to any one instance; an abstraction that retains too much fails to generalize, and one that retains too little fails to discriminate.

The two are related, but distinct. Abstraction produces the descriptions over which analogy operates; analogy is the transfer move across two such descriptions when their structures align. Analogical reasoning is, therefore, doubly underdetermined: by which abstractions of the source and target are taken as the basis for comparison, and by which sub-structure of those abstractions is held to correspond. 

My colleagues and I have a two-pronged interest in formal analogical reasoning. 

1. A *relational calculus* over a single pairing-closed domain *D*, in which every (*a*, *b*) ∈ *D* × *D* is itself an element of *D*; all relations are endorelations on *D*, and ⊤ = *D* × *D* and ⊥ = ∅ live inside the object language rather than at the meta-level, sidestepping the multi-sorted treatment that schemes such as Haydon-Soboci\'nski require. It is both a logic for reasoning about how objects relate, and a vehicle for exploring relational logic in its own right.
2. A *generative algebra* over strings, generalizing the notion of a block as a maximal arithmetic progression over the alphabet at step *d* (so "abcd" is a single AP-block at *d* = +1, and repeated-character blocks are the special case *d* = 0); segmentation becomes a shortest-path problem over a directed acyclic graph of admissible AP substrings, with a cost function selecting the segmentation that minimizes transformation complexity.

<p align="center"> 
<img src="/assets/research/scope.png" alt="Example of character- and block-level scope ambiguity in string analogy">
</p>

This algebra-and-logic pair forms a candidate neurosymbolic architecture according to the following claims:

1. parse-levels as generator output, rather than ontological strata;
2. joint optimization of parse, transformation, and correspondence;
3. correspondence as operation conjugation in the functorial sense.

### Math NLI and inverse problem of formalization

**Natural-language inference for mathematics** is the task of deciding, for a mathematical premise and a hypothetical conclusion stated in ordinary mathematical prose, whether the latter follows from the former. Consider "ABCD is a rhombus whose diagonals have equal length" entailing "ABCD is a square." The hypothesis follows, but not by subtype substitution alone; it requires a plane-geometry theorem. A weaker hypothesis ("ABCD is a parallelogram whose diagonals have equal length") does follow by subtype substitution. Two different kinds of inference step reach two different conclusions from the same premise. A trustworthy NLI system should tell them apart and label which step was responsible for which conclusion.

<p align="center"> 
<img src="/assets/research/hypothesis.png" alt="Example of alternative hypotheses for inference task">
</p>

I am interested in the natural-logic tradition (HyNLI, MonaLog/NeuroLog, LangPro), which derives entailments by tracking monotonicity and polarity through syntactic structure without translating to first-order logic. Mathematical prose exceeds the fragment these tools handle; three extensions are needed. Context threading carries polarity tags for terms whose definitions appear paragraphs away. Typed preorder quantifiers handle nested alternation over typed subdomains (the ubiquitous "for every continuous *f* there exists *δ*..."). Symbolic delegation hands formula fragments off to a formula handler and re-embeds the result in the polarity structure. Each step in an output derivation is labeled by its source; trustworthiness, then, becomes a property of the labeling, rather than a property of the proof.

<p align="center"> 
<img src="/assets/research/nli.png" alt="Example of inference in math prose language">
</p>

A parallel thread is what I call the **inverse problem of formalization**: given a formal proof in Lean, produce the mathematical prose a human would write. Prior work addresses this direction with bespoke LLM-based translators; each is one-directional and carries no representation reusable by the other direction. 

<p align="center"> 
<img src="/assets/research/inverse.png" alt="Example of bidirectional inverse problem of formalization">
</p>

I am interested in a bidirectional interface with a shared representation: the output of the natural-logic engines above serves as the intermediate structure between Lean tactics and mathematical English. Round-trip consistency becomes a specification rather than a coincidence, and the machinery that drives inference in one direction drives translation in the other. A companion database, MathTermsDB, extending the MathGloss line, supplies the terminological and theorem-level knowledge the inference engines consult.

### Phase semantics and neural architectures

Large language models operate over real-valued vector representations, and every architectural mechanism (attention, normalization, softmax, gradient flow) was derived on that assumption. If representations are lifted to complex-valued or quantum-state substrates, every such mechanism needs re-derivation. This is the core of the **CBIRD project** (complex-valued BERT and its extensions): work out what each component becomes, what new design choices appear, what does not carry over, and what, if any, semantics reside in the complex space.

<p align="center"> 
<img src="/assets/research/cbird.png" alt="Example of real, complex, and quantum Hilbert spaces">
</p>

An interesting case is *attention*. In real BERT, *q*ᵀ*k* is a scalar and softmax applies directly. In a complex-valued network, *q*†*k* ∈ ℂ, and softmax requires a real number; a ℂ→ℝ map must be chosen, and the choice is material. The Born rule (|c|²) discards phase; magnitude (|c|) discards phase differently; a phase-preserving construction keeps phase and admits interference between attention contributions. Normalization splits similarly: RMSNorm preserves the argument arg(*x_j*) of each component, while LayerNorm subtracts a token-dependent complex mean and scrambles it. A falsifiable prediction follows: if meaning is carried in absolute phase, phase-preserving attention must compose with RMSNorm, not LayerNorm, or the normalizer destroys exactly what attention uses.

| **Feature** | **Real** | **Complex** | **Quantum** |
| --- | --- | --- | --- |
| **object** | $x \in \mathbb{R}$ | $z = r e^{i\varphi} \in \mathbb{C}$ | $\vert\psi\rangle \in \mathcal{H}$, $\Vert\psi\Vert=1$ |
| **degrees of freedom** | 1 per dim | 2 per dim (magnitude, phase) | $2(2^n - 1)$ real for $n$ qubits |
| **inner product** | $x^\top y \in \mathbb{R}$ | $q^\dagger k \in \mathbb{C}$ | $\langle\phi\vert\psi\rangle \in \mathbb{C}$ |
| **output** | softmax | softmax after $\mathbb{C} \to \mathbb{R}$ | Born rule $\vert\langle\phi\vert\psi\rangle\vert^2$ |
| **gradient** | $\partial / \partial x$ | Wirtinger $\partial_z,\,\partial_{\bar z}$ | *evolution:* unitary $U\vert\psi\rangle$ |

**Table: Comparison and contrasting of features across real space, complex space, and quantum Hilbert space.**

My contribution is the mathematical work: Wirtinger gradients for each re-derived component; information-flow audits tracking where phase enters and exits the computation; identification of the singularities the complex extensions introduce; architectural recommendations grounded in the derivations rather than in empirical search. The broader frame is three substrates ( real, complex, quantum) sharing the functional role of a neural representation, but differing in object type, degrees of freedom, inner product, and what counts as an observable output. They differ in which mechanisms can coherently exist at all.

### Geometry and topology of semantic space

**Word embeddings** are mathematical objects by construction: finite point clouds in $\mathbb{R}^{300}$ with a natural metric, a definite intrinsic dimension, definite curvature, a definite $k$-nearest-neighbor graph. These properties exist whether or not anyone measures them; the question is what attitude to take toward them. Folk geometry imports two- and three-dimensional intuitions (clusters, directions) to high-dimensional sets, where they rarely survive contact with calibrated estimators. Task evaluation, the engineering default, leaves the object itself uncharacterized. I am interested in the following: treat the point cloud as the metric measure space it is, submit candidate descriptions to falsifiable tests, and accept that several familiar verbal characterizations may fail. That is: what is the semantic space as a mathematical object?

<p align="center"> 
<img src="/assets/research/geometrytopologysemantics.png" alt="Cartoon model of semantic space" width="125%">
</p>


The methodological complication is that geometric statistics on high-dimensional point clouds return non-trivial values on essentially any input, including a Gaussian whose covariance matches the embedding's own. Distance concentration, $k$NN hubness, anisotropy-driven graph structure: each produces qualitative signatures in the range one would intuitively read as evidence of specific embedding properties. The resulting characterization is of a low-dimensional anisotropic manifold with diffuse positive curvature throughout, hosting a small fraction of distributional artifacts that are not where the geometric signal lives. This is a claim about two specific computational artifacts, not about meaning, language, or cognition.

Any geometric statistic on a high-dimensional point cloud is susceptible to the same class of artifacts (distance concentration, anisotropy-driven hubness, rank-deficient covariance), so the matched-null framework ports directly. The static-embedding case is the cleanest first application. Transformer-derived contextual representations are context-dependent, layer-specific, and trained against objectives unlike static ones; whether the diffuse-manifold picture survives, breaks down, or stratifies across layers is an open question worth asking. Other classes of high-dimensional representation (image embeddings, gene-expression vectors, neural activation patterns) face the same calibration problem when claims about "cluster structure" or "tree-like organization" are at stake, and the matched-null framework should travel.

<img src="/assets/hyperbolic.png" alt="Hyperbolic space" style="float: left; margin-right: 20px; width: 240px;">

A separate line of work asks not whether to test embedding geometry under discipline, but which geometry the embeddings should live in. The motivation for hyperbolic embeddings, for example, is that linguistic structure has hierarchical aspects (knowledge graphs, taxonomies, syntactic parse trees, sense lattices), and a space with negative curvature accommodates exponential branching at constant volume in a way Euclidean space does not. The matched-null testing reported here partially updates the motivation: for the static distributional embeddings I examined, the tree-likeness signal (low Gromov $\delta$) tracks the covariance null, and the local curvature is positive throughout. Hyperbolic embedding is the wrong tool for those particular point clouds; that result is about what GloVe and Word2Vec specifically contain, not about whether hyperbolic geometry is appropriate for representing objects that are hierarchical by construction. Parse trees, knowledge graphs, and taxonomic ontologies remain natural targets; so do contextual representations, whose empirical geometry has not been tested under the same discipline and could stratify across layers in ways the static case does not predict. 

<img src="/assets/padic.png" alt="3-adic space" style="float: right; margin-left: 20px; width: 240px;">

A still less explored direction is $p$-adic representation: the metric is ultrametric, every triangle is isosceles, and hierarchical containment is a structural property of the geometry rather than something one optimizes for. The matched-null framework can follow the geometry: draws from an isotropic wrapped Gaussian on hyperbolic space, the corresponding analog on a $p$-adic tree, against which the observed structure of the actual representation can be measured. The discipline travels; only the ambient changes.

## Time and language

### Calendars and the tropical year

Calendar scholarship is shaped by an astronomical bias. Standard definitions in astronomy, computational calendrics, and history of science place astronomical anchoring at the constitutive center, which excludes systems most observers would still call calendars: the Balinese Pawukon; the Maya Long Count; the ISO 8601 week date; the Mesopotamian schematic calendar that Old Babylonian astronomers themselves used for their astronomical work. I am interested in the broader conception of timekeeping, of calendars from both sides of this divide. For the calendars that do commit to astronomical referents, I am interested in pushing the underlying mathematics as far as it will go; for the wider class, I am interested in working out what a calendar must do structurally, independent of the sky.


A solar calendar aligns the civil year with the tropical year, but the tropical year itself depends on which point on the ecliptic is chosen as the reference. The interval between successive passages of the sun through a given ecliptic longitude *L* is a function of *L*, denoted *Y*(*L*); averaged over many crossings and a long baseline, it is a precise scalar. I compute *Y*(*L*) from Meeus's low-precision solar polynomial over J2000 ± 1500 years, using a wrap-aware modified Newton iteration that converges to 10⁻⁹ degrees per crossing. The resulting *Y*(*L*) is near-sinusoidal with roughly 98 seconds peak-to-peak amplitude, with extrema approximately 17° past the solstices, at the longitudes Earth crosses near perihelion and aphelion. Agreement with Meeus's 2002 tabulated values is within 2.2 seconds over the full domain.

<img src="/assets/research/epoch_overlay.png" alt="Overlay of tropical year length along ecliptic longitude over several epochs">

*Y*(*L*) gives a scalar-valued diagnostic for arithmetic calendars: the crossing difference. For any calendar that fixes a reference longitude to define its mean year, the difference between that calendar's mean year and *Y* evaluated at the fixed longitude measures how accurately the calendar tracks the sun's return to its chosen reference. The Gregorian calendar scores 17.7 seconds; the Milanković (reformed Eastern Orthodox) calendar scores 13.4 seconds, the best of any arithmetic calendar I measured; the Bahá'í calendar pre-2015 scores 15.6 seconds; Birashk's Iranian proposal scores 15.9 seconds; Khayyām's historical proposal scores approximately 15 seconds, with the caveat that polynomial extrapolation over a millennium carries ±2 seconds of uncertainty at that horizon. Observational calendars (the present Iranian Solar Hijrī, the Bahá'í calendar post-2015, the French Republican) have no fixed scalar to diagnose; they commit to observed astronomical events directly. A floor sets the limit of the whole exercise: no arithmetic calendar can score below roughly one second on the crossing difference, because secular drift in *Y* itself yields about 57,000 years of alignment before the reference longitude has shifted enough to require renegotiation. The diagnostic discriminates among existing calendars without making any of them correct in an absolute sense.

<img src="/assets/research/crossings_multi.png" alt="Overlay of tropical year length along ecliptic longitude over several specific historical epochs">

Calendars are human artifacts whose alignment with the heavens, when present at all, is only one commitment among several, made for particular reasons by particular communities. I am interested in this relationship between the arithmetic case and otherwise what makes it conceptually portable to everywhere else.

### Tense, aspect, mood, evidentiality

Natural languages grammaticalize at least four distinct dimensions of an asserted situation beyond its propositional content: 

1. *time* (deictic location relative to speech time or a contextually established reference time);
2. *aspect* (the situation's internal temporal structure: perfective, imperfective, perfect, progressive, habitual, iterative);
3. *mood* (the speaker's stance on the proposition's realization: indicative, subjunctive, conditional, jussive, optative);
4. *evidentiality* (the speaker's information source: direct perception, inference, hearsay, assumption).

What pedagogical grammars call a *tense* is, then, most naturally read as a form occupying a region of this four-dimensional space, as opposed to a primitive semantic category; a region may be a single cell or many, contiguous or not, and the cell-coverage profile of a form is typically the substantive content of that form's grammatical description. 

<p align="center"> 
<img src="/assets/research/tame.png" alt="Tense as composite of time, aspect, mood, and evidentiality">
</p>

I follow the terminological move of reserving *time* for the dimension Comrie called tense and *tense* for the composite forms that live in the space, which cleans up the bulk of the inherited confusion between *perfect* (anteriority with current relevance, in Comrie's sense) and *perfective* (a bounded-whole viewpoint); the two are dimensionally orthogonal but routinely conflated by names inherited from Latin grammar. My interest in this area takes a largely descriptively neutral position, at this time, on the major open disputes (the time-or-aspect status of Biblical Hebrew, the polysemy-versus-underspecification analysis of Semitic forms, the temporal status of the Greek verb, the morphological status of Slavic perfectivity, the categorial status of evidentiality with respect to epistemic modality). I am interested in the formal semantics, typology, and diachrony of development of tense, in this sense.

| Concept | Latin | Greek | Cl. Arabic / Bibl. Hebrew | Akkadian (von Soden) |
|---|---|---|---|---|
| **past perfective**<br>*"he wrote"* | perfect (*laudāvit*) | aorist (*égrapse*) | *kataba* / *kātab* [S] | preterite (*iprus*) |
| **past imperfective**<br>*"he was writing"* | imperfect (*laudābat*) | imperfect (*égraphe*) | *kāna ya-ktubu* (periphrasis) [C] | *iparras* + past context |
| **anterior at present**<br>*"he has written"* | perfect (*laudāvit*)<br>(same form → polysemy) | perfect (*gégraphe*) | *kataba* [S]<br>(same form as above) | perfect (*iptaras*) |
| **anterior at past**<br>*"he had written"* | pluperfect (*laudāverat*) | pluperfect (*egegráphei*) | *kataba* [S]<br>(same form again) | *iprus* or *iptaras* + context |
| **habitual present**<br>*"he writes (routinely)"* | present (*laudat*) | present (*gráphei*) | *ya-ktubu* / *yiktob* [P] | durative-present (*iparras*) |
| **present ongoing**<br>*"he is writing now"* | present (no distinction) | present (no distinction) | *ya-ktubu* [P]<br>(no distinction) | *iparras* (no distinction) |
| **future**<br>*"he will write"* | future (*laudābit*) | future (*grápsei*) | *ya-ktubu* [P]<br>(same form again) | *iparras* (no distinction) |

**Table: Cross-tradition terminology.** [S] = Semitic suffix conjugation; [P] = Semitic prefix conjugation (was teal); [C] = periphrastic/compound construction (was amber). The Latin *laudāvit* row repeats because the form is itself polysemous between past perfective and anterior at present.

I care greatly for the pedagogy of this material as much as its analysis. The terminological disarray is not only a research problem, but a teaching problem: students of Arabic, Hebrew, and Akkadian are routinely handed labels (perfect, imperfect, aorist, preterite) that carry framework-specific commitments incompatible with the morphological systems being described, and the conflation of perfect with perfective in particular costs learners and instructors a great deal of unnecessary confusion. The broader commitment is that a properly organized exposition is as much in order as a formal or typological interest of a contested area, which can substitute for many years of accumulated terminological apprenticeship; this matters more in cross-linguistic morphology than in most areas, because the conventions are particularly entrenched and particularly local.

## Craft and externalization of tacit knowledge

### Historical typography

<img src="/assets/research/canongraaf.png" alt="Van de Graaf canon" style="float: left; margin-right: 20px; width: 240px;">

Historical typographic design codified the relation between page and text block as proportioning systems intended to survive changes in page size, binding, or paper stock: Van de Graaf divides the page into ninths; Villard de Honnecourt gives a family parameterized by integer *N*; Tufte's wide outer margin is reserved for marginalia; the modular grid generalizes the lot. 

<img src="/assets/research/canonhonnecourt.png" alt="Villard de Honnecourt canon" style="float: right; margin-left: 20px; width: 240px;">


A **page canon**, formalized, is a scale-equivariant map from a declared frame *W* × *H* to a text-block-and-margins solution; under two stronger invariances (dimensional separability and aspect preservation), the canons nest into three regions, and the four margin modes decompose into two independent binary choices whose side-swap action induces a usable equivalence among canons. The grid canon subsumes the classical families exactly or approximately, with the exact-versus-approximate boundary tracking the invariance class.

<img src="/assets/research/canontufte.png" alt="Tufte canon" style="float: right; margin-left: 20px; width: 240px;">

The framework has two executable instantiations. [`page-canons.sty`](https://www.ctan.org/pkg/page-canons) is a LaTeX package implementing the major historical canons under a common interface, with an in-house margin-note and sidenote system with PDF/UA-2 semantic tagging. 

<img src="/assets/research/canonatelier.png" alt="Canon des Ateliers canon" style="float: left; margin-right: 20px; width: 240px;">

A companion Python tool, `page_canon.py`, with a wxPython GUI, handles the design-time side: computing margins for named sizes, custom dimensions, or width-plus-ratio input; handling gutter in two well-defined modes (geometry-like shift versus strict KOMA satzspiegel); emitting LaTeX `geometry` snippets in any unit; rendering recto/verso diagrams with marginpar zones. Both extend naturally to a three-dimensional depth axis for books conceived as volumes rather than as open spreads.

<img src="/assets/research/canongrid.png" alt="Grid canon" style="float: right; margin-left: 20px; width: 240px;">

Beyond the formal canon work, my typographic interests are art-historical and cognitive at once: the history of design, and of book design specifically; decorated initials and the medieval grammar of page hierarchy; paragraph-level conventions like *per cola et commata*, in which sense-units are broken across lines to cue parsing; the cognitive-science work on how such conventions guide reading. The formalism is one place where these get made computable; the interests themselves are older than the formalism.


### Semiotics and writing systems

I also have broader interests in semiotics, writing systems, and agency theory: classical sign theories (Saussure, Peirce, Hjelmslev, Morris, Eco, Barthes, Kress) and the structural moves that let them be compared; writing systems as typological objects (logographies, syllabaries, alphabets, abjads, abugidas, alphasyllabaries) and the grammatological tradition that situates them (Derrida); theories of distributed and material agency (Gell, Bourdieu, Latour, Giddens).

<p align="center"> 
<img src="/assets/research/semiots.png" alt="Tabled comparison of verious semiotics">
</p>

**Semiotics** studies how signs mean: the correlation of form and content, the codes that license those correlations, and the production, uptake, and effects of signs in situated use. The field carries multiple incompatible foundational vocabularies (Saussure's dyadic signifier-signified, Peirce's triadic representamen-object-interpretant, Hjelmslev's expression-content stratification, Morris's syntax-semantics-pragmatics partition, Eco's codes and subcodes, Barthes's denotation-connotation-myth layering, Kress's multimodal design and interest) that continue to bear theoretical weight, despite resisting consolidation. The questions I follow are the comparative-foundational one of how these vocabularies relate and where they can be combined, and the descriptive-pragmatic one of what semiotics captures well in situated practice (classrooms, interfaces, archives, scientific notation).

<p align="center"> 
<img src="/assets/research/writ.png" alt="Example mapping of language sign to written sign">
</p>

**Writing systems** are graphic systems for representing language. The typological core (logographies, syllabaries, alphabets, abjads, abugidas, alphasyllabaries) classifies systems by which linguistic stratum the graphic units track (semantic, syllabic, segmental, consonantal); no attested system is pure (Chinese has phonetic components, English has morphographic spellings, Korean Hangul is segmental in inventory and syllabic in arrangement). Beyond typology are questions about what writing does to language (Derrida's grammatology, Goody's literacy thesis, Olson's restructuring claim), what writing affords that speech does not (lists, tables, equations, parallel scanning, persistence across time), how writing and its development relate to the capacity to act and how it is constituted in relations among persons, embodied dispositions, material artifacts, and institutional fields, and the cognitive consequences of script structure for reading.



<!---
**Agency theory** asks where the capacity to act resides and how it is constituted. Major lines diverge on the answer: Bourdieu locates it in durable embodied dispositions (habitus) generating practice within a structured field of positions; Giddens treats structure as both medium and outcome of action, reproduced through use (structuration); Gell extends it to material objects (art objects, prototypes, indexes) participating as nodes in distributed networks rather than as inert vehicles; Latour's actor-network theory treats humans and non-humans symmetrically as actants in heterogeneous assemblages. The convergence is a single critique: agency is constituted in relations among persons, embodied dispositions, material artifacts, and institutional fields.


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
