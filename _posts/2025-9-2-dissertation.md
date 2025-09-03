---
layout: post
title: My dissertation: or, what is a cat?
---

_Turn right at the corner of Axiom_

_and Postulate; follow Paradox Street._

_premise; it is left of meaning and right_

_of form. Rest a while in the shade of the_

_syntax tree; cross over somewhere north of_

_reason, away south of intuition._

_If you find a garden with a ladder_

_leaning against the sky, you’ve gone too far;_

_turn back. Pass by the shop with tangled clocks,_

_And the cafe serving lemma-shaped sweets._

_Look for the door with theorems etched in glass;_

_On either side are proofs in faded black;_

_A brass bell chimes softly as you enter._

_The scent of fresh ink mingles with notes of_

_tea and coffee, while endless tapes wander_

_through the turning dreams of ticking machines._

_A furious sleeping cat is awake_

_on the sill; if it meows, then truth is_

_false, and up is down; circles become squares,_

_but if (and only if) it also kneads._

_Have a seat beneath the window where the_

_afternoon falls; catch it! and see whether_

_shadows are stable. Order a cup of_

_incompleteness; or, perhaps, if you are careful,_

_a sip of infinite regress. Now close your eyes,_

_and stay a while with me._

_The Time-and-Place; or, a Procrastination_, Daniel Quigley (2024)

I successfully defended my dissertation on May 2, 2025. My dissertation, titled _Neurosymbolic Semantics_, is a work in mathematical linguistics; the story goes as follows: you and I have access to discrete and continuous representations of meaning, of reasoning; we need different levels of representation to cover a range of cognitive phenomena; these two kinds of semantics, we claim, are accessible and compatible, and this compatibility can be characterized as neurosymbolic.

I am thankful for my community of advisors, colleagues, and friends across domains for their support, interest, patience, and encouragement. Interdisciplinary science is a unique balance of communication and coordination, not least of all for keeping everyone on the same page! Two linguists, a mathematician, a dog, and a philosopher (and a computer scientist, by honorable mention), whom I often referred to as “the Avengers”, saw my work through with willingness, interest, and excitement to engage in such interdisciplinary science, for which I am thankful.

<p align="center"> 
<img src="/assets/dissertation/committe.jpg" alt="The Avengers and the dissertator">
</p>

It has been an incredibly rewarding journey; thank you all for your support over the years! What follows here is my dissertation in brief. The full dissertation may be found here:

