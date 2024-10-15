p g

## Engaging educators in the ideation of scenarios

**1161: MULTIMEDIA ALTERNATE REALITIES**
 for cross-reality game-based learning experiences

**[Telmo Zarraonandia[1] · Paloma Díaz[1] · Ignacio Aedo[1] · Andrea Bellucci[1]](http://orcid.org/0000-0003-3574-0984)**

Received: 1 May 2020 / Revised: 14 December 2021 / Accepted: 1 August 2022 /
Published online: 31 August 2022
© The Author(s) 2022

**Abstract**
Cross-reality media technology creates alternate reality experiences in which the physical
and the virtual world are interconnected and influence each other through a network of
sensors and actuators. Despite technological advances, the landscape of cross-reality
technology as an enabler of alternate reality educational experiences has not been
explored yet. The technical expertise required to set up and program such mixed
environments is too high to engage the problem owners (i.e. educational experts) in the
design process and, hence, user-driven innovation remains challenging. In this paper we
explore the co-creation of cross-reality experiences for educational games. We created a
no-programming toolkit that provides a visual language and interface abstractions to
quickly build prototypes of cross-reality interactions. The toolkit supports experience
prototyping and allows designers to coproduce, with educational experts, meaningful
scenarios while they create, try out and reconfigure their prototypes. We report on a
workshop with 36 educators where the toolkit was used to ideate cross-reality games for
education. We discuss use cases of game-based learning applications developed by the
participants that follow different pedagogical strategies and combine different physical
and virtual spaces and times. We outline implications for the design of cross-reality
interactions in educational settings that trigger further research and technological
developments.

-  Telmo Zarraonandia
tzarraon@inf.uc3m.es

Paloma Díaz

pdp@inf.uc3m.es

Ignacio Aedo

ia@ia.uc3m.es

Andrea Bellucci

abellucc@inf.uc3m.es

1 DEI Lab – Computer Science Department of the Universidad Carlos III de Madrid, Avda. de la
Universidad 30 Leganés 28911 Madrid Spain


-----

**Keywords Cross-reality · Digital game based learning · Prototyping**

### 1 Introduction

Cross-Reality is a human-computer interaction paradigm that ties together Virtual Reality
(VR), Ubiquitous Computing, Tangible and Embodied Interaction and the Internet of Things
(IoT). The original concept of cross-reality [37] flourished as a type of mixed reality in which
interconnected arrays of sensors and actuators make it possible to merge the physical and the
virtual world into a unique environment with bidirectional interactions. That is, actions that
take place in the virtual world can have manifestations in the physical world and vice versa. In
this vision, virtual is not the opposite of real, but instead it is just one aspect of a single,
intertwined reality or embodied virtuality [50]. Cross-reality technology enables mixed reality
experiences where the real and virtual worlds reflect into each other, thus providing alternative
or complementary representations and flow of actions. The synergy of the physical and the
virtual expands the affordances of the counterpart reality for representing the information and
supporting its manipulation. Users of a cross-reality environment have the power to switch
between real and virtual representations according to their needs, what enables collaboration
with co-located users in the same physical space, as well as with remote users in virtual spaces.
Cross-reality environments have the potential to excite, inspire, and engage learners in
immersive ways: e.g., providing novel visitor experiences in museums [13], and supporting
embodied [9] or collaborative learning [38]. Our research is concerned with the application of
cross-reality interactions in a specific type of educational technology: Digital Game-Based
Learning (DGBL) experiences. DGBL has been considered a successful medium to enhance motivation, a key factor for effective learning [40]. Studies have shown that digital
games can be successfully used in education [15, 45], especially when they are tied to
practice. Digital games that provide technology-mediated experiences between the physical
and the digital have shown potential to support situated learning through context awareness, as in the case of pervasive games [31], or to increase user engagement through
immersive game experiences [16].
The affordances of new multi-device, multisensorial and immersive technologies to
enrich learning experiences and support situated, experiential and embodied learning have
been already investigated [48]. The role of cross-reality interactions in the design of
learning experiences, however, is underinvestigated. Even if modern VR and AR technology, together with ubiquitous computing and IoT devices, allow to build rich immersive
user experiences, cross-reality applications have not yet moved from small-scale projects in
research laboratories to real settings [10, 30]. For this to be possible, meaningful scenarios
have to be envisioned for different human activities and, to explore such scenarios their
problem owners need to be engaged in a people-centered process. Such on-technical people
require appropriate tools to address their needs and express their visions for technology [42,
44]. Technical challenges are a major obstacle for the development of novel virtual/
augmented/mixed experiences, and producing a cheap and reliable real technology prototype is, most of the time, an unrealized dream of many designers [18]. In the educational
domain, educators, who are those who could ideate meaningful uses of alternate realities,
are not usually engaged in the design process, depriving researchers and designers from
getting a better grasp of the interactions between the physical and the virtual world that
would improve learning and teaching experiences.


-----

To investigate the use of cross-reality environments in DGBL, we use a designerly
approach [53] by giving the participants a two steps design scaffold to explore conceptual,
technical and experiential aspects of ideas [6]: a first step consisted on using physical materials
like paper, sticky notes and cards to ideate cross-reality experiences (cognitive scaffolding or
conceptual design), and a second step involved the use of a digital tool called MyXRGames to
prototype ideas (embodied scaffolding to deal with technical and experiential issues).
_MyXRGames is a prototyping toolkit that reflects our specific framing to design cross-reality_
applications for DGBL that enables end users to build prototypes of cross-reality environments
without needing any programming skills. The toolkit provides visual tools to build and
program a cross-reality environment and makes it possible to get a first-hand experience of
what could be achieved with this technology, and therefore envision possible future applications. Any tool introduces a bias in the way people think or address a problem, usually known
as circumscribed thinking [42]. Hence, by materializing our design ideas into a toolkit we do
not intend to provide a general solution for co-designing cross-reality experiences, but to
empower non-technical users to explore the design space of cross-reality interactions in
educational contexts.
In this paper we report findings from using the toolkit in a hands-on workshop with 36
educators, with the goal to generate a broader understanding on the use of cross-reality
interactions in DGBL. Our design approach is rooted in the experience prototyping design
methodology [8], and aims at eliciting educational needs, scenarios and modes of use of crossreality games from the experience and perspective of the educators, as opposed to the trend in
the literature in which researchers create ad-hoc cross-reality tools to address given problems

[10]. _MyXRGames enabled participants to quickly build prototypes of cross-reality digital_
games that they could experience by themselves, rather than just lucubrate about a design
concept through sketches or paper-based prototypes. The workshop, therefore, focused on
encouraging them to explore opportunities and challenges of this technology. Hence, the
workshop addressed questions such as:

-  What are desirable usage scenarios of DGBL based on cross-reality technology?

-  What modes of uses of games can be supported by cross-reality interactions?

Using MyXRGames educators could engage in ideating and trying out cross-reality experiences, something they could not have done without using it, and, in this way, we were able to
generate new knowledge that the research community can analyze, compare and critique in
search of general implications, and design heuristics and patterns and, thus, trigger further
related research and technological improvements.

### 2 Related work

The related research comes from the areas of cross-reality environments and immersive
technologies for education, DGBL and experience prototyping.

**2.1 Immersive technologies for digital game‑based learning**

The term Digital Game-Based Learning (DGBL) refers to the instructional strategies that use
digital games to improve the learning process [40]. DGBL has been identified as an enjoyable


-----

way for attracting learners and improving learning outcomes, especially for current learners
who have a high exposure to interactive technologies and videogames [17]. Enjoyment
enhances learners’ motivation, and can help to attract them to experiences that can convey a
specific message, that present contents that facilitate learning or that afford the rehearsal of
skills [32]. In addition, digital games can provide an educational context in the form of virtual
environments in which learners can contextualize knowledge and skills acquisition and
develop social practices, such as cooperation, group decision-making or regulating their own
behaviour [46]. Furthermore, these environments provide several opportunities for selfregulated learning, as the players need to learn the rules of the game, develop strategies to
attain specific objectives, monitor their progress and evaluate the effectiveness of their tactics

[2, 26].
DGBLs have been played using non-immersive devices such as desktop computers,
videogame consoles or, more recently, smartphones. Recent technological advances have
unlocked new game experiences that support immersive interactions either in real or virtual
environments. A wealth of research showed evidence that immersive technologies provide
new learning affordances [11, 48]. For example, VR allows the creation of realistic simulations
that provide a safe environment for skill rehearsal and training, an environment that can be
easily adapted, controlled and monitored by the instructors [33]. This provides the basis to
support the design of constructivist learning experiences that afford learners to generate
knowledge from direct experience with the environment [14]. Ubiquitous computing technology supports the creation of digital games whose action takes place in the real world, usually
called pervasive games in the literature [34]. In these games the player moves around the world
enjoying a game experience that changes and transforms itself based on the current place or the
activity performed [5]. This offers unique opportunities for situated learning [19] that holds
that learning is directly connected to the activity, context and culture in which it takes place

[28]. Using Augmented Reality (AR) technology, educational content can be overlayed onto
the real world, so it is delivered where needed. Moreover, it offers opportunities for the learner
to interact with the virtual content using her own body, fostering an embodied learning that
relies upon the creation of meaning through bodily interactions with the physical environment

[21, 23].
Immersive technologies offer the possibility to create new types of DGBL experiences that
implement a wider range of pedagogical approaches in a way difficult to achieve with standard
game devices and interfaces. Examples of games that use these technologies to provide an
enhanced educational experience are EcoMOBILE [25], Environmental Detectives [27] or
Mad city Mystery [47]. In these specific games AR and MR (Mixed Reality) technologies are
exploited to provide game experiences aimed at facilitating the comprehension of concepts
related with environmental caring and contamination, in the first two cases, and scientific
reasoning, in the latter case.

**2.2 Cross‑reality environments for education and DGBL**

A cross-reality environment interconnects a virtual and a physical space via a network of
sensors and actuators [30]. Through sensors and actuators, actions in the physical world can
affect the virtual world, and vice versa. The users of this type of systems, therefore, have the
opportunity to interact and collaborate with other co-located or remote users in different sides
of the physical/virtual reality. One of the first examples of a cross-reality environment is
ShadowLab [30], a system that interconnected the Responsive Environments Group Lab from


-----

MIT to its replica in the Second Life virtual world. More recently, Doppelmarsh [35]
implements a virtual replica of a large-scale wetland restoration site in Plymouth, Massachusetts. A network of sensor nodes tracks environmental changes in the site, and the
system translates them into wind, weather and seasonal conditions simulations in the virtual
world. With a focus on supporting collaborative work, the authors of [43] propose a crossreality environment built around a tabletop display. Remote collaborators wear an HMD
and interact with a virtual replica of the tabletop. The system monitors their interactions,
and at the same time, it tracks the hand movements of the collaborators in the physical
world, generating visual representations of the actions carried out by the members of the
team in the counterpart reality.
There are limited applications of cross-reality technology in education and DGBL that
support both real to virtual world interactions and vice versa. This might be due the high
technical expertise required to develop these systems artefacts [3], whose implementation
requires to integrate different hardware and software technologies, including 3D modeling,
electronics, microcontrollers programming and network infrastructure [1]. Among the applications of cross-reality technology in education it stands out the work of Peña-Ríos et al. [38],
who present a system for supporting the remote collaboration between students who work
together in an IoT project. A student worked physically using an electronic kit to build an IoT
device, while some others worked from a virtual world using virtual replicas of it. Collaboration was supported by means of xReality objects, which maintain the current state of the
device under development and communicate any changes in its virtual or real counterparts.
The use of the cross-reality paradigm for games is also scarce. Reilly et al. [41] presented a
game based on the collaborative environment TwinSpace. While some players interacted with
the game in a virtual world, others played it physically, placing tangible objects in interactive
tables or moving a cart with a tangible screen.
Some other systems do not fully comply with the cross-reality environment definition used
in this paper but provide interesting insights about potential uses of the technology and
possible system architectures. For example, the authors of [29] present a physical-virtual table
for playing a tabletop game with a virtual human displayed using AR. Using a magnetic
actuator, the virtual agent can exert physical movements on the game tokens over the tabletop
surface. In this case the virtual player is controlled by the computer, but a similar approach
could be used to design a cross-reality environment for playing chess between humans in the
real and the virtual world, for instance. As another example, Mursion® [12] is a mixed reality
system for pre-service teacher training. A teacher located in a real classroom interacts with the
avatars of the students in a virtual classroom displayed on a wide screen. A human interactor
controls the behavior of the virtual students to train the teacher on how to respond to different
situations in a classroom.

**2.3 Experience prototyping for cross‑reality design**

Research has shown that prototyping toolkits are essential to support user creativity and to
assist the exploration of a design space through external representations [18, 22]. Our approach
seeks to support experience prototyping [8] of cross-reality environments: a design tactic that
emphasizes on the experiential qualities of a prototype “to successfully (re)live or convey an
experience with a product, space or system” [8]. Experience prototypes help design participants to generate and iterate over ideas by first-hand appreciation, enactment and physical
engagement with the technology, rather than just abstract thinking about ideas.


-----

Experience prototyping has been successfully employed in a wide range of contexts,
including the design of wearables [24], smart materials composites [3], human interaction
with social robots [39], or virtual and mixed-reality for blended learning [7].

**2.4 Summary**

Works from the literature focus on the technical implementation of a cross-reality architecture
or tool, with the goal of either assessing the effectiveness of the proposed system to support
specific activities (e.g., teacher training [12] or collaboration [38]) or explore different device
configurations [43].
In this work we follow a different approach. Rather than proposing a specific system
architecture or a specific educational experience, we aim to gain a better understanding of the
potential uses and applications of cross-reality technology in the area of education, and more
specifically in DGBL experiences, by integrating end users in this exploration process. We
developed a toolkit for supporting educators in the prototyping of cross-reality environments.
The overarching idea behind our toolkit is that, by facilitating educators the implementation
and testing of cross-reality interactions, they would get first hand experiences on whether this
technology could be useful in their daily practice. This, in turn, would result in prototypes that
could unveil meaningful design drivers for cross-reality interactions in education. Following
this approach, we conducted a workshop in which 36 educators participated ideating and
prototyping cross-reality based DGBL experiences. In this paper we report on the results of the
workshop and analyze the different uses of the cross-reality technology in the artefacts
envisioned.

### 3 MyXRGames: A cross‑reality game toolkit

Developing cross-reality environments is often complex and expensive since there are many
different technologies involved. To simplify and speed up the design and development of
educational games based on cross-reality technology, we developed a toolkit named
_MyXRGames. The design journey that led to the development of the MyXRGames prototyping_
toolkit is described in detail in two previous publications [2, 4, 52], including the requirements
that were extracted through a user-centered design process, the design drivers,
implementations and technical limitations. For the sake of completeness and readability, we
include here a short description of the main functionality of the toolkit.
The toolkit provides three editors (Fig. 1) for simplifying the creation of cross-reality game
experiences:

-  a Virtual World Editor, for designing 3D virtual scenes;

-  a Real World Editor, for setting up interactive objects in the real world;

-  and an Interaction Rules Editor, for specifying high-level interaction rules among sensors
and actuators in the physical environment and digital entities in the virtual world (crossreality behaviors).

These editors aim to enable users who do not have a high technical profile to create their
own cross-reality experiences by interconnecting and personalizing some predefined building


-----

**Fig. 1 The user interface of the** _MyXRGames editor. The interaction rule in the image specifies that when the_
button of the Interaction Box is pressed the action change of the virtual object is activated

blocks. These include 3D virtual objects, triggers and actions for setting up virtual scenes, and
pre-packaged sets of sensors and actuators for supporting the interaction in the real world,
called _Interaction Boxes (Fig._ 2). More specifically, each box contains a combination of
sensors (e.g., proximity, light, inertial, etc.), buttons, physical sliders, relays and LEDs (Light
Emitting Diode) connected to a NodeMcu board equipped with an ESP8266 WIFI module.
The boxes materialize the design goal of providing a quick and seamless way to augment
physical objects in the real world, and thus, give to the physical objects interactive capabilities
that link them to elements of the virtual world.

**Fig. 2 Interaction Boxes. The boxes are placed close to objects or locations in the real world to provide them**
with interactive capabilities and integrate them in the game


-----

The toolkit provides a runtime environment to run and try out the cross-reality environment
designed with the editors, without requiring any tedious end-user configuration. The designs
are exported to XML files and uploaded to the Cross-Reality Runtime Manager (Fig. 3). This
application is responsible for generating the virtual world environment, supporting the
interaction of the user with the virtual elements, and communicating with the _Interaction_
_Boxes. It parses the XML files and instantiates the components referenced in it, setting up_
listeners to capture the real and virtual events that trigger the conditions specified in the
interaction rules.
The editor of the MyXRGames has been implemented in JavaScript/HTML/CSS Web, and
the _Cross-Reality Runtime Manager as a Unity application. Users can interact with the_
resulting experience by means of immersive VR headsets, mobile devices or simply run the
3D world in a browser in a desktop computer.

### 4 A workshop for designing cross‑reality educational games

Following the implementation of the MyXRGames toolkit, we performed an experimental
workshop to investigate cross-reality as a platform for supporting digital games for education.
We aimed at exploring and gaining knowledge on the way educators would use this novel
technology in their daily practice. For example, we aim at increasing understanding on:

– What type of educational experiences based on cross-reality games would educators
design?
– For which subjects/purposes would they use it?
– What type of interactions between the real and virtual world would educators design?
– For which activities would educators use the real world and for which the virtual setting?

**Fig. 3 Schema of the MyXRGames Toolkit. The set of files generated by the toolkit’s editors is uploaded to the**
MyXRGames’s Runtime Environment to configure the virtual world and the interactive boxes for the game. The
virtual world can be accessed using tabletop, desktop computers or VR headsets


-----

Following this aim we organized a workshop in which 36 educators participated working in
groups in the design and implementation of cross-reality digital games for education. Using
observational methods, we collected information about the game designs produced and the
educators’ opinions and views on the technology and its potential for education. The research
was conducted with the approval of the Universidad Carlos III de Madrid Research Ethics
Board.

**4.1 Participants**

The participants of the workshop were 36 educators (26 female), teachers of primary (17),
secondary (12) and higher (7) education centres in Spain, enrolled in a course on Gamification
and Immersive Technologies in a Master Degree on Educational Innovation. Participants’ ages
range from 25 to 30 (4), 31–40 (19), 41–50 (11) and 51–55 (2) years old. The participants’
teaching subjects covered a wide range of topics and disciplines, such as history, biology,
English language, or physical education, among others. The participants had already been
exposed to the learning affordances of virtual, augmented reality and other technologies in
previous sessions of the course and other HCI for education courses. Moreover, they had
followed courses on current active pedagogical methods and experiences, such as flipped
classroom, collaborative learning, gamification, project-based learning or using simulations in
the classroom, so they were familiar with the pedagogical approach in which DGBL is framed.
Though they had courses on technology in the Master program, none of them was related to
programming and the participants had no programming skills.
In the rest of the document, we will use the term “participants” to refer to the educators who
participated in the workshop; the term “educators” to refer to the teachers who would use the
games ideated in the workshop in their teaching practice; and the terms “player” and
“students” to refer to the learners who would play the game.

**4.2 Apparatus**

For the games design task, the participants were provided with:

-  8 cardboards depicting different examples of environments for representing the
virtual and real scenarios of the games (classroom, building interior, woods and a
temple) and 2 blank cardboards to draw any other scenario that the participants
wanted to work on.

-  a deck of small cards representing objects, characters and Interactive Boxes,

-  stickers and coloured pens.

For the implementation of the game prototypes they were provided with:

-  laptop computers with running installations of the MyXRGames toolkit, and

-  a set of Interaction Boxes and a tablet to test them.

More specifically, we provided 8 pre-built Interaction Boxes to the workshop participants.
Each box included one LED, one button, and different combinations of proximity sensors,
rotary potentiometers and sliders. We chose this set of devices to cover different types of
activations (manual vs automatic), types of data (binary on/off values or range) and modes of


-----

interaction that support user enactment (swipe, press and rotate). In addition, the LED can be
used as visual feedback, for instance to represent the state of an object.

**4.3 Data collection**

Qualitative data was collected from three different sources. The first was the analysis of the
game designs and prototypes produced during the workshop, which each group delivered at
the end of the session. These deliverables included the diagrams depicting the game interactions, the prototypes implemented and a form describing in detail the game design with its
context of use, learning goals, target audience, the type of collaboration between players,
and the equipment (e.g., devices) required to play it.
The second source of data was the opinions of the participants about the design activity and
the potential of the technology of the cross-reality in education. At the end of the session, the
participants provided this information filling in a form with the following questions:

-  Please tell us about your overall experience of the design activity.

-  How satisfied are you with the game you ideated? How easy/difficult was it for you to
create it?

-  Please tell us your opinion about the potential use of this technology in education and how
it would fit in your teaching practice. Which are, in your opinion, its weakest and strongest
points?

Finally, the activity was observed by a member of the research team. The researcher paid
special attention to how the games ideated evolved and changed during the design activities,
taking notes about their transformations, and the attitudes and opinions of the participants
during the process.

**4.4 Procedure**

Before the workshop, and as part of the course on Gamification and Immersive Technologies,
participants attended two four-hours lectures devoted to: (i) give an overview of the state of the
art of different technologies in the cross-reality spectrum, such as VR and AR, their current
impact on education, and future developments, (ii) get familiarized with DGBL by designing
examples of digital games for education and training. The goal of the workshop (a third fourhours session) was to apply all the knowledge gained during the previous two weeks to the
design of a meaningful cross-reality game-based learning experience that they would incorporate in their teaching practice. Participation is mandatory since the master is aimed at
developing procedural skills and all the evaluation is based on activities performed by
participants and put in the context of their current educational duties. During the workshop,
participants collaborated in groups of six and were asked to design a cross-reality game
around a subject of their choice.
The schedule of the workshop was as follows:

1. Briefing. During the first 30 minutes a member of the research team introduced the
concept of Cross-Reality, the goal and structure of the workshop, and the MyXRGames
prototyping toolkit. The toolkit was used to showcase examples of possible interactions
between virtual and real objects in these kinds of environments.


-----

2. Cognitive Scaffolding. Participants were organized in groups of six and were asked to
work together in the ideation of an educational cross-reality game using the cardboards
and decks of cards provided. These materials were used as “cognitive scaffolds”: tools for
helping people think about a problem and come up with concepts [49]. These props are
especially useful at the beginning of the design process to promote divergent thinking.
3. Embodied Scaffolding. Participants implemented their ideas with the toolkit in order to
test some of the interactions they ideated (the ones that could be readily implemented) and,
also, to uncover technical needs for the toolkit, such as functionality that would be of
interest but that was not currently provided (e.g., different combinations of sensors and
actuators). Embodied scaffolding is useful to “enact” what the experience would be
like by means of “tangible prototypes”, ideating through the experience and disclosing
subtleties that the designs based on cognitive scaffolds might not capture [51].
4. Wrap-up. At the end of the workshop each group presented their game to the rest of the
participants.

During the briefing session, together with the introduction to the workshop’s goal and
procedure, a seed example was used to illustrate the possibilities offered by the toolkit. The
scenario was an educational game to enhance the visit of the remains of a Roman temple by
solving puzzles and riddles related with the temple, its use and Roman history (see Fig. 4). The
game was expected to be played by two players simultaneously: one of them played in the
physical world, looking for information to solve the missions at the archeological site and
the exhibition whilst the other player had to complement this searching at home, interacting with
an immersive virtual replica of the temple. Two kinds of interactions were implemented to
prototype this game:

-  _Connect objects from the real world to objects in the virtual world: in some missions the_
virtual player will need to use objects that are displayed in the site’s exhibition to carry out
an action in the virtual world. In this case, the player in the real world must find the
appropriate object and collect it. For example, she might need to identify a specific coin or
a goblet for an offering that has to be found in the exhibition cases. Once she makes her
choice, she selects the object by clicking the buttons of the Interactive Box near to it, and
the player in the virtual world will receive it so she can start using it.

-  _Match players positions: in some missions players are required to coordinate their actions_
and positions in order to unlock game elements. In order to reach the same location, the

**Fig. 4 An example of cross-reality interaction prototype. By clicking the button of an** _Interaction Box located_
near an object in the real world (in the image represented by the picture of some grapes) the object appears in the
virtual world


-----

players will have to discuss where they are and what they see, reflecting about the
appearance of the temple in the present and in the ancient times. This is implemented
using Interaction Boxes that include proximity sensors to detect the physical presence of
the player in the real world, an avatar of the physical player in the virtual world, and LEDs
that reflect the presence of the virtual player in the real world.

Once the goals and tools to be used were clear, participants started to ideate the game from
a conceptual and educational perspective (cognitive scaffolding). From the set of cardboards
depicting environments made available each group selected two: one to represent the virtual
world of their game and other one for the physical counterpart. Four groups used the
cardboards with predefined scenarios (classroom, woods and temple) and two groups used
the blank cardboards to draw their own. Once the game scenario was selected, the participants
described the game scene by placing the cards representing physical objects, virtual objects
and Interactive Boxes on top of the cardboards (see Fig. 5). Using colored pens, participants
described the way in which the players would interact with each object, the outcomes that
would result from those interactions, and the way those actions would influence or transform
the counterpart reality. They also specified the type of sensors and actuators that each
_Interaction Box would need to include. Figure 5 shows a team that used stickers of different_
colors to annotate with information the objects of the game: pink stickers for virtual objects
and yellow stickers for the real ones. Also, they used green arrows to denote the relations
between objects in the real world, and black arrows for the ones between the real and virtual
objects. In this design the participants included three cards of Interaction Boxes, one of which
was connected to a pink sticker with two cards depicting a wall and a pick. Later on, they used
the toolkit to make a virtual pick appear for destroying a wall when the user clicked on an
_Interaction Box’s button._
Next step was to produce a prototype to be able to test how the interactions worked in the
real world following an experience prototyping approach. Each group was provided with a
laptop computer with a running installation of the toolkit for designing the prototypes, and a

**Fig. 5 Educators working in the design of a cross-reality game design during the workshop. The right-hand side**
of the figure depicts one of the cardboards they use to specify the interactions between real and virtual objects in
the game


-----

set of Interaction Boxes and a tablet to test them. The objective was not to create a fully functional implementation of the game, but to be able to get a first-hand experience of how the
ideated cross-reality interactions would work.
Finally, at the end of the session a member of the team presented the game to the rest of the
participants.
The participants were assisted at all the stages of the workshop by an instructor, who was
also a member of the research team. During the ideation phase, the instructor provided
participants with guidance and orientation on how to carry out the design tasks, but without
interfering or providing judgment on the participants’ ideas. At the time of prototyping their
ideas, he assisted the participants when using the toolkit, solving questions, and helping them
to fix problems.

### 5 Results

In this section we review the results of the workshop, summarizing the main features of the
different cross-reality games designed by the participants, their educational value and the
technical opportunities and challenges that were addressed and tested thanks to the use of the
toolkit. We also recap the feedback obtained from the participants at the end of the session, and
the main issues noted while observing their activities. To provide the reader with a better
insight of the type of educational experiences envisioned we start the section describing in
detail one of the six games designed during the workshop.

**5.1 “The Feudal Adventure” game**

This game aims to help to understand the way feudal societies worked: for instance the social
structure, land tenure, or agricultural techniques. The target players are students of the latest
courses of primary education (12 years old), and the game was designed to be played outdoors,
during a field trip or an excursion, in groups that compete against each other.
The game integrates elements from both the Massive Multiplayer Online Role-Playing
Games in virtual worlds, and the live-action role play games in which the players physically
portray their characters. The game was designed to be played in an old town or ruins of an old
village. The virtual world is used to provide a representation of the village from the past, and
specific spots of the real world are matched with areas of the virtual village, i.e. certain
buildings remain to the ancient village market. The players would play the role of vassals of a
feudal lord, and each of them would be assigned to a job typical of the feudal world: farmer,
servant, baker, etc. Players are required to pay the tribute to the lord, and, to this end, they must
collect a certain number of objects related to four different types of activities: agriculture,
farming, mining and forestry. The players work in groups, according to their occupation, and
search for resources in the real and the virtual world, interacting with non-player characters
that propose them missions. Each player will have a counterpart avatar in the virtual world that
will move across the virtual realm mimicking the player’s visits to the different game locations
in the real world. In this way, to access each area of the virtual village the player would have to
be physically located at the corresponding area of the town ruins in the physical world. In
addition, the occupation assigned to each player will grant them access to certain buildings and
restrict some others. Also, each will have certain special abilities that they will have to exploit
in order to accomplish the missions proposed.


-----

Collaboration between players in the same team and other teams will be a fundamental
element of the game. The players will need to trade with the resources collected, which could
either be physical or virtual objects, and reach collaboration agreements with other players
who have the special ability they require to complete a certain mission. The game will also
provide opportunities to perform physical exercise. For example, when a bubonic plague starts,
all players will have to run to a specific spot that represents a church to protect themselves
from it.
Each student will play the game using her own mobile device to interact with the virtual
world. Also, the mobile’s GPS is used to track the player location and move the player’s avatar
in the virtual world accordingly. To detect the presence of the player at a certain spot or at a
close distance to an object Interaction Boxes with presence sensors are used. Also, the boxes
are used to augment real objects that represent the resources and, thus, perform the actions of
taking and depositing them in the game. For example, by clicking a button of a box close to a
bundle of straw, this resource will be loaded into the box. Then, the player can take it with her,
trade it, or deposit at a different location by clicking the button again.

**5.2 Summary of results**

Table 1 categorizes the six games designed by the participants of the workshop according to
eight dimensions: the type of game, the topic, the learning objective, the pedagogical theory
driving the design of the game, the physical context where the game is played, the number of
players, the type of behavior and the devices used to play the game. The games designed by
the participants can be classified as role-play games (“A journey inside a cell” and “Feudal
adventure”), escape rooms (“Anne Frank’s diary”), mini-games (“Take the order” and “The
Treasure Island”) and adventures (“Time travel”). With regard to their educational purpose, all
the games targeted students of primary and secondary school, and their learning topics
included History (3), Natural Science (2), English (as a foreign language), and Mathematics.
Based on their educational goal, the games could be classified in two groups: those focused on
learning about or understanding something (i.e. a period of history or certain event) and those
related to applying knowledge (i.e. representing the activities inside a cell or practicing
English). The types of pedagogical theories underlying the game designs included situated
learning (4), embodied learning (1), and experiential learning (1).
Four of the games were designed to be played in groups and the other two games by two
players. In the two-player games, each player was assigned to a different game reality, either
physical or virtual, while in the games that required a group gameplay, players moved from
one reality to another as the game unfolded.
Virtual reality was used to recreate remote places (as in “Time travel”) that could be even
adapted to the student learning process (as in “Take the order”), to represent complex or
abstract terms (as in “A journey inside a cell”) or to promote empathy (as in “Anne Frank’s
Diary”). Interaction with real places and objects was used to provide multisensorial interaction
with real objects (as in “Anne Frank’s Diary”), situated learning (as in “Treasure Island”) and
embodied learning activities (as in “Take the order”). Connections between the two realities
were exploited to take profit from the learning affordances of the two worlds in an integrated
environment. When a situation was difficult or costly to implement in the real world (like
different realistic scenarios for “Treasure Island”), virtual reality simulations were encouraged
but always connected with physical activities and interactions in the real world (either picking
up objects or moving to specific places). Two games required the players to perform physical


-----

-----

exercise during the play. In one (“A feudal adventure”) the exercise is used for enhancing the
game action and to make the game more fun. For example, when players have to run to a
specific spot to save themselves from the bubonic plague. In the other one (“The treasure
island”), the missions were specifically designed to promote physical activity, as this was one
of the goals of the game.
The observation of the workshop revealed that most of the original designs of the games
suffer modifications during the “embodied scaffolding” phase, in which participants implemented prototypes of the game interactions. The participants simplified excessively complex
narratives, concretized too conceptual designs, and replaced elements of the game so they
could be represented using the toolkit’s resources. At the same time, while experimenting with
the toolkit new ideas arose, as the participants discovered possibilities they did not think about,
or components whose possibilities they wanted to exploit. For example, the objective of the
original version of “Time Travel” was very ambitious: learn about certain historic events by
involving the players in them. However, the mechanics of the game were not totally defined, as
the game action could vary a lot from one event to another. Also, most of the game action took
place in the virtual world. During the prototyping, the participants refined their design
considerably. In the final version the players would learn about history by fixing the mess
caused by a “cosmic storm” that moved some objects from one historical age to another. One
player will use VR equipment to travel in time searching for misplaced objects and taking them
to the correct age and location. The other player will play the role of the time traveler’s
assistant, searching information about the objects in files (documents provided by the teacher)
and using the _Interaction Boxes to send the time traveler the right tool, among the ones_
available in class, for solving the problems and puzzles she might find during the mission.
The toolkit supported testing most of the virtual and real worlds interactions that the
participants ideated. For example, the designers of the games “Anne Frank’s diary”, “Time
travel” and “Treasure island” implemented prototypes of cross-reality environments that
allowed players to destroy a wall, or to switch on and off a lamp in the virtual world by
clicking a button on an _Interaction Box. Also, the creators of “Feudal adventure” and “A_
journey inside a cell” used the sensors embedded in the boxes to make a virtual character
appear and disappear from the scene. Some of the interactions envisioned for the games “A
journey inside a cell” and “Take the order” were not possible to prototype with the current
toolkit implementation. For example, the game “A journey inside a cell” requires being able to
identify the player that activates the presence sensors, a functionality currently not supported.
For implementing the “Take the order” it would be necessary to extend the toolkit to integrate
AR technology.
Finally, the feedback obtained from the participants was mostly positive. According to the
comments provided, most of them acknowledged the utility that this type of experience might
have in an educational context. They appreciated the possibility of providing students with an
engaging experience which does not take place entirely in the virtual world. As one of them
stated: _“when playing computer games the kids are disconnected from the real world, just_
_staring at a screen…”. Cross-reality games would offer the opportunity of making educational_
games for the classroom more appealing to the students, and at the same time to increase their
potential. As one teacher mentioned: “when thinking about games for the classroom I feel very
_constrained by the materials available, these games would unlock many possibilities”. In any_
case, the participants did not circumscribe the use of the games to the context of the school. In
fact, the flexibility of these experiences was frequently recognized as a major outcome in many
comments (“It offers multiple possibilities”, _“It is easy to image applications in many_


-----

_subjects”, “It could be used in many contexts: at school, at home...”). With regard to specific_
educational uses, one participant mentioned that “these games would be very useful to help
_establish relationships between elements in the real world and concepts and ideas not easy to_
_represent”. Finally, they also reflected about the prototyping activity. In general, they enjoyed_
the experience (“It allows us to be very creative”). Most of the participants reported finding it
difficult to imagine the games at the beginning (“When we started, I found it difficult to
_imagine the game. This was something totally new, and I couldn’t decide what should be in the_
_virtual, what in the real world, and why”).On the negative side, some participants acknowl-_
edged the technological difficulties of implementing these experiences in their organization:
_“It was very interesting [to prototype games], although difficult to use in my daily teaching_
_practice ...unless someone gives me the whole system implemented and running”, highlighting_
that practical issues of other nature will arise when moving from ideation to the engineering of
a working systems (we do not investigate those issues here).

### 6 Discussion of findings

The workshop allowed to disclose different approaches of using cross-reality environments
for supporting educational games.

**6.1 Affordances of interweaving elements of the virtual and real world**

In some designs the virtual world is used as a means to complement the information of the real
scenario. For example, in the game “Treasure Hunt” the players had to complete different
missions at different locations in a wood. When the players reached one of those locations,
they activated an Interaction Box and accessed a 3D virtual representation of the wood where
they received instructions for the missions. This would save the educators from having to
modify the real environment by attaching signs, posts, or directions on it. Moreover, virtual
augmentations are more dynamic than physical ones and can vary depending on the student’s
needs.
In other cases, the participants used the Interaction Boxes as a way to link virtual and real
objects. This allowed the educators to include in their games situations that originate in one of
the two worlds and that can affect the other. For example, in the game “Anne Frank’s Diary”
when the players switch on a lamp in the real world, its equivalent counterpart in the virtual
one was also switched on, illuminating a hole in a wall where the next tip was located.
In addition to complementing the information available, or providing alternative representations, the participants envisioned interactions that involve the manipulation of physical
objects (e.g., “Feudal adventure”), thus employing tangible interaction instead of touching
digital objects on a screen. It has been reported in the literature that tangible manipulation
enables physical learning and promotes an active engagement in the learning experience [34]
exploration and discovery [20] and facilitates the understanding of abstract concepts through
concrete representations [1]. According to the designs produced in the workshop, connecting
physical interaction or physical elements with digital worlds has been seen by the workshop
participants as a desirable design strategy to promote collaboration among students and
introduce playfulness and novelty in classical learning dynamics. For example, the search
for information about an object in a book was made more attractive in “Time travel” by putting
it in the context of a game and having to “send” the chosen object across the two realities.


-----

_Interaction Boxes were used as a means to create objects in the virtual world, whose use in_
the real world could be impossible, unsafe or problematic. This was the case of the game
“Anne Frank’s Diary”, in which the boxes allowed users to select a hammer, which then the
players used in the virtual scene to break a wall. In these cases, the virtual world was used as a
“free zone” to represent situations that are difficult to implement in the real world due their
cost or security reasons.

**6.2 Cross‑reality facilitates embodied learning through acting out and role play**

Participants designed games that exploited enactment in the real world, augmented with virtual
content, and role play as an effective way of learning theoretical concepts through bodily
experience. The designers of the game “A trip inside a cell” for instance, used the real world to
implement a metaphor of a cell, matching locations of the school to the different parts of a cell
based on their function. In the game the students moved physically across the school to carry
out their missions, interacting with each other according to the role of the cell’s element they
represented. In the case of the game “Feudal adventure”, in which the players played the role
of habitants of a medieval village, the virtual world was employed with the idea that historical
reconstruction of the medieval villages would help students to play their characters. Participants who designed the game stressed on the fact that role-playing allows, not only to learn
about complex social historical events, science and mathematics, but also to develop personal
skills such as communication, problem-solving, self-awareness, and cooperative work. They
realized that cross-reality would enhance role-play, giving educators additional ways to design
educational processes and the students new means to learn something new by “creating their
own reality.”
In addition to these uses, the analysis of the games also revealed different ways in which
participants implemented the educational purpose of the experience and enhanced its playability. In many cases, the instructional objective heavily relies on one side of the cross-reality
setup. For example, in the games “Anne Frank’s diary” and “Feudal adventure”, learning goals
are achieved through exploring and acting in the virtual world. On the contrary, in the games
“A trip inside a cell” and “Treasure island” most of the learning occurred as a result of the
activities in the real world. In the same way, in some games the primary use of one of the two
realities was to enhance the players motivation. For example, in the game “Take the order” one
player plays the role of the master and controls the game, whilst the other executes the actions
defined by the master. The master interacts from the virtual world, while the other player plays
the game in the real world, augmented with projections and interactive objects. The immersive
virtual world aims to make the role of the “master” player more attractive and fun than
selecting the tasks for the other players using more standard means.

**6.3 On the role of prototyping toolkit for cross‑reality interactions**

The use of the toolkit in the workshop allowed us to reflect on the role of prototyping tools
for the dissemination of a technology such as cross-reality that, especially when applied to
education, has only recently left the stage of a breakthrough invention. The lack of tools
that support experimentation might negatively impact the possibility of cross-reality
to jump to a stage where previous implementations are replicated, mashed-up or reimplemented and, thus, increase the understanding of this technology from the lessons
learned through practice.


-----

Our experience in the workshops suggests that affording first-hand experience of prototypes, enables a wide range of design participants to think creatively through the use of the
system and, therefore, to produce artefacts that help understanding what is needed in the field
from different perspectives. Indeed, producing many different implementations is key to
enable the research community to formulate empirical implications and design guidelines.
The results from the workshop show that, in a limited amount of time and with limited
training, non-programmer leveraged the toolkit to abstract from low-level technical details and
quickly build meaningful implementations of their ideas. They were able to test and, by getting
first-hand experience of what and not, they refined their design according to specific pedagogical frames and the learning goal they were pursuing.
The use of the toolkit highlighted drawbacks of working with an immature technology and
the challenges to provide non-technical experts, as educators, with means to build cross-reality
educational experiences. Some of the interactions envisioned by participants could not be
readily implemented because of the lack of support in the toolkit (e.g. lack of the hardware
needed). A prototyping toolkit should be flexible and include support for common interactions
as much as possible as well as a mechanism to seamlessly include new interactions as
technology evolves, and according to the needs of the users. A prototyping toolkit should
also be tolerant to faults and it should be based on reliable technology that allows testing
without malfunctioning or glitches that would hinder the user experience. Breakdowns and
glitches are problematic because they break the flow of the design process and create mistrust
in the participants that, as we experienced in our workshop, can be reluctant toward the use of
the technology to reach the specific learning outcome. Even if our prototyping tool was not
meant to generate games for user testing and evaluation, to be fully successful it has to cater
the feeling that envisioned games would work flawlessly with students. In case of complex
interactions, such as full body movements or gestures, a wizard-of-oz approach would help
overcome this issue [36].

**6.4 Limitations**

The game designs produced during the workshop have not been fully implemented and put
into practice and, hence their educational value cannot be demonstrated [3] though this was not
the goal of our research. In any case, the designs presented here were produced by groups of
experienced educators, who design the learning activities for their students so that the
workshop just offered them a new technology to integrate in their daily practice. The goal
of this research was not to obtain a set of running cross-reality applications but to gain a better
understanding of the possibilities and potential uses of cross-reality technology when put in the
hands of educators. At the end, all the participants ideated innovative scenarios of cross-reality
games that were well-grounded on current learning theories. The experiences designed
addressed specific topics and audiences, but the proposed interactions and the pedagogical
strategies behind them might inspire other educators to ideate new cross-reality scenarios that
fit their specific educational contexts.

### 7 Conclusions

We presented the results of our exploration of the potential uses of cross-reality technology for
supporting DGBL experiences from the perspective of end users (educators). A hands-on


-----

workshop in which 36 educators ideated and prototyped cross-reality educational games
allowed us to identify a set of different ways in which cross-reality environments could be
useful in this area and to reflect on the role of prototyping toolkits to support the widespread
adoption of cross-reality technology in education. The diversity of designs, educational
approaches implemented, and types of interactions envisioned suggest that this technology
has the potential to be used for creating meaningful DGBL experiences that support several
pedagogical strategies including experiential, situated, embodied and collaborative learning.
These experiences are more flexible and affordable than pure virtual or physical game
experiences, since each reality in the proposed designs was used when it was easier, safer or
more convenient to achieve the educational goals. Many educational activities can be enhanced by integrating virtual objects and interactions but at the same time, virtual experiences
can be enhanced by interacting with the real world to achieve a more realistic, enjoyable and
situated learning. More research needs to be done in order to confirm or discard these benefits,
but the results of the experience described in this paper could be a starting point for their
investigation.
Research on end-user platforms providing useful reusable assets and visual interfaces
is required to empower end users to integrate this kind of technology in their daily
practices, so that meaningful scenarios of using alternate realities can be depicted.
Experience prototyping has been shown as a very useful approach that involves
multisensorial interactions. Creating and testing low-quality prototypes can help end users
grasp the opportunities and limitations of this kind of technology without requiring a
thorough knowledge of technical issues. Following this design tactic, end users can be
engaged in the ideation of innovative yet useful experiences as a first step to democratize
the innovation process.
Our current research focuses on extending the MyXRGames toolkit to support a wider range
of devices and game mechanics as well as evaluating the mechanisms to allow end-users to
extend the toolkit by themselves. To further support prototyping, we are including in the
toolkit templates of games, based on the cases identified in the workshop, that other educators
can use and adapt to their needs.

**Author’s contributions TZ, A.B, P.D and I.A equally contributed to the analysis of the state of the art in order**
to identify the challenges addressed by this research and the writing of the paper. T.Z. and P.D. run the
workshops, and T.Z. and A.B. implemented the software.

**Funding Open Access funding provided thanks to the CRUE-CSIC agreement with Springer Nature (Funding for**
APC: Universidad Carlos III de Madrid - Read & Publish Agreement CRUE-CSIC 2022). This work is supported
by the projects CROSS-COLAB (PGC2018–101884-B-I00) and Sense2makeSense (PID2019-109388GB-I00)
funded by the Spanish State Research Agency.

**Data availability The datasets used and/or analysed during the current study are available from the corre-**
sponding author on reasonable request.

**Code availability Not applicable.**

### Declarations

**Conflict of interest The authors declare no conflict of interest. The founding sponsors had no role in the design**
of the study; in the collection, analysis, or interpretation of data; in the writing of the manuscript, and in the
decision to publish the results.


-----

**Open Access This article is licensed under a Creative Commons Attribution 4.0 International License, which**
permits use, sharing, adaptation, distribution and reproduction in any medium or format, as long as you give
appropriate credit to the original author(s) and the source, provide a link to the Creative Commons licence, and
indicate if changes were made. The images or other third party material in this article are included in the article’s
Creative Commons licence, unless indicated otherwise in a credit line to the material. If material is not included
in the article’s Creative Commons licence and your intended use is not permitted by statutory regulation or
exceeds the permitted use, you will need to obtain permission directly from the copyright holder. To view a copy
[of this licence, visit http://​creat​iveco​mmons.​org/​licen​ses/​by/4.​0/.](http://creativecommons.org/licenses/by/4.0/)

### References

1. Antle AN (2007) The CTI framework: informing the design of tangible systems for children. In: proceedings of the first international conference on tangible and embedded interaction(TEI’07), pp 195–202

2. Barab SA, Ingram-Goble A, Warren, S (2009) Conceptual Play Spaces. Handbook of Research on Effective
[Electronic Gaming in Education. IGI Global 989–1009. https://​doi.​org/​10.​4018/​97815​99048​086.​ch057](https://doi.org/10.4018/9781599048086.ch057)

3. Barati B, Karana E, Foole M (2017) Experience prototyping of smart material composites in: proceedings of
international conference of the DRS special interest group on experiential knowledge pp 50-65

4. Bellucci A, Aedo I, Díaz P (2017) ECCE Toolkit: Prototyping Sensor-Based Interaction. ECCE Toolkit:
[Prototyping Sensor-Based Interaction Sensors 17(3):438. https://​doi.​org/​10.​3390/​s1703​0438](https://doi.org/10.3390/s17030438)

5. Benford S, Magerkurth C, Ljungstrand P (2005) Bridging the physical and digital in pervasive gaming.
[Commun ACM 48:54–57. https://​doi.​org/​10.​1145/​10476​71.​10477​04](https://doi.org/10.1145/1047671.1047704)

6. Binder T, De Michelis G, Ehn P, Jacucci G, Linde P, Wagner I (2011) Design things. MIT press
7. Bordegoni M, Ferrise F, Wendrich R, Barone S (2018) Virtual and mixed prototyping techniques and
technologies for consumer product design within a blended learning design environment. In: proceedings of
the DESIGN 2018 15th international design conference, pp. 183-192

8. Buchenau M, Suri JF (2000) Experience prototyping. In: proceedings of the 3rd conference on designing
interactive systems: processes, practices, methods, and techniques pp 424-433

9. Chang JSK, Yeboah G, Doucette A et al (2017) TASC: combining virtual reality with tangible and
embodied interactions to support spatial cognition. In: proceedings of the 2017 conference on designing
[interactive systems, pp. 1239-1251. https://​doi.​org/​10.​1145/​30646​63.​30646​75](https://doi.org/10.1145/3064663.3064675)

10. Coleman B (2009) Using sensor inputs to affect virtual and real environments. IEEE Pervasive Computing
[8(3):16–23. https://​doi.​org/​10.​1109/​MPRV.​2009.​60](https://doi.org/10.1109/MPRV.2009.60)

11. Dalgarno B, Lee MJ (2010) What are the learning affordances of 3-D virtual environments? Br J Educ
Technol 41(1):10–32

12. Dalinger T, Thomas KB, Stansberry S, Xiu Y (2020) A mixed reality simulation offers strategic practice for
pre-service teachers. Comput Educ 144:103696

13. Davies CJ, Miller A, Allison C (2012) Virtual time windows: applying cross reality to cultural heritage. In:
Proceedings of the Postgraduate Conference on the Convergence of Networking and Telecomunications
[101109/​Digit​alHer​itage​20136​743757](http://dx.doi.org/10.1109/DigitalHeritage.2013.6743757)

14. Dede C (1995) The evolution of constructivist learning environments: immersion in distributed, virtual
worlds. Educ Technol 35(5):46–52

15. De Freitas S (2006) Learning in immersive worlds: a review of game-based learning
16. De Freitas S, Savill-Smith C, Attewell J (2006) Educational games and simulations: case studies from adult
learning practice. London Learning and Skills Research Centre

17. Díaz P, Zarraonandia T, Sánchez-Francisco M, Aedo I, Onorati T (2019) Do low cost virtual reality devices
support learning acquisition? A comparative study of two different VR devices. In: In: proceedings of the
XX international conference on human computer interaction, pp 1–8

18. Dow S, Saponas TS, Li Y, Landay JA (2006) External representations in ubiquitous computing design and
the implications for design tools. In: proceedings of the 6th conference on designing interactive systems, pp
[241–250. https://​doi.​org/​10.​1145/​11424​05.​11424​43](https://doi.org/10.1145/1142405.1142443)

19. Dunleavy M, Dede C (2014) Augmented reality teaching and learning. In: Handbook of research on
[educational communications and technology. Springer, New York, NY, pp 735–745. https://​doi.​org/​10.​](https://doi.org/10.1007/978-1-4614-3185-5_59)
[1007/​978-1-​4614-​3185-5_​59](https://doi.org/10.1007/978-1-4614-3185-5_59)

20. Ferris K, Bannon L (2002) A load of Ould Boxology! In: proc. Conf. Designing interactive systems,
[London. ACM press, pp 41–49. https://​doi.​org/​10.​1145/​778712.​778722](https://doi.org/10.1145/778712.778722)

21. Goldin-Meadow S (2009) How gesture promotes learning throughout childhood. Child Dev Perspect 3(2):
[106–111. https://​doi.​org/​10.​1111/j.​1750-​8606.​2009.​00088.x](https://doi.org/10.1111/j.1750-8606.2009.00088.x)


-----

[22. Greenberg S (2007) Toolkits and interface creativity. Multimed Tools Appl 32(2):139–159. https://​doi.​org/](https://doi.org/10.1007/s11042-006-0062-y)

[​10.​1007/​s11042-​006-​0062-y](https://doi.org/10.1007/s11042-006-0062-y)

23. Johnson-Glenberg MC (2019) The necessary nine: design principles for embodied VR and active stem
[education. In: Learning in a digital world. Springer, Singapore, pp 83–112. https://​doi.​org/​10.​1007/​978-​981-](https://doi.org/10.1007/978-981-13-8265-9_5)
[​13-​8265-9_5](https://doi.org/10.1007/978-981-13-8265-9_5)

24. Jones L, Nabil S, McLeod A, Girouard A (2020) Wearable bits: scaffolding creativity with a prototyping
toolkit for wearable e-textiles. Proceedings of the Fourteenth International Conference on Tangible,
Embedded, and Embodied Interaction, In, pp 165–177

25. Kamarainen AM, Metcalf S, Grotzer T, Browne A, Mazzuca D, Tutwiler MS, Dede C (2013) EcoMOBILE:
integrating augmented reality and probeware with environmental education field trips. Computers and
[Education 68:545–556. https://​doi.​org/​10.​1016/j.​compe​du.​2013.​02.​018](https://doi.org/10.1016/j.compedu.2013.02.018)

26. Kim B, Park H, Baek Y (2009) Not just fun, but serious strategies: using meta-cognitive strategies in game[based learning. Computers and Education 52:800–810. https://​doi.​org/​10.​1016/j.​compe​du.​2008.​12.​004](https://doi.org/10.1016/j.compedu.2008.12.004)

27. Klopfer E, Squire K (2008) Environmental detectives-the development of an augmented reality platform for
environmental simulations. Educ Technol Res Dev 56(2):203–228. [https://​doi.​org/​10.​1007/​](https://doi.org/10.1007/s11423-007-9037-6)
[s11423-​007-​9037-6](https://doi.org/10.1007/s11423-007-9037-6)

28. Lave J, Wenger E (1991) Situated learning: legitimate peripheral participation. Cambridge university press.

[https://​doi.​org/​10.​24251/​HICSS.​2018.​457](https://doi.org/10.24251/HICSS.2018.457)

29. Lee M, Norouzi N, Bruder G, Wisniewski PJ, Welch GF (2018) The physical-virtual table: exploring the
effects of a virtual human’s physical influence on social interaction. In proceedings of the 24th ACM
_symposium on virtual reality software and technology, pp. 1-11_

30. Lifton J, Laibowitz M, Harry D, Gong N (2009) Metaphor and manifestation-cross-reality with ubiquitous
[sensor/actuator networks. IEEE Pervasive Computing 8:24–33. https://​doi.​org/​10.​1109/​MPRV.​2009.​49](https://doi.org/10.1109/MPRV.2009.49)

31. Lucke U, Rensing C (2014) A survey on pervasive education. Pervasive and Mobile Computing 14:3–16.

[https://​doi.​org/​10.​1016/j.​pmcj.​2013.​12.​001](https://doi.org/10.1016/j.pmcj.2013.12.001)

32. Michaud L (2008) Serious games. Advergaming, edugaming, training and more. Montpellier, France.

[https://​doi.​org/​10.​1007/​978-3-​319-​70111-0](https://doi.org/10.1007/978-3-319-70111-0)

33. Mantovani F (2003) VR learning : potential and challenges for the use of 3D environments in education and
training. Towards CyberPsychology. In: mind, cognitions and Society in the Internet age, pp 207–226

34. Marshall P, Price S, Rogers Y (2003) Conceptualising tangibles to support learning. Proc. Conf. Interaction
[Design and Children, Preston. ACM Press, In, pp 101–109. https://​doi.​org/​10.​1145/​953536.​953551](https://doi.org/10.1145/953536.953551)

35. Mayton B, Dublon G, Russell S, Lynch EF, Haddad DD, Ramasubramanian V, Duhart C, Davenport G,
Paradiso JA (2017) The networked sensory landscape: capturing and experiencing ecological change across
scales. Presence 26(2):182–209

36. Nebeling M, Speicher M (2018) The trouble with augmented reality/virtual reality authoring tools. In:
proceedings of the IEEE international symposium on mixed and augmented reality adjunct (ISMARadjunct) pp 333-337

37. Paradiso JA, Landay JA (2009) Guest editors’ introduction: cross-reality environments. IEEE Pervasive
[Computing 8(3):14–15. https://​doi.​org/​10.​1109/​MPRV.​2009.​47](https://doi.org/10.1109/MPRV.2009.47)

38. Peña-Ríos A, Callaghan V, Gardner M, Alhaddad MJ (2012) Remote mixed reality collaborative laboratory
activities: learning activities within the InterReality portal. N 2012 IEEE/WIC/ACM international confer[ences on web intelligence and intelligent agent technology, pp. 362–366. https://​doi.​org/​10.​1109/​WI-​IAT.](https://doi.org/10.1109/WI-IAT.2012.43)
[​2012.​43](https://doi.org/10.1109/WI-IAT.2012.43)

39. Porfirio D, Fisher E, Sauppé A, Albarghouthi A, Mutlu B (2019) Bodystorming human-robot interactions.
In: proceedings of the 32nd annual ACM symposium on user Interface software and technology, pp 479491

[40. Prensky M (2003) Digital game-based learning. Computers in Entertainment. (CIE) 1(1) :21–21. https://​doi.](https://doi.org/10.1145/950566.950596)

[​org/​10.​1145/​950566.​950596](https://doi.org/10.1145/950566.950596)

41. Reilly DF, Rouzati H, Wu A et al (2010) TwinSpace: an infrastructure for cross-reality team spaces. In:
proceedings of the 23nd annual ACM symposium on user Interface software and technology. Pp 119–128.
[https://​doi.​org/​10.​1145/​18660​29.​18660​50](https://doi.org/10.1145/1866029.1866050)

42. Robertson BF, Radcliffe DF (2009) Impact of CAD tools on creative problem solving in engineering
[design. Comput Aided Des 41(3):136–146. https://​doi.​org/​10.​1016/j.​cad.​2008.​06.​007](https://doi.org/10.1016/j.cad.2008.06.007)

43. Salimian H, Brooks S, Reilly D (2019) MP remix: relaxed WYSIWIS immersive interfaces for mixed
presence collaboration with 3D content. In proceedings of the ACM on human-computer interaction,
3(CSCW), 1-22

44. Sanders EN (2000) Generative tools for co-designing. In Collaborative design, Springer, London pp:3–12
45. Sandford R, Ulicsak M, Facer K, Rudd T (2006) Teaching with games: using commercial off- the-shelf
computer games in formal education. Bristol Futurelab


-----

46. Shaffer DW, Squire KR, Halverson R, Gee JP (2005) Video games and the future of learning. Phi Delta
[Kappan 87(2):105–111. https://​doi.​org/​10.​1177/​00317​21705​08700​205](https://doi.org/10.1177/003172170508700205)

47. Squire KD, Jan M (2007) Mad city mystery: developing scientific argumentation skills with a place-based
augmented reality game on handheld computers. J Sci Educ Technol 16(1):5–29. [https://​doi.​org/​10.​](https://doi.org/10.1007/s10956-006-9037-z)
[1007/​s10956-​006-​9037-z](https://doi.org/10.1007/s10956-006-9037-z)

48. Suh A, Prophet J (2018) The state of immersive technology research: a literature analysis. Comput Hum
Behav 86:77–90

49. Tomico O, Wilde D (2015). Soft, Embodied, Situated & Connected. Proceedings of the 17th International
Conference on Human-Computer Interaction with Mobile Devices and Services Adjunct

[50. Weiser M (1991) The computer for the 21st century. Sci Am 265(3):94–105. https://​doi.​org/​10.​1038/​](https://doi.org/10.1038/scientificamerican0991-94)

[scien​tific​ameri​can09​91-​94](https://doi.org/10.1038/scientificamerican0991-94)

51. Wilde D, Vallgårda A, Tomico O (2017). Embodied design ideation methods: Analysing the power of
estrangement. In Proceedins of conference on human factors in computing systems, pp. 5158–5170.

52. Zarraonandia T, Díaz P, Santos A, Montero Á, Aedo I (2018) A toolkit for creating cross-reality serious
[games. In: International conference on games and learning Alliance. Springer, Cham, pp 297–307. https://](https://doi.org/10.1007/978-3-030-11548-7_28)
[​doi.​org/​10.​1007/​978-3-​030-​11548-7_​28](https://doi.org/10.1007/978-3-030-11548-7_28)

53. Zimmerman J, Forlizzi J, Evenson S (2007) Research through design as a method for interaction design
research in HCI. In proceedings of the SIGCHI conference on human factors in computing systems. ACM,
[pp. 493-502. https://​doi.​org/​10.​1145/​12406​24.​12407​04](https://doi.org/10.1145/1240624.1240704)

**Publisher’s note Springer Nature remains neutral with regard to jurisdictional claims in published maps and**
institutional affiliations.


-----

