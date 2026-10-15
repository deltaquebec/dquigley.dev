---
layout: post
title: >-
  Hilbert's apple pie
---

_If you wish to make an apple pie from scratch, you must first invent the universe._

&mdash;Carl Sagan, _Cosmos_ 

<p align="center"> 
<img src="/assets/hilbertsapplepie/hilbert2.png" alt="David Hilbert and Carl Sagan">
</p>

A formal model equates a target, be it a cat or a planet, with a piece of machinery, such as a set or an orbit. With the machinery come assumptions, a tradition, a community's idea of a result, a standard of proof, some tacit claim about the target. A course that hands over only the machinery hands over all of these unexamined. *Hilbert's apple pie* is the name for a teaching philosophy and academic discipline that emphasizes these aspects as important as the machinery.

Step-by-step, the philosophy builds structure one assumption at a time, and exhibits a countermodel for each assumption; it tests each conclusion by changing the formalism: a conclusion that survives every adequate characterization of its target is a candidate fact about the target, and a conclusion that reverses belongs to the characterization. And now the part most often left aside: it gives the history and context of each structure the same same importance as its axioms; a student who knows _why_ an axiom took its form can judge _what_ the axiom commits them to.

## Cat

Consider a cat. Formal semantics treats a cat as an element of a set, the extension of the predicate CAT, and inherits the logic of Frege, Tarski, and Montague. Distributional semantics treats a cat as a vector built from the contexts in which the word occurs, and inherits linear algebra along with the empiricist linguistics of Firth and Harris. The two formalisms disagree about what kind of thing a cat is.

They also disagree about what counts as progress. In formal semantics, a result is a proof, a definition, or a counterexample, and it appears in journals on a (relatively) slow cadence. In distributional and neural work, a result is a benchmark number, and it appears at fast conferences. Evaluation means predicting speakers' judgments in one community, and beating a baseline in the other. An older dispute about minds, which Fodor and Pylyshyn pressed against the connectionists: whether cognition runs discrete symbolic rules or computes with continuous distributed representations. A student trained in one formalism joins its community and absorbs its answers to all of these questions, usually without noticing the choice, and (in extreme cases) disregards the rest. This results in an accidental tribalism.

## Structure

Let us meet that disagreement first with structure. The symmetric group on three letters can be presented as permutations, as the symmetries of a triangle, or as a set of matrices; the presentations differ, while the structure stays the same. A structuralist reading takes the object to be what survives the change of presentation. Mary Morgan and Margaret Morrison describe models as mediators between theory and world, and we read that mediation as sharing specified relations with the target. Commitments can then be stated without deciding which presentation is the right one.

Two characterizations of quantifiers with identical truth conditions order the quantifiers' complexity in opposite ways (paper forthcoming). The ordering belongs to the characterizations, until evidence about speakers decides between them.

Rigor, on this view, is a practice. Jeb Willenbring's remark that _notation is not rigor_ applies to modern representations: a similarity score, a cluster, or a direction said to encode a property can be written in exact notation, and still be an artifact of high-dimensional geometry. Random points in high dimension already concentrate their distances, so that the nearest and farthest neighbors draw close together. A claim of structure in such a space earns belief by beating that structureless baseline. Axioms in the apple pie meet the same standard, since each assumption faces a countermodel built to break it.

## History

History explains why an axiom has the form it has; I do not want this to fall to the side, so the apple pie treats it as part of the argument. Formalization even tends to arrive after practice; Kolmogorov axiomatized probability in 1933, nearly three centuries after Pascal and Fermat computed with chances; Von Neumann gave quantum mechanics its Hilbert-space axioms in 1932, after a quarter century of quantum practice. Gauss's survey of Hanover led to his theory of curved surfaces, which Riemann generalized into the geometry of curved space. In each case, the axioms disciplined what practitioners could claim, the practice in place.

The logical order of a course, therefore, often inverts the order of discovery. A course that presents axioms first hides the problems that forced them, and so loses grounded, historical, human context. A student who sees the problem can tell which features of an axiom answer it and which are convention. Galois worked with finite sets of permutations closed under composition, where identity and inverses follow from closure; the axioms a modern course adds one at a time were consequences in his setting.