[Neurosymbolic semantics]([https://github.com/deltaquebec/sentiment_paradise_lost](https://minds.wisconsin.edu/handle/1793/95448))

## Introduction

Consider a cat. If one finds oneself wondering why one needs to consider what a cat is, then they have already begun to grasp the fundamental challenge of semantic representation. One might further wonder why it is we need to consider what a cat is in the first place; indeed, while one might think cats need no introduction, being among humanity’s most thoroughly documented companions (Driscoll et al., 2007; Driscoll et al., 2009), their semantic nature proves elusive. In other words, ‘What is a cat?’

<p align="center"> 
<img src="/assets/dissertation/cat.jpg" alt="A cat">
</p>

Consider two possible answers to ‘What is a cat?’ from two different models of meaning: formal semantics and distributional semantics. In formal semantics, our cat inhabits a well-ordered universe: a cat $c$ is a set-theoretic element from the set of all cats $C$; it is a member of a carefully constructed ontology that satisfies necessary and sufficient conditions for cat-ness, whatever that might be. In distributional semantics, ‘cat’ is instead represented as a vector in a high-dimensional space, its meaning encoded by its proximity
to ‘pet’, ‘pretentiousness’, ‘allergen’; it is a pattern of co-occurrence rather than a classical definition such that ‘cat’ is a summary of the contexts in which it occurs (Baroni et al., 2014). Interestingly, your meaning of ‘cat’ may have different associations in your space of meaning than my meaning of ‘cat’ does in my space of meanings, instead more closely encoded to ‘keyboard’, ‘alley’, or ‘warrior’; herein lies a paradox of meaning: it is simultaneously universal enough for us to communicate, yet personal enough to remain slightly out of sync.

Neither semantic representation claims absolute supremacy, as their utility derives entirely from their underlying assumptions about the nature of meaning. If no assumptions are made about the underlying data, then there is no basis to prefer one model over another; a model’s effectiveness depends entirely on the assumptions it makes about the data. This recalls the No-Free-Lunch Theorem of Wolpert (2002) and the famous aphorism of Box (1976) that ‘all models are wrong, but some are useful’, not least of all in the following way: a model is a simplification of reality; simplification is based on assumptions; assumptions fail in certain situations; no one model works best for all possible situations. Each framework makes distinct representational commitments: formal semantics assumes meaning can be captured in discrete symbolic units and logical operations; distributional semantics assumes that meaning emerges from patterns of co-occurrence, represented in a continuous space.

Precedents suggest, therefore, that human semantic processing operates at multiple levels of representation, at least of which in the following way: discrete symbolic systems capture the compositional structures that enable logical reasoning and systematic interpretation; continuous representations accommodate fluid, context-sensitive aspects of meaning that emerge from use. Rather than competing frameworks, these represent complementary aspects of human semantic processing. We have access to both, from which follows the main claim of this dissertation: two paradigms of semantics, (read, formal semantics and distributional semantics), are accessible and compatible, and this compatibility can be characterized as neurosymbolic.

And so we return to our cat. In formal terms, it remains a well-defined element of the set of all cats, satisfying necessary and sufficient conditions for cat-ness; in distributional terms, it inhabits a semantic neighborhood. Humans access both representations, in which we appreciate both the logical precision and relational associated experiences; the actual cat itself, however, likely remains indifferent to our deliberations.

## Research questions

This dissertation explores the structure of natural language semantics; at its core, it is an investigation into two otherwise orthogonal philosophies of language, and asks to what extent they are related: formal semantics and distributional semantics.

**Main question:** To what extent do formal semantics and distributional semantics relate as representations for understanding natural language?

Linguistics, mathematics, computer science, philosophy; this dissertation is interdisciplinary from the outset, and the main question may be formulated in any of the variations (the linguistic variation is exactly the main question):

1. to what extent do formal semantics and distributional semantics relate as representations for understanding natural language? (The linguistics variation);
2. to what extent do discrete formal systems relate to continuous systems? (The mathematics variation);
3. to what extent is one computational process interpretable within the other? (Thecomputer science variation);
4. to what extent do meanings derived from truth values and meanings derived from proximity functions relate? (The philosophy of language variation);
5. to what extent does the relationship between extensionality and intensionality of formal models relate to continuous functional representations? (The philosophy of mathematics variation).

These variations invite the cascading questions of additional inquiry:

1. to what extent is language processing by humans mathematical; language processing by machines, as a point of contrast, is exactly mathematical; how do these processes relate? (The linguistics, computer science, philosophy of language variations);
2. how is meaning representation accessible from one system in another? (The computer science variation);
3. to what extent is processing intensionality a discrete or continuous process? (The philosophy of language and philosophy of mathematics variations).

The variations above have a natural abstraction: to what extent does one structure (for representing and studying meaning) relate to the other? Or, more generally:

**Generalized main question:** To what extent does one structure relate to the other?

This is, therefore, a natural and fundamental question in the domain of category theory, which is, itself, the study of structures and relationships by abstraction; that is, category theory is the study of structures by abstracting them and their relationships. It is the natural tool of choice, then, with which to study structures; the structures in which we are interested here are those which represent (or, attempt to represent) meaning in natural language. The main idea is then captured in the following claim:

**Claim:** two paradigms of semantics, (formal semantics and distributional semantics), are accessible and compatible, and this compatibility can be characterized as neurosymbolic.

## Results

Five main results follow:

1. mathematical linguistics, computational linguistics, and natural language processing are framed as a three-way typology of distinct and identifiable fields according to competing goals and subject matter, with structured overlaps necessary for contextual coherence, scientific and engineering consistency, and interdisciplinary collaboration;
2. there exists a categorical framework that organizes formal models under a cohesive theoretical structure, such that semantic representation and processing of intensions remain modular and order-independent;
3. there exists structure-preserving homomorphisms between formal and distributional semantics; symbolic and sub-symbolic approaches are compatible in such a way that maintains compositionality, subject to important limitations
4. we acquire a generalized vector logic compatible with compositionality that respects the representation of logical operators within distributional spaces;
5. we show a possible formulation of and solution to grounding problems, in which our neurosymbolic semantics is shown to be grounded according to what we identify as four criteria for doing so.

## Some passing remarks

It may yet be the case that linguists, mathematicians, philosophers, and computer scientists might one day be friends, and discuss, at the heart of it all: how language can ‘be’ and how it can ‘be described’. Let us indulge in a straw-man, and borrow an exposition from Kornai (2007). To the mathematician encountering linguistics for the first time, the whole area appears as a random collection of loosely connected observations, held together somewhat superficially by terminology and tools borrowed from logic and set theory; likewise, to the linguist encountering mathematics for the first time, the whole enterprise seems an exercise in stating the obvious with unnecessary precision and formality. To say nothing of the philosopher and the computer scientist, whom we might imagine engaged in mutual contempt: the former dismissing the latter as a mere symbol manipulator, and the latter viewing the former as a sojourner to endless recursions of questions that might otherwise be resolved with a proper algorithm, should the philosopher learn to code.

It is precisely in this way that, perhaps, we wish to offend all equally, and in so doing, in our mutual offense, establish a common ground from which to work. Perhaps the most valuable experience from this whole enterprize was in working with linguists, mathematicians, philosophers, computer scientists, and cognitive scientists, among an innumerable host of friends and colleagues. Discussing, chatting, critiquing, talking, lauing, learning how to communicate one with the other, these have been invaluable. Much work in this dissertation followed naturally from such interdisciplinary cooperation, and underratedly, reflection. We might wonder, as Seton remarked:

> Life’s greatest lessons don’t come from focus or concentration. They come from breathing and simply noticing.

## A handful or references

Marco Baroni, Raffaella Bernardi, and Roberto Zamparelli. Frege in space: A program for composition distributional semantics. Linguistic Issues in Language Technology, 9, 2014.

George E. P. Box. Science and statistics. Journal of the American Statistical Association, 71(356):791–799, 1976.

Carlos A Driscoll, David W Macdonald, and Stephen J O’Brien. From wild animals to domestic pets, an evolutionary view of domestication. Proceedings of the National Academy of Sciences, 106(supplement_1):9971–9978, 2009.

Carlos A Driscoll, Marilyn Menotti-Raymond, Alfred L Roca, Karsten Hupe, Warren E Johnson, Eli Geffen, Eric H Harley, Miguel Delibes, Dominique Pontier, Andrew C Kitchener, et al. The near eastern origin of cat domestication. Science, 317(5837):519– 523, 2007.

András Kornai. Mathematical Linguistics. Advanced Information and Knowledge Processing. Springer London, 1 edition, November 2007.

D.H. Wolpert. The supervised learning no-free-lunch-theorems. In Soft Computing and Industry, pages 25–42. Springer, 2002.
