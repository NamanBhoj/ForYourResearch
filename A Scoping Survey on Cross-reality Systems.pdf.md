# A Scoping Survey on Cross-reality Systems

## JONAS AUDA, University of Duisburg-Essen, Germany UWE GRUENEFELD, University of Duisburg-Essen, Germany SARAH FALTAOUS, University of Duisburg-Essen, Germany SVEN MAYER, LMU Munich, Germany STEFAN SCHNEEGASS, University of Duisburg-Essen, Germany

Immersive technologies such as Virtual Reality (VR) and Augmented Reality (AR) empower users to experience digital realities. Known as distinct technology classes, the lines between them are becoming increasingly blurry with recent technological advancements. New systems enable users to interact across technology
classes or transition between them—referred to as cross-reality systems. Nevertheless, these systems are not
well understood. Hence, in this article, we conducted a scoping literature review to classify and analyze crossreality systems proposed in previous work. First, we define these systems by distinguishing three different
types. Thereafter, we compile a literature corpus of 306 relevant publications, analyze the proposed systems,
and present a comprehensive classification, including research topics, involved environments, and transition
types. Based on the gathered literature, we extract nine guiding principles that can inform the development
of cross-reality systems. We conclude with research challenges and opportunities.

CCS Concepts: • General and reference → **Surveys and overviews; • Human-centered computing →**
_Mixed / augmented reality; Virtual reality;_

Additional Key Words and Phrases: Cross-reality systems, reality-virtuality continuum, augmented reality,
augmented virtuality, virtual reality, transitional interfaces, bystander inclusion, collaboration