Intelligence may now stand where probability stood before Kolmogorov: rich in practice, unsettled in its axioms; its object is contested and moving, as probability's was not. A foundational project for it will likely resemble Bourbaki's revisable organization more than a final Hilbertian system.

## Origin

What motivated this treatment? I began with a question that only received a recipe for an answer. As an undergraduate, I recall frustration at the Lagrangian of classical mechanics, taken as god-given fact that it is kinetic energy minus potential energy, and why making the action stationary yields the motion. The reply was that it works.

Every concern above was already present in that reply. The action principle, the state space, and smoothness were assumed. The name carries Lagrange's 1788 treatise, with Maupertuis and Euler before it and Hamilton after. The classroom rewarded computing the motion, and treated the question of formulation as out of bounds. The principle requires a stationary action, which may be a saddle instead of a minimum, and the Euler–Lagrange equation states only a necessary condition; whether a particle in some sense surveys every path was a question about the world itself.

Part of the answer, it turns out, lies in geometry. The Legendre transform carries the Lagrangian to a Hamiltonian on a symplectic manifold, where the motion is the flow of a single vector field; that geometry explains the form of the dynamics. The stationarity of the action finds its explanation in quantum mechanics: Feynman's sum over paths weights every path by a phase, and paths near a stationary action reinforce one another, so the classical path dominates when the action is large compared with Planck's constant.

Hilbert's apple pie is the project that grew from that question. Its name pairs Hilbert's foundational impulse, which he applied to the foundations of geometry, with Carl Sagan's remark, which becomes a question to ask of any formal system: to appreciate one of its features, what must we build first? For the Lagrangian, the list runs from smooth manifolds and the Legendre transform to Lagrange's treatise and the classroom habit of setting the question aside.

## Philosophy

The philosophy rests on the conviction that _a formalism is too interesting to leave as bare formalism_. Choosing a formalism for a target brings questions with it, and so the apple pie answers them at every structure.

| Point | Inquiry | 
| --- | --- | 
| Commitments | What do we assume once we choose the formalism? | 
| History | Whose tradition do we inherit? | 
| Culture | Which community's idea of a result comes with it? |
| Rigor | What can we establish, as against assert? | 
| Plausibility | What do we tacitly claim about the target? | 

In teaching, the philosophy is stating the structure beneath each recipe; in conversation, it means asking which of these questions a disagreement concerns; in research, a claim that one thing models another comes with a statement of to what the claim commits. Certainly, the questions blur for young formalisms: the transformer layer's tradition is under a decade old, and coincides with the community that uses it, so its history and its culture receive perhaps a lighter exposition, though this is hardly grounds for more or less importance for it.


## Precedent

The search for human understanding inside a formalism has a precedent in the Mathematical Folklore seminar that Govind Menon and Akshay Venkatesh led at the Institute for Advanced Study in 2025–26. Govind now runs it for seniors at Brown. The seminar reads the primary texts that originated concepts central to mathematics today. Venkatesh described its motive as reviving mathematics as a humanistic discipline, and Govind's announcement for Brown is a kind of poem in five words: "Mathematics is about human understanding".

The Institute seminar met an inversion of the kind the apple pie studies. Newton reached the inverse-square law from Kepler's data, whereas textbooks derive the orbits from the law. Participants reported that Newton's geometric argument let them sense the physical situation that modern treatments process away. Reading the primary text recovers the practice that a later formalization put in order.

Govind's seminar sets no limits on how students use AI, and relies on discussion to ground the use. If models keep improving at computation, the calculations in a course become available on request. What remains for the student is the apple pie: history; context; judgment of which conclusions survive a change of formalism. A model will answer those questions as fluently as it computes, with errors in the same register, so primary texts and countermodels are invaluable.

Govind frames the seminar's larger question as what a university should keep if AI disrupts it. The apple pie is a practice: keep the history and context of each structure alongside its axioms, since a computation omits the reasons the structure exists at all.


## Sources

- Govind Menon, *Scaling Mathematical Folklore*, announcement for APMA 1970, Brown University, Fall 2026
- Allyn Jackson, [Encountering the Roots of Mathematics](https://www.ias.edu/ideas/encountering-roots-mathematics), *The Institute Letter*, Spring/Summer 2026
- Mary S. Morgan and Margaret Morrison, eds., *Models as Mediators*, Cambridge University Press, 1999