**ACM Reference format:**
Jonas Auda, Uwe Gruenefeld, Sarah Faltaous, Sven Mayer, and Stefan Schneegass. 2023. A Scoping Survey on
Cross-reality Systems. ACM Comput. Surv. 56, 4, Article 83 (October 2023), 38 pages.
[https://doi.org/10.1145/3616536](https://doi.org/10.1145/3616536)

**1** **INTRODUCTION**

Over the last three decades, devices that deliver immersive, digital experiences like Virtual Re**ality (VR) and Augmented Reality (AR) have reduced in size from bulky hardware [54, 76]**
to today’s consumer-friendly devices (e.g., Oculus Quest 2, Microsoft Hololens 2). Nowadays, it
has become easier to provide great experiences and immersion in a variety of different professional [15, 41] or social settings [184, 321]. In the past, many of these experiences were created
around specific manifestations of the Reality-Virtuality Continuum [199], meaning they are limited
to concrete technology classes. Here, examples include training in VR [80, 100, 174], enhancing the
real world with AR [2, 81, 175, 250], and vice versa enhancing virtual environments with parts of

Authors’ addresses: J. Auda, U. Gruenefeld, S. Faltaous, and S. Schneegass, University of Duisburg-Essen, Essen, Germany;
e-mails: {jonas.auda, uwe.gruenefeld, sarah.faltaous, stefan.schneegass}@uni-due.de; S. Mayer, LMU Munich, Munich, Germany; e-mail: info@sven-mayer.com.

[This work is licensed under a Creative Commons Attribution International 4.0 License.](https://creativecommons.org/licenses/by/4.0/)

© 2023 Copyright held by the owner/author(s).

0360-0300/2023/10-ART83
[https://doi.org/10.1145/3616536](https://doi.org/10.1145/3616536)

ACM Computing Surveys, Vol. 56, No. 4, Article 83. Publication date: October 2023.


# 83


-----

83:2 J. Auda et al.

the real world using Augmented Virtuality (AV) [36, 192, 211]. However, due to recent technological advancements, experiences are not limited to concrete manifestations anymore. Users can
interact across different manifestations (e.g., a novice user in AR on-site gets support from a remote
expert in VR [41]), or they can transition along the continuum and thereby experience different
manifestations (e.g., a book that allows users to transition between reading and experiencing its
content [29]). Systems that power such experiences are called cross-reality systems [273] as they
involve different or changing actualities—meaning the manifestations that users experience can
differ (e.g., one AR and one VR user) or users experience that their actuality is changing over time
(e.g., an AR user is transitioning to VR).

Today, we see a trend toward cross-reality systems and research. While these systems provide

great opportunities for novel experiences, they also introduce tremendous complexity. The complexity of these systems roots in the many users and their actualities, the possibility of bystanders,
the different physical objects involved (e.g., keyboards in VR [266]), and the surrounding environment that may be involved in the experience (e.g., walls in VR [180] and physical forces from
in-car VR [118]). This highlights the uniqueness and complexity of cross-reality systems, making
them hard to describe and compare. With clear terminology, researchers could compare existing
cross-reality systems more easily, while design and implementation rules can guide developers and
practitioners through their development process. This would allow a wider range of groups to contribute to the emerging field of cross-reality systems and fosters a shared understanding among
all involved groups and communities. However, a common language is not yet well established.
Thus, it remains challenging how to formalize, interpret, and compare cross-reality systems.

_How can we align the language across communities and establish a solid foundation for_

_future work that benefits both researchers and practitioners?_

Motivated by this overarching question, we extract three sub-questions, which we will answer in
this work. First, we investigate: How to define the terminologies in the field of cross-reality systems?
(RQ1)—allowing for a common language. Second, we pose the question: Which design and imple_mentation aspects of cross-reality systems form fundamental principles? (RQ2)—allowing to catego-_
rize current and future systems. Lastly, we go beyond past and present by targeting the challenges
ahead. Here, we ask: What are the future trends of cross-reality systems? (RQ3)—allowing us to
support designers and practitioners in developing the next generation of cross-reality systems.

To answer our research questions, we conducted a scoping literature review that investigates

cross-reality systems. We identified 306 papers as relevant and analyzed them to provide insight
into the current state of cross-reality research. First, we gathered terms and concepts provided
by previous research and present a definition of cross-reality systems that distinguishes between
three different types (multiple types can apply to the same system): Type 1 (Transitional): subjects
transitioning on the continuum experiencing a changing actuality; Type 2 (Substitutional): subjects
interacting with objects that are repurposed for the subject’s actuality; and Type 3 (Multi-user): multiple subjects experiencing different actualities. Thereafter, we build up our literature corpus and
analyze the introduced systems, following our three types of cross-reality systems. Our analysis
reveals these systems are increasingly complex, often using implicit transitions that are hard to
comprehend. Next, we present nine guiding principles extracted from previous findings that can
guide researchers and developers while building cross-reality systems. Each principle addresses
one of the three types of cross-reality systems and provides supportive studies. We conclude our
work with research challenges and opportunities for future investigations of cross-reality systems.

_Contribution. In this work, we propose definitions for cross-reality systems, categorizing them_

into three types. Furthermore, we present the results from an analysis of 306 cross-reality systems

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:3

proposed in previous work, including the addressed research topics, involved actualities, and transitions. We postulate nine guiding principles that formalize the findings from previous studies to
help researchers, developers, and practitioners to build better systems. Finally, we conclude with
future research challenges and opportunities.

**2** **CROSS-REALITY SYSTEMS**

Immersive technologies such as AR and VR allow users to engage in digitally alternated or synthesized realities. However, these technologies can isolate their users (e.g., head-mounted display
**(HMD) users) [258] and exclude bystanders (e.g., non-HMD users) [14, 105, 106]. To tackle these**
issues, a new research direction has formed—cross-reality systems [273]—that aims to enable interaction across different degrees of virtuality along the Reality-Virtuality Continuum [199].

In this work, we present a systematical review of cross-reality systems proposed in previous lit
erature. However, as this research direction has formed recently, a fundamental terminology is not
yet established. Thus, we first introduce existing terminology required to understand cross-reality
systems (cf. Mixed Reality (MR) [278]). Thereafter, we contribute new terms to the existing terminology that allow the classification of these systems and their interactions in a more structured way.
Similar to other research [12, 278], we believe structuring the young field of cross-reality systems
and introducing common terms helps future researchers, designers, and practitioners entering the
field to compare cross-reality system research and develop novel experiences more easily.

**2.1** **The Reality-Virtuality Continuum**

At the time of writing, almost 30 years have passed since Milgram and Kishino introduced the
Reality-Virtuality Continuum in 1994 [199]. Up to this point, the work has had a profound impact, coining terms that are frequently used in the field. According to Google Scholar, the work
has reached over 8,000 citations, which highlights its impact. During the last 3 years working on
this survey, the article’s citations increased by over 3,000, demonstrating the rapid growth of interest in the wide range of related research topics and applications that can be classified using this
continuum.

The Reality-Virtuality Continuum that spans between reality and virtuality allows the classifica
tion of different degrees of virtuality. On this continuum, reality refers to the real world, in which
every entity is real and subject to the laws of physics. On the other end, virtuality refers to virtual
environments, in which every entity is digital and generated by a computer. Certain degrees of
virtuality can be referred to as manifestations [199, 200] such as AR and AV. These manifestations
allow one to refer to technology classes and the corresponding form of the generated experience
that have been frequently researched in previous work and implemented in consumer devices.
Each point on this continuum between reality and virtuality refers to a degree of virtuality, which
incorporates a different amount of virtuality depending on the position on the continuum. Milgram
and Kishino refer to all degrees of virtuality that are not the two extremes as MR.

**2.2** **Manifestations of the Continuum**

Along the continuum, there are different areas that represent concrete technology classes, which
we refer to as manifestations (e.g., AR [200]). Theoretically, infinite manifestations could exist;
however, only a few are distinctive enough to be frequently used in literature. In the following, we
discuss these well-known manifestations. However, it should be noted that the Reality-Virtuality
Continuum does not inherently define concrete locations or ranges to describe these manifestations. Instead, it specifies where they are positioned relative to one another [199, 200].

AC C S l A l P bl d O b


-----

83:4 J. Auda et al.

_Augmented reality (AR). AR alters reality by overlaying digital information. Superimposing_

information empowers users to interact with virtual objects within the real world [200]. Thus,
AR is the manifestation closest to reality, as it results in users perceiving the physical environment to a stronger degree than they do virtual aspects. According to Azuma et al., AR has three
characteristics that need to be fulfilled: AR (1) combines real and virtual elements, (2) is interactive in real time, and (3) is registered in 3D [20]. A persistent challenge of AR systems is using
and interacting with physical objects [152, 343], which is of particular interest for cross-reality
research.

_Augmented virtuality (AV). In AV, users are immersed in a virtual environment; however, parts_

of reality are incorporated into the digital experience [192, 200]. In comparison to AR, AV relates
more to the virtual environment, while AR relates more to the real environment. With the support
of see-through modes in current VR devices, AV has recently gained popularity and is, for example,
used to configure the play area for the latest VR devices.

_Virtual reality (VR). In VR, users experience an entirely virtual environment with as little inter-_

ference from the real-world environment as possible. This digital world is not directly bound to the
laws of physics and, therefore, can exceed these boundaries [199]. Although one could argue that
VR represents virtuality on the continuum, current VR experiences do not completely immerse
the user into a virtual environment and, thus, do not represent virtuality. For example, users may
bump into walls or get motion sickness if the real-world and VR experiences do not align. Hence,
we understand VR as a part of MR. VR can be seen as a mode of reality that exists together with
the physical reality to provide its users new forms of experiences [333].

_Mixed reality (MR). MR is not a term describing a particular manifestation on the continuum;_

instead, it represents all possible manifestations on the continuum that involve both reality and
_virtuality to some extent. In other words, every experience that lies between reality and virtuality is_
considered to be MR [198, 200]. Three years ago, Speicher et al. [278] published a paper addressing
the following question: “What is Mixed Reality?” They conducted interviews with experts and
analyzed 68 related papers, finding that different definitions of MR exist. Hence, in our article, we
use MR as an umbrella term that represents all manifestations of the continuum, such as AR, AV,
and VR. Furthermore, four experts interviewed by Speicher et al. stated that “five or ten years from
now, we will not distinguish between AR, MR, and VR anymore.” In other words, there could be
one merged category of devices that supports different manifestations. In the future, this category
of devices will form the ultimate cross-reality systems.

**2.3** **Actualities**

Some cross-reality systems allow for seamless transitions on the continuum, for example, to allow
users to transition from the real world into VR [137, 258, 284] or to integrate parts of reality into
their VR experience [59, 111, 192]. Here, the existing term manifestation is too inflexible to reflect
such experiences and, more importantly, does not allow to describe changes in these experiences
over time. Moreover, reality and virtuality are used to describe the extremes, and thus, their use
to describe such experiences could be ambiguous (e.g., the user’s reality). Thus, we argue for the
term actuality to depict the currently experienced reality of a user. The term actuality goes back
to the concept of potentiality and actuality introduced by Aristotle [260]. In short, Aristotle stated
that potentiality is a not-yet-realized possibility of all possibilities that can happen, and actuality
is the realization of a specific potentiality—the actual thing that became real. The English word
_actuality is derived from the Latin word actualitas, which translates to in existence or currently_
_happening. Thus, an actuality describes the current reality—the things that currently seem to be_

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:5

facts for a user. In the context of reality and virtuality and all their combinations, we can use
the word actuality to describe the actual experience of a user. For example, we can consider two
users—one using VR and one just standing nearby. The actuality for the VR user would be a virtual,
digital experience, while for the bystander, the actuality is just reality. Here, two actualities exist,
whereas each actuality is described by one point on the Reality-Virtuality Continuum. Moreover,
when a user transitions, for example, from reality to VR, we can say that the actuality of this user
changes over time. We use actuality as the universal term to refer to the individual experiences
that users of cross-reality systems are having at a specific point in time. Our definition aligns with
Eissele et al., who suggests using actuality to describe virtual experiences [68].


Definition 1: Actuality

An actuality refers to the current experienced reality of a user on the Reality-Virtuality Continuum.
At each point in time, the actuality of a user can be represented by one point on the continuum. The
**actuality of a user can change over time, allowing one to experience different degrees of virtuality.**


**2.4** **Subjects and Objects**

Cross-reality systems involve different entities: subjects and objects. The difference between both
entities is that subjects have ways of perceiving their environment, while objects have no perception (e.g., a user, bystander, or animal would be a subject, while a table, keyboard, or vacuum cleaner
would be an object). Hence, subjects can experience their environment; an actuality that describes
their current experience exists. However, besides this difference, subjects and objects also have
attributes in common. Primarily, both can exist physically in the real environment, digitally in the
virtual environment, or simultaneously in both environments. In previous work, researchers focused mainly on the role of subjects in cross-reality systems. Nevertheless, we believe that objects
also play an important role (cf. Section 2.5).


Definition 2: Subject and Object

Cross-reality systems can consist of two types of entities: subjects and objects. They differ in the
sense that for subjects an actuality exists that describes their current experience, while objects have
no perception of their environments, and thus, no actuality is assigned.


**2.5** **Definition of Cross-reality Systems**

Simeone et al. categorized cross-reality systems into two types that either involve (1) a smooth
transition between systems using different degrees of virtuality or (2) collaboration between users
using different systems with different degrees of virtuality [273]. Following this definition, the role
that objects can play in cross-reality systems is somewhat neglected, as the definition focuses on
the perspectives of the subjects. Nevertheless, the interaction between subjects and objects should
be considered in cross-reality systems as well, especially if the object is not intended purely for the
subject’s actuality but instead was repurposed and integrated into the user’s experience (substitutional reality). Following this definition, a haptic prop specifically designed for a VR experience
should not be considered a cross-reality system; however, if a real-world object such as a vacuum
cleaner is repurposed for a VR experience, we consider it a cross-reality system (e.g., Wang et al.

[315]). Therefore, we distinguish three different types of cross-reality systems, which can be defined through the following definition.

AC C S l A l P bl d O b


-----

83:6 J. Auda et al.


Definition 3: Cross-reality Systems

We define three types of cross-reality systems:

**Type 1 (Transitional): Subjects transitioning on the continuum experiencing a changing actuality.**
**Type 2 (Substitutional): Subjects interacting with objects repurposed for the subject’s actuality.**
**Type 3 (Multi-user): Multiple subjects experiencing different actualities.**


**3** **REVIEW METHOD**

This scoping review [233] presents the first compilation of a literature corpus that analyzes crossreality systems and interactions. While the first publications describing cross-reality systems appeared recently (e.g., for the design space of transitional interfaces [313]), they focus on specific
types of cross-reality systems and do not provide a holistic overview of the topic. Following our
definition of cross-reality systems, we considered a broader range of literature that focused on
research involving:

(i) A subject changes its actuality (e.g., a user transitions into VR [29, 30]): Type 1 (Transitional).

(ii) There is an interaction between at least one subject and at least one object that is repurposed

for the current actuality (e.g., a physical keyboard brought into VR for typing [192]): Type 2

_(Substitutional)._

(iii) There is an interaction between at least one subject and at least one other subject, expe
riencing different actualities each (e.g., users collaborate using AR and VR [41]): Type 3

_(Multi-user)._

An initial investigation revealed that a systematic search-term-based literature review (e.g.,

PRISMA[1]) would not be possible, as terms to describe cross-reality systems are not yet fully established. Furthermore, relevant aspects are often hidden within a research prototype or system,
are a smaller part of a broader research agenda, or seem too marginal for the scope of the corresponding publication to be described by the authors. An example would be the paper from Ruvimova et al. in which a user is distracted by the noise of an open office space and, therefore,
transitions into VR for an isolated experience [258]. Here, the developed system was not explicitly described as a cross-reality system; however, it is an intrinsic part of the approach. Hence,
to present the most complete literature corpus, we individually screened our initial literature set
manually.

For our literature review, we performed the following steps (see Figure 1):

(1) We started by manually going through the proceedings from 2015 to 2022 of the five lead
ing conferences in which related cross-reality system papers were published (in parentheses:
corresponding publication count): ACM CHI (5131), ACM UIST (767), ACM VRST (627), IEEE
VR (1,539), and IEEE ISMAR (373). The corresponding digital libraries account for 8,437 entries for these venues in the given time frame. All authors together checked the title of each
paper to identify off-topic research. We considered only full papers, while other types of
publications were excluded (e.g., workshop publications, demos, and posters).

(2) We then individually read the abstracts (and further sections if necessary) of all remaining

publications to identify if the publications fit the scope of our literature review (meaning
the three inclusion criteria hold; see Figure 1) and gathered them in a spreadsheet similar to Doherty and Doherty [61]. If the relevance of a publication was not clear to the

[1PRISMA, http://prisma-statement.org/PRISMAStatement/Checklist, last retrieved October 20, 2023.](http://prisma-statement.org/PRISMAStatement/Checklist,)

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:7

Fig. 1. Literature selection process: The initial literature corpus from five leading conferences was screened
based on our inclusion criteria. Then, referenced and citing literature was screened and added based on the
same criteria. We repeated this process until we did not find more relevant literature.

screening author, it was discussed with all authors and a mutual decision was made. In total,
we identified 160 papers that are relevant for this review.

(3) After that, we looked at all references and all citing papers of the already gathered literature

to identify further relevant papers, an approach that others have also applied, e.g., Katsini
et al. [146]. We applied this process recursively, going through the references and citing papers of newly added ones until we could not find any more relevant publications. In this step,
we went through 11,465 references and 13,620 citations and found 103 additional referenced
papers and 43 additional cited papers (n = 146).

(4) In total, we found 306 relevant papers describing a cross-reality system, which we further

classified to extract their core features and identify common themes.

The initial literature corpus was compiled using Google Scholar as the main search engine for

citing papers while also relying heavily on the IEEE DL and ACM DL. At this point, it is worth
mentioning that this strategy does not guarantee one will identify all relevant papers. We screened
a tremendous number of publications, and while our literature corpus grew substantial in size,
there is a chance that we missed some relevant publications due to human error. However, strict
database queries suffer from similar issues, especially when the terminology of the research field
is unclear or not yet fully established. Therefore, we argue that our approach was able to identify
more relevant research publications than an automatic approach.

The final publication corpus (n = 306) served as the basis for understanding the interplay among

different subjects and their actualities and corresponding objects that manifest across the Reality
Virtuality Continuum. For the publication corpus, we went through all publications and identified

important features relevant to this survey to obtain a holistic view of the review corpus. Here,
we identified features like the research topic and keywords that briefly describe the given research
and involved scenarios as well as the purpose of the scenario (e.g., collaboration, leisure activity).
Furthermore, we categorized the scenario together with involved subjects and objects. Therefore,
we identified and quantified the involved entities (e.g., users, objects/artifacts) and how they were
integrated into their scenarios (e.g., real-world objects brought into VR). Further, we extracted the
_form-factors (i.e., type of used devices) and modalities (i.e., visual, auditive, or haptic). We then_

AC C S l A l P bl d O b


-----

83:8 J. Auda et al.

Fig. 2. Descriptive statistics regarding the corpus of literature gathered in our literature review. For the
subfigures b and c, we included all venues and authors with at least eight relevant publications.

identified how different entities relate to one another across the Reality-Virtuality Continuum and
how they manifest on the continuum (e.g., VR, AV, AR). A complete version of our literature corpus,
including a classification concerning different features, can be found as supplementary material.

_Descriptive Summary of Literature Corpus. Over the last decade, we see a clear uptick of pub-_

lications proposing cross-reality systems (see Figure 2(a)), indicating a growing interest in the
research community. While the publication count before 2015 may be inaccurate because we did
not screen conference proceedings before that year, a clear trend between 2015 and 2022 remains
recognizable. Nevertheless, in 2021, a dip in publications is observable, which is likely an artifact
of the global Covid-19 pandemic, as in the year after, the publication count recovers. Furthermore,
besides the identified five leading conferences, we identified the IEEE journal Transactions on Vi_sualization and Computer Graphics and the ACM SIGGRAPH conference as highly relevant venues_
(see Figure 2(b)). Finally, our corpus revealed that a few authors have around 10 publications published on the topic already. Here, Mark Billinghurst is taking the lead with over 20 publications
(see Figure 2(c)).

**4** **CLASSIFICATION OF RESEARCH PROPOSING CROSS-REALITY SYSTEMS**

Our classification of previous research focuses on the user interactions taking place in cross-reality
systems. To understand and classify the gathered research, we analyzed our previously collected
306 papers. Each publication presents an artifact contribution (research prototype or system) that
involves more than one manifestation of the Reality-Virtuality Continuum. Next, we present the
classification of our research corpus concerning the three types of cross-reality systems and their
research topics (see Section 4.1). Thereafter, we analyze the involved real and virtual environments
(see Section 4.2). Finally, we examine the different transitions taking place (see Section 5).

**4.1** **Types of Cross-reality Systems and Their Research Topics**

We started analyzing all 306 papers by assigning categories to each paper, following an opencoding approach with all authors involved (e.g., we assigned the category “HMD user transitions
into VR” to the following paper [284]). Thereafter, we applied the method of card sorting [279],
clustering the identified categories and assigning a research topic to each cluster (e.g., we clustered “HMD user transitions into VR” into the research topic “transitional interface”). Then, we
grouped the categories within each research topic into additional types to further classify the different papers (e.g., “HMD user transitions into VR” into the type “automatic transition”). Here, it
is important to note that a paper can be sorted into multiple research topics and types. Finally, we

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:9

Table 1. Publications Representing Research That Investigates Transitional Interfaces

**Type** **Category** **Count** **Publications**

User controlled Headset based 19 [3, 47, 55, 86, 92, 103, 111, 117, 179, 180, 208, 222, 244,
247, 253, 288, 299, 300, 308]

Mixed form factors 9 [39, 124, 149, 168, 234, 254–256, 312]

Handheld based 6 [23, 29, 30, 58, 151, 317]

CAVE-based projection 2 [161, 268]

Automatic Transition into VR 6 [4, 5, 137, 280, 284, 303]

Transition into AV 3 [37, 248, 323]

Transition out of VR 3 [120, 157, 277]

assigned each research topic to one of the three cross-reality systems types defined in Section 2.5.
In the following, we describe the research topics within the three cross-reality system types.

_4.1.1_ _Type 1 (Transitional): Subjects Transitioning on the Continuum Experiencing a Changing_

_Actuality. For the first type, we identified one research topic as relevant: transitional interfaces. In_
sum, we identified 48 of 306 papers (15.69%) that investigate Type 1 systems.

_Transitional Interfaces. A transitional interface is a system designed to empower users to tran-_

sition on the Reality-Virtuality Continuum and experience its various manifestations, proposing
a new way to interact and collaborate among these manifestations [23, 124]. An early example is
the MagicBook from Billinghurst et al. [29, 30]. The book can be read in reality, augmented with
virtual objects in AR, or used as a companion in immersive VR. With AR- and VR-enabled devices
becoming part of everyday life, it is imaginable that transitional interfaces will become ubiquitous.
In the past, two different categories have been explored (see Table 1): interfaces controlled by the
user (36) and interfaces with an automatic transition (12).

User-controlled transitional interfaces allow users to manage shifts between manifestations.

Different form factors of these interfaces have been explored in the past, ranging from headset(e.g., [55, 253, 308]), handheld- (e.g., [23, 29, 58]), and projection-based devices (e.g., CAVEs [268])
to a combination of various form factors (e.g., [124, 234, 255]). The second type of transitional
interfaces allow for an automatic transition between manifestations on the continuum, meaning
the user may initiate the transition, but then the interface automatically transitions the user to the
target manifestation. So far, the majority of investigated transitions are limited to those between reality and VR, investigating transitions into VR (e.g., [4, 280, 284]) or out of VR (e.g., [157, 277]). Also,
some of the investigated automatic transitions involve users who transition to AV (e.g., [37, 323]).

_4.1.2_ _Type 2 (Substitutional): Subjects Interacting with Objects That Are Repurposed for the Sub-_

_ject’s Actuality. For the second type of cross-reality systems, we found that 158 of 306 papers_
(51.63%) are relevant that are distributed over two different research topics: object utilization (124)
and collision avoidance (39). In the following, we present each of the research topics in detail.

_Object Utilization. The 124 papers that address object utilization investigated users experiencing_

a concrete manifestation (e.g., VR) in which they lack relevant objects, for example, real-world
objects. Important is that these objects are not components specifically designed for being used in
VR such as VR controllers. These controllers have no real purpose in the real world because they
are only used to interact with the virtual environment. Hence, to fulfill our definition of Type 2
cross-reality systems, we focus on objects that have specific semantics in the real world (or virtual
environment) and are repurposed for the user’s experience. A typical example of this category is
a VR user who wants to use a physical keyboard within the VR environment (cf. [192, 306]). In
this example, the keyboard is not designed for VR but instead is used to operate a computer in the

AC C S l A l P bl d O b


-----

83:10 J. Auda et al.

Table 2. Publications Representing Research That Investigates Object Utilization


**Type** **Category** **Count** **Publications**

Passive haptics 23 [19, 26, 27, 38, 42, 65, 67, 74, 79, 85, 86, 110, 114, 179, 205,
206, 221, 229, 232, 254, 274, 275, 324]

Handheld device 17 [3, 6, 22, 28, 32, 59, 60, 66, 69, 133, 155, 269, 287, 307, 310,
311, 348]

Environment scan 16 [44, 83, 111, 148, 186, 204, 247, 281, 293, 299, 317, 323, 330,
339, 349, 351]

Input device 12 [33, 101, 102, 150, 159, 196, 197, 227, 245, 266, 306, 345]

Motion 8 [48, 49, 118, 160, 176, 193, 194, 231]

Notifications 6 [94, 122, 177, 189, 222, 259]

Physical objects on demand 5 [31, 37, 108, 192, 248]

Active haptics 3 [9, 107, 315]

Human body 3 [36, 73, 334]

Others 7 [93, 119, 202, 212, 246, 291, 302]


Real-world objects 6 [138, 143, 208, 289, 344, 350]

Handheld device 5 [11, 125, 158, 301, 347]

Virtual objects 4 [46, 264, 265, 317]

Environment scan 3 [180, 218, 338]

Passive haptics 3 [117, 243, 262]

Others 3 [95, 130, 213]

real world. A counter-example are VR haptic props (cf. [13]). Here, the haptic props are designed to
enhance the virtual experience but have no meaning in the real world, similar to VR controllers that
exist with the sole purpose of interacting with the virtual environment. In all papers investigating
object utilization, real-world entities are integrated into either VR (100) or AR (24). An overview
of all these papers and their categorization is shown in Table 2.

The integrated real-world objects include mostly physical objects from the real world—for VR

to deliver passive haptics (23), integrate handheld devices (17), or include input devices (12) such
as keyboards, mouses, or instruments, or for AR to utilize them (6) or include handheld devices (5).
Furthermore, often they utilize parts of the user’s environment to create more realistic haptic sensations in VR. Other approaches range from integrating specific real-world objects [38, 74, 324] to
annexing any kind of object automatically [117, 275] or with the help of another user [179]. A side
effect of including physical objects is that users are more aware of their presence and are less likely
to bump into them. Besides physical objects, previous work investigated the influence of other
more abstract objects such as motion or notifications. Integrating real-world motion empowers
users to experience VR in moving vehicles without getting motion sickness [118, 193, 194, 231]. In
addition, studies have shown that enjoyment and immersion significantly increase with included
motion [118]. Finally, various studies have investigated how to integrate notifications without negatively affecting immersion [94, 122, 222, 259]. This can be accomplished, for example, by seamlessly integrating notifications into the virtual environment as diegetic elements [259].

_Collision Avoidance. When users are immersed in virtual environments, obstacles in the real_

world are no longer visible. In order to solve this problem, various collision avoidance approaches
have been explored. While these approaches have mostly investigated VR scenarios, the problem
is not exclusive to immersive virtual environments [140, 141]. Overall, previous work presents
three main strategies for avoiding collisions in VR and AR experiences: manipulating the user
(16), manipulating the experience (14), or providing warnings that alert users (9). All approaches
previously researched and found in our literature review can be seen in Table 3.


AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:11

Table 3. Publications Representing Research That Investigates Collision Avoidance

**Type** **Category** **Count** **Publications**

User manipulation Redirected walking 14 [16, 21, 35, 63, 64, 77, 109, 121, 191, 201,
235, 296, 320, 328]

User manipulation Resetting user position 2 [18, 319]

Experience manipulation Adapting environment 14 [52, 62, 65, 113, 139, 147, 187, 205, 271, 302,
307, 322, 323, 330]

Collision warning Visual-based warnings 4 [140, 141, 341, 342]

Haptic-based warnings 2 [71, 304]

Multi-modal warnings 2 [91, 195]

Audio-based warnings 1 [1]

Unlike warnings, which are designed to gain the user’s attention, approaches that manipulate

the environment or user often incorporate unnoticeable changes into the experience, empowering
users to walk around infinite virtual environments without being aware of it (e.g., [16, 65, 205, 328]).
These approaches currently have their limitations (e.g., mainly resulting from the induced illusions
that only work to a certain degree), making collision warning approaches useful additions to VR
scenarios or alternatives for non-VR scenarios (e.g., auditive warnings [1]).

_4.1.3_ _Type 3 (Multi-user): Multiple Subjects Experiencing Different Actualities. In total, we found_

that 133 of the 306 papers (43.46%) investigated Type 3 cross-reality systems. For these papers,
we identified the following research topics (in descending order): collaboration (93), bystander
inclusion (34), and isolated experiences (11). In the following, we present these topics.

_Collaboration. The most frequently researched topic of Type 3 cross-reality systems is collabo-_

ration, with a total of 93 publications. Here, collaboration between users experiencing the same
manifestation on the Reality-Virtuality Continuum was not included in our literature review (as it
does not fulfill the definition of Type 3). Thus, we only included publications involving two or more
manifestations on the continuum, so-called asymmetric collaboration [82, 285]. We identified two
types of asymmetric collaboration: remote (67) and co-located collaboration (27). In Table 4, all of
these publications are listed in their respective categories.

Compared to co-located collaboration, remote collaboration is the more extensively researched

topic, with a share of over 70.1% of all collaboration-related publications. Different remote collaboration approaches have been investigated, with collaboration between VR and AR headset users
being the most frequent (24). The reason for this is that expert-novice scenarios are explored frequently, with the expert in VR and the novice on-site in AR. Other approaches typically involve
a headset in combination with another form factor. Here, the most frequently used form factors
are traditional 2D displays involved in eight of the remote collaboration approaches as well as a
handheld device (8), for example, a mobile touchscreen device [225]. Besides users experiencing
concrete manifestations, transitional interfaces have been explored for collaboration as well. They
allow users to switch between augmented and virtual views of one collaborator’s space [156] or to
use the transition to switch between the spaces of both collaborators [297]. Moreover, others have
investigated various combinations that involve tabletops [282, 283], handhelds [78, 84, 185, 282],
or projections [82] to enable remote collaboration.

For co-located collaboration, the most frequent combination of form factors is a VR headset

combined with an AR handheld device (e.g., [98, 164, 215]). Another observable trend is that in most
co-located collaboration a VR headset is involved (15). However, compared to remote collaboration,
utilizing users that experience different actualities has been explored less frequently, with only 27
publications (29.03%). Some of these papers explore highly unique concepts that are difficult to

AC C S l A l P bl d O b


-----

83:12 J. Auda et al.

Table 4. Publications Representing Research That Investigates Collaboration between Users

**Type** **Category** **Count** **Publications**

Remote VR headset + AR headset 24 [50, 87, 134, 135, 148, 153, 169, 171, 172, 216, 219, 220,
230, 237–239, 290, 293–295, 314, 329, 334, 337]

AR headset + 2D display 8 [25, 51, 70, 88, 145, 170, 241, 327]

VR headset + handheld 8 [78, 84, 127, 154, 185, 225, 226, 335]

VR headset + 2D display 7 [53, 123, 203, 217, 292, 326, 332]

VR headset + 360[◦] camera 3 [144, 210, 252]

Transitional interface 2 [156, 297]

VR headset + robot 2 [57, 116]

VR headset + VR headset 2 [162, 298]

Others 10 [17, 34, 82, 89, 228, 236, 249, 267, 282, 283]

Co-located VR headset + handheld 5 [98, 164, 178, 215, 340]

VR headset + AR headset 4 [56, 179, 256, 276]

VR headset + 2D display 3 [142, 173, 251]

VR headset + tabletop 3 [126, 181, 285]

Others 12 [7, 8, 24, 99, 131, 201, 207, 257, 261, 268, 309, 336]

Table 5. Publications Representing Research That Investigates Bystander Inclusion

**Type** **Category** **Count** **Publications**

Bystander Awareness of bystander 14 [31, 75, 96, 163, 165, 192, 195, 209, 223, 286, 305, 307,
in MR 316, 331]

Bystander as support 2 [43, 45]

VR and 2D display 3 [132, 173, 318]

Interacting

VR and no technology 3 [69, 224, 346]

with

VR and HMD display 2 [40, 106]

bystander

VR and projection 2 [72, 104]

VR via HMD display 4 [90, 183, 190, 242]

Sharing

VR via CAVE 2 [128, 129]

with

AR via handheld 1 [325]

bystander

AR via projection 1 [112]

group with other publications, such as work from Baudisch et al. [24]. In this paper, the authors
investigate multiple users collaborating in the same real-world space; however, they play with
a virtual ball that can only occasionally be perceived. We believe this work is relevant because,
while the collaborators experience the same manifestation, the scenario still integrates an object
that has a different manifestation. Especially interesting here is that the object exists in virtuality,
not reality.

_Bystander Inclusion. In many publications, researchers investigated a range of approaches to in-_

clude bystanders in the MR experience (oftentimes of an HMD user). Unlike collaboration scenarios, the bystander is a real-world person who does not participate in all aspects of the experience,
but rather interacts with the user as needed. Overall, we identified 34 of 133 Type 3 cross-reality
system publications as relevant (25.56%) to this research topic. These publications can be classified
into three different approaches: bystanders contribute to the user’s experience without a channel
back to themselves—unidirectional (16), the user interacts with a bystander—bidirectional (10), or
the user shares their experience with a bystander who does not interact with it—unidirectional
(8). In Table 5, all publications researching bystander inclusion are listed with their respective
categories.

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:13

Table 6. Publications Representing Research That Investigates

**Isolated Experiences**

**Type** **Category** **Count** **Publications**

Users in same space VR + VR 7 [18, 21, 62, 64, 165, 188, 240]

VR + Reality 3 [286, 305, 331]

Away from reality VR + Reality 1 [258]

For scenarios in which bystanders are involved in the VR experience, it is always a VR user

for whom the bystanders create haptic sensations [43, 45] or to whom bystanders are shown [75,
209, 307]. For interaction between bystanders and users, all approaches describe the interaction
between a head-mounted VR user and their bystanders, with two approaches being most frequent:
using a 2D display that helps bystanders to participate in the experience [132, 173, 318] or using no
technology at all [69, 224, 346]. When sharing an experience with bystanders in two publications,
an augmented environment was shared [112, 325]. A VR user often shares their experience using
a CAVE [128, 129] or headset display facing bystanders [183, 242].

_Isolated Experiences. Isolated experiences aim to separate two users on the Virtuality-Reality_

Continuum as far as possible from each other. In total, we found 11 publications investigating
one of two different scenarios: users share the same physical space while at least one is immersed
in a specific manifestation of the continuum, for example, VR (10), or users are immersed into
a manifestation to escape reality (1). All scenarios are listed in Table 6. In most cases, VR users
share the same space and need to be redirected to avoid collisions between them. This is similar
to collision avoidance, except that here two users are involved. For user isolation, an interesting
idea has been presented by Ruvimova et al. [258]. They suggest using VR as a solution to evade a
crowded office space.

_4.1.4_ _Summary. When reflecting on all investigated 306 publications, we identified that differ-_

ent entities are involved in the explored research topics. To describe these entities, we suggest a
classification into two groups: subjects and objects. Subjects can be users or bystanders that perceive their environment and can experience different manifestations. Their very own perspective
on the scenario depends on these manifestations (e.g., AR or VR) and, therefore, forms their actuality—that what is “currently happening” for them. This can be individual for each subject. In
contrast, objects can be various things, such as real-world, physical objects; information (e.g., notifications); or even motion. Essential for the classification as an object is that they do not have a
perception of the environment. In the investigated publications, we found all three types of crossreality systems, but with different frequency. It is worth mentioning that a cross-reality system
does not have to be limited to one specific type but can be classified as multiple types at the same
time (e.g., ARchitect [179], in which users can transition between AR and VR (Type 1), repurpose
physical real-world objects for the VR experience (Type 2), and experience different actualities at
the same time (Type 3)). In sum, we found 48 publications (15.69%) that investigated Type 1 systems that involve subjects transitioning on the continuum and, thereby, experiencing different
actualities. For Type 2 and Type 3, we found 156 (50.98%) and 133 (43.46%) publications, respectively. Both types involve multiple entities, with Type 2 systems including at least one subject and
one object, while Type 3 systems involve two or more subjects. Furthermore, during our analysis, we observed that there are similarities between Type 2 and Type 3 cross-reality systems. For
both types, there are research topics that aim to increase the distance between the entities on
the Reality-Virtuality Continuum, while there are other research topics that investigate how to
decrease the distance between different entities on the continuum (see Table 7). For the research

AC C S l A l P bl d O b


-----

83:14 J. Auda et al.

Table 7. Overview of All Research Topics Involving Multiple Entities (Subjects/Objects)

and Their Relationship on the Reality-Virtuality Continuum, Covering Both

_Type 2 and Type 3 Cross-reality Systems_

**Type** **Involved Entities** **Entities Repel Each Other** **Entities Attract Each Other**

_Type 2_ Subject + Object Collision avoidance Object utilization

_Type 3_ Subject + Subject Isolated experience Bystander inclusion/Collaboration

topics of collision avoidance and isolated experiences, the entities should repel each other, meaning that the interaction between the entities is decreasing, while in the topics of object utilization,
bystander inclusion, and collaboration, the entities should attract each other on the continuum,
thereby increasing their interaction. Interestingly, we observed that the majority of publications
investigate aspects of entities attracting each other, 251 of 306 (82.57%), while the minority looks
at increasing the distance between entities, 50 of 306 (16.34%)—entities that repel each other. Each
publication is counted once. Summing numbers from different topics may result in higher totals
due to overlapping topics. Publications solely in the topic of transitional interface are excluded.

**4.2** **Combinations of Environments in Cross-reality Systems**

Experiences on the Reality-Virtuality Continuum involve different environments. Per definition,
these include at least one real environment and one virtual environment between which the continuum spans. They are entangled with each other or otherwise there would not be any influence
from one into the other environment. The most simple example is a VR user who experiences
some form of digital world but still stands on the real, physical floor. Nevertheless, in a minority
of publications, more than two environments are involved (e.g., two VR users in the same physical space who experience different virtual environments [18]). Overall, we found three different
environment constellations: scenarios involving one reality and one virtuality (230), scenarios involving multiple real-world environments and one virtuality (67), and scenarios involving multiple
virtualities and one real-world environment (9).

_4.2.1_ _Multiple Real-world Environments. Scenarios of this category involve at least two real-_

world locations (i.e., different geographical areas) between which physical entities do not move,
for example, an expert user joining a novice user from a different real-world location [238]. Overall,
we identified 67 publications as relevant for this category (21.9%). While reviewing publications
involving multiple real-world environments, we found that they mainly address remote collaboration (64), followed by object utilization (6), as the underlying research topics. Object utilization
investigated various approaches including the integration of information from the real world, such
as notifications or messages (3) [122, 189, 259].

_4.2.2_ _Multiple Virtual Environments. We found nine publications involving multiple virtual en-_

vironments (2.9%). The main research scenario in eight of these publications involved multiple VR
users who share the same physical space but not the same virtual experience [18, 21, 62, 64, 167,
188, 240, 263]. In this case, every user has a distinct actuality that differed from the actualities of
the other users. Corresponding publications also focus on avoiding collisions between co-located
VR users and assume that these users want to engage solely in their individual experiences. On
the contrary, Wang et al. [308] recently proposed a transitional interface that allows a user to view
other co-located VR players’ experiences. Finally, the number of virtual environments can also
be higher than two, for example, if more users are involved and need to share the same physical
space [64].

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:15

Table 8. Transitions of the Subjects along the Reality-Virtuality Continuum

**Transitions** **Count** **Publications**

AR RW 1 [141]
→

VR RW 7 [40, 72, 120, 157, 177, 183, 242, 277]
→

RW AR 12 [39, 112, 117, 125, 130, 137, 145, 151, 168, 208, 212, 218, 234, 247, 255, 268, 317,
→
325, 338]

RW AV 5 [47, 159, 197, 288, 308]
→

AR AV 1 [75, 137, 234, 255, 268]
→

VR AV 54 [1, 3, 31, 32, 37, 38, 44, 59, 69, 71, 86, 91, 96, 102–104, 108, 111, 114, 119, 129,
→
139, 140, 147, 180, 181, 192, 195, 196, 201, 202, 204, 222–224, 229, 232, 248, 266,
271, 286, 299, 302, 304–307, 312, 316, 322, 323, 330, 331, 342]


RW VR 20 [4, 5, 29, 30, 40, 83, 92, 106, 124, 149, 155, 161, 187, 275, 280, 281, 284, 285, 300,
→
303, 349]

AR VR 10 [23, 39, 55, 58, 99, 156, 179, 244, 247, 253, 254, 256, 317]
→

Multiple 8 [39, 40, 137, 234, 247, 255, 268, 317]

Involved Manifestations: Real World (RW ), Augmented Reality (AR), Augmented Virtuality (AV ), and Virtual Reality
(V R).

_4.2.3_ _Summary. We identified the different environment constellations presented in the_

screened publications. The majority, 75.2%, of the publications investigated scenarios with one real
and one virtual environment. When multiple environments are involved, these are often physical
locations located apart from each other and are digitally connected mainly for the purpose of collaboration. We also identified publications that aimed for isolated experiences of users with different
virtual experiences. Here, these users were located in the same physical space. Hence, the research
aimed for providing isolated experiences and those closely related because of an inevitable interaction or influence, avoiding collisions. When multiple virtual environments were deployed, we
found that most approaches aimed for providing users with an isolated experience, which aimed
for less interaction with co-located users. Along with that, collision avoidance was investigated to
reduce the number of encounters with other persons to preserve the isolation. Eventually, we did
not find any systems that use multiple real-world and multiple virtual environments.

**5** **ANALYZING CHANGING ACTUALITIES IN CROSS-REALITY SYSTEMS**

When using a Type 1 system, the actuality of a user changes over time due to a transition along the
Reality-Virtuality Continuum. However, numerous systems in the literature are not introduced
as cross-reality systems, nor are the transitions highlighted in particular because the presented
research did not investigate the cross-reality aspects in itself but, for example, topics like user
perception [254] or collision avoidance [1]. Therefore, we conducted an in-depth analysis of the
literature to find Type 1 systems and corresponding transitions that are not obvious to readers.
We identified 118 relevant publications that introduced systems that changed the actualities of its
users. Continuing our overview presented in Section 4.1.1, we present our in-depth analysis of
these transitions in the following. First, we analyzed the involved manifestations in the described
systems (see Section 5.1). Here, we limited ourselves to the distinct manifestation previously introduced: VR, AV, and AR, including transitions involving the Real World (RW). Thereafter, we
identify the cause of these transitions (see Section 5.2). Finally, we conclude with a summary (see
Section 5.2.9).

**5.1** **Transitions between Manifestations**

As seen in Table 8, subjects transition along the Reality-Virtuality Continuum from and to various manifestations. Here, the perception of the transition is dependent on the perspective of a

AC C S l A l P bl d O b


-----

83:16 J. Auda et al.

subject—the actuality (e.g., a VR user experiencing VR or a bystander experiencing reality). For example, a bystander could walk by a VR user and is shown to the VR user in the virtual environment
when being close [192]. The bystander’s actuality does not change as the bystander still perceives
the RW while crossing the area around the VR user. However, the VR user sees the bystander in
the virtual environment; therefore, the VR user’s actuality changes with a transition from VR to
AV. This is because the virtual environment is augmented with objects from the real world and
therefore is no longer purely virtual, in this case, with the bystander. In the following, we introduce
the different manifestations involved in the transitions that we found in the literature.

_5.1.1_ _Transitions to Real World. We found eight (2.61%) publications that involved a transition_

to the RW. Here, taking a glimpse at a bystander while being in VR results in a transition from
VR to the real world [40]. This can be useful when immersed VR users want to interact with
surrounding persons for a brief moment. To avoid collisions when using AR obstacle detection
and accompanying alerts that make users aware of these obstacles forms a transition from AR to
the RW [141]. When taking the VR-HMD, and thereby transitioning to the RW, users report that
they, for example, felt disoriented [157]. Therefore, gradual exit procedures could help VR users to
exit their virtual experience more comfortably and safely. Likewise, one could use metaphors like
a door to the real world to exit virtual experiences [277].

_5.1.2_ _Transitions to Augmented Reality. We identified 12 (3.95%) publications that investigate_

switches from the RW to AR. Editing the real world with AR’s help can be seen as a transition
from a real environment to AR [338]. Likewise, overlaying virtual objects onto real ones lets a
user transition from RW to AR as soon as the overlays are brought into place [117]. Also, sharing
content with a bystander can be seen as a transition from the RW to AR [112]. Here, the bystander
is the transitioning subject.

_5.1.3_ _Transitions to Augmented Virtuality. Overall, we found 60 (19.74%) publications that in-_

volved transitions to AV. The most common transition within the type are publications investigating transitions from VR to AV (54, 17.76%). Bringing in real objects like a cup for drinking, a
keyboard for typing [192], or a smartphone [59] when needed depicts a transition from VR to AV.
Also, integrating approaching bystanders into the virtual world in order to create awareness or
foster interaction results in a transition from pure VR to AV [305] or when actively interacting
with them [104]. Further, while in VR, partially showing the RW would result in a transition from
VR to AV [111]. Further, transitions from VR to AV can occur in a non-obvious manner and often
rely heavily on the visual sense. For example, for two users that use redirected walking to meet
each other to shake hands while being immersed in VR [201], as soon as they are redirected toward
each other and shake hands, their VR is externally influenced through the handshake, which is part
of the real world. In this case, they transition for a brief moment from VR to AV. Additionally, we
found five (1.65%) that investigated transitions from the RW to AV. Here, a bystander could enter
a VR user’s experience and thereby augment the virtual experiences with their appearance [308].

_5.1.4_ _Transitions to Virtual Reality. In sum, we found 37 (12.17%) publications that involved_

transitions to VR. We identified 10 (3.29%) publications that investigate transitions from AR to VR.
Users could start in AR and then, for example, decide to transition to VR [254, 256], to exchange
information between the two manifestations [253], or to collaborate [99]. Further, we identified
20 publications (6.58%) involving a transition from RW to VR. For example, Steinicke et al. introduced an approach for transitioning into VR through a portal metaphor. They provided a portal
from the real environment to VR to the user. The user could enter the portal to enter the virtual
environment [284]. Also, it could be shown that a smooth transition into VR helps the user to
create awareness of the virtual environment [303].

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:17

Table 9. Transition Causes for Transitions of Subjects along the Reality-Virtuality Continuum

**Transition Cause** **Count** **Publications**

Substitution of physical object 26 [44, 47, 83, 86, 111, 117, 139, 147, 151, 180, 187, 197, 204, 208,
212, 247, 254, 275, 281, 288, 299, 302, 323, 330, 338, 349]

Change actuality 22 [4, 5, 92, 103, 120, 124, 137, 149, 157, 161, 177, 244, 253, 255,
256, 268, 277, 280, 284, 300, 303, 307]

Bystander inclusion 21 [40, 69, 72, 75, 96, 104, 106, 112, 129, 181, 183, 195, 222–224,
242, 285, 305, 316, 325, 331]

Interaction with physical object 19 [3, 29–31, 37, 59, 108, 119, 125, 155, 192, 196, 202, 218, 248,
266, 286, 306, 312]

Collision avoidance 10 [1, 71, 91, 140, 141, 201, 271, 304, 322, 342]

Collaboration 8 [39, 99, 130, 145, 156, 179, 234, 308]

Providing haptic feedback 8 [32, 38, 58, 102, 114, 159, 229, 232]

Interaction with virtual object 4 [23, 55, 168, 317]

_5.1.5_ _Transitions to Multiple Manifestations. We found eight (2.63%) publications that focused_

on interfaces for transitions along the whole continuum from the RW to AR, then further to AV,
and finally to VR. In these scenarios, users transitioned step by step from the real world to the
virtual. Each step involved different objects or actions taken by the user [255].

_5.1.6_ _Summary. We investigated 118 publications that introduce transitions on the continuum_

and identified involved manifestations. We found that most transitions (54) are from VR to AV,
followed by transitions from the real world to VR (20). Some transition categories are underrepresented, like transitions from AR to the RW or from AR to AV. Moreover, the presented transitions can be non-obvious at first (e.g., VR users transitioning to AV when they meet and shake
hands [201]).

**5.2** **Causes of Transitions**

Transitions on the Reality-Virtuality Continuum can have different causes. We identified several
causes for transitions (see Table 9). In the following, we introduce these causes in greater detail.

_5.2.1_ _Substitution of Physical Object. We found 26 (8.55%) publications that substituted phys-_

ical objects with virtual ones. For instance, providing a realistic walking experience and at the
same time enhancing VR can be accomplished by constantly scanning the real-world environment
and adapting the virtual world accordingly to let the user walk in the automatically generated
world [44]. Here, the user transitions from VR when not adapted to AV when the virtual world
is adapted to the surrounding physical environment; in other words, the physical environment
is substituted by the virtual environment. Furthermore, real-world objects can be substituted to
provide haptic feedback to virtual objects that share similar haptic properties [117].

_5.2.2_ _Change Actuality. We found 22 (9.62%) publications that introduce transitions on the con-_

tinuum that are deliberately caused by the user to access virtual objects or to enter a virtual environment. Such transitions can enhance presence [284]. For example, when entering a virtual
environment, transitioning gradually from the RW to VR makes users feel more presence [137].
This can be accomplished by gradually blending out real-world objects and at the same time blending in the virtual environment. Users may also exit VR, which causes a transition from VR to the
real world. Here, Knibbe et al. investigated which factors influence transitions out of the virtual
experience [157]. The results pointed out that the virtual experiences influences the users beyond
the point of exit and therefore need further consideration. To exit virtual experiences, metaphors
like portals [308] or curtains [161] can be used to indicate the possibility of a transition between

AC C S l A l P bl d O b


-----

83:18 J. Auda et al.

VR and the RW. Traversing on the continuum can be accomplished by different user actions or
using objects [255].

_5.2.3_ _Bystander Inclusion. Including bystanders can also be a cause for transitions. We iden-_

tified 21 (6.91%) publications that investigate transitions caused by bystanders. For example, a
transition from the real world to AV can be caused if the bystander enters the tracking space of a
VR user [305]. Here, the bystander is integrated visually into the virtual environment. A bystander
could also cause a transition from the real world to AR when projections are used to give access
to the virtual content that an AR user experiences [112]. Breaking the VR isolation can be done by
enabling bystanders to interact with the VR user [104]. Here, the bystander can actively participate in the VR user’s activity and influence the virtual environment. In this scenario, the VR users
transition from VR to AV when interacting physically with the bystander. From the perspective of
the bystanders, they can see floor projections in the RW and can use a display to enter the virtual
experience, which also can be seen as a transition from the RW to VR. Other ways to include bystanders into virtual experiences utilize audio to allow for communication between VR users and
bystanders [224].

_5.2.4_ _Interaction with Physical Object. We found that most transitions occur due to interactions_

with physical objects. Here, we found 19 (6.25%) publications. Interaction with the real world
can cause transitions, for example, from VR to AV [192]. Users transition when they want to
drink or eat something while experiencing VR [37]. Further, we found that the usage of an external device causes transitions [59]. Users could check a smartphone for messages [3] or using
a tablet [125]. For using a smartphone, one could capture it in the RW by video. Then, the smartphone can be cropped out of the video feed and presented to the VR user. This augments the VR
experience, making it AV. Similarly, using a physical object such as a keyboard in VR constitutes
a cause for a transition [266]. Here, the VR user is transitioning from VR to AV when using the
keyboard.

_5.2.5_ _Collision Avoidance. We found 10 (3.27%) publications in which obstacle avoidance caused_

transitions of users. Providing such safety features can cause transitions along the continuum, like
creating awareness of obstacles in the VR user’s proximity [140, 322]. Modalities other than the
visual were also investigated, e.g., auditive feedback, which lets the user transition out of VR to
AV as the virtual environment is augmented with auditive warnings of real-world objects [1].

_5.2.6_ _Collaboration. We found eight (2.61%) publications in which the cause for a transition_

was the collaboration among users. Often, collaborators transition from AR to VR when creating
a collaborative solution [99, 156, 179]. For instance, they shape a maze in AR and then use the
created maze to play a game in VR [179].

_5.2.7_ _Providing Haptic Feedback. We found eight (2.63%) publications that introduced transi-_

tions when providing haptic feedback. For example, to enhance typing in VR, one can integrate
a physical keyboard [102, 159] or smartphone [114]. Users also transition when using physical
objects around them to mimic the haptics of virtual objects, for example, through haptic retargeting [232].

_5.2.8_ _Interacting Virtual Object. We identified four (1.32%) publications that introduce transi-_

tions that allow for the interaction with virtual objects, for instance, when a real-world environment is scanned and edited in AR [317]. Further, a transition can be caused when combining a
physical environment with a virtual one [55], or when the real environment is occluded, a user
could use a virtual copy of the same to get a better overview [23].

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:19

_5.2.9_ _Summary. We investigated 118 publications that introduce transitions on the continuum_

and identified their corresponding transition causes. We found that most transitions (26) occurred
when physical objects were substituted in virtual experiences, for example, to design virtual environments on the basis of the physical world [275]. This is followed by 22 publications that introduced transitions that occurred when there was the need to deliberately change the actuality,
for example, when leaving a virtual experience [157, 277]. The third highest cause of transitions
was bystander inclusion into the virtual experience, with 21 publications. Here, bystanders were
brought into the virtual experience of, for example, a VR user to create awareness of their presence,
thereby making the VR experience an AV experience [305].

**6** **NINE GUIDING PRINCIPLES OF CROSS-REALITY SYSTEMS**

In an interview study, Ashtari et al. identified eight key barriers that MR creators face today [12].
An important barrier noted by the different groups interviewed (i.e., hobbyists, domain experts,
and professional designers) is the lack of concrete design guidelines and examples. Therefore, following our previous section that investigated and described current research on cross-reality systems, we continue with the introduction of nine guiding principles for designing and implementing
such systems that we derived from our analysis. We categorized the principles according to the
three different cross-reality system types introduced in Section 2.5. We grounded our rules in the
literature, thereby providing the underlying rationale together with examples of how the rule can
benefit the design and implementation of cross-reality systems.

**6.1** **Type 1 (Transitional): Subjects Transitioning on the Continuum**

_Principle 1: Allow for Smooth Transitions When Changing the User’s Actuality. Allowing users_

to slowly and gradually transition into a target manifestation can benefit their understanding of
what is going on. For example, slowly transitioning into VR allows users to keep an awareness of
their physical environment [303], improve the sense of body ownership [137], and increase presence [4, 284], while slowly transitioning out of VR can mitigate disorientation [157] and should be
designed non-interactively [120]. A slow and gradual transition can, for example, be implemented
by morphing real objects into virtual objects one after another in the target environment [303].

_Principle 2: Use Suitable Metaphors to Make Transitions Intelligible and Believable. A possibil-_

ity to transition should be indicated by a metaphor to help users understand possible actuality
changes (e.g., portals [92, 244, 307, 308]). This helps to peek into other manifestations and increases presence [284] and immersion. Also, tokens that allow for a transition can be employed as
such metaphors (e.g., books [29, 30] or smartphones [92]). Important is that the deployed metaphor
communicates its affordance to users.

_Principle 3: Give Users Control Over Transitions. Transitions are a powerful technique of cross-_

reality systems as they enable users to change their actuality. However, they can result in severe
issues for users if they are deployed wrong (e.g., a system that automatically transitions from AR to
VR while the user navigates traffic would put its users at risk). Following the golden rule “support
internal locus of control” from Shneiderman et al. [270], designers and developers should consider
three primary aspects to give users control over transitions: (1) users can initiate the transition (e.g.,
by following a metaphor [29, 30, 55, 92, 244, 308]), (2) users can control the transition (e.g., speed
of transition adjusted by the user [103, 303]), and (3) if multiple manifestations can be visited, the
user should be able to identify and choose the target manifestation (e.g., [29, 30, 55, 103, 255, 280]).
If automatic transitions are deployed, users should understand the transitions’ trigger.

AC C S l A l P bl d O b


-----

83:20 J. Auda et al.

**6.2** **Type 2 (Substitutional): Subjects Interacting with Substitutional Objects**

_Principle 4: Consider Surrounding Physical Objects to Avoid Collisions. Every object physically ex-_

isting in the user’s environment should be considered in the experience to avoid collisions [44,
109, 140, 187, 330]. Here, one can either bring over the physical object to the user’s current actuality to raise awareness, for example, by substituting physical objects with feasible digital representations [275, 302], or one can use solutions that redirect users around the physical obstacles [16, 52, 121, 296]. If immersion is not of high importance, designers and developers can also
deploy warnings using various modalities to help users avoid collisions (e.g., visual, auditory, or
multimodal alerts [1, 91, 141, 195]).

_Principle 5: Integrate Relevant Physical Objects to Enrich Experiences. Every object that is relevant_

to the user should be integrated into the user’s experience [192]. For example, one can enable users
to enjoy a drink or use a keyboard [37, 155, 159, 192, 306] or mouse [345] without taking off the VR
headset. Here, it is relevant to reduce the mismatch between the real and virtual world by finding
a suitable virtual representation of physical objects (e.g., not showing the correct amount of liquid
in a glass can result in problems [37]). Furthermore, we consider relevant objects to be more than
physical bodies. Objects are also abstract information like notifications [259] or physical phenomena like motion [107]. These objects surround us and, thus, influence our perception in various
ways. For example, if we experience VR inside a car as a passenger, we need to take the motion
into account that is caused by the car driving [118, 193, 194, 231], similarly for VR experienced
on board an airplane [321]. If physical phenomena are neglected, it can degrade the experience of
users.

_Principle 6: Provide Opportunities to Interact with Object in Every Possible Actuality. When ob-_

jects are present in the experience of users, there should be an interaction possibility for these
objects [75]. Furthermore, if the user’s actuality changes throughout the experience, it is valuable
to provide interaction possibilities with objects throughout all these actuality changes [29, 30, 168,
255]. These interaction possibilities cannot necessarily remain the same across the changed actuality but often require designers/developers to adapt them [208] (e.g., a book that enables transitions
changes its appearance in different manifestations [29, 30]).

**6.3** **Type 3 Multi-user: Multiple Subjects Experiencing Different Actualities**

_Principle 7: Allowing for Isolated Experiences. It can be helpful to opt out of a social context, for_

example, to gain a distraction-free environment for better working conditions [258]. If surrounding users should be excluded from the experience of a user (i.e., a mute on social so to speak), one
can utilize the different methods provided by collision avoidance research [240] and adapt them
while keeping in mind that other users move and are not static. Overall, three different approaches
exist: manipulate the experience [167, 258, 296], manipulate the user [263], and give collision warnings [91, 140].

_Principle 8: Include Bystanders in Closed Experiences. Experiencing a manifestation of MR in a_

head-mounted device often excludes bystanders from the experience [14, 105]. Hence, cross-reality
systems should be capable of including bystanders in the HMD user’s experience. Depending on
the goal, a cross-reality system can bridge the actualities of the HMD user and bystander by either
providing a representation of the bystander in the MR experience [31, 115, 182, 192, 195, 209, 240,
286, 305, 307, 331] or sharing the MR experience with bystanders [112, 131, 318, 325]. Here, allowing
bidirectional communication is possible as well and offers the foundation for collaboration [10, 40,
105, 106, 181, 346].

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:21

_Principle 9: Enable Collaborators to Understand Each Other’s Actualities. As cross-reality systems_

enable users with different actualities to collaborate, it is beneficial to communicate these actualities, helping collaborators to understand the individual perspectives involved. Designers and
developers of cross-reality systems have three ways to apply this rule: (1) they can allow collaborators to switch into each other’s perspectives [179, 298], (2) they can allow collaborators to get a
glimpse at each other’s perspectives (e.g., in the form of portals [307, 308]), or they can integrate
the elements of each other’s perspectives in their own actuality [41, 75, 297, 326].

**7** **RESEARCH CHALLENGES AND OPPORTUNITIES**

Based on our literature review, it is evident that there has been an uptick in research around crossreality systems (cf. Figure 2). In recent years, we can see a strongly increasing interest in this
topic, with larger numbers of actualities involved and a trend toward more dynamic actualities that
frequently change over time. Our literature review revealed that it is difficult to identify relevant
research, especially Type 1 (Transitional) cross-reality systems, as occurring transitions on the
continuum are often not the focus of the work. Thus, they are not prominently described (see
Section 7.1). Further, we found that cross-reality systems can become rather complex due to the
different perspectives involved (see Section 7.2). Moreover, we identified that current cross-reality
systems partially neglect AR devices (see Section 7.3) and a trend toward AV solutions becomes
visible (see Section 7.4). To address the increasing complexity of cross-reality systems, we conclude
this section by discussing novel prototyping methods of cross-reality systems as an opportunity
to make the field more inclusive and allow for quicker iterations (see Section 7.5).

**7.1** **Implicit Transitions**

Many of the surveyed papers contain transitions on the continuum, meaning they change users’
actuality over time. However, the presented evaluations did not or only vaguely investigated the
transition, in particular, cf. [91, 183]. Often, authors do not explicitly describe the transition that
takes place on the continuum, for example, when the underlying research instead focuses on haptic
feedback through the inclusion of real-world objects [159, 275]. Nevertheless, these transitions
can be manifold, as they potentially involve multiple actualities and can affect various subjects
that interact with the cross-reality system. We refer to these transitions as implicit transitions
since they are a byproduct of the proposed system and not the focus of the introduced research.
As these implicit transitions between actualities are complex, we found that they are difficult to
grasp and hard to articulate. But due to their strong impact, they should be considered. Here,
we found that common ground to describe these transitions has not yet been established. As a
result, it is tough to extract the transitions’ essence, making an evaluation and comparison nontrivial. To make implicit transitions comprehensible and comparable, we recommend investigating
visualization methods that enable one to convey the transitions taking place within a cross-reality
system. Finally, cross-reality systems often do not investigate the transitions of their proposed
systems. For example, research evaluating different approaches to display a physical keyboard in
VR assumes the keyboard is always present [159, 266]. Thereby, these works focus more strongly
on interacting with the keyboard in VR but less strongly on the transition between the keyboard
being present or not. While it makes sense to focus on interacting with the keyboard, the aspect
of how to transition between these states of the keyboard received less attention.

**7.2** **Multiple Actualities**

We identified several research topics that involve multiple users and bystanders (cf. Section 4.1.3),
which we refer to as Type 3 cross-reality systems. Here, both users and bystanders have different actualities and can transition along the continuum. Thereby, they can change their actuality,

AC C S l A l P bl d O b


-----

83:22 J. Auda et al.

resulting in more complex interactions. For example, von Willich et al. introduced a cross-reality
system in which from the VR user’s perspective, a bystander enters VR and thereby transitions
closer to the VR user; however, from the bystander’s perspective, there is no transition into VR,
meaning the bystander still experiences the real world [305]. Thus, all perspectives need to be taken
into account as they contribute to an all-encompassing understanding of the scenario. However, it
remains challenging to grasp and convey users’ and bystanders’ perspectives and actualities to an
audience that has not experienced the system itself. Again, we recommend investigating visualization methods; nevertheless, we emphasize that such visualizations need to consider the different
actualities of the users involved in Type 3 cross-reality systems.

**7.3** **Missing Research on Augmented Reality**

We revealed that current research investigations mainly focus on cross-reality systems that shape
around VR users. We found only a smaller number of systems that proposed cross-reality experiences with AR users (VR is present in 236 papers, while AR only exists in 111 papers—less than half).
We believe that the tendency of immersive VR to blend out the visual information from the real
world while auditory or haptic sensations remain perceivable inherently offers more conflict potential, which previous work has aimed to address. Nonetheless, previous work has demonstrated that
AR suffers from similar problems—just to a smaller degree [140, 141]. Still, neglecting these issues
can cause severe problems, especially when cross-reality systems are operated in more dangerous
environments (e.g., while navigating traffic [136]). Hence, more investigations into head-mounted
AR systems are needed, especially as these systems already provide the possibility to communicate more easily with bystanders, but the digital content is hidden similar to VR systems. Novel
approaches introduced conceptual solutions to these issues [69]. However, especially for crossreality systems that allow users to transition on the continuum, more hardware is required as only
very few devices allow transitioning between AR and VR. Currently, these devices are also limited
to video see-through AR.

**7.4** **Trend toward Augmented Virtuality**

Current VR systems aim for immersive experiences; however, the physical environment of VR
users continues to have an impact [187]. For example, VR users need to be careful not to bump
into bystanders or furniture [192]. Thus, in recent years, research has shifted toward cross-reality
systems that include parts of the VR users’ environment on demand, meaning they temporally or
permanently transition users toward AV. In this work, we define such systems as Type 2 crossreality systems (or Type 3 if they include other users). Commercial products have followed this
trend, for example, Oculus with the release of its Pass-through API. Thereby, researchers have
acknowledged the shortcomings of current VR systems and started embracing the opportunities
cross-reality systems do offer. In the future, more research is needed to systematically investigate
which aspects of users’ real environments need to be introduced to VR experiences and, more importantly, when and how users transition to AV with the goal to incorporate these aspects into their
experiences. Finally, integrating real-world objects into the experience requires considering many
different objects. If we manage to find computational approaches to integrate them automatically
(e.g., [117]), it will enable users to engage with more objects.

**7.5** **Prototyping Cross-reality Systems**

Prototyping and developing cross-reality systems is still challenging [214] and can be a timeintensive process that often requires software and hardware prototyping expertise [12]. Especially, the creation of cross-reality hardware prototypes (e.g., [44, 104, 105, 192]) has a high entry
barrier and requires the use of various hardware components (e.g., displays, projectors, sensors),

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:23

engineering skills (e.g., electrical engineering, software development), and design expertise (e.g.,
rapid prototyping). Enabling fast and low-effort prototyping of cross-reality systems could support researchers, developers, and designers of cross-reality systems to quickly iterate their ideas
and designs without the need to fully implement the entire system in both software and hardware
(e.g., by avoiding a hardware implementation). We argue that more novel prototyping methods are
required to help develop cross-reality systems. Recently, Gruenefeld et al. published VRception, a
prototyping concept and toolkit that allows for rapid creation of cross-reality systems entirely in
VR [103]. With this system, multiple users can remotely join one virtual environment. In this environment, they can use various pre-defined virtual components to build cross-reality systems and
prototype their functionality in VR. A useful addition to this would be a modular hardware system
that allows users to create cross-reality systems with less effort and without the need for extensive
software and hardware experience. Such a system could include modular hardware components
that can be easily integrated with each other (e.g., small projectors, displays, cameras) and software
components that allow for easy integration into virtual environments. Moreover, researchers have
proposed various prototyping tools relevant to cross-reality systems [214]. For example, they have
presented approaches utilizing VR to prototype AR applications [97, 166] or to enact futuristic interfaces [272]. While these approaches are not directly targeting cross-reality systems, they can
still be valuable for the prototyping process of these systems.

**8** **GENERAL DISCUSSION**

In this section, we discuss the current state of cross-reality system research, thereby answering our
guiding question: How can we align the language across communities and establish a solid foundation
_for future work that benefits both researchers and practitioners? For each extracted research question,_
we have a dedicated paragraph below that aims at discussing our related findings.

_Classification of Cross-reality Systems. The field of cross-reality systems is a relatively young_

research area. Hence, a well-established terminology is not yet present in the relevant research
communities. We argue that it is timely to establish a common terminology as we see an increasing number of publications that introduce cross-reality systems and research. Through our review,
we aimed to provide a terminology that allows one to classify cross-reality systems. This can foster
research by providing terms that make such systems more comparable or ease the communication
of novel ideas. In this context, we argued for the term actuality to describe the current experience
of cross-reality system users. Through this term, we can clearly describe what a user is currently
experiencing (e.g., the actuality of a user is VR). Further, we introduced a clear distinction between
subjects and objects. Subjects are conscious and can perceive their environment, or in other words,
they have an actuality. For example, a person in the real world perceives the physical environment;
therefore, the actuality for this person is the real world. When the person uses a VR-HMD, the actuality would be VR. To describe cross-reality systems that allow one to transition between different
manifestations on the Reality-Virtuality Continuum [200], we introduced Type 1 cross-reality systems. Transitional interfaces [29, 30, 300] can be classified as Type 1 cross-reality systems as they
allow their users to transition between various manifestations (e.g., the real world, AR, VR), thereby
changing the actuality of their users. Objects play a key role and, with their utilization, form an
important new category within cross-reality systems. We have identified a large number of publications that utilize objects within cross-reality systems (158 out of 306 publications). Therefore,
we introduced Type 2 cross-reality systems. These types of systems allow one to repurpose objects,
for example, from the real world in virtual experiences [192]. Through Type 2 systems, we can describe all systems that integrate objects from another manifestation into the current actuality (e.g.,
a smartphone into VR [6]). We limit ourselves not only to physical tangible objects. Also, systems

AC C S l A l P bl d O b


-----

83:24 J. Auda et al.

that make use of physical phenomena like heat [291] or motion [48, 193, 194] can be categorized
as Type 2 cross-reality systems. To describe systems that involve multiple subjects, each of which
experiences different actualities, we introduced Type 3 cross-reality systems. A typical scenario
would be users collaborating using AR and VR [220] or bystander inclusion [104, 192, 305]. We
argue that this classification allows for structuring the field of cross-reality systems, thereby allowing one to get a better understanding of current trends and even recognize research that is not
explicitly introduced as part of the cross-reality domain, for instance, utilizing objects within the
user’s actuality for haptics [206] or integrating real-world motion into VR [48]. We believe that
along these types, we can establish useful terminology and guidelines for researchers and practitioners in the area of cross-reality systems. In this sense, we introduced nine guiding principles
for the design of cross-reality systems.

_Nine Guiding Principles for Cross-reality Systems. As suggested by the literature, there are entry_

barriers for the development of AR/VR applications [12]. At the same time, MR applications are
envisioned to become more relevant in the future [278]. Through our review, we observed a strong
rise in contributions to the field of cross-reality systems, yet we lack guidelines that help to design
and implement novel cross-reality systems and experiences. At this time, we strongly believe that
it is important to propose a set of rules for cross-reality system design. With our nine guiding
principles, we proposed such a fundamental set along our three types of cross-reality systems that
are grounded in a large literature corpus. Although these rules may be partly familiar to crossreality experts, formalizing and communicating such a set can benefit the field of cross-reality
systems. Novice researchers or practitioners can benefit from years of research distilled into a crisp
set of rules that serve as useful guidelines in many practical and educational contexts. The nine
guiding principles we have proposed are backed by our extensive literature review. Nevertheless,
they are not verified through empirical evaluations. In this sense, future research is necessary to
assess their overall applicability. Still, we strongly believe that the rules in their current state form
an important starting point for future and well-established guidelines.

_Research Challenges and Opportunities. We extracted promising research challenges and oppor-_

tunities for future work through our literature review. The field of cross-reality systems is manifold, ranging from introducing implicit transitions that were not part of the underlying research
question [159] to bystander inclusion that focuses primarily on immersed users and less on bystanders [305]. Therefore, little is known about their effects on the corresponding scenario. We see
numerous research opportunities here that can help to shape the understanding of cross-reality
systems and their effects on all involved users.

_Limitations. We acknowledge the following limitations to our survey. We intentionally opted_

for a manual screening approach to compile our literature corpus because it allowed us to include a larger, more diverse set of publications. On the one hand, this procedure can introduce
human error (e.g., overlooking a publication) as our corpus grew substantially in size (overall we
screened 33,522 publications). On the other hand, our manual approach allowed for the identification of publications that investigated cross-reality systems but did not use common terminology
or present the research as a cross-reality-related evaluation. An automated approach like a database query would have suffered from the same limitations. Hence, we believe that our manual
approach led to the compilation of a literature corpus that represents current research in greater
detail than an automated one. Further, we compiled the literature corpus starting with HCI-related
conferences. Consequently, literature that introduced cross-reality systems in other venues might
not be considered in our literature corpus. As this survey approaches cross-reality systems from
an interaction perspective, we started with HCI venues. Other venues (e.g., TVCG or SIGGRAPH)

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:25

often present graphic-focused publications and might lack the interaction part that is of interest to
this survey. Nonetheless, through checking references and citing papers iteratively, we identified
a huge amount of cross-reality systems published in other venues. Finally, we did not investigate
the underlying population of the corresponding user studies in the reviewed papers. Therefore,
our survey does not address possible novelty effects introduced by the presented systems.

**9** **CONCLUSION**

Due to the increasing interest in cross-reality systems, we conducted a scoping literature review,
surveying existing publications that propose such systems. Here, we conducted an in-depth literature review by surveying more than 8,437 papers as an initial pool of papers in this domain,
from 2015 to 2022. By following their referenced papers and papers that cited them, we surveyed
around 25,000 additional papers (as citing or referenced publications). In sum, we identified 306
papers that describe implementations of cross-reality systems (e.g., [137, 192, 255]). These served
as a corpus for classifying their research topics and identifying shared properties. While we see a
growing interest in cross-reality systems, we could not identify common terminology. However, to
describe cross-reality systems and the aforementioned interplay among different actualities, such
terminology should be established. Hence, in our work, we answer the following research question: How can we align the language across communities and establish a solid foundation for future
_work that benefits both researchers and practitioners? In particular, we contribute a classification of_
cross-reality systems into three different types: Type 1: Subjects transitioning on the continuum
experiencing a changing actuality; Type 2: Subjects interacting with objects that are repurposed
for the subject’s actuality; and Type 3: Multiple subjects experiencing different actualities. Furthermore, we contribute to a better understanding of these systems by identifying shared properties
and providing nine guiding principles that should be followed when implementing these systems.
Finally, we conclude our work with research challenges and opportunities that can benefit crossreality systems. Here, we address current shortcomings and propose future research perspectives,
including visualization and prototyping methods for these systems.

**AUTHOR STATEMENT**
This work is original and has not been previously published in archival form.

**REFERENCES**
_References marked with • are in the set of reviewed papers._

[1] • C. Afonso and S. Beckhaus. 2011. How to not hit a virtual wall: Aural spatial awareness for collision avoidance in

virtual environments. In Proc. of 6th Audio Mostly Conference: A Conference on Interaction with Sound.

[2] K. Ahuja, S. Pareddy, R. Xiao, M. Goel, and C. Harrison. 2019. LightAnchors: Appropriating point lights for spatially
[anchored augmented reality interfaces. In Proc. of UIST. ACM. https://doi.org/10.1145/3332165.3347884](https://doi.org/10.1145/3332165.3347884)

[3] G. Alaee, A. P. Deasi, L. Pena-Castillo, E. Brown, and O. Meruvia-Pastor. 2018. A user study on augmented virtuality

using depth sensing cameras for near-range awareness in immersive VR. In IEEE VR’s Workshop on Everyday Virtual
_Reality. IEEE._

[4] • A. Almutawa. 2021. Effect of smooth transition and hybrid reality on virtual realism : A case of virtual art gallery.

_Advances in Science, Technology and Engineering Systems Journal (2021)._

[5] • A. Almutawa and R. Ueoka. 2019. The influence of spatial awareness on VR: Investigating the influence of the

familiarity and awareness of content of the real space to the VR. In Proc. of Int. Conf. on Artificial Intelligence and
_[Virtual Reality. ACM. https://doi.org/10.1145/3348488.3348502](https://doi.org/10.1145/3348488.3348502)_

[6] • T. Amano, S. Kajita, H. Yamaguchi, T. Higashino, and M. Takai. 2018. Smartphone applications testbed using virtual

reality. In Proc. of Int. Conf. on Mobile and Ubiquitous Systems: Computing, Networking and Services. ACM.

[7] • J. An, G. Choi, W. Chun, Y. Joo, S. Park, and I. Ihm. 2022. Accurate and stable alignment of virtual and real spaces

[using consumer-grade trackers. Virtual Reality (2022). https://doi.org/10.1007/s10055-021-00542-1](https://doi.org/10.1007/s10055-021-00542-1)

[8] • S.-G. An, Y. Kim, J. H. Lee, and S.-H. Bae. 2017. Collaborative experience prototyping of automotive interior in VR

[with 3D sketching and haptic helpers. In Proc. of AutoUI. ACM. https://doi.org/10.1145/3122986.3123002](https://doi.org/10.1145/3122986.3123002)

AC C S l A l P bl d O b


-----

83:26 J. Auda et al.

[9] • B. Araujo, R. Jota, V. Perumal, J. X. Yao, K. Singh, and D. Wigdor. 2016. Snake charmer: Physically enabling virtual

[objects. In Proc. of TEI. ACM. https://doi.org/10.1145/2839462.2839484](https://doi.org/10.1145/2839462.2839484)

[10] O. Ardaiz, R. Baztan, U. Dominguez, and A. Marzo. 2019. Facilitating physical contact in collocated virtual reality

and real-world player games through wearable touchable interfaces. In EA of CHI Play. ACM.

[11] • R. Arora, R. Habib Kazi, T. Grossman, G. Fitzmaurice, and K. Singh. 2018. SymbiosisSketch: Combining 2D & 3D

[sketching for designing detailed 3D objects in situ. In Proc. of CHI. ACM. https://doi.org/10.1145/3173574.3173759](https://doi.org/10.1145/3173574.3173759)

[12] N. Ashtari, A. Bunt, J. McGrenere, M. Nebeling, and P. K. Chilana. 2020. Creating augmented and virtual reality

applications: Current practices, challenges, and opportunities. In Proc. of CHI. ACM.

[13] J. Auda, L. Busse, K. Pfeuffer, U. Gruenefeld, R. Rivu, F. Alt, and S. Schneegass. 2021. I’m in control! transferring

object ownership between remote users with haptic props in virtual reality. In Proc. of SUI. ACM.

[14] J. Auda, U. Gruenefeld, and S. Mayer. 2020. It takes two to tango: Conflicts between users on the reality-virtuality

continuum and their bystanders. In International Workshop on Cross-reality (XR) Interaction.

[15] J. Auda, R. Heger, U. Gruenefeld, and S. Schneegass. 2021. VRSketch: Investigating 2D sketching in virtual reality with

[different levels of hand and pen transparency. In Interact. Springer. https://doi.org/10.1007/978-3-030-85607-6_14](https://doi.org/10.1007/978-3-030-85607-6_14)

[16] • J. Auda, M. Pascher, and S. Schneegass. 2019. Around the (Virtual) world: Infinite walking in virtual reality using

[electrical muscle stimulation. In Proc. of CHI. ACM. https://doi.org/10.1145/3290605.3300661](https://doi.org/10.1145/3290605.3300661)

[17] • A. Ayyanchira, E. Mahfoud, W. Wang, and A. Lu. 2022. Toward cross-platform immersive visualization for indoor

navigation and collaboration with augmented reality. Journal of Visualization (2022).

[18] • M. Azmandian, T. Grechkin, and E. S. Rosenberg. 2017. An evaluation of strategies for two-user redirected walking

[in shared physical spaces. In IEEE VR. IEEE. https://doi.org/10.1109/VR.2017.7892235](https://doi.org/10.1109/VR.2017.7892235)

[19] • M. Azmandian, M. Hancock, H. Benko, E. Ofek, and A. D. Wilson. 2016. Haptic retargeting: Dynamic repurposing

of passive haptics for enhanced virtual reality experiences. In Proc. of CHI. ACM.

[20] R. Azuma, Y. Baillot, R. Behringer, S. Feiner, S. J. Julier, and B. MacIntyre. 2001. Recent advances in augmented reality.

_[IEEE Computer Graphics and Applications (2001). https://doi.org/10.1109/38.963459](https://doi.org/10.1109/38.963459)_

[21] E. R. Bachmann, J. Holm, M. A. Zmuda, and E. Hodgson. 2013. Collision prediction and prevention in a simultaneous

[two-user immersive virtual environment. In IEEE VR. IEEE. https://doi.org/10.1109/VR.2013.6549377](https://doi.org/10.1109/VR.2013.6549377)

[22] • H. Bai, L. Zhang, J. Yang, and M. Billinghurst. 2021. Bringing full-featured mobile phone interaction into virtual

[reality. Computers & Graphics (2021). https://doi.org/10.1016/j.cag.2021.04.004](https://doi.org/10.1016/j.cag.2021.04.004)

[23] • D. Bambušek, Z. Materna, M. Kapinus, V. Beran, and P. Smrž. 2022. Handheld augmented reality: Overcoming

reachability limitations by enabling temporal switching to virtual reality. In ACM/IEEE HRI.

[24] • P. Baudisch, H. Pohl, S. Reinicke, E. Wittmers, P. Lühne, M. Knaust, S. Köhler, P. Schmidt, and C. Holz. 2013. Imag
[inary reality gaming: Ball games without a ball. In Proc. of UIST. ACM. https://doi.org/10.1145/2501988.2502012](https://doi.org/10.1145/2501988.2502012)

[25] • M. Bauer, G. Kortuem, and Z. Segall. 1999. “Where are you pointing at?” A study of remote collaboration in a

wearable videoconference system. In 3rd International Symposium on Wearable Computers. IEEE.

[26] • L. Beever and N. W. John. 2022. LevelEd SR: A substitutional reality level design workflow. In Conf. on Virtual

_[Reality and 3D User Interfaces. https://doi.org/10.1109/VR51125.2022.00031](https://doi.org/10.1109/VR51125.2022.00031)_

[27] • J. Bergström, A. Mottelson, and J. Knibbe. 2019. Resized grasping in VR: Estimating thresholds for object discrimi
[nation. In Proc. of UIST. ACM. https://doi.org/10.1145/3332165.3347939](https://doi.org/10.1145/3332165.3347939)

[28] • V. Biener, D. Schneider, T. Gesslein, A. Otte, B. Kuth, P. O. Kristensson, E. Ofek, M. Pahud, and J. Grubert. 2020.

Breaking the screen: Interaction across touchscreen boundaries in virtual reality for mobile knowledge workers.
_[IEEE TVCG (2020). https://doi.org/10.1109/TVCG.2020.3023567](https://doi.org/10.1109/TVCG.2020.3023567)_

[29] • M. Billinghurst, H. Kato, and I. Poupyrev. 2001. The MagicBook - Moving seamlessly between reality and virtuality.

_[IEEE Computer Graphics and Applications (2001). https://doi.org/10.1109/38.920621](https://doi.org/10.1109/38.920621)_

[30] • M. Billinghurst, H. Kato, and I. Poupyrev. 2001. The MagicBook: A transitional AR interface. Computers & Graphics

[(2001). https://doi.org/10.1016/S0097-8493(01)00117-0](https://doi.org/10.1016/S0097-8493(01)00117-0)

[31] • D. Boland and M. McGill. 2015. Lost in the rift: Engaging with mixed reality. XRDS (2015).

[32] • S. Boustila, T. Guégan, K. Takashima, and Y. Kitamura. 2019. Text typing in VR using smartphones touchscreen and

[HMD. In Conference on Virtual Reality and 3D User Interfaces. IEEE. https://doi.org/10.1109/VR.2019.8798238](https://doi.org/10.1109/VR.2019.8798238)

[33] • S. Bovet, A. Kehoe, K. Crowley, N. Curran, M. Gutierrez, M. Meisser, D. O. Sullivan, and T. Rouvinez. 2018. Using

traditional keyboards in VR: SteamVR developer kit and pilot game user study. In IEEE Games, Entertainment, Media
_[Conference (GEM ’18). https://doi.org/10.1109/GEM.2018.8516449](https://doi.org/10.1109/GEM.2018.8516449)_

[34] • B. Brown, I. MacColl, M. Chalmers, A. Galani, C. Randell, and A. Steed. 2003. Lessons from the lighthouse: Collab
[oration in a shared mixed reality system. In Proc. of CHI. ACM. https://doi.org/10.1145/642611.642711](https://doi.org/10.1145/642611.642711)

[35] • G. Bruder, F. Steinicke, and K. H. Hinrichs. 2009. Arch-explore: A natural user interface for immersive architectural

[walkthroughs. In IEEE Symposium on 3D User Interfaces. IEEE. https://doi.org/10.1109/3DUI.2009.4811208](https://doi.org/10.1109/3DUI.2009.4811208)

[36] • G. Bruder, F. Steinicke, K. Rothaus, and K. Hinrichs. 2009. Enhancing presence in head-mounted display environ
ments by visual body feedback using head-mounted cameras. In International Conf. on CyberWorlds.

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:27

[37] • P. Budhiraja, R. Sodhi, B. Jones, K. Karsch, B. Bailey, and D. Forsyth. 2015. Where’s My Drink? Enabling Peripheral

[Real World Interactions While Using HMDs. https://doi.org/10.48550/arXiv.1502.04744](https://doi.org/10.48550/arXiv.1502.04744)

[38] • M. Cabral, O. Belloc, A. Montes, E. Z. Borba, and M. K. Zuffo. 2016. VR THOR – Virtual reality training with hotstick

[on operations risks. In IEEE VR. IEEE. https://doi.org/10.1109/VR.2016.7504786](https://doi.org/10.1109/VR.2016.7504786)

[39] • M. Cavallo, M. Dholakia, M. Havlena, K. Ocheltree, and M. Podlaseck. 2019. Dataspace: A reconfigurable hybrid

reality environment for collaborative information analysis. In IEEE Conf. on Virtual Reality and 3D User Interfaces.

[40] • L. Chan and K. Minamizawa. 2017. FrontFace: Facilitating communication between HMD users and outsiders using

[front-facing-screen HMDs. In Proc. of MobileHCI. ACM. https://doi.org/10.1145/3098279.3098548](https://doi.org/10.1145/3098279.3098548)

[41] M. L. Chenechal, T. Duval, V. Gouranton, J. Royan, and B. Arnaldi. 2016. Vishnu: Virtual immersive support for

HelpiNg users an interaction paradigm for collaborative remote guiding in mixed reality. In IEEE 3rd VR International
_[Workshop on Collaborative Virtual Environments. IEEE. https://doi.org/10.1109/3DCVE.2016.7563559](https://doi.org/10.1109/3DCVE.2016.7563559)_

[42] • L.-P. Cheng, L. Chang, S. Marwecki, and P. Baudisch. 2018. iTurk: Turning passive haptics into active haptics by

[making users reconfigure props in virtual reality. In Proc. of CHI. ACM. https://doi.org/10.1145/3173574.3173663](https://doi.org/10.1145/3173574.3173663)

[43] • L.-P. Cheng, P. Lühne, P. Lopes, C. Sterz, and P. Baudisch. 2014. Haptic turk: A motion platform based on people.

[In Proc. of CHI. ACM. https://doi.org/10.1145/2556288.2557101](https://doi.org/10.1145/2556288.2557101)

[44] • L.-P. Cheng, E. Ofek, C. Holz, and A. D. Wilson. 2019. VRoamer: Generating on-the-fly VR experiences while walking

inside large, unknown real-world building environments. In Conference on Virtual Reality and 3D User Interfaces. IEEE.
[https://doi.org/10.1109/VR.2019.8798074](https://doi.org/10.1109/VR.2019.8798074)

[45] • L.-P. Cheng, T. Roumen, H. Rantzsch, S. Köhler, P. Schmidt, R. Kovacs, J. Jasper, J. Kemper, and P. Baudisch. 2015.

[TurkDeck: Physical virtual reality based on people. In Proc. of UIST. ACM. https://doi.org/10.1145/2807442.2807463](https://doi.org/10.1145/2807442.2807463)

[46] • Y. Cheng, Y. Yan, X. Yi, Y. Shi, and D. Lindlbauer. 2021. SemanticAdapt: Optimization-based adaptation of mixed

reality layouts leveraging virtual-physical semantic connections. In Proc. of UIST. ACM.

[47] • Y. F. Cheng, H. Yin, Y. Yan, J. Gugenheimer, and D. Lindlbauer. 2022. Towards understanding diminished reality. In

_[Proc. of CHI. ACM. https://doi.org/10.1145/3491102.3517452](https://doi.org/10.1145/3491102.3517452)_

[48] • H.-J. Cho and G. J. Kim. 2020. RoadVR: Mitigating the effect of vection and sickness by distortion of pathways for

[in-car virtual reality. In Proc. of ACM VRST. ACM. https://doi.org/10.1145/3385956.3422115](https://doi.org/10.1145/3385956.3422115)

[49] • H.-J. Cho and G. J. Kim. 2022. RideVR: Reducing sickness for in-car virtual reality by mixed-in presentation of

[motion flow information. IEEE Access (2022). https://doi.org/10.1109/ACCESS.2022.3162221](https://doi.org/10.1109/ACCESS.2022.3162221)

[50] • Y. Cho, J. Kang, J. Jeon, J. Park, M. Kim, and J. Kim. 2021. X-person asymmetric interaction in virtual and augmented

[realities. Computer Animation and Virtual Worlds (2021). https://doi.org/10.1002/cav.1985](https://doi.org/10.1002/cav.1985)

[51] • M. Cidota, S. Lukosch, D. Datcu, and H. Lukosch. 2016. Workspace awareness in collaborative AR using HMDs: A

[user study comparing audio and visual notifications. In Proc. of AH. ACM. https://doi.org/10.1145/2875194.2875204](https://doi.org/10.1145/2875194.2875204)

[52] • G. Cirio, M. Marchal, T. Regia-Corte, and A. Lécuyer. 2009. The magic barrier tape: A novel metaphor for infinite

navigation in virtual worlds with a restricted walking workspace. In Proc. of VRST. ACM.

[53] • D. Clergeaud, J. S. Roo, M. Hachet, and P. Guitton. 2017. Towards seamless interaction between physical and virtual

[locations for asymmetric collaboration. In Proc. of VRST. ACM. https://doi.org/10.1145/3139131.3139165](https://doi.org/10.1145/3139131.3139165)

[54] C. Conn, J. Lanier, M. Minsky, S. Fisher, and A. Druin. 1989. Virtual environments and interactivity: Windows to the

[future. SIGGRAPH Comput. Graph. (1989). https://doi.org/10.1145/77277.77278](https://doi.org/10.1145/77277.77278)

[55] • R. Cools, A. Esteves, and A. L. Simeone. 2022. Blending spaces: Cross-reality interaction techniques for object

transitions between distinct virtual and augmented realities. In IEEE ISMAR.

[56] • R. Cools, J. Han, and A. L. Simeone. 2021. SelectVisAR: Selective visualisation of virtual environments in augmented

reality. In Designing Interactive Systems Conference 2021. ACM.

[57] • F. De Pace, G. Gorjup, H. Bai, A. Sanna, M. Liarokapis, and M. Billinghurst. 2020. Assessing the suitability and

effectiveness of mixed reality interfaces for accurate robot teleoperation. In Proc. of ACM VRST. ACM.

[58] • S. de Ribaupierre, R. Armstrong, D. Noltie, M. Kramers, and R. Eagleson. 2015. VR and AR simulator for neurosur
[gical training. In IEEE VR. IEEE. https://doi.org/10.1109/VR.2015.7223338](https://doi.org/10.1109/VR.2015.7223338)

[59] • A. P. Desai, L. Peña-Castillo, and O. Meruvia-Pastor. 2017. A window to your smartphone: Exploring interaction

and communication in immersive VR with augmented virtuality. In Conf. on Computer and Robot Vision. IEEE.

[60] • S. A. A. Didehkhorshid, S. Philip, E. Samimi, and R. J. Teather. 2020. Text input in virtual reality using a tracked

[drawing tablet. In HCII 2020 – Late Breaking Papers. Springer. https://doi.org/10.1007/978-3-030-59990-4_24](https://doi.org/10.1007/978-3-030-59990-4_24)

[61] K. Doherty and G. Doherty. 2018. Engagement in HCI: Conception, theory and measurement. ACM Comput. Surv.

[(2018). https://doi.org/10.1145/3234149](https://doi.org/10.1145/3234149)

[62] • T. Dong, X. Chen, Y. Song, W. Ying, and J. Fan. 2020. Dynamic artificial potential fields for multi-user redirected

[walking. In Conference on Virtual Reality and 3D User Interfaces. IEEE. https://doi.org/10.1109/VR46266.2020.00033](https://doi.org/10.1109/VR46266.2020.00033)

[63] • T. Dong, Y. Shen, T. Gao, and J. Fan. 2021. Dynamic density-based redirected walking towards multi-user virtual

[environments. In IEEE Virtual Reality and 3D User Interfaces. https://doi.org/10.1109/VR50410.2021.00088](https://doi.org/10.1109/VR50410.2021.00088)

AC C S l A l P bl d O b


-----

83:28 J. Auda et al.

[64] • T. Dong, Y. Song, Y. Shen, and J. Fan. 2019. Simulation and evaluation of three-user redirected walking algorithm

in shared physical spaces. In Conference on Virtual Reality and 3D User Interfaces. IEEE.

[65] • Z.-C. Dong, W. Wu, Z. Xu, Q. Sun, G. Yuan, L. Liu, and X.-M. Fu. 2021. Tailored reality: Perception-aware scene

[restructuring for adaptive VR navigation. ACM Trans. Graph. (2021). https://doi.org/10.1145/3470847](https://doi.org/10.1145/3470847)

[66] • T. Drey, J. Gugenheimer, J. Karlbauer, M. Milo, and E. Rukzio. 2020. VRSketchIn: Exploring the design space of pen

and tablet interaction for 3d sketching in virtual reality. In Proc. of CHI. ACM.

[67] • B. Eckstein, E. Krapp, and B. Lugrin. 2018. Towards serious games and applications in smart substitutional reality.

In 2018 10th Int. Conf. on Virtual Worlds and Games for Serious Applications (VS-Games).

[68] M. Eissele, O. Siemoneit, and T. Ertl. 2006. Transition of mixed, virtual, and augmented reality in smart production

environments - An interdisciplinary view. In IEEE Conference on Robotics, Automation and Mechatronics.

[69] • I. Endo, K. Takashima, M. Inoue, K. Fujita, K. Kiyokawa, and Y. Kitamura. 2021. ModularHMD: A reconfigurable

mobile head-mounted display enabling ad-hoc peripheral interactions with the real world. In Proc. of UIST. ACM.

[70] • Arthur Fages, Cédric Fleury, and Theophanis Tsandilas. 2022. Understanding multi-view collaboration between

augmented reality and remote desktop users. Proc. ACM Hum.-Comput. Interact. (2022).

[71] • S. Faltaous, J. Neuwirth, U. Gruenefeld, and S. Schneegass. 2020. SaVR: Increasing safety in virtual reality environ
[ments via electrical muscle stimulation. In Proc. of MUM. ACM. https://doi.org/10.1145/3428361.3428389](https://doi.org/10.1145/3428361.3428389)

[72] • K. Fan, L. Chan, D. Kato, K. Minamizawa, and M. Inami. 2016. VR planet: Interface for meta-view and feet interaction

[of VR contents. In ACM SIGGRAPH VR Village. ACM. https://doi.org/10.1145/2929490.2931001](https://doi.org/10.1145/2929490.2931001)

[73] • C. M. Fang and C. Harrison. 2021. Retargeted self-haptics for increased immersion in VR without instrumentation.

[In Proc. of UIST. ACM. https://doi.org/10.1145/3472749.3474810](https://doi.org/10.1145/3472749.3474810)

[74] • M. Feick, K. P. Regitz, A. Tang, and A. Krüger. 2022. Designing visuo-haptic illusions with proxies in virtual reality:

Exploration of grasp, movement trajectory and object mass. In Proc. of CHI. ACM.

[75] • A. R. Fender and C. Holz. 2022. Causality-preserving asynchronous reality. In Proc. of CHI. ACM.

[76] S. S. Fisher, M. McGreevy, J. Humphries, and W. Robinett. 1987. Virtual environment display system. In Proc. of 1986

_[Workshop on Interactive 3D Graphics. ACM. https://doi.org/10.1145/319120.319127](https://doi.org/10.1145/319120.319127)_

[77] • J. P. Freiwald, S. Schmidt, B. E. Riecke, and F. Steinicke. 2022. The continuity of locomotion: Rethinking conventions

for locomotion and its visualization in shared virtual reality spaces. ACM Trans. Graph. (2022).

[78] • S. Frish, M. Druchok, and H. Shchur. 2020. Molecular MR multiplayer: A cross-platform collaborative interactive

[game for scientists. In Proc. of ACM VRST. ACM. https://doi.org/10.1145/3385956.3422098](https://doi.org/10.1145/3385956.3422098)

[79] • T. Fröhlich, D. Alexandrovsky, T. Stabbert, T. Döring, and R. Malaka. 2018. VRBox: A virtual reality augmented

sandbox for immersive playfulness, creativity and exploration. In Proc. of CHI Play. ACM.

[80] M. Funk, M. Kritzler, and F. Michahelles. 2017. HoloCollab: A shared virtual platform for physical assembly training

using spatially-aware head-mounted displays. In Proc. of International Conf. on the Internet of Things. ACM.

[81] M. Funk, S. Mayer, and A. Schmidt. 2015. Using in-situ projection to support cognitively impaired workers at the

workplace. In Proc. of 17th International ACM SIGACCESS Conf. on Computers & Accessibility. ACM.

[82] • T. Furukawa, D. Yamamoto, M. Sugawa, R. Peiris, and K. Minamizawa. 2019. TeleSight: Enabling asymmetric col
laboration in vr between HMD user and non-HMD users. In ACM SIGGRAPH 2019 Emerging Technologies. ACM.

[83] • W. Gai, C. Yang, Y. Bian, C. Shen, X. Meng, L. Wang, J. Liu, M. Dong, C. Niu, and C. Lin. 2017. Supporting easy

physical-to-virtual creation of mobile VR maze games: A new genre. In Proc. of CHI. ACM.

[84] • L. Gao, H. Bai, W. He, M. Billinghurst, and R. W. Lindeman. 2018. Real-time visual representations for mobile mixed

reality remote collaboration. In SIGGRAPH Asia Virtual & Augmented Reality. ACM.

[85] • J. F. Garcia, A. L. Simeone, M. Higgins, W. Powell, and V. Powell. 2018. Inside looking out or outside looking in?

An evaluation of visualisation modalities to support the creation of a substitutional virtual environment. In Proc. of
_[AVI. ACM. https://doi.org/10.1145/3206505.3206529](https://doi.org/10.1145/3206505.3206529)_

[86] • J. Garcia Estrada and A. L. Simeone. 2017. Recommender system for physical object substitution in VR. In IEEE VR.

[IEEE. https://doi.org/10.1109/VR.2017.7892325](https://doi.org/10.1109/VR.2017.7892325)

[87] • D. Gasques, J. G. Johnson, T. Sharkey, Y. Feng, R. Wang, Z. R. Xu, E. Zavala, Y. Zhang, W. Xie, X. Zhang, K. Davis,

M. Yip, and N. Weibel. 2021. ARTEMIS: A collaborative mixed-reality system for immersive surgical telementoring.
[In Proc. of CHI. ACM. https://doi.org/10.1145/3411764.3445576](https://doi.org/10.1145/3411764.3445576)

[88] • S. Gauglitz, B. Nuernberger, M. Turk, and T. Höllerer. 2014. In touch with the remote world: Remote collaboration

with augmented reality drawings and virtual navigation. In Proc. of VRST. ACM.

[89] • S. Gauglitz, B. Nuernberger, M. Turk, and T. Höllerer. 2014. World-stabilized annotations and virtual scene naviga
[tion for remote collaboration. In Proc. of 2014 UIST. https://doi.org/10.1145/2642918.2647372](https://doi.org/10.1145/2642918.2647372)

[90] • C. George, P. Janssen, D. Heuss, and F. Alt. 2019. Should I interrupt or not? Understanding interruptions in head
mounted display settings. In Proc. of 2019 on Designing Interactive Systems Conference. ACM.

[91] • C. George, P. Tamunjoh, and H. Hussmann. 2020. Invisible boundaries for VR: Auditory and haptic signals as

[indicators for real world boundaries. IEEE TVCG (2020). https://doi.org/10.1109/TVCG.2020.3023607](https://doi.org/10.1109/TVCG.2020.3023607)

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:29

[92] • C. George, A. N. Tien, and H. Hussmann. 2020. Seamless, Bi-directional transitions along the reality-virtuality

continuum: A conceptualization and prototype exploration. In 2020 IEEE ISMAR. IEEE.

[93] • K. Gerling, P. Dickinson, K. Hicks, L. Mason, A. L. Simeone, and K. Spiel. 2020. Virtual reality games for people

[using wheelchairs. In Proc. of CHI. ACM. https://doi.org/10.1145/3313831.3376265](https://doi.org/10.1145/3313831.3376265)

[94] • S. Ghosh, L. Winston, N. Panchal, P. Kimura-Thollander, J. Hotnog, D. Cheong, G. Reyes, and G. D. Abowd. 2018.

NotifiVR: Exploring interruptions and notifications in virtual reality. TVCG (2018).

[95] • D. Goedicke, A. W.D. Bremers, S. Lee, F. Bu, H. Yasuda, and W. Ju. 2022. XR-OOM: MiXed reality driving simulation

[with real cars for research and design. In Proc. of CHI. ACM. https://doi.org/10.1145/3491102.3517704](https://doi.org/10.1145/3491102.3517704)

[96] • M. Gottsacker, N. Norouzi, K. Kim, G. Bruder, and G. Welch. 2021. Diegetic representations for seamless cross-reality

[interruptions. In IEEE ISMAR. https://doi.org/10.1109/ISMAR52148.2021.00047](https://doi.org/10.1109/ISMAR52148.2021.00047)

[97] J. G. Grandi, Z. Cao, M. Ogren, and R. Kopper. 2021. Design and simulation of next-generation augmented reality

user interfaces in virtual reality. In IEEE Conf. on Virtual Reality and 3D User Interfaces Abstracts and Workshops.

[98] • J. G. Grandi, H. G. Debarba, and A. Maciel. 2019. Characterizing asymmetric collaborative interactions in virtual and

[augmented realities. In IEEE Conf. on Virtual Reality and 3D User Interfaces. https://doi.org/10.1109/VR.2019.8798080](https://doi.org/10.1109/VR.2019.8798080)

[99] • R. Grasset, P. Lamb, and M. Billinghurst. 2005. Evaluation of mixed-space collaboration. In Proc. of IEEE/ACM ISMAR.

[IEEE. https://doi.org/10.1109/ISMAR.2005.30](https://doi.org/10.1109/ISMAR.2005.30)

[100] S. W. Greenwald, W. Corning, G. McDowell, P. Maes, and J. Belcher. 2019. ElectroVR: An electrostatic playground

for collaborative, simulation-based exploratory learning in immersive virtual reality. In Proc. of CSCL. International
[Society of the Learning Sciences. https://repository.isls.org/bitstream/1/4597/1/997-1000.pdf](https://repository.isls.org/bitstream/1/4597/1/997-1000.pdf)

[101] • J. Grubert, L. Witzani, E. Ofek, M. Pahud, M. Kranz, and P. O. Kristensson. 2018. Effects of hand representations for

typing in virtual reality. In IEEE Conf. on Virtual Reality and 3D User Interfaces.

[102] • J. Grubert, L. Witzani, E. Ofek, M. Pahud, M. Kranz, and P. O. Kristensson. 2018. Text entry in immersive head
mounted display-based virtual reality using standard keyboards. In Conference on Virtual Reality and 3D User Inter_[faces. IEEE. https://doi.org/10.1109/VR.2018.8446059](https://doi.org/10.1109/VR.2018.8446059)_

[103] • W. Gruenefeld, J. Auda, F. Mathis, S. Schneegass, M. Khamis, J. Gugenheimer, and S. Mayer. 2022. VRception: Rapid

[prototyping of cross-reality systems in virtual reality. In Proc. of CHI. ACM. https://doi.org/10.1145/3491102.3501821](https://doi.org/10.1145/3491102.3501821)

[104] • J. Gugenheimer, E. Stemasov, J. Frommel, and E. Rukzio. 2017. ShareVR: Enabling co-located experiences for virtual

[reality between HMD and non-HMD users. In Proc. of CHI. ACM. https://doi.org/10.1145/3025453.3025683](https://doi.org/10.1145/3025453.3025683)

[105] J. Gugenheimer, E. Stemasov, H. Sareen, and E. Rukzio. 2017. FaceDisplay: Enabling multi-user interaction for mobile

[virtual reality. In EA of CHI. ACM. https://doi.org/10.1145/3027063.3052962](https://doi.org/10.1145/3027063.3052962)

[106] • J. Gugenheimer, E. Stemasov, H. Sareen, and E. Rukzio. 2018. FaceDisplay: Towards asymmetric multi-user interac
[tion for nomadic virtual reality. In Proc. of CHI. ACM. https://doi.org/10.1145/3173574.3173628](https://doi.org/10.1145/3173574.3173628)

[107] • J. Gugenheimer, D. Wolf, G. Haas, S. Krebs, and E. Rukzio. 2016. SwiVRChair: A motorized swivel chair to nudge

users’ orientation for 360 degree storytelling in virtual reality. In Proc. of CHI. ACM.

[108] • J. Guo, D. Weng, Z. Zhang, H. Jiang, Y. Liu, Y. Wang, and H. B.-L. Duh. 2019. Mixed reality office system based on

maslow’s hierarchy of needs: Towards the long-term immersion in virtual environments. In IEEE ISMAR.

[109] • J. Han, A. V. Moere, and A. L. Simeone. 2022. Foldable spaces: An overt redirection approach for natural walking

[in virtual reality. In Conf. on Virtual Reality and 3D User Interfaces. https://doi.org/10.1109/VR51125.2022.00035](https://doi.org/10.1109/VR51125.2022.00035)

[110] • P. H. Han, L. Tsai, J. W. Lin, Y. A. Chan, J. H. Hsu, W. T. Huang, C. E. Hsieh, and Y. P. Hung. 2019. Augmented chair:

Exploring the sittable chair in immersive virtual reality for seamless interaction. In Conference on Virtual Reality and
_[3D User Interfaces. IEEE. https://doi.org/10.1109/VR.2019.8798360](https://doi.org/10.1109/VR.2019.8798360)_

[111] • J. Hartmann, C. Holz, E. Ofek, and A. D. Wilson. 2019. RealityCheck: Blending virtual environments with situated

[physical reality. In Proc. of CHI. ACM. https://doi.org/10.1145/3290605.3300577](https://doi.org/10.1145/3290605.3300577)

[112] • J. Hartmann, Y.-T. Yeh, and D. Vogel. 2020. AAR: augmenting a wearable augmented reality display with an actuated

[head-mounted projector. In Proc. of UIST. ACM. https://doi.org/10.1145/3379337.3415849](https://doi.org/10.1145/3379337.3415849)

[113] • Y. He, Y.-T. Liu, Y.-H. Jin, S.-H. Zhang, Y.-K. Lai, and S.-M. Hu. 2022. Context-consistent generation of indoor virtual

environments based on geometry constraints. IEEE Transactions on Visualization and Computer Graphics (2022). https:
//doi.org/10.1109/TVCG.2021.3111729

[114] • Z. He, C. Lutteroth, and K. Perlin. 2022. TapGazer: Text entry with finger tapping and gaze-directed word selection.

[In Proc. of CHI. ACM. https://doi.org/10.1145/3491102.3501838](https://doi.org/10.1145/3491102.3501838)

[115] • Z. He, F. Zhu, K. Perlin, and X. Ma. 2018. Manifest the Invisible: Design for Situational Awareness of Physical

[Environments in Virtual Reality. https://doi.org/10.48550/arXiv.1809.05837](https://doi.org/10.48550/arXiv.1809.05837)

[116] • Y. Heshmat, B. Jones, X. Xiong, C. Neustaedter, A. Tang, B. E. Riecke, and L. Yang. 2018. Geocaching with a beam:

Shared outdoor activities through a telepresence robot with 360 degree viewing. In Proc. of CHI. ACM.

[117] • A. Hettiarachchi and D. Wigdor. 2016. Annexing reality: Enabling opportunistic use of everyday objects as tangible

[proxies in augmented reality. In Proc. of 2016 CHI. ACM. https://doi.org/10.1145/2858036.2858134](https://doi.org/10.1145/2858036.2858134)

AC C S l A l P bl d O b


-----

83:30 J. Auda et al.

[118] • P. Hock, S. Benedikter, J. Gugenheimer, and E. Rukzio. 2017. CarVR: Enabling in-car virtual reality entertainment.

[In Proc. of 2017 CHI. ACM. https://doi.org/10.1145/3025453.3025665](https://doi.org/10.1145/3025453.3025665)

[119] • H. G. Hoffman, A. Hollander, K. Schroder, S. Rousseau, and T. Furness. 1998. Physically touching and tasting virtual

objects enhances the realism of virtual experiences. Virtual Reality (1998).

[120] • R. Horst, R. Naraghi-Taghi-Off, L. Rau, and R. Dörner. 2021. Back to reality: Transition techniques from short

HMD-based virtual experiences to the physical world. Multimedia Tools and Applications (2021).

[121] • Y. Hoshikawa, K. Fujita, K. Takashima, M. Fjeld, and Y. Kitamura. 2022. RedirectedDoors: Redirection while opening

doors in virtual reality. In Conf. on Virtual Reality and 3D User Interfaces.

[122] • C.-Y. Hsieh, Y.-S. Chiang, H.-Y. Chiu, and Y.-J. Chang. 2020. Bridging the virtual and real worlds: A preliminary

study of messaging notifications in virtual reality. In Proc. of CHI. ACM.

[123] • W. Huang, L. Alem, F. Tecchia, and H. B.-L. Duh. 2018. Augmented 3D hands: A gesture-based mixed reality system

for distributed collaboration. Journal on Multimodal User Interfaces (2018).

[124] • S. Hubenschmid, J. Wieland, D. I. Fink, A. Batch, J. Zagermann, N. Elmqvist, and H. Reiterer. 2022. ReLive: Bridging

in-situ and ex-situ visual analytics for analyzing mixed reality user studies. In Proc. of CHI. ACM.

[125] • S. Hubenschmid, J. Zagermann, S. Butscher, and H. Reiterer. 2021. STREAM: Exploring the combination of spatially
aware tablets with augmented reality head-mounted displays for immersive analytics. In Proc. of CHI. ACM. https:
//doi.org/10.1145/3411764.3445298

[126] • H. Ibayashi, Y. Sugiura, D. Sakamoto, N. Miyata, M. Tada, T. Okuma, T. Kurata, M. Mochimaru, and T. Igarashi.

2015. Dollhouse VR: A multi-view, multi-user collaborative design workspace with VR technology. In SIGGRAPH
_[Asia 2015 Emerging Technologies. ACM. https://doi.org/10.1145/2818466.2818480](https://doi.org/10.1145/2818466.2818480)_

[127] • K. S. A. Ishigaki, A. W. Ismail, and M. Q. Kamruldzaman. 2022. MR-MEET: Mixed reality collaborative interface for

HMD and handheld users. In IEEE Global Conf. on Computing, Power and Communication Technologies (GlobConPT

_[’22). https://doi.org/10.1109/GlobConPT57482.2022.9938307](https://doi.org/10.1109/GlobConPT57482.2022.9938307)_

[128] • A. Ishii, M. Tsuruta, I. Suzuki, S. Nakamae, T. Minagawa, J. Suzuki, and Y. Ochiai. 2017. ReverseCAVE: Providing

reverse perspectives for sharing VR experience. In ACM SIGGRAPH. ACM.

[129] • A. Ishii, M. Tsuruta, I. Suzuki, S. Nakamae, J. Suzuki, and Y. Ochiai. 2019. Let your world open: CAVE-based visual
ization methods of public virtual reality towards a shareable VR experience. In Proc. of 10th Augmented Human Int.
_[Conf. 2019. ACM. https://doi.org/10.1145/3311823.3311860](https://doi.org/10.1145/3311823.3311860)_

[130] • N. Janaka, C. Haigh, H. Kim, S. Zhang, and S. Zhao. 2022. Paracentral and near-peripheral visualizations: Towards

attention-maintaining secondary information presentation on OHMDs during in-person social interactions. In Proc.
_[of CHI. ACM. https://doi.org/10.1145/3491102.3502127](https://doi.org/10.1145/3491102.3502127)_

[131] • P. Jansen, F. Fischbach, J. Gugenheimer, E. Stemasov, J. Frommel, and E. Rukzio. 2020. ShARe: Enabling co-located

asymmetric multi-user interaction for augmented reality head-mounted displays. In Proc. of UIST. ACM.

[132] • K. Jeong, J. Kim, M. Kim, J. Lee, and C. Kim. 2020. Asymmetric interface: User interface of asymmetric virtual reality

[for new presence and experience. Symmetry (2020). https://doi.org/10.3390/sym12010053](https://doi.org/10.3390/sym12010053)

[133] • H.-C. Jetter, R. Rädle, T. Feuchtner, C. Anthes, J. Friedl, and C. N. Klokmose. 2020. “In VR, everything is possible!”:

Sketching and simulating spatially-aware interactive spaces in virtual reality. In Proc. of CHI. ACM.

[134] • D. Jo, K.-H. Kim, and G. J. Kim. 2015. SpaceTime: Adaptive control of the teleported avatar for improved AR tele
[conference experience. Computer Animation and Virtual Worlds (2015). https://doi.org/10.1002/cav.1645](https://doi.org/10.1002/cav.1645)

[135] • B. Jones, Y. Zhang, P. N. Y. Wong, and S. Rintel. 2021. Belonging there: VROOM-Ing into the uncanny valley of XR

[telepresence. Proc. ACM Hum.-Comput. Interact. (2021). https://doi.org/10.1145/3449133](https://doi.org/10.1145/3449133)

[136] J. Jung, H. Lee, J. Choi, A. Nanda, U. Gruenefeld, T. Stratmann, and W. Heuten. 2018. Ensuring safety in augmented

reality from trade-off between immersion and situation Awareness. In IEEE ISMAR.

[137] • S. Jung, P. J. Wisniewski, and C. E. Hughes. 2018. In Limbo: The effect of gradual visual transition between real

and virtual on virtual body ownership illusion and presence. In Conference on Virtual Reality and 3D User Interfaces.
[IEEE. https://doi.org/10.1109/VR.2018.8447562](https://doi.org/10.1109/VR.2018.8447562)

[138] • H. Kaimoto, K. Monteiro, M. Faridan, J. Li, S. Farajian, Y. Kakehi, K. Nakagaki, and R. Suzuki. 2022. Sketched reality:

Sketching bi-directional interactions between virtual and physical worlds with ar and actuated tangible UI. In Proc.
_[of UIST. ACM. https://doi.org/10.1145/3526113.3545626](https://doi.org/10.1145/3526113.3545626)_

[139] • K. Kanamori, N. Sakata, T. Tominaga, Y. Hijikata, K. Harada, and K. Kiyokawa. 2018. Obstacle avoidance method

[in real space for virtual reality immersion. In IEEE ISMAR. IEEE. https://doi.org/10.1109/ISMAR.2018.00033](https://doi.org/10.1109/ISMAR.2018.00033)

[140] • H. Kang and J. Han. 2020. SafeXR: Alerting walking persons to obstacles in mobile XR environments. Visual Com
_[puter (2020). https://doi.org/10.1007/s00371-020-01907-4](https://doi.org/10.1007/s00371-020-01907-4)_

[141] • H. Kang, G. Lee, and J. Han. 2019. Obstacle detection and alert system for smartphone AR users. In 25th ACM VRST.

[ACM. https://doi.org/10.1145/3359996.3364256](https://doi.org/10.1145/3359996.3364256)

[142] • S. Karaosmanoglu, K. Rogers, D. Wolf, E. Rukzio, F. Steinicke, and L. E. Nacke. 2021. Feels like team spirit: Biometric

and strategic interdependence in asymmetric multiplayer VR games. In Proc. of CHI. ACM.

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:31

[143] • M. Kari, T. Grosse-Puppendahl, L. F. Coelho, A. R. Fender, D. Bethge, R. Schütte, and C. Holz. 2021. TransforMR:

Pose-aware object substitution for composing alternate mixed realities. In IEEE ISMAR.

[144] • S. Kasahara and J. Rekimoto. 2015. JackIn head: Immersive visual telepresence system with omnidirectional wear
[able camera for remote collaboration. In Proc. of VRST. ACM. https://doi.org/10.1145/2821592.2821608](https://doi.org/10.1145/2821592.2821608)

[145] • H. Kato, M. Billinghurst, S. Weghorst, and T. Furness. 2012. A Mixed Reality 3D Conferencing Application. Technical

Report R-99-1 Seattle: Human Interface Technology Laboratory, University of Washington.

[146] C. Katsini, Y. Abdrabou, G. E. Raptis, M. Khamis, and F. Alt. 2020. The role of eye gaze in security and privacy

applications: Survey and future HCI research directions. In Proc. of CHI. ACM.

[147] • M. Keller and T. Tchilinguirian. 2019. Obstacles awareness methods from occupancy map for free walking in VR.

[In Conference on Virtual Reality and 3D User Interfaces. IEEE. https://doi.org/10.1109/VR.2019.8798260](https://doi.org/10.1109/VR.2019.8798260)

[148] • M. Keshavarzi, A. Y. Yang, W. Ko, and L. Caldas. 2020. Optimization and manipulation of contextual mutual spaces

for multi-user virtual and augmented reality interaction. In Conference on Virtual Reality and 3D User Interfaces. IEEE.
[https://doi.org/10.1109/VR46266.2020.00055](https://doi.org/10.1109/VR46266.2020.00055)

[149] • R. Kijima and T. Ojika. 1997. Transition between virtual environment and workstation environment with projective

head mounted display. In Proceedings of IEEE 1997 Annual International Symposium on Virtual Reality.

[150] • K. Kilteni, I. Bergstrom, and M. Slater. 2013. Drumming in immersive virtual reality: The body shapes the way we

[play. IEEE TVCG (2013). https://doi.org/10.1109/TVCG.2013.29](https://doi.org/10.1109/TVCG.2013.29)

[151] • H. Kim, T. Kim, M. Lee, G. J. Kim, and J.-I. Hwang. 2021. CIRO: The effects of visually diminished real objects on

[human perception in handheld augmented reality. Electronics (2021). https://doi.org/10.3390/electronics10080900](https://doi.org/10.3390/electronics10080900)

[152] K. Kim, M. Billinghurst, G. Bruder, H. B. Duh, and G. F. Welch. 2018. Revisiting trends in augmented reality research:

A review of the 2nd decade of ISMAR (2008–2017). IEEE Transactions on Visualization and Computer Graphics (2018).

[153] S. Kim, G. Lee, M. Billinghurst, and W. Huang. 2020. The combination of visual communication cues in mixed reality

[remote collaboration. Journal on Multimodal User Interfaces (2020). https://doi.org/10.1007/s12193-020-00335-x](https://doi.org/10.1007/s12193-020-00335-x)

[154] • S. Kim, G. Lee, N. Sakata, and M. Billinghurst. 2014. Improving co-presence with augmented visual communica
tion cues for sharing experience through video conference. In 2014 IEEE ISMAR. https://doi.org/10.1109/ISMAR.2014.
6948412

[155] • Y. R. Kim and G. J. Kim. 2017. HoVR-Type: Smartphone as a typing interface in VR using hovering. In Int. Conf. on

_[Consumer Electronics. IEEE. https://doi.org/10.1109/ICCE.2017.7889285](https://doi.org/10.1109/ICCE.2017.7889285)_

[156] • K. Kiyokawa, H. Takemura, and N. Yokoya. 1999. A collaboration support technique by integrating a shared virtual

[reality and a shared augmented reality. In IEEE SMC’99. IEEE. https://doi.org/10.1109/ICSMC.1999.816444](https://doi.org/10.1109/ICSMC.1999.816444)

[157] • J. Knibbe, J. Schjerlund, M. Petraeus, and K. Hornbæk. 2018. The dream is collapsing: The experience of exiting VR.

[In Proc. of CHI. ACM. https://doi.org/10.1145/3173574.3174057](https://doi.org/10.1145/3173574.3174057)

[158] • P. Knierim, D. Hein, A. Schmidt, and T. Kosch. 2021. The SmARtphone controller: Leveraging smartphones as input

and output modality for improved interaction within mobile augmented reality environments. i-com (2021).

[159] • P. Knierim, V. Schwind, A. M. Feit, F. Nieuwenhuizen, and N. Henze. 2018. Physical keyboards in virtual reality:

Analysis of typing performance and effects of avatar hands. In Proc. of CHI. ACM.

[160] • R. Kodama, M. Koge, S. Taguchi, and H. Kajimoto. 2017. COMS-VR: Mobile virtual reality entertainment system

[using electric car and head-mounted display. In Proc. of 3DUI. https://doi.org/10.1109/3DUI.2017.7893329](https://doi.org/10.1109/3DUI.2017.7893329)

[161] • B. Koleva, H. Schnädelbach, S. Benford, and C. Greenhalgh. 2000. Traversable interfaces between real and virtual

[worlds. In Proc. of CHI. ACM. https://doi.org/10.1145/332040.332437](https://doi.org/10.1145/332040.332437)

[162] • A. Krekhov, D. Preuß, S. Cmentowski, and J. Krüger. 2020. Silhouette games: An interactive one-way mirror ap
[proach to watching players in VR. In Proc. of CHI Play. ACM. https://doi.org/10.1145/3410404.3414247](https://doi.org/10.1145/3410404.3414247)

[163] • Y. Kudo, A. Tang, K. Fujita, I. Endo, K. Takashima, and Y. Kitamura. 2021. Towards balancing VR immersion and

[bystander awareness. Proc. ACM Hum.-Comput. Interact. (2021). https://doi.org/10.1145/3486950](https://doi.org/10.1145/3486950)

[164] • T. Kumaravel, C. Nguyen, S. DiVerdi, and B. Hartmann. 2020. TransceiVR: Bridging asymmetrical communication

[between VR users and external collaborators. In Proc. of UIST. ACM. https://doi.org/10.1145/3379337.3415827](https://doi.org/10.1145/3379337.3415827)

[165] • J. Lacoche, N. Pallamin, T. Boggini, and J. Royan. 2017. Collaborators awareness for user cohabitation in co-located

[collaborative virtual environments. In Proc. of VRST. ACM. https://doi.org/10.1145/3139131.3139142](https://doi.org/10.1145/3139131.3139142)

[166] J. Lacoche, E. Villain, and A. Foulonneau. 2022. Evaluating usability and user experience of AR applications in VR

[simulation. Frontiers in Virtual Reality (2022). https://doi.org/10.3389/frvir.2022.881318](https://doi.org/10.3389/frvir.2022.881318)

[167] E. Langbehn, E. Harting, and F. Steinicke. 2018. Shadow-avatars: A visualization method to avoid collisions of phys
ically co-located users in room-scale VR. In IEEE Workshop on Everyday Virtual Reality. IEEE.

[168] • B. Lee, M. Cordeil, A. Prouzeau, B. Jenny, and T. Dwyer. 2022. A design space for data visualisation transformations

[between 2D and 3D in mixed-reality environments. In Proc. of CHI. ACM. https://doi.org/10.1145/3491102.3501859](https://doi.org/10.1145/3491102.3501859)

[169] • G. Lee, H. Kang, J. Lee, and J. Han. 2020. A user study on view-sharing techniques for one-to-many mixed reality

[collaborations. In IEEE Conf. on Virtual Reality and 3D User Interfaces. https://doi.org/10.1109/VR46266.2020.00054](https://doi.org/10.1109/VR46266.2020.00054)

AC C S l A l P bl d O b


-----

83:32 J. Auda et al.

[170] • G. Lee, S. Kim, Y. Lee, A. Dey, T. Piumsomboon, M. Norman, and M. Billinghurst. 2017. Improving collaboration in

augmented video conference using mutually shared gaze. In Proc. of ICAT-EGVE. Eurographics Association.

[171] • G. A. Lee, T. Teo, S. Kim, and M. Billinghurst. 2017. Mixed reality collaboration through sharing a live panorama.

[In SIGGRAPH Asia 2017 Mobile Graphics & Interactive Applications. ACM. https://doi.org/10.1145/3132787.3139203](https://doi.org/10.1145/3132787.3139203)

[172] • G. A. Lee, T. Teo, S. Kim, and M. Billinghurst. 2018. A user study on MR remote collaboration using live 360 video.

[In IEEE ISMAR. IEEE. https://doi.org/10.1109/ISMAR.2018.00051](https://doi.org/10.1109/ISMAR.2018.00051)

[173] • J. Lee, M. Kim, and J. Kim. 2020. RoleVR: Multi-experience in immersive virtual reality between co-located HMD

[and non-HMD users. Multimedia Tools and Applications (2020). https://doi.org/10.1007/s11042-019-08220-w](https://doi.org/10.1007/s11042-019-08220-w)

[174] C. Li, W. Liang, C. Quigley, Y. Zhao, and L-F. Yu. 2017. Earthquake safety training through virtual drills. IEEE Trans
_[actions on Visualization and Computer Graphics (2017). https://doi.org/10.1109/TVCG.2017.2656958](https://doi.org/10.1109/TVCG.2017.2656958)_

[175] H. Li, E. Whitmire, A. Mariakakis, V. Chan, A. P. Sample, and S. N. Patel. 2019. IDCam: Precise item identification for

[AR enhanced object interactions. In Int. Conf. on RFID. IEEE. https://doi.org/10.1109/RFID.2019.8719279](https://doi.org/10.1109/RFID.2019.8719279)

[176] • J. Li, C. George, A. Ngao, K. Holländer, S. Mayer, and A. Butz. 2021. Rear-seat productivity in virtual reality: Inves
tigating VR interaction in the confined space of a car. Multimodal Technologies and Interaction (2021).

[177] • J. Li, L. Hirsch, T. Lu, S. Mayer, and A. Butz. 2022. A touch of realities: Car-interior-based haptic interaction supports

[in-car VR recovery from interruptions. In Proc. of MuC. ACM. https://doi.org/10.1145/3543758.3543768](https://doi.org/10.1145/3543758.3543768)

[178] • Y. Li and E. Ch’ng. 2022. A framework for sharing cultural heritage objects in hybrid virtual and augmented reality

environments. In Visual Heritage: Digital Approaches in Heritage Science. Springer.

[179] • C. Lin, T. Y. Cheng, and X. Ma. 2020. ARchitect: Building interactive virtual experiences from physical affordances

[by bringing human-in-the-loop. In Proc. of CHI. ACM. https://doi.org/10.1145/3313831.3376614](https://doi.org/10.1145/3313831.3376614)

[180] • D. Lindlbauer and A. D. Wilson. 2018. Remixed reality: Manipulating space and time in augmented reality. In Proc.

_[of CHI. ACM. https://doi.org/10.1145/3173574.3173703](https://doi.org/10.1145/3173574.3173703)_

[181] • C. Mai, S. A. Bartsch, and L. Rieger. 2018. Evaluating shared surfaces for co-located mixed-presence collaboration.

[In Proc. of MUM. ACM. https://doi.org/10.1145/3282894.3282910](https://doi.org/10.1145/3282894.3282910)

[182] C. Mai, M. Hassib, and C. George. 2017. Like elephants do: Sensing bystanders during HMD usage. In Proc. of CHI

_2017 Workshop on Amplification and Augmentation of Human Perception._

[183] • C. Mai, L. Rambold, and M. Khamis. 2017. TransparentHMD: Revealing the HMD user’s face to bystanders. In Proc.

_[of MUM. ACM. https://doi.org/10.1145/3152832.3157813](https://doi.org/10.1145/3152832.3157813)_

[184] C. Mai, T. Wiltzius, F. Alt, and H. Hußmann. 2018. Feeling alone in public: Investigating the influence of spatial layout

[on users’ VR experience. In NordiCHI. ACM. https://doi.org/10.1145/3240167.3240200](https://doi.org/10.1145/3240167.3240200)

[185] • S. Marks and D. White. 2020. Multi-device collaboration in virtual environments. In Proc. of 2020 4th International

_[Conf. on Virtual and Augmented Reality Simulations. ACM. https://doi.org/10.1145/3385378.3385381](https://doi.org/10.1145/3385378.3385381)_

[186] • E. Maruyama and J. Rekimoto. 2019. CompoundDome: A wearable dome device that enables interaction with the

real world by controlling the transparency of the screen. In Proc. of AH. ACM.

[187] • S. Marwecki and P. Baudisch. 2018. Scenograph: Fitting real-walking VR experiences into various tracking volumes.

[In Proc. of UIST. ACM. https://doi.org/10.1145/3242587.3242648](https://doi.org/10.1145/3242587.3242648)

[188] • S. Marwecki, M. Brehm, L. Wagner, L.-P. Cheng, F. ”Floyd” Mueller, and P. Baudisch. 2018. VirtualSpace - Overload
[ing physical space with multiple virtual reality users. In Proc. of CHI. ACM. https://doi.org/10.1145/3173574.3173815](https://doi.org/10.1145/3173574.3173815)

[189] • F. Mathis, X. Zhang, M. McGill, A. L. Simeone, and M. Khamis. 2020. Assessing social text placement in mixed

[reality TV. In ACM Int. Conf. on Interactive Media Experiences. ACM. https://doi.org/10.1145/3391614.3399402](https://doi.org/10.1145/3391614.3399402)

[190] • N. Matsuda, B. Wheelwright, J. Hegland, and D. Lanman. 2021. Reverse pass-through VR. In ACM SIGGRAPH

_[Emerging Technologies. ACM. https://doi.org/10.1145/3450550.3465338](https://doi.org/10.1145/3450550.3465338)_

[191] • K. Matsumoto, T. Narumi, Y. Ban, T. Tanikawa, and M. Hirose. 2017. Turn physically curved paths into virtual

[curved paths. In IEEE VR. IEEE. https://doi.org/10.1109/VR.2017.7892269](https://doi.org/10.1109/VR.2017.7892269)

[192] • M. McGill, D. Boland, R. Murray-Smith, and S. Brewster. 2015. A dose of reality: Overcoming usability challenges

[in VR head-mounted displays. In Proc. of 2015 CHI. ACM. https://doi.org/10.1145/2702123.2702382](https://doi.org/10.1145/2702123.2702382)

[193] • M. McGill, A. Ng, and S. Brewster. 2017. I am the passenger: How visual motion cues can influence sickness for

[in-car VR. In Proc. of CHI. ACM. https://doi.org/10.1145/3025453.3026046](https://doi.org/10.1145/3025453.3026046)

[194] • M. McGill, G. Wilson, D. Medeiros, and S. A. Brewster. 2022. PassengXR: A low cost platform for any-car, multi-user,

[motion-based passenger XR experiences. In Proc. of UIST. ACM. https://doi.org/10.1145/3526113.3545657](https://doi.org/10.1145/3526113.3545657)

[195] • D. Medeiros, R. d. Anjos, N. Pantidi, K. Huang, M. Sousa, C. Anslow, and J. Jorge. 2021. Promoting reality awareness

in virtual reality through proxemics. In IEEE Virtual Reality and 3D User Interfaces.

[196] • T. Menzner, A. Otte, T. Gesslein, J. Grubert, P. Gagel, and D. Schneider. 2019. A capacitive-sensing physical keyboard

[for VR text entry. In Conf. on Virtual Reality and 3D User Interfaces. IEEE. https://doi.org/10.1109/VR.2019.8797754](https://doi.org/10.1109/VR.2019.8797754)

[[197] • P. J. Metzger. 1993. Adding reality to the virtual. In Proc. of IEEE VR. IEEE. https://doi.org/10.1109/VRAIS.1993.380805](https://doi.org/10.1109/VRAIS.1993.380805)

[198] P. Milgram and H. W. Colquhoun Jr. 1999. A framework for relating head-mounted displays to mixed reality displays.

In Proc. of HFES. SAGE Publications Sage CA.

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:33

[199] P. Milgram and F. Kishino. 1994. A taxonomy of mixed reality visual displays. IEICE Transactions on Information and

_Systems (1994)._

[200] P. Milgram, H. Takemura, A. Utsumi, and F. Kishino. 1995. Augmented reality: A class of displays on the reality
virtuality continuum. In Telemanipulator and Telepresence Technologies. International Society for Optics and Photonics, SPIE.

[201] • D.-H. Min, D.-Y. Lee, Y.-H. Cho, and I.-K. Lee. 2020. Shaking hands in virtual space: Recovery in redirected walking

for direct interaction between two users. In Conference on Virtual Reality and 3D User Interfaces. IEEE.

[202] • M. Mirzaei, P. Kán, and H. Kaufmann. 2021. Head Up visualization of spatial sound sources in virtual reality for

deaf and hard-of-hearing people. In IEEE Virtual Reality and 3D User Interfaces.

[203] • K. Misawa and J. Rekimoto. 2015. Wearing another’s personality: A human-surrogate system with a telepresence

[face. In Proc. of ACM ISWC. ACM. https://doi.org/10.1145/2802083.2808392](https://doi.org/10.1145/2802083.2808392)

[204] • T. Miyaki and J. Rekimoto. 2016. LiDARMAN: Reprogramming reality with egocentric laser depth scanning. In

_[ACM SIGGRAPH 2016 Emerging Technologies. ACM. https://doi.org/10.1145/2929464.2929481](https://doi.org/10.1145/2929464.2929481)_

[205] • S. Moro and T. Komuro. 2021. Generation of virtual reality environment based on 3D scanned indoor physical space.

[In Proc. of ISVC. Springer. https://doi.org/10.1007/978-3-030-90439-5_39](https://doi.org/10.1007/978-3-030-90439-5_39)

[206] • T. Muender, A. V. Reinschluessel, S. Drewes, D. Wenig, T. Döring, and R. Malaka. 2019. Does it feel real? Using

tangibles with different fidelities to build and explore scenes in virtual reality. In Proc. of CHI. ACM.

[207] • J. Müller, J. Zagermann, J. Wieland, U. Pfeil, and H. Reiterer. 2019. A qualitative comparison between augmented

and virtual reality collaboration with handheld devices. In Proc. of MuC. ACM.

[208] • L. Müller, K. Pfeuffer, J. Gugenheimer, B. Pfleging, S. Prange, and F. Alt. 2021. SpatialProto: Exploring real-world

motion captures for rapid prototyping of interactive mixed reality. In Proc. of CHI. ACM.

[209] • S. Muto and T. Ijiri. 2020. Life-size sequential photography in a mixed reality environment. In Proc. of ACM VRST.

[210] • S. Nagai, S. Kasahara, and J. Rekimoto. 2015. LiveSphere: Sharing the surrounding visual environment for immersive

experience in remote collaboration. In Proc. of Int. Conf on Tangible, Embedded, and Embodied Interaction. ACM.

[211] D. Nahon, G. Subileau, and B. Capel. 2015. “Never blind VR” enhancing the virtual reality headset experience with

[augmented virtuality. In 2015 IEEE VR. IEEE. https://doi.org/10.1109/VR.2015.7223438](https://doi.org/10.1109/VR.2015.7223438)

[212] • K. Nakano, D. Horita, N. Sakata, K. Kiyokawa, K. Yanai, and T. Narumi. 2019. DeepTaste: Augmented reality gusta
tory manipulation with GAN-based real-time food-to-food translation. In IEEE ISMAR. IEEE.

[213] • T. Narumi, Y. Ban, T. Kajinami, T. Tanikawa, and M. Hirose. 2012. Augmented perception of satiety: Controlling

food consumption by changing apparent size of food with augmented reality. In Proc. of CHI. ACM.

[214] M. Nebeling. 2022. XR tools and where they are taking us: Characterizing the evolving research on augmented,

[virtual, and mixed reality prototyping and development tools. XRDS (2022). https://doi.org/10.1145/3558192](https://doi.org/10.1145/3558192)

[215] • M. Nebeling, K. Lewis, Y.-C. Chang, L. Zhu, M. Chung, P. Wang, and J. Nebeling. 2020. XRDirector: A role-based

[collaborative immersive authoring system. In Proc. of CHI. ACM. https://doi.org/10.1145/3313831.3376637](https://doi.org/10.1145/3313831.3376637)

[216] • H. Nils, A. Pfeiffer, D. Reverberi, M. O. Mints, and J. Rodewald. 2022. Connecting spatially separated laboratory

environments by combining virtual and augmented reality technology. In Proc. of Conf. on Remote Engineering and
_[Virtual Instrumentation. Springer. https://doi.org/10.1007/978-3-031-17091-1_51](https://doi.org/10.1007/978-3-031-17091-1_51)_

[217] • M. Norman, G. A. Lee, R. T. Smith, and M. Billingurst. 2019. The impact of remote user’s role in a mixed reality

mixed presence system. In Proc. of Int. Conf. on Virtual-Reality Continuum and Its Applications in Industry. ACM.

[218] • B. Nuernberger, E. Ofek, H. Benko, and A. D. Wilson. 2016. SnapToReality: Aligning augmented reality to the real

[world. In Proc. of CHI. ACM. https://doi.org/10.1145/2858036.2858250](https://doi.org/10.1145/2858036.2858250)

[219] • N. Numan and A. Steed. 2022. Exploring user behaviour in asymmetric collaborative mixed reality. In Proc. of VRST.

[ACM. https://doi.org/10.1145/3562939.3565630](https://doi.org/10.1145/3562939.3565630)

[220] • O. Oda, C. Elvezio, M. Sukan, S. Feiner, and B. Tversky. 2015. Virtual replicas for remote assistance in virtual and

[augmented reality. In Proc. of UIST. ACM. https://doi.org/10.1145/2807442.2807497](https://doi.org/10.1145/2807442.2807497)

[221] • K. Ogawa, K. Fujita, K. Takashima, and Y. Kitamura. 2022. PseudoJumpOn: Jumping onto steps in virtual reality. In

_[Conf. on Virtual Reality and 3D User Interfaces. https://doi.org/10.1109/VR51125.2022.00084](https://doi.org/10.1109/VR51125.2022.00084)_

[222] • J. O’Hagan and J. R. Williamson. 2020. Reality aware VR headsets. In Proc. of PerDis. ACM.

[223] • J. O’Hagan, J. R. Williamson, and M. Khamis. 2020. Bystander interruption of VR users. In Proc. of PerDis. ACM.

[224] • J. O’Hagan, J. R. Williamson, M. Khamis, and M. McGill. 2022. Exploring manipulating in-VR audio to facilitate

[verbal interactions between VR users and bystanders. In Proc. of AVI. ACM. https://doi.org/10.1145/3531073.3531079](https://doi.org/10.1145/3531073.3531079)

[225] • P. A. Olin, A. M. Issa, T. Feuchtner, and K. Grønbæk. 2021. Designing for heterogeneous cross-device collaboration

and social interaction in virtual reality. In Proc. of Australian Conf. on Human-computer Interaction. ACM.

[226] • Y. H. Ong, A. W. Ismail, N. A. Iahad, M. R. M. Rameli, and R. Dollah. 2020. A mobile game SDK for remote collabo
rative between two users in augmented and virtual reality. IOP Conference Series: Materials Science and Engineering
(2020).

AC C S l A l P bl d O b


-----

83:34 J. Auda et al.

[227] • A. Otte, T. Menzner, T. Gesslein, P. Gagel, D. Schneider, and J. Grubert. 2019. Towards utilizing touch-sensitive

physical keyboards for text entry in virtual reality. In IEEE Conf. on Virtual Reality and 3D User Interfaces.

[228] • K. Ozacar, T. Hagiwara, J. Huang, K. Takashima, and Y. Kitamura. 2015. Coupled-clay: Physical-virtual 3D collabo
[rative interaction environment. In IEEE VR. IEEE. https://doi.org/10.1109/VR.2015.7223392](https://doi.org/10.1109/VR.2015.7223392)

[229] • M. Pan and G. Niemeyer. 2017. Catching a real ball in virtual reality. In IEEE VR. IEEE.

[230] • Y. Pan, D. Sinclair, and K. Mitchell. 2018. Empowerment and embodiment for collaborative mixed reality systems.

_[Computer Animation and Virtual Worlds (2018). https://doi.org/10.1002/cav.1838](https://doi.org/10.1002/cav.1838)_

[231] • P. E. Paredes, S. Balters, K. Qian, E. L. Murnane, F. Ordó nez, W. Ju, and J. A. Landay. 2018. Driving with the fishes:

Towards calming and mindful virtual reality experiences for the car. Proc. ACM Interact. Mob. Wearable Ubiquitous
_[Technol. (2018). https://doi.org/10.1145/3287062](https://doi.org/10.1145/3287062)_

[232] • C. Patras, M. Cibulskis, and N. C. Nilsson. 2022. Body warping versus change blindness remapping: A comparison

of two approaches to repurposing haptic proxies for virtual reality. In Conference on Virtual Reality and 3D User
_[Interfaces. https://doi.org/10.1109/VR51125.2022.00039](https://doi.org/10.1109/VR51125.2022.00039)_

[233] M. T. Pham, A. Rajić, J. D. Greig, J. M. Sargeant, A. Papadopoulos, and S. A. McEwen. 2014. A scoping review of

scoping reviews: Advancing the approach and enhancing the consistency. Research Synthesis Methods (2014).

[234] • K. Pietroszek. 2019. IRIS: Inter-reality interactive surface. In Proc. of VRST. ACM.

[235] • E. Pinson, K. Pietroszek, Q. Sun, and C. Eckhardt. 2020. An open framework for infinite walking with saccadic

[redirection. In Proc. of ACM VRST. ACM. https://doi.org/10.1145/3385956.3422091](https://doi.org/10.1145/3385956.3422091)

[236] • T. Piumsomboon, A. Day, B. Ens, Y. Lee, G. Lee, and M. Billinghurst. 2017. Exploring enhancements for remote

mixed reality collaboration. In SIGGRAPH Asia Mobile Graphics & Interactive Applications. ACM.

[237] • T. Piumsomboon, A. Dey, B. Ens, G. Lee, and M. Billinghurst. 2019. The effects of sharing awareness cues in collab
[orative mixed reality. Frontiers in Robotics and AI (2019). https://doi.org/10.3389/frobt.2019.00005](https://doi.org/10.3389/frobt.2019.00005)

[238] • T. Piumsomboon, G. A. Lee, J. D. Hart, B. Ens, R. W. Lindeman, B. H. Thomas, and M. Billinghurst. 2018. Mini-Me:

An adaptive avatar for mixed reality remote collaboration. In Proc. of CHI. ACM.

[239] • T. Piumsomboon, Y. Lee, G. Lee, and M. Billinghurst. 2017. CoVAR: A collaborative virtual and augmented reality

system for remote collaboration. In SIGGRAPH Asia 2017 Emerging Technologies. ACM.

[240] • I. Podkosova and H. Kaufmann. 2017. Preventing imminent collisions between co-located users in HMD-based VR

in non-shared scenarios. In Int. Conf. on Computer Animation and Social Agents. CASA.

[241] • R. Poelman, O. Akman, S. Lukosch, and P. Jonker. 2012. As if being there: Mediated reality for crime scene investi
[gation. In Proc. of CSCW. ACM. https://doi.org/10.1145/2145204.2145394](https://doi.org/10.1145/2145204.2145394)

[242] • D. Pohl and C. F. de Tejada Quemada. 2016. See what I see: Concepts to improve the social acceptance of HMDs. In

_[2016 IEEE VR. IEEE. https://doi.org/10.1109/VR.2016.7504756](https://doi.org/10.1109/VR.2016.7504756)_

[243] • H. Pohl, T.-S. Dalsgaard, V. Krasniqi, and K. Hornbæk. 2020. Body LayARs: A toolkit for body-based augmented

[reality. In Proc. of ACM VRST. ACM. https://doi.org/10.1145/3385956.3418946](https://doi.org/10.1145/3385956.3418946)

[244] • F. Pointecker, J. Friedl, D. Schwajda, H.-C. Jetter, and C. Anthes. 2022. Bridging the gap across realities: Visual

[transitions between virtual and augmented reality. In IEEE ISMAR. https://doi.org/10.1109/ISMAR55827.2022.00101](https://doi.org/10.1109/ISMAR55827.2022.00101)

[245] • S. Ppali, V. Lalioti, B. Branch, C. S. Ang, A. J. Thomas, B. S. Wohl, and A. Covaci. 2022. Keep the VRhythm going: A

_musician-centred study investigating how virtual reality can support creative musical practice. ACM._

[246] • S. Putze, D. Alexandrovsky, F. Putze, S. Höffner, J. D. Smeddinck, and R. Malaka. 2020. Breaking the experience:

[Effects of questionnaires in VR user studies. In Proc. of CHI. ACM. https://doi.org/10.1145/3313831.3376144](https://doi.org/10.1145/3313831.3376144)

[247] • X. Qian, F. He, X. Hu, T. Wang, A. Ipsita, and K. Ramani. 2022. ScalAR: Authoring semantically adaptive augmented

[reality experiences in virtual reality. In Proc. of CHI. ACM. https://doi.org/10.1145/3491102.3517665](https://doi.org/10.1145/3491102.3517665)

[248] • M. Rauter, C. Abseher, and M. Safar. 2019. Augmenting virtual reality with near real world objects. In Conference

_[on Virtual Reality and 3D User Interfaces. IEEE. https://doi.org/10.1109/VR.2019.8797873](https://doi.org/10.1109/VR.2019.8797873)_

[249] • D. F. Reilly, H. Rouzati, A. Wu, J. Y. Hwang, J. Brudvik, and W. K. Edwards. 2010. TwinSpace: An infrastructure for

[cross-reality team spaces. In Proc. of UIST. ACM. https://doi.org/10.1145/1866029.1866050](https://doi.org/10.1145/1866029.1866050)

[250] P. Reipschläger and R. Dachselt. 2019. DesignAR: Immersive 3D-modeling combining augmented reality with inter
active displays. In Proc. of 2019 ACM International Conf. on Interactive Surfaces and Spaces. ACM.

[251] • N. Reski, A. Alissandrakis, J. Tyrkkö, and A. Kerren. 2020. “Oh, that’s where you are!” – Towards a hybrid asym
metric collaborative immersive analytics system. In Proc. of NordiCHI. ACM.

[252] • T. Rhee, S. Thompson, D. Medeiros, R. dos Anjos, and A. Chalmers. 2020. Augmented virtual teleportation for

[high-fidelity telecollaboration. IEEE TVCG (2020). https://doi.org/10.1109/TVCG.2020.2973065](https://doi.org/10.1109/TVCG.2020.2973065)

[253] • J. S. Roo, J. Basset, P.-A. Cinquin, and M. Hachet. 2018. Understanding users’ capability to transfer information

between mixed and virtual reality: Position estimation across modalities and perspectives. In Proc. of CHI. ACM.

[254] • J. S. Roo, R. Gervais, J. Frey, and M. Hachet. 2017. Inner garden: Connecting inner states to a mixed reality sandbox

[for mindfulness. In Proc. of CHI. ACM. https://doi.org/10.1145/3025453.3025743](https://doi.org/10.1145/3025453.3025743)

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:35

[255] • J. S. Roo and M. Hachet. 2017. One reality: Augmenting how the physical world is experienced by combining

[multiple mixed reality modalities. In Proc. of UIST. ACM. https://doi.org/10.1145/3126594.3126638](https://doi.org/10.1145/3126594.3126638)

[256] • J. S. Roo and M. Hachet. 2017. Towards a hybrid space combining Spatial Augmented Reality and virtual reality. In

_[IEEE 3DUI. IEEE. https://doi.org/10.1109/3DUI.2017.7893339](https://doi.org/10.1109/3DUI.2017.7893339)_

[257] • A. Rostami, C. Rossitto, and A. Waern. 2018. Frictional realities: Enabling immersion in mixed-reality performances.

[In Proc. of TVX. ACM. https://doi.org/10.1145/3210825.3210827](https://doi.org/10.1145/3210825.3210827)

[258] • A. Ruvimova, J. Kim, T. Fritz, M. Hancock, and D. C. Shepherd. 2020. “Transport me away”: Fostering flow in open

[offices through virtual reality. In Proc. of CHI. ACM. https://doi.org/10.1145/3313831.3376724](https://doi.org/10.1145/3313831.3376724)

[259] • R. Rzayev, S. Mayer, C. Krauter, and N. Henze. 2019. Notification in VR: The effect of notification placement, task

[and environment. In Proc. of CHI Play. ACM. https://doi.org/10.1145/3311350.3347190](https://doi.org/10.1145/3311350.3347190)

[260] J. Sachs. 2005. Aristotle–motion and its place in nature. In Internet Encyclopedia of Philosophy.

[261] • P. Sajjadi, E. O. Cebolledo Gutierrez, S. Trullemans, and O. De Troyer. 2014. Maze Commander: A collaborative

asynchronous game using the oculus rift & the sifteo cubes. In Proc. of CHI Play. ACM.

[262] • K. A. Satriadi, J. Smiley, B. Ens, M. Cordeil, T. Czauderna, B. Lee, Y. Yang, T. Dwyer, and B. Jenny. 2022. Tangible

globes for data visualisation in augmented reality. In Proc. of CHI. ACM.

[263] A. Scavarelli and R. J. Teather. 2017. VR collide! Comparing collision-avoidance methods between co-located virtual

[reality users. In EA of CHI. ACM. https://doi.org/10.1145/3027063.3053180](https://doi.org/10.1145/3027063.3053180)

[264] • S. Schmidt, O. Ariza, and F. Steinicke. 2020. Intelligent blended agents: Reality–virtuality interaction with artificially

intelligent embodied virtual humans. Multimodal Technologies and Interaction (2020).

[265] • S. Schmidt, O. J. A. Nunez, and F. Steinicke. 2019. Blended agents: Manipulation of physical objects within mixed

[reality environments and beyond. In Proc. of SUI. ACM. https://doi.org/10.1145/3357251.3357591](https://doi.org/10.1145/3357251.3357591)

[266] • D. Schneider, A. Otte, T. Gesslein, P. Gagel, B. Kuth, M. S. Damlakhi, O. Dietz, E. Ofek, M. Pahud, P. Kristensson,

J. Müller, and J. Grubert. 2019. ReconViguRation: Reconfiguring physical keyboards in virtual reality. IEEE TVCG
[(2019). https://doi.org/10.1109/TVCG.2019.2932239](https://doi.org/10.1109/TVCG.2019.2932239)

[267] • D. Schott, P. Saalfeld, G. Schmidt, F. Joeres, C. Boedecker, F. Huettl, H. Lang, T. Huber, B. Preim, and C. Hansen.

2021. A VR/AR environment for multi-user liver anatomy education. In IEEE Virtual Reality and 3D User Interfaces.

[268] • C. Schwede and T. Hermann. 2015. HoloR: Interactive mixed-reality rooms. In Int. Conf. on Cognitive Infocommu
_[nications. IEEE. https://doi.org/10.1109/CogInfoCom.2015.7390647](https://doi.org/10.1109/CogInfoCom.2015.7390647)_

[269] • J. Shin and K. Lee. 2022. Incorporating real-world object into virtual reality: Using mobile device input with aug
[mented virtuality. Multimedia Tools and Applications (2022). https://doi.org/10.1007/s11042-022-13637-x](https://doi.org/10.1007/s11042-022-13637-x)

[270] B. Shneiderman. 1998. Designing the User Interface – Strategies for Effective Human-computer-interaction.

[271] • A. L. Simeone, N. Christian Nilsson, A. Zenner, M. Speicher, and F. Daiber. 2020. The space bender: Supporting

natural walking via overt manipulation of the virtual environment. In Conference on Virtual Reality and 3D User
_Interfaces._

[272] A. L. Simeone, R. Cools, S. Depuydt, J. M. Gomes, P. Goris, J. Grocott, A. Esteves, and K. Gerling. 2022. Immersive

speculative enactments: Bringing future scenarios and technology to life using virtual reality. In Proc. of CHI. ACM.

[273] A. L. Simeone, M. Khamis, A. Esteves, F. Daiber, M. Kljun, K. Čopič Pucihar, P. Isokoski, and J. Gugenheimer. 2020.

International workshop on cross-reality (XR) interaction. In Companion Proc. of ISS.

[274] • A. L. Simeone, I. Mavridou, and W. Powell. 2017. Altering user movement behaviour in virtual environments. IEEE

_[TVCG (2017). https://doi.org/10.1109/TVCG.2017.2657038](https://doi.org/10.1109/TVCG.2017.2657038)_

[275] • A. L. Simeone, E. Velloso, and H. Gellersen. 2015. Substitutional reality: Using the physical environment to design

[virtual reality experiences. In Proc. of CHI. https://doi.org/10.1145/2702123.2702389](https://doi.org/10.1145/2702123.2702389)

[276] • A. Singh, R. Kaur, P. Haltner, M. Peachey, M. Gonzalez-Franco, J. Malloch, and D. Reilly. 2021. Story CreatAR: A

toolkit for spatially-adaptive augmented reality storytelling. In 2021 IEEE Virtual Reality and 3D User Interfaces.

[277] • R. Soret, A.-M. Montes-Solano, C. Manzini, V. Peysakhovich, and E. Fabre. 2021. Pushing open the door to reality:

On facilitating the transitions from virtual to real environments. Applied Ergonomics (2021).

[278] M. Speicher, B. D. Hall, and M. Nebeling. 2019. What is mixed reality? In Proc. of 2019 CHI. ACM. https://doi.org/10.

1145/3290605.3300767

[279] D. Spencer. 2009. Card Sorting: Designing Usable Categories. Rosenfeld Media.

[280] • D. Sproll, J. Freiberg, T. Grechkin, and B. E. Riecke. 2013. Poster: Paving the way into virtual reality - A transition

[in five stages. In Proc. of 3DUI. IEEE. https://doi.org/10.1109/3DUI.2013.6550235](https://doi.org/10.1109/3DUI.2013.6550235)

[281] • M. Sra, S. Garrido-Jurado, C. Schmandt, and P. Maes. 2016. Procedurally generated virtual reality from 3D recon
[structed physical space. In Proc. of VRST. ACM. https://doi.org/10.1145/2993369.2993372](https://doi.org/10.1145/2993369.2993372)

[282] • A. Stafford and W. Piekarski. 2008. User evaluation of god-like interaction techniques. In Proc. of 9th Conference on

_Australasian User Interface. Australian Computer Society._

[283] • A. Stafford, W. Piekarski, and B. Thomas. 2006. Implementation of god-like interaction techniques for supporting

collaboration between outdoor AR and indoor tabletop users. In Proc. of IEEE/ACM ISMAR. IEEE.

AC C S l A l P bl d O b


-----

83:36 J. Auda et al.

[284] • F. Steinicke, G. Bruder, K. Hinrichs, A. Steed, and A. L. Gerlach. 2009. Does a gradual transition to the virtual world

[increase presence? In 2009 IEEE VR Conference. IEEE. https://doi.org/10.1109/VR.2009.4811024](https://doi.org/10.1109/VR.2009.4811024)

[285] • Y. Sugiura, H. Ibayashi, T. Chong, D. Sakamoto, N. Miyata, M. Tada, T. Okuma, T. Kurata, T. Shinmura, M. Mochi
maru, and T. Igarashi. 2018. An asymmetric collaborative system for architectural-scale space design. In Proc. of ACM
_SIGGRAPH Int. Conf. on Virtual-Reality Continuum and Its Applications in Industry. ACM._

[286] • E. A. Suma, D. M. Krum, and M. Bolas. 2011. Sharing space in mixed and virtual reality environments using a

low-cost depth sensor. In IEEE International Symposium on VR Innovation. IEEE. https://doi.org/10.1109/ISVRI.2011.
5759673

[287] • H.B. Surale, A. Gupta, M. Hancock, and D. Vogel. 2019. TabletInVR: Exploring the design space for using a multi
[touch tablet in virtual reality. In Proc. of CHI. ACM. https://doi.org/10.1145/3290605.3300243](https://doi.org/10.1145/3290605.3300243)

[288] • K. Suzuki, S. Wakisaka, and N. Fujii. 2012. Substitutional reality system: A novel experimental platform for experi
[encing alternative reality. Scientific Reports (2012). https://doi.org/10.1038/srep00459](https://doi.org/10.1038/srep00459)

[289] • R. Suzuki, R. H. Kazi, L. Wei, S. DiVerdi, W. Li, and D. Leithinger. 2020. RealitySketch: Embedding responsive

[graphics and visualizations in AR through dynamic sketching. In ACM UIST. https://doi.org/10.1145/3379337.3415892](https://doi.org/10.1145/3379337.3415892)

[290] • A. Irlitti B. Ens B. H. Thomas T. Piumsomboon, G. A. Lee and M. Billinghurst. 2019. On the shoulder of the giant:

A multi-scale mixed reality collaboration with 360 video sharing and tangible interaction. In Proc. of CHI. ACM.

[291] • Y. Tao and P. Lopes. 2022. Integrating real-world distractions into virtual reality. In Proc. of UIST. ACM.

[292] • F. Tecchia, L. Alem, and W. Huang. 2012. 3D helping hands: A gesture based MR system for remote collaboration.

In Proc. of SIGGRAPH Int. Conf. on Virtual-Reality Continuum and Its Applications in Industry. ACM.

[293] • T. Teo, L. Lawrence, G. A. Lee, M. Billinghurst, and M. Adcock. 2019. Mixed reality remote collaboration combining

[360 video and 3D reconstruction. In Proc. of CHI. ACM. https://doi.org/10.1145/3290605.3300431](https://doi.org/10.1145/3290605.3300431)

[294] • T. Teo, G. A. Lee, M. Billinghurst, and M. Adcock. 2019. Supporting visual annotation cues in a live 360 panorama
based mixed reality remote collaboration. In Conference on Virtual Reality and 3D User Interfaces. IEEE.

[295] • S. Thanyadit, P. Punpongsanon, and T.-C. Pong. 2019. ObserVAR: Visualization system for observing virtual reality

[users using augmented reality. In IEEE ISMAR. IEEE. https://doi.org/10.1109/ISMAR.2019.00023](https://doi.org/10.1109/ISMAR.2019.00023)

[296] • J. Thomas, C. Hutton Pospick, and E. Suma Rosenberg. 2020. Towards physically interactive virtual environments:

[reactive alignment with redirected walking. In Proc. of ACM VRST. ACM. https://doi.org/10.1145/3385956.3418966](https://doi.org/10.1145/3385956.3418966)

[297] • B. Thoravi Kumaravel, F. Anderson, G. Fitzmaurice, B. Hartmann, and T. Grossman. 2019. Loki: Facilitating remote

instruction of physical tasks using bi-directional mixed-reality telepresence. In Proc. of UIST. ACM.

[298] • B. Thoravi Kumaravel and A. D. Wilson. 2022. DreamStream: Immersive and interactive spectating in VR. In Proc.

_[of CHI. ACM. https://doi.org/10.1145/3491102.3517508](https://doi.org/10.1145/3491102.3517508)_

[299] • Y. Tian, C. W. Fu, S. Zhao, R. Li, X. Tang, X. Hu, and P. A. Heng. 2019. Enhancing augmented VR interaction via

egocentric scene analysis. Proc. ACM Interact. Mob. Wearable Ubiquitous Technol. (2019).

[300] • K. T. P. Tran, S. Jung, S. Hoermann, and R. W. Lindeman. 2019. MDI: A multi-channel dynamic immersion headset for

seamless switching between virtual and real world activities. In Conference on Virtual Reality and 3D User Interfaces.
[https://doi.org/10.1109/VR.2019.8798240](https://doi.org/10.1109/VR.2019.8798240)

[301] • A. E. Unlu and R. Xiao. 2021. PAIR: Phone as an augmented immersive reality controller. In Proc. of VRST. ACM.

[302] • I. Valentini, G. Ballestin, C. Bassano, F. Solari, and M. Chessa. 2020. Improving obstacle awareness to enhance

interaction in virtual reality. In Conference on Virtual Reality and 3D User Interfaces. IEEE.

[303] • D. Valkov and S. Flagge. 2017. Smooth immersion: The benefits of making the transition to virtual environments a

[continuous process. In Proc. of SUI. ACM. https://doi.org/10.1145/3131277.3132183](https://doi.org/10.1145/3131277.3132183)

[304] • D. Valkov and L. Linsen. 2019. Vibro-tactile feedback for real-world awareness in immersive virtual environments.

[In IEEE Conf. on Virtual Reality and 3D User Interfaces. https://doi.org/10.1109/VR.2019.8798036](https://doi.org/10.1109/VR.2019.8798036)

[305] • J. von Willich, M. Funk, F. Müller, K. Marky, J. Riemann, and M. Mühlhäuser. 2019. You invaded my tracking space!

Using augmented virtuality for spotting passersby in room-scale virtual reality. In Proc. of DIS. ACM.

[306] • J. Walker, B. Li, K. Vertanen, and S. Kuhl. 2017. Efficient typing on a visually occluded physical keyboard. In Proc.

_[of CHI. ACM. https://doi.org/10.1145/3025453.3025783](https://doi.org/10.1145/3025453.3025783)_

[307] • C.-H. Wang, B.-Y. Chen, and L. Chan. 2022. RealityLens: A user interface for blending customized physical world

[view into virtual reality. In Proc. of UIST. ACM. https://doi.org/10.1145/3526113.3545686](https://doi.org/10.1145/3526113.3545686)

[308] • C.-H. Wang, C.-E. Tsai, S. Yong, and L. Chan. 2020. Slice of light: Transparent and integrative transition among

[realities in a multi-HMD-user environment. In Proc. of UIST. ACM. https://doi.org/10.1145/3379337.3415868](https://doi.org/10.1145/3379337.3415868)

[309] • C.-H. Wang, S. Yong, H.-Y. Chen, Y.-S. Ye, and L. Chan. 2020. HMD light: Sharing In-VR experience via head-mounted

[projector for asymmetric interaction. In Proc. of UIST. ACM. https://doi.org/10.1145/3379337.3415847](https://doi.org/10.1145/3379337.3415847)

[310] • J. Wang and R. Lindeman. 2014. Coordinated 3D interaction in tablet-and HMD-based hybrid virtual environments.

[In Proc. of 2nd ACM Symposium on Spatial User Interaction. https://doi.org/10.1145/2659766.2659777](https://doi.org/10.1145/2659766.2659777)

[311] J. Wang and R. Lindeman. 2015. Coordinated hybrid virtual environments: Seamless interaction contexts for effective

[virtual reality. Computers & Graphics (2015). https://doi.org/10.1016/j.cag.2015.02.007](https://doi.org/10.1016/j.cag.2015.02.007)

AC C S l A l P bl d O b


-----

A Scoping Survey on Cross-reality Systems 83:37

[312] • J. Wang and R. W. Lindeman. 2015. Object impersonation: Towards effective interaction in tablet- and HMD-based

[hybrid virtual environments. In IEEE VR. https://doi.org/10.1109/VR.2015.7223332](https://doi.org/10.1109/VR.2015.7223332)

[313] N. Wang and F. Maurer. 2022. A design space for single-user cross-reality applications. In Proc. of AVI. ACM.

[314] • X. Wang, H. Ye, C. Sandor, W. Zhang, and H. Fu. 2022. Predict-and-drive: Avatar motion adaption in room-scale

augmented reality telepresence with heterogeneous spaces. IEEE TVCG (2022).

[315] • Y. Wang, Z. (T.) Chen, H. Li, Z. Cao, H. Luo, T. Zhang, K. Ou, J. Raiti, C. Yu, S. Patel, and Y. Shi. 2020. MoveVR:

Enabling multiform force feedback in virtual reality using household cleaning robot. In Proc. of CHI. ACM.

[316] • Y. Wang, K. Otitoju, T. Liu, S. Kim, and D. A. Bowman. 2006. Evaluating the effects of real world distraction on user

[performance in virtual environments. Proc. of ACM VRST. ACM. https://doi.org/10.1145/1180495.1180501](https://doi.org/10.1145/1180495.1180501)

[317] • Z. Wang, C. Nguyen, P. Asente, and J. Dorsey. 2021. DistanciAR: Authoring site-specific augmented reality experi
[ences for remote environments. In Proc. of CHI. ACM. https://doi.org/10.1145/3411764.3445552](https://doi.org/10.1145/3411764.3445552)

[318] • F. Welsford-Ackroyd, A. Chalmers, R. Kuffner dos Anjos, D. Medeiros, H. Kim, and T. Rhee. 2021. Spectator view:

Enabling asymmetric interaction between HMD wearers and spectators with a large display. Proc. of Hum.-Comput.
_[Interact. (2021). https://doi.org/10.1145/3486951](https://doi.org/10.1145/3486951)_

[319] • B. Williams, G. Narasimham, B. Rump, T. P. McNamara, T. H. Carr, J. Rieser, and B. Bodenheimer. 2007. Exploring

large virtual environments with an HMD when physical space is limited. In Proc. of SAP. ACM.

[320] • N. L. Williams, A. Bera, and D. Manocha. 2021. ARC: Alignment-based redirection controller for redirected walking

in complex environments. IEEE Transactions on Visualization and Computer Graphics (2021).

[321] J. R. Williamson, M. McGill, and K. Outram. 2019. PlaneVR: Social acceptability of virtual reality for aeroplane pas
[sengers. In Proc. of 2019 CHI. ACM. https://doi.org/10.1145/3290605.3300310](https://doi.org/10.1145/3290605.3300310)

[322] • P. Wozniak, A. Capobianco, N. Javahiraly, and D. Curticapean. 2018. Towards unobtrusive obstacle detection and

[notification for VR. In Proc. of VRST. ACM. https://doi.org/10.1145/3281505.3283391](https://doi.org/10.1145/3281505.3283391)

[323] • F. Wu and E. S. Rosenberg. 2019. Combining dynamic field of view modification with physical obstacle avoidance.

[In Conference on Virtual Reality and 3D User Interfaces. IEEE. https://doi.org/10.1109/VR.2019.8798015](https://doi.org/10.1109/VR.2019.8798015)

[324] • B. Xie, Q. Zhou, and L. Yu. 2015. A real-time welding training system base on virtual reality. In IEEE VR. IEEE.

[325] • S. Xu, B. Yang, B. Liu, K. Cheng, S. Masuko, and J. Tanaka. 2019. Sharing augmented reality experience between

HMD and non-HMD user. In Human Interface and the Management of Information. Information in Intelligent Systems,
[Sakae Yamamoto and Hirohiko Mori (Eds.). Springer Int. Pub. https://doi.org/10.1007/978-3-030-22649-7_16](https://doi.org/10.1007/978-3-030-22649-7_16)

[326] • X. Xu, X. Pan, and A. G. Campbell. 2020. ARLS: An asymmetrical remote learning system for sharing anatomy

[between an HMD and a light field display. In Proc. of ACM VRST. ACM. https://doi.org/10.1145/3385956.3422095](https://doi.org/10.1145/3385956.3422095)

[327] • S. Yamada and N. P. Chandrasiri. 2018. Evaluation of hand gesture annotation in remote collaboration using aug
[mented reality. In Conference on Virtual Reality and 3D User Interfaces. IEEE. https://doi.org/10.1109/VR.2018.8446287](https://doi.org/10.1109/VR.2018.8446287)

[328] • T. Yamamoto, J. Shimatani, I. Ohashi, K. Matsumoto, T. Narumi, T. Tanikawa, and M. Hirose. 2018. Mobius walker:

Pitch and roll redirected walking. In Conference on Virtual Reality and 3D User Interfaces. IEEE.

[329] • J. Yang, P. Sasikumar, H. Bai, A. Barde, G. Sörös, and M. Billinghurst. 2020. The effects of spatial auditory and visual

cues on mixed reality remote collaboration. Journal on Multimodal User Interfaces (2020).

[330] • J. (Junrui) Yang, C. Holz, E. Ofek, and A. D. Wilson. 2019. DreamWalker: Substituting real-world walking experi
[ences with a virtual reality. In Proc. of UIST. ACM. https://doi.org/10.1145/3332165.3347875](https://doi.org/10.1145/3332165.3347875)

[331] • K.-T. Yang, C.-H. Wang, and L. Chan. 2018. ShareSpace: Facilitating shared use of the physical space by both VR

[head-mounted display and external users. In Proc. of UIST. ACM. https://doi.org/10.1145/3242587.3242630](https://doi.org/10.1145/3242587.3242630)

[332] • A. Yassien, M. A. Soliman, and S. Abdennadher. 2022. QuarantivityVR: Supporting self-embodiment for non-HMD

[users in asymmetric social VR games. i-com (2022). https://doi.org/10.1515/icom-2022-0005](https://doi.org/10.1515/icom-2022-0005)

[[333] M.-S. Yoh. 2001. The reality of virtual reality. In Proc. of VSMM. https://doi.org/10.1109/VSMM.2001.969726](https://doi.org/10.1109/VSMM.2001.969726)

[334] • B. Yoon, H. Kim, S. Y. Oh, and W. Woo. 2020. Evaluating remote virtual hands models on social presence in hand
[based 3D remote collaboration. In 2020 IEEE ISMAR. IEEE. https://doi.org/10.1109/ISMAR50242.2020.00080](https://doi.org/10.1109/ISMAR50242.2020.00080)

[335] • J. Young, T. Langlotz, M. Cook, S. Mills, and H. Regenbrecht. 2019. Immersive telepresence and remote collaboration

using mobile and wearable devices. IEEE Transactions on Visualization and Computer Graphics (TVCG) (2019). https:
//ieeexplore.ieee.org/document/8642375

[336] • K. Yu, U. Eck, F. Pankratz, M. Lazarovici, D. Wilhelm, and N. Navab. 2022. Duplicated reality for co-located aug
[mented reality collaboration. IEEE TVCG (2022). https://doi.org/10.1109/TVCG.2022.3150520](https://doi.org/10.1109/TVCG.2022.3150520)

[337] • K. Yu, G. Gorbachev, U. Eck, F. Pankratz, N. Navab, and D. Roth. 2021. Avatars for teleconsultation: Effects of avatar

embodiment techniques on user perception in 3D asymmetric telepresence. IEEE TVCG (2021).

[338] • Y. Yue, Y. Yang, G. Ren, and W. Wang. 2017. SceneCtrl: Mixed reality enhancement via efficient scene editing. In

_[Proc. of UIST. ACM. https://doi.org/10.1145/3126594.3126601](https://doi.org/10.1145/3126594.3126601)_

[339] • D. Yule, B. MacKay, and D. Reilly. 2015. Operation citadel: Exploring the role of docents in mixed reality. In Proc. of

_[CHI Play. ACM. https://doi.org/10.1145/2793107.2793135](https://doi.org/10.1145/2793107.2793135)_

AC C S l A l P bl d O b


-----

83:38 J. Auda et al.

[340] • Q. Zhang, J.-S. Ban, M. Kim, H. W. Byun, and C.-H. Kim. 2021. Low-asymmetry interface for multiuser VR experi
[ences with both HMD and non-HMD users. Sensors (2021). https://doi.org/10.3390/s21020397](https://doi.org/10.3390/s21020397)

[341] • Y. Zhang, N. Ladevèze, C. Fleury, and P. Bourdot. 2019. Switch techniques to recover spatial consistency between

virtual and real world for navigation with teleportation. In Virtual Reality and Augmented Reality. Springer Int. Pub.

[342] • Y. Zhang, N. Ladeveze, H. Nguyen, C. Fleury, and P. Bourdot. 2020. Virtual navigation considering user workspace:

Automatic and manual positioning before teleportation. In Proc. of ACM VRST. ACM.

[343] F. Zhou, H. B.-L. Duh, and M. Billinghurst. 2008. Trends in augmented reality tracking, interaction and display: A

[review of ten years of ISMAR. In IEEE/ACM ISMAR. https://doi.org/10.1109/ISMAR.2008.4637362](https://doi.org/10.1109/ISMAR.2008.4637362)

[344] • G. Zhou, A. Nagle, G. Takahashi, T. Hornbeck, A. Loomis, B. Smith, B. Duerstock, and D. Yu. 2022. Bringing patient

mannequins to life: 3D projection enhances nursing simulation. In Proc. of CHI. ACM.

[345] • Q. Zhou, G. Fitzmaurice, and F. Anderson. 2022. In-depth mouse: Integrating desktop mouse into virtual reality. In

_[Proc. of CHI. ACM. https://doi.org/10.1145/3491102.3501884](https://doi.org/10.1145/3491102.3501884)_

[346] • Z. Zhou, E. Márquez Segura, J. Duval, M. John, and K. Isbister. 2019. Astaire: A collaborative mixed reality dance

[game for collocated players. In Proc. of CHI Play. ACM. https://doi.org/10.1145/3311350.3347152](https://doi.org/10.1145/3311350.3347152)

[347] • F. Zhu and T. Grossman. 2020. BISHARE: Exploring bidirectional interactions between smartphones and head
[mounted augmented reality. In Proc. of CHI. ACM. https://doi.org/10.1145/3313831.3376233](https://doi.org/10.1145/3313831.3376233)

[348] • F. Zhu, Z. Lyu, M. Sousa, and T. Grossman. 2022. Touching The droid: Understanding and improving touch precision

[with mobile devices in virtual reality. In 2022 IEEE ISMAR. https://doi.org/10.1109/ISMAR55827.2022.00099](https://doi.org/10.1109/ISMAR55827.2022.00099)

[349] • Y. Zhu, K. Zhu, Q. Fu, X. Chen, H. Gong, and J. Yu. 2016. SAVE: Shared augmented virtual environment for real-time

mixed reality applications In Proc. of ACM SIGGRAPH Conference on Virtual-Reality Continuum and Its Applications
_[in Industry. . https://doi.org/10.1145/3013971.3013979](https://doi.org/10.1145/3013971.3013979)_

[350] • Z. Zhu, Z. Liu, T. Wang, Y. Zhang, X. Qian, P. F. Raja, A. Villanueva, and K. Ramani. 2022. MechARspace: An

authoring system enabling bidirectional binding of augmented reality with toys in real-time. In Proc. of UIST.

[351] • D. Zingsheim, P. Stotko, S. Krumpen, M. Weinmann, and R. Klein. 2021. Collaborative VR-based 3D labeling of

live-captured scenes by remote users. IEEE Computer Graphics and Applications (2021). https://doi.org/10.1109/MCG.
2021.3082267

Received 19 April 2022; revised 14 June 2023; accepted 3 August 2023

AC C S l A l P bl d O b


-----

