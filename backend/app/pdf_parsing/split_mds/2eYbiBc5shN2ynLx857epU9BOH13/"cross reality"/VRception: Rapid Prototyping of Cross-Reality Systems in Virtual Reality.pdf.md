## Start of PDF Naman_Omar 2


---

## 


---

## ABSTRACT

Cross-reality systems empower users to transition along the reality- virtuality continuum or collaborate with others experiencing dif- ferent manifestations of it. However, prototyping these systems is challenging, as it requires sophisticated technical skills, time, and often expensive hardware. We present VRception, a concept and toolkit for quick and easy prototyping of cross-reality systems. By simulating all levels of the reality-virtuality continuum entirely in



Permission to make digital or hard copies of all or part of this work for personal or classroom use is granted without fee provided that copies are not made or distributed for profit or commercial advantage and that copies bear this notice and the full citation on the first page. Copyrights for components of this work owned by others than the author(s) must be honored. Abstracting with credit is permitted. To copy otherwise, or republish, to post on servers or to redistribute to lists, requires prior specific permission and/or a fee. Request permissions from permissions@acm.org.

CHI ’22, April 29-May 5, 2022, New Orleans, LA, USA

Virtual Reality, our concept overcomes the asynchronicity of reali- ties, eliminating technical obstacles. Our VRception Toolkit leverages this concept to allow rapid prototyping of cross-reality systems and easy remixing of elements from all continuum levels. We repli- cated six cross-reality papers using our toolkit and presented them to their authors. Interviews with them revealed that our toolkit sufficiently replicates their core functionalities and allows quick it- erations. Additionally, remote participants used our toolkit in pairs to collaboratively implement prototypes in about eight minutes that they would have otherwise expected to take days.


---

## CCS CONCEPTS

Human-centered computing → Mixed / augmented reality; Virtual reality; Collaborative interaction.


---

## KEYWORDS


---

## INTRODUCTION

Immersive technologies such as Augmented Reality (AR) and Vir- tual Reality (VR) allow users to engage in alternate digital realities using Head-Mounted Displays (HMD). However, problems that these technologies create are the isolation of users (i.e., HMD users) and the exclusion of bystanders (i.e., non-HMD users) [8, 22]. These issues recently sparked a new research direction – cross-reality systems [58] – which aims to enable interactions across multiple technologies; for example, it allows HMD users in VR to interact with bystanders in the real world. Simeone et al. define them as sys- tems that “envision (i) a smooth transition between systems using different degrees of virtuality or (ii) collaboration between users using different systems with different degrees of virtuality” [58].

Developing prototypes to enable immersive cross-reality systems is often time-consuming and requires both software and hardware prototyping expertise as well as the hardware itself. In particular, cross-reality hardware prototypes (e.g., [13, 21, 22, 40]) have a high entry barrier as they require technology (e.g., displays, projectors, sensors), engineering (e.g., electrical engineering, software devel- opment), and design expertise (e.g., rapid prototyping). Enabling rapid, low effort prototyping of cross-reality systems would sup- port researchers and practitioners (i.e., developers and designers) in quickly iterating these systems and make the research area as a whole more inclusive to people who lack resources or do not have the required prototype-building expertise.

To this end, we present VRception: the concept of simulating cross-reality systems entirely in VR and allowing researchers and practitioners to rapidly prototype these systems. By simulating all levels of the reality-virtuality continuum, our concept overcomes the asynchronicity of realities. In particular, our concept creates a close coupling of both worlds and simulates a co-located asym- metric environment. This allows researchers and practitioners to instantly remix and blend the simulated real and virtual worlds. Moreover, it reduces the need for strong engineering skills, as it is a software-only approach, allowing to prototype cross-reality systems that typically require hardware setups.

Based on our concept, we developed the VRception Toolkit, a multi-user toolkit for quickly and easily prototyping cross-reality systems without the need for hardware prototyping. The goal of our toolkit is to provide an early implementation of our concept that enables researchers to study its’ usefulness, which in combination with the open-source nature of our toolkit, allows the community to add features if needed. Our toolkit supports two different pro- totyping environments: 1) VR with a WYSIWYG (what you see is what you get) editor and 2) Unity. In VR, users are immersed in a simulation of the reality-virtuality continuum (see Figure 1), in which they can combine and configure predefined objects to prototype cross-reality systems. In Unity, users can customize the functionalities of the toolkit, for example, by adding new objects or

new transitions between realities. By providing both environments, we can lower the barrier to entry with a simple-to-use VR editor, while not loosing the ability for more advanced customization.

To evaluate the concept of VRception, we re-implemented six cross-reality papers published in the last five years [13, 21, 31, 36, 40, 68]. Next, we presented the original authors with our imple- mentation and conducted semi-structured interviews to ask the authors if our implementation could simulate their system’s core functionalities and to collect feedback about the implementation of our VRception Toolkit. Our expert interviewees highlighted that our toolkit allows rapid and easy prototyping that is otherwise challenging and agreed that we successfully replicated the original systems. To further evaluate how much effort and time it takes to prototype cross-reality systems using the VRception Toolkit, we con- ducted a workshop with eight participants. We asked participants to implement cross-reality systems that allow one to include real- world content in VR and enable bystanders to see the VR experience. Participants with prior knowledge in VR/AR development were able to create different cross-reality systems in an average time of about eight minutes. This further shows that the VRception Toolkit is easy to learn and allows users to quickly and easily prototype cross-reality systems leveraging the concept of VRception.

The main contributions of our work are:

The concept of VRception and its evaluation with six experts who developed and published prior cross-reality systems.

The implementation of the VRception Toolkit as a WYSIWYG application inside a VR headset, enabling novice users to collaboratively and rapidly prototype cross-reality systems without coding or hardware building expertise.

Insights from a follow-up evaluation through a workshop, where participants (n=8) were able to quickly (in ∼8 minutes) create cross-reality systems using the VRception Toolkit.


---

## RELATED WORK

In 1994, Slater et al. [60] presented the idea of nested virtual re- alities and investigated their influence on presence. In this work, we exploit this idea as nested realities inside of VR. We propose to apply the idea to the domain of cross-reality systems, which we will review first. We will then review literature proposing VR as a research and prototyping tool.

Cross-Reality Interaction and Systems Several researchers have pointed out the disconnect between the real world and the digital world [18, 56, 70]. This disconnect is partic-

ularly present when the user engaging with the digital world is not alone [37] and when collaboration between users is important [8]. Thus, a number of researchers envisioned systems that would en- able users to engage with the digital world without totally discon- necting from the real world by using technology to merge the two worlds (e.g., [40, 68]). These systems are referred to as cross-reality systems and they either involve users that can transition on the reality-virtuality continuum to experience different levels of virtual- ity or they enable users that experience different levels of virtuality to collaborate and bridge realities [58]. Today, there are different research prototypes that focus on users transition on the contin- uum, such as by transitioning into VR [63, 65] or back into the real







world [33]. Moreover, there is a great number of prototypes that aim to bridge different realities, such as by using a smartphone as a “win- dow” into VR [2], projecting VR into the real world [16, 21, 29, 30],

or attaching projectors [26, 31, 68] and displays [22] to users and the HMD they wear. However, these prototypes’ unique character- istics, such as their form factor (i.e., weight, size), can affect the user’s experience. For example, Wang et al. [68] used a taut strap to distribute the weight of the device and Jansen et al. [31] outlined that one of their future aims is to reduce their prototype’s weight. As we re-implement six cross-reality systems with our VRception Toolkit in this paper, we provide a more systematic overview of these systems in Section 5.1 and Table 1.


---

## Virtual Reality as a Research Platform

The use of VR for prototyping and studying real-world artifacts is not new. In fact, VR has already been used as a participatory design methodology [42], for the evaluation of user behavior in front of public displays [38], as a test bed for the evaluation of real-world security systems [39], and as an implementation and evaluation method of situated visualization [69], among other uses. Rebelo et al. [53] even argued that VR enables one to develop re- alistic virtual environments that come with greater control of the experimental conditions compared to a lab setting and that user ex- perience (UX) research may benefit from such a VR-based research methodology. In a similar vein, Antonya et al. [5] argued that VR can support the evaluation and modification of mechanical systems and offer engineers more realistic real-time representations of their systems during the design process. Furthermore, it has also been argued that the use of VR enables researchers to evaluate systems in different contexts [3] and that such controlled virtual environments can provide users with rich contextual experiences [28]. Other works have shown that advances in VR technology present new op- portunities for human-centered research. This includes expensive or even dangerous areas to study in the real world, such as pedes- trian safety research [14, 55] or using VR as a training platform for underground coal miners [19]. All the works above highlight the potential of VR as a research platform for human-centered research. As VR is nowadays also used as a research platform, researchers also set out to understand the differences and implications when using VR as a research tool [34, 50]. Here, it is crucial to note that recent investigations into systematically studying the impact of different environments (e.g., laboratory, VR, in-situ) on prototypes have been inconclusive, as effects could not always be replicated in VR [66, 69]. The final component for using VR as an effective research platform is to enable remote studies. Rivu et al. [51], for example, present a framework for remote VR studies and guide- lines for best practices of such studies. Saffo et al. [54] went one step further and conducted remote collaborative VR studies and presented their findings. However, Ratcliffe et al. [52] found that safety and hardware variability issues have to be overcome in order

to run remote studies effectively.


---

## Virtual Reality Prototyping Tools

To be able to implement current AR and VR systems, designers and developers have to use time-consuming expert tools that enable soft- ware as well as hardware prototyping [10]. Expert tools allow one

to design and implement every little detail to create high-fidelity prototypes and products. Frequently used tools for prototyping AR and VR experiences are 3D programming environments such as the Unity 3D or Unreal engine. For these environments, toolkits and programming interfaces exist that help practitioners to im- plement typical user interactions (e.g., Mixed Reality Toolkit1) or integrate the real-world environment (e.g., Oculus Passthrough API2). However, technical barriers such as programming skills and a steep learning curve make it difficult for non-experts to quickly build cross-reality prototypes [7, 43, 47]. Therefore, researchers have started to explore new tools that allow non-experts to quickly prototype AR [17, 46, 62] and VR [43, 45] applications without the need for programming or 3D modeling. Nebeling et al. presented 360proto [45], a toolkit that allows designers to create complex 3D environments using sketches on a piece of paper. They then pre- sented ProtoAR [46], a tookit focused on optimizing the workflow in augmented reality. Leveraging physical props in the environment and the camera of the smartphone, the authors optimized the AR development pipeline by removing the need for programming and 3D modeling. While the VRception Toolkit has a similar goal, it faces different challenges. When designing cross-reality systems, the de- signer has to focus on at least two participants in two parallel and synchronized environments (e.g., real-virtual, virtual-virtual). Addi- tionally, the created scenes must be experienced in an appropriate setting. These are both aspects that are at the core of the VRception Toolkit. To the best of our knowledge, VRception Toolkit is the first multi-user and multi-environment rapid-prototyping toolkit that allows non-experts to build and experience cross-reality systems without the need for hardware prototyping and programming.

VRCEPTION - CONCEPT

We propose VRception, a concept to simulate different realities in Virtual Reality (VR). Thereby, we enable users to rapidly prototype experiences across different realities. Simulated realities can be physical realities but also digital realities, such as AR, AV, or VR. By bringing different realities into VR, users can easily switch between them and remix their elements. With this, we also overcome the limitations of the physical world and reduce the effort necessary to prototype novel cross-reality systems. In the following, we highlight major characteristics that any implementation of our VRception concept should consider.

Characteristic 1: Enabling Multiple Realities. In theory, an infinite number of realities could be simulated in VR. For example, more than two realities are relevant when two co-located VR users expe- rience different virtualities [67]. Moreover, when users collaborate remotely, they share the virtuality, but two realities exist in the sense that each has their own physical space [49]. In general, mul- tiple realities can be arranged in two ways: 1) in parallel, which means they exist on the same level, or 2) nested, which means they exist within each other to allow stacking depth [60].

Characteristic 2: Enabling Transition between Realities. Support- ing multiple realities requires a mechanism to switch between these



1 Mixed Reality Toolkit. https://github.com/microsoft/MixedRealityToolkit-Unity

2 Oculus Passthrough API. https://developer.oculus.com/blog/mixed-reality-with- passthrough, last retrieved January 4, 2022.







realities. Here, we see two competing approaches: a) the designer (or storyteller) moves the user on the continuum, or b) the user is in control of which reality is visible to them. Furthermore, in many cases, it is crucial to not just render one reality, but to blend or remix these realities. For example, AR requires reality to be fully visible and virtuality to be an overlay (see Figure 1b). In general, we expect different types of transitions to be possible, as shown in previous work [65]. Transitions can either be abrupt (i.e., an instantaneous jump from one reality to the other) or happen gradually (i.e., they morph from one reality to the other). Moreover, transitions can af- fect all objects of a reality simultaneously (increasing transparency on all objects to fade out a reality) or sequentially (more objects disappear as the transition continues).

Characteristic 3: Enabling Rapid Prototyping. An essential char- acteristic of VRception is that any implementation of the concept should enable users to rapidly prototype. Apart from the HMD worn by the user, every part of the simulated realities are software-based and do not require any hardware components. Thus, hardware lim- itations play a minor role; still, these limitations could be simulated if needed (e.g., to simulate sensor limitations [13] or the limited fields of view of AR HMDs [20]). Inherently, without hardware im- plementations required, prototyping becomes less time-consuming, requires less technical knowledge, and becomes less prone to tech- nical failures. Nonetheless, two additional factors are crucial to enable rapid prototyping of cross-reality systems: 1) a set of virtual objects to use and build up prototypes, and 2) intuitive interactions for object manipulation. Here, such virtual objects can be primitive abstract objects (e.g., cube, sphere) which can be combined to create more complex objects.

Characteristic 4: Multi-user Support. Working together allows collaborators to combine their knowledge and shape a collective solution that incorporates different perspectives. Moreover, by col- laborating with others, users can take different roles (e.g., VR, AR) to experiment with asymmetric interactions. Thus, collaboration is an important feature for VRception. Collaboration can be synchronous or asynchronous (which is less often used in cross-reality systems) and it can be co-located or remote. Co-located collaboration enables users to work in the same space, allowing collaborators to experi- ment with close forms of interaction such as touch input. To quickly set up such co-located interactions, a system should incorporate means to host two different instances of the system running on multiple HMDs. Remote collaboration empowers users to bridge geographic distance and opens up the possibility for remote studies.

VRCEPTION - TOOLKIT

Based on our concept, we developed the VRception Toolkit, a multi- user toolkit for quickly and easily prototyping cross-reality systems. As follows, we introduce the different prototyping environments the toolkit offers and their respective workflows, and provide an overview of the iterative implementation of the VRception Toolkit.

Prototyping with the VRception Toolkit Essentially, the VRception Toolkit provides two different environ- ments to rapidly prototype cross-reality systems: 1) VR with a

WYSIWYG (what you see is what you get) editor and 2) Unity

(see Figure 2). By providing both environments, we can lower the barrier to entry with a simple-to-use VR editor, while not losing the ability for advanced customization. Moreover, for teams with different skill-sets, one can imagine having developers with ad- vanced technical skills customize the environment in Unity and creating additional resources, while designers can utilize the VR environment to quickly try out different ideas.

Prototyping in Virtual Reality. In VR, users are immersed in a simulation of the reality-virtuality continuum. They are syn- chronized across their locations, represented by full-body avatars, communicate via voice chat, and their actions are recorded for com- plete replay. Users can open a menu containing predefined objects and a slider that allows users to transition on the continuum (see Figure 3a). By grabbing an object from the list, users can add it to the simulation, depending on the reality-virtuality continuum manifestation (slider position). Objects can be manipulated (trans- late/rotate/scale/duplicate/delete) and combined by “sticking” them together. Finally, users can add avatars representing different user types (real-world bystander/AR/AV/VR) that can be placed in the scene to quickly jump to their perspective and enable single users to prototype cross-reality systems (see Figure 3c). The according workflow is demonstrated in Figure 2. While this is most certainly the quickest way to prototype cross-reality systems, it comes at a price because users are limited to the objects provided in the virtual menu (it can be extended easily with additional objects).

Prototyping in Unity3D. Unity3D is a powerful development tool that allows relatively easy navigation and provides exten- sive functionalities. Our VRception Toolkit is implemented within Unity3D and we aimed to provide a well-structured project that can be easily extended in terms of functionality. In a similar fashion, our toolkit allows experienced developers to extend our scripts, en- abling them to build richer interactions using the editor and C#. In Unity, developers can quickly add additional predefined objects to the menu (e.g., cylinder, projector screen, *.fbx file). Moreover, devel- opers can load existing Unity scenes (e.g., scenes from prior projects) and use them as representations of specific realities (configurable: one can also simulate two virtualities). Additionally, developers can change the way the transitions between realities work.

Implementation of the VRception Toolkit

In the following, we present a reference implementation of VRcep- tion, which we refer to as the VRception Toolkit. We implemented the VRception Toolkit in Unity3D (2020.1.8f1) using the Oculus SDK3 . Our implementation has two goals. First, we wanted to create a VR application that allows users to experience VRception, thus en- abling quick prototyping of cross-reality systems in VR. Second, we wanted to provide a well-structured Unity3D project that em- powers others to extend the functionality easily and build their own versions. Therefore, we published our source code on GitHub4 under the MIT license, empowering researchers and practition- ers to benefit from our toolkit. In the following, we describe our implementation of the characteristics listed above.



3 Oculus Developer. http://developer.oculus.com, last retrieved January 4, 2022.

4 VRception Toolkit. https://github.com/UweGruenefeld/VRception








---

## Figure 2: Workfows and Environments of the VRception toolkit. The Unity3D option is designed to maximize expert devel- opers’ ability to customized the toolkit. The WYSIWYG mode allows developers that are not experts in Unity to experiment with cross-reality systems; thereby, lowering the barrier to entry.





Reality and Virtuality. To present different realities, we make use of multiple scenes, each holding one world that can be designed in- dependently. Our implementation currently supports two realities, e.g., reality and virtuality or virtuality-1 and virtuality-2. With our implementation, we can load any existing Unity3D scene as part of one of the two realities, allowing the reuse of existing projects. Additionally, we can have a shared scene containing shared objects that are visible in both realities, such as the player’s avatar.

Interaction. Users have full control over the realities with their two controllers. Here, the left controller is mainly used to provide a virtual menu, which can be opened with a button on that con- troller. The menu contains a horizontal slider that allows users to transition between the two realities (cf. Figure 3a). Additionally, it contains a set of predefined objects. The users can drag these objects into the scene, attach them to one another, or manipulate them to create more complex systems, objects, or structures. To directly manipulate objects, users can select them with their right controller and translate, rotate, scale, duplicate, or delete them.

Gradual Transition Between Realities. In our toolkit, a horizontal slider — the reality-virtuality slider — allows users to transition between the two realities, with reality on the left side and virtuality on the right. The slider is a representation of the reality-virtuality continuum [41]. Positioning the slider knob at one of the ends will render only one of the two realities. Between the extreme positions, transparency is applied to gradually blend all objects from all realities, depending on the position (cf. Figure 1). Each user has a slider to independently switch between realities and different glasses on their avatars show their current reality. Objects from shared scenes are always visible and unaffected by the slider. We implemented this with two stacked cameras (one for each reality) and transparency-compatible shaders attached to all objects.

Additionally, our toolkit supports individual blending or remix- ing of realities via a feature that we refer to as experiences. Here, every experience can implement a highly customizable rendering of the different realities beyond well-known manifestations such as AR, AV, and VR. Such an experience could, for example, render from

Predefined Objects. To empower users to quickly prototype cross- reality systems, we created an initial set of objects. While the objects in the virtual menu can be changed and extended easily, we decided for four predefined objects as the default set of objects that ship with our prototyping tool (described below). During our development, we created many different objects (with some of them used to replicate the research prototypes in Section 5.2); however, some of the objects are less generic (e.g., the lightsaber created to replicate ShareVR [21]). Thus, we selected four objects to demonstrate our toolkit’s potential. To create objects inside the VR environment, users simply drag them from the menu into the currently selected reality, which is set by the reality-virtuality slider. If the slider knob is more towards reality, objects spawn in reality, and vice versa.

We included two primitive shapes: cube and sphere. We selected them because they are great building blocks (e.g., demonstrated by the Game Minecraft5). Both objects can be manipulated and com- bined to represent more complex objects. For example, in Figure 5c, users formed a table and character from these shapes.

We implemented a display that allows one to bridge realities. While it exists in one reality, it shows the other (cf. Figure 3b), depending on the reality-virtuality slider. To realize the virtual displays, we use an additional camera that renders onto a texture attached to the display. To control the displays, users can adapt the position and direction of the camera independent of the display position. Both objects representing camera position and direction can also be attached to other objects. We selected the display object as many research prototypes use them (c.f., Table 1).

Finally, we implemented a projector that works similarly to the displays. However, instead of rendering the camera texture onto a plane, it projects it into the scene (cf. Figure 3c). Projectors also allow the user to adapt position and direction of the camera. We selected projectors because they are found in many prototypes [26, 31, 68].


---

## Iterated Implementation of the Toolkit

After the expert interviews (see Section 6), we iterated our imple- mentation in preparation for the design workshop (see Section 7), implementing collaboration and integrating the expert feedback.



one reality only the objects closer to the observer while rendering		



everything of the other reality unconditionally.

5 Game Minecraft. https://www.minecraft.net, last retrieved January 4, 2022.







(a) Virtual menu attached to controller.	(b) Example of display showing reality.	(c) Example of projector showing virtuality.




---

## Figure 3: Implementation details of the VRception Toolkit, showing a) the virtual menu attached to the user’s left controller, b) a virtual display that renders reality on the screen (blended in reality for orientation), and c) a projector that projects virtuality on the foor (blended in virtuality for orientation). Additionally, in c) one can see the “Look At” and “Camera” objects, which allow the user to adjust the direction and position of the camera, respectively; similar objects exist for the display as well.





Networking. To enable multiple users to collaborate within the VRception Toolkit, we implemented network synchronization that keeps all clients in a consistent state. We used the Photon Engine6 which allows up to 20 concurrent users (in the free version) without the need to host a dedicated server. Additionally, we implemented an in-game voice chat with 3D spatialized audio to allow collabora- tors to talk to one another using the Photon Voice feature. A test with five concurrent users on the Oculus Quest 1 showed no frame drops (stable 72Hz) and <250KB data transferred per minute.

Avatars. To represent collaborators in our VRception Toolkit, we adapted a rigged character from the Unity3D Asset Store7 (cf. Fig- ure 1). Moreover, we used inverse kinematic (IK) to map the con- trollers and headset to fitting poses of the avatar character. Specifi- cally, we used the FinalIK package8 that implements a variety of IK solvers such as CCD [32] and FABRIK [6] and performs better than the Unity3D built-in solver. Last, we adjusted the shirt color and hairstyle to give each collaborator a unique look.

Real-world Scan. To increase the realism of the reality within our VRception Toolkit, we decided to include a 3D scan taken from a private living room9. The advantage of such a real-world scan is that the scanning technology required for it has recently become available to more people (e.g., with the LIDAR sensors integrated in selected Apple products). Furthermore, compared to modeling with higher levels of realism, scanning can be done quickly and does not require any advanced skills, allowing developers to bring their own room into the VRception Toolkit.

Replay. The replay feature allows researchers to watch recorded sessions again, implemented as state-based replay. Here, we were inspired by previous work on analyzing user sessions in mixed reality [1]. The feature supports viewing within VR or within the Unity3D editor and uses a self-hosted database to store all changes that occur during a recording.



6 PhotonEngine. https://photonengine.com, last retrieved January 4, 2022.

7 Liam.  https://assetstore.unity.com/packages/3d/characters/humanoids/humans/liam-

lowpoly-character-100007, last retrieved January 4, 2022.

8 FinalIK. http://root-motion.com, last retrieved January 4, 2022.

9 Chalet in France. https://skfb.ly/6ZynL, last retrieved January 4, 2022.


---

## SHOWCASES OF PROTOTYPING TOOL

We re-implemented six prototypes from prior work using our VR- ception Toolkit, demonstrating its potential. Therefore, we first give an overview of research prototypes proposed in previous work and then select six of these prototypes for re-implementation.




---

## Selection of Cross-Reality Research

To better understand cross-reality research, we manually reviewed all papers (no keyword search) on cross-reality systems published in HCI and VR venues, including UIST, CHI, IEEE VR, MobileHCI, and SIGGRAPH. In our brief review, we focused on research that was published no earlier than 2015. We did not aim to compile a complete literature corpus; instead, our goal was to identify a vari- ety of different systems and see if they could be replicated using our toolkit. Therefore, we first checked the title of each paper to identify relevant research. We then read the abstracts (or further sections if necessary) of all publications whose titles seemed relevant in order to identify relevant research prototypes. If a paper seemed relevant, we collected it in a spreadsheet (cf. [15]) and identified the relevant features of its prototype. From the selected papers, we classified three directions of interaction as possible: (1) unidirectional inter- action from virtuality to reality (VR→RW), (2) unidirectional in-

teraction from reality to virtuality (RW→VR), and (3) bidirectional interaction between reality and virtuality (RW↔VR). In Table 1, we present a selection of the collected research categorized into the

three mentioned categories.

From Table 1, we selected two research prototypes from each category, resulting in a total of six prototypes. For each category, we selected two prototypes with several years between their publi- cations (to include earlier and newer research), which differed in their implementation from a hardware perspective. For example, for “VR→RW,” we selected one prototype that used a display and another that utilized a projector. For “RW↔VR,” we selected one prototype for VR and another based on AR. We focused mainly on VR systems as they were more frequent and their nature of excluding reality was considered more interesting. Therefore, our final set of papers is as follows: [13, 21, 31, 36, 40, 68]; see Table 1.






---

## Table 1: Examples of research papers that investigate cross-reality systems and interaction, ordered by publication year and sorted by direction of interaction. For example, RW→VR implies that users of this system transition from the Real World to VR. The selected prototypes are highlighted in light gray.



Authors	Short Title	Description	Direction  Year  Conference

Mai et al. [36]	TransparentHMD  revealing HMD user’s face to bystanders	 VR→RW	2017		MUM Chan et al. [12]	FrontFace	attaching a front-facing screen to an HMD	 VR→RW	2017	 MobileHCI Ishii et al. [29]	ReverseCAVE	reverse CAVE showing VR to bystanders	 VR→RW	2019	SIGGRAPH Hartmann et al. [26]	AAR	projector attached to AR-HMD	AR→RW	2020		 UIST



McGill et al. [40]	A Dose of Reality	blending real-world objects into VR	RW→VR	2015	CHI

Nuernberger et al. [48]	SnapToReality	align objects in AR to the real world	RW→AR	2016	CHI

Hock et al. [27]	CarVR	using real-world motion for VR world	RW→VR	2017	CHI Hartmann et al. [25]	RealityCheck	reconstruction of reality with depth sensing	RW→VR	2019	CHI



Gugenheimer et al. [21] ShareVR	co-located HMD and non-HMD users	RW↔VR  2017	 CHI Yang et al. [71]	ShareSpace	bystander can communicate need for space	RW↔VR  2018	UIST Gugenheimer et al. [22]  FaceDisplay	touch displays attached to VR HMD	RW↔VR  2018	 CHI

Kumaravel et al. [64]   TransceiVR	sync info between asymmetric users	RW↔VR  2020	UIST








---

## Re-implementation of Selected Research

We re-implemented the six selected research prototypes; see Fig- ure 4 for an overview of the re-implemented systems. Our goal was to see how easily we would be able to replicate them in the VRception Toolkit. We used the prototyping workflow A (Unity3D

+ WYSIWYG; see Figure 2) and re-implemented each prototype in less than one hour.

TransparentHMD. The fundamental idea of TransparentHMD is to reveal the HMD user’s eyes to bystanders and thereby reduce communication problems [36]. For our re-implementation, we at- tached our developed display component (cf. Section 4.2) to the HMD of the VR user. Then, we adjusted the position and clipping of the camera that renders onto the display to show the eyes of the avatar (see Figure 4a).

HMD Light. In their system, the authors attached a projector to a VR HMD, revealing the VR user’s experience to bystanders [68]. To re-implement the system, we attached our projector component (cf. Section 4.2) to the HMD of the VR user. Then we implemented a script that controls the orientation of the projector to show the projection closer to the bystander (see Figure 4d).

A Dose of Reality. The authors envisioned being able to selec- tively embed real-world objects in the VR experience [40]. In our re-implementation, we focused on two of the proposed research prototypes, in which a bystander and a keyboard are integrated into the VR experience (see Figure 4b). Here, we created a custom experience (cf. Section 4.2) to fade in these objects, depending on their proximity.

VRoamer. In essence, VRoamer allows one to generate virtual worlds from the sensed physical environment on the fly [13]. To re-implement this system, we created a custom experience in which real objects are represented by virtual objects when the VR user gets within sensing range (see Figure 4e). For physical structures (e.g.,

walls), we replaced the texture; for other obstacles, we superseded the mesh and texture.



ShareVR. The ShareVR prototype utilizes floor projection and mobile displays to visualize the VR experience for non-HMD users and enable interaction between a VR user and a bystander [21]. We re-implemented both floor projection and mobile display attached to a controller held by the bystander (see Figure 4c). Moreover, we implemented lightsabers for the bystander and VR user.



ShARe. The authors of ShARe proposed using a projector at- tached to an AR HMD to share the AR experience with bystanders and to enable them to interact with the AR content [31]. For our re-implementation, we attached a projector to a HoloLens HMD, constructed a table and recreated a simplified version of the game board demonstrated in the original paper (see Figure 4f).




---

## EXPERT INTERVIEWS

From the related work presented in Table 1, we replicated six sys- tems [13, 21, 31, 36, 40, 68] using our VRception Toolkit. For each of the replications, we invited one of the authors as an expert to provide feedback on our concept, our tool, and the replication of their system. We asked them only about their system because we wanted to understand their individual prototyping experience.




---

## Participants

We had 8 volunteer participants (1 female, 7 male) with a mean age of 27 (SD = 3) from three different countries (Germany, France, and Brazil), recruited through social media and mailing lists. None of them had taken part in the previous interview study. For the workshop, we grouped participants into random pairs. We selected participants with prior knowledge in VR/AR development to ensure participants had experience with prototype development. On aver- age, the participants stated that they had 2.3 years of experience (SD = 3.4) in developing VR/AR prototypes.


---

## Procedure

The workshop was conducted fully remotely via Zoom. We in- vited participants in pairs to collaboratively develop cross-reality prototypes. In the beginning, we synced participants’ knowledge about cross-reality interactions by discussing the reality-virtuality continuum [41] and presenting five different research papers (cf. [26, 34, 35, 40, 68]). Thereafter, we introduced VRception. We then showed a 5-minute video explaining the VRception Toolkit and fol- lowed that with a 10-minute practice session. An experimenter joined in the application as well to address questions of partici- pants via the in-game voice chat and to demonstrate functionalities

on request. Afterwards, we started with the main part of the study in which participants built two prototypes in the VRception Toolkit.

We presented two scenarios to the participants and asked them to develop a prototype for each one. In both scenarios, they had to imagine that they were creating their prototypes to help a 3D designer who enjoys crafting in VR. In the first scenario, we ex- plained that the designer has a TV running in the background while crafting; however, now they want to have the TV in VR to continue watching while creating 3D models. In the second scenario, we explained that the designer had an urgent assignment they needed to finish, but a friend was already there and wanted to see what the designer was crafting in VR. For each scenario, one of the two par- ticipants could initially introduce their idea of how to address the problem and thereafter, both were asked to collaborate to find the best implementation of this idea. After each session, participants could take a short break.

After both prototyping scenarios were completed, we asked the participants to fill out a System Usability Scale (SUS) [11] and a raw NASA-TLX (TLX) [24]. We ended the workshop with a semi- structured interview.


---

## Data Analysis

We applied open coding on our interview data, followed by an inductive category development. We did this to find patterns of experts’ opinions and thoughts about the VRception Toolkit. Once all the interviews were completed, four researchers transcribed all audio recordings and open coded the transcriptions. This process generated 286 open codes. We then conducted an online affinity diagram [23] of the open codes. Next, we organized the codes into groups, which were then further refined into themes using an online whiteboard10. We visited the transcript and audio recordings again when additional information was needed during the analysis.


---

## Results

All pairs were able to address both prototyping scenarios. Each session lasted about 100 minutes on average.

/.4.1 Prototypes from Participants. Overall, the workshop partici- pants created eight prototypes, four for each prototyping scenario described in Section 7.2. In Figure 5, we present a selection of four prototypes, two for each scenario. The participants decided to use a display to bridge realities five times, while they chose the projector three times. In three out of the four workshops, the participants tried both a display and a projector during the first task. In two cases, they settled on using a display, and in one instance, they decided on a projector. For the first task, in which they were asked to bring the television (TV) from reality into virtuality, they im- plemented the following four ideas: 1) P1 and P2 created a virtual screen with the same size and position as the TV (see Figure 5a), 2) P3 and P4 created a virtual display that is attached to the user and always shows the TV (see Figure 5b), 3) P5 and P6 decided to use a projector to show the TV on the floor, and 4) P7 and P8 created a large screen and rendered the TV screen on it. For the second task, in which we asked participants to show the virtuality experience to a real-world bystanders, they had the following four ideas: 1) P1 and P2 created a display that works as a window to virtuality (see Figure 5c), 2) P3 and P4 used a display as well but attached the look at object to the VR user’s body to follow them, 3) P5 and P6







used a combination of four projectors attached to the VR user’s body to project the virtuality onto the floor in the real world (see Figure 5d), and 4) P7 and P8 created a large canvas in the real world and projected the virtuality onto it.

/.4.2 Qantitative Results. First, we looked into how long partic- ipants took to prototype a solution for the given scenario. Each pair of participants had two tasks: VR to real world and real world to VR. Hence, we had eight prototyping trials in total, which took an average time of 8 min 17 sec (Min=4 min 22sec, Max=15 min 47sec). The longest trial was for the first task, during which the participants tried out two different solutions and had their initial solution implemented in less than 7 minutes. However, they then reconsidered and tried to attach a projector and canvas to the body, which took more time.

The System Usability Scale (SUS) [11] results yield a mean score of 76.6 (SD = 10.6), rendering the overall usability of the VRception Toolkit as “good” [9]. Participants were most split for the last ques- tion (5-point Likert item), “I needed to learn a lot of things before I could get going with the system,” giving a median of 3-neutral (SD = 1.3). Moreover, the mean raw NASA-TLX showed lower task load, with 30.6 of 100 points (SD = 9.0). The mean scores of the subscales in ascending order are: frustration 3.3 (SD = 1.6), physical demand 3.6 (SD = 1.6), effort 6.1 (SD = 3.0), temporal demand 6.4

(SD = 4.0), performance 7.0 (SD = 4.2), and mental demand 10.4

(SD = 4.0).

/.4.3 Qalitative Results. For the qualitative analyses, we applied open coding on the user feedback, followed by an inductive cate- gory development. After transcribing the interview, open coding generated 145 codes. We then created an online affinity diagram

[23] for the open codes.

All participants gave general positive comments about the VR- ception Toolkit. For instance, P6 said “I wanted to stay. [...] the whole application was really good to implement [in].” Moreover, they stated that it is fun (P3, P4, P6), easy to use (P2, P5, P7), and interactive (P1, P3, P8). Moreover, P1 and P2 pointed out that the simulation environment had a positive effect on their creativity, enabling them to explore new ideas.

When we asked participants about issues with the VRception Toolkit, all participants but P6 stated that the controls are rather complex. On the other hand, six participants reported that, after a learning period, they were familiar with the controls (P1, P2, P5, P6, P7, and P8). For instance, P7 said “I needed some more time to get used to the tool – maybe like 2 minutes.”

In terms of the prototyping experience, participants reiterated that the VRception Toolkit is fast and easy to use (P2, P7). Moreover, two participants stated that they could clearly distinguish between the two worlds (P1, P2) and only one commented negatively on the fact that both worlds are virtual (P7). Finally, seven participants (P1-P3, P5-P8) added that if they would need to build the same setup in the real world, it would take weeks or even months to complete. Three of these (P2, P5, P6) further noted that this is due to the complexity of the real-world implementations.

All participants stated that the collaboration in VR was nice and worked well. They were especially surprised that it functioned well, given the fact that they were not co-located. The only downside was stated by P2: that they would have liked a better way of identifying

who spoke, which in their opinion could be solved by better spatial audio. In addition, P1 wondered how the system would be affected by having more collaborators.

All participants gave comments on features they would like to see in the next iteration of the toolkit. Here, three participants (P1- P3) wanted to be able to jump to specific positions on the Reality- Virtuality Continuum. Other requested features including real world object scanning, additional rooms, a context menu, interaction between the objects, and the option to attach scripts to objects. For enhanced collaboration, P8 asked for a out-of-view visualization of the collaborators and lip synchronization, cf. Aneja et al. [4]. Finally, six participants (P1-P4, P7, P8) asked for more assets to use. All participants could envision various examples of how to use the VRception Toolkit. The first use case was obviously for prototyp- ing during the design of new systems and the evaluation using our toolkit. Our participants saw great potential to use the toolkit for educational purposes and to explain ideas to others. Finally, par- ticipants saw how the system can be used to engage with friends and collaborators, but they would have liked to also include real by- standers while being co-located, thus making it more collaborative.


---

## Discussion

Rapid Prototyping. During the design workshop, participants were asked to collaboratively prototype solutions for two different problem types: RW→VR and VR→RW. Participants proposed a working solution in all cases and for each of the problems. Interest- ingly, the solutions developed by the participants differed, with no strong overlap among the solutions (cf. Section 7.4.1 and Figure 5). Participants took, on average, less than 10 minutes to create their solutions. Moreover, we observed a decrease in the average proto- typing time for the second task, from 9 min 35 sec in the first task to 6 min 59 sec in the second task. This suggests that it does not take long for one to become familiar with our toolkit. Overall, we argue that our results provide evidence that the VRception Toolkit allows rapid prototyping of cross-reality systems. The participants agreed and described the toolkit as fast and easy to use, remarking that it would have taken weeks or months to prototype their solutions

with actual hardware.

Remote Collaboration. The participants highlighted that the col- laboration was well-implemented. All participants felt connected to their collaborator, with some saying that they consider the col- laboration in the VRception Toolkit to be better than real-world collaboration because they felt less distracted (P5,P6) and more connected (P7) throughout the different realities. The latter is espe- cially difficult to achieve in real-world environments, which is why the VRception Toolkit provides a built-in solution to bridge realities via the slider in the virtual menu (cf. Section 4.2). Still, the lack of lip synchronization and the limited spatial audio on the Oculus Quest headsets negatively impacted the collaboration experience. We suggest implementing additional visual cues to overcome the audio limitations. For example, in addition to lip synchronization, it could be beneficial to include an icon that shows who is talking.

Usability and Workload. The VRception Toolkit received a good rating in terms of usability [9]. However, we also found that the interface was initially overwhelming for participants. To enable







(a) Virtual Screen for Television.	(b) Body-attached Display.	(c) Window to Virtuality.	(d) Worn Quad Projectors.




---

## DESIGN WORKSHOP

The goal of the workshop was to understand how feasible our VRception Toolkit is for prototyping cross-reality systems. We were interested in how long it would take participants to address relevant problems from the domain of cross-reality interaction and come up with suitable solutions. Moreover, we aimed to understand how usable the VRception Toolkit is, how demanding it is to prototype cross-reality systems using our toolkit, and how users experience the prototyping process in VRception. For the design workshops, we used the prototyping workflow B (WYSIWYG; see Figure 2)


---

## Apparatus

We used the implementation described in Section 4.2. Participants joined the workshop with their VR headset (i.e., Oculus Quest 1 or 2). Based on the comments from our experts, we extended our toolkit to support multiplayer, avatars based on inverse kinematics, voice chat, and replay.


---

## Figure 5: Example prototypes from the design workshop. In a) and b), the participants’ goal was to bring the television from reality into virtuality. In c) and d), participants aimed to give a bystander a glance at their actions in the virtual world.





users to rapidly prototype with our toolkit, we mapped all its func- tionalities to controller buttons. We also provided tooltips so that participants could find their desired action while using the VR- ception Toolkit. Some participants stated that they liked the quick actions we provided, while others said that they would have pre- ferred a context menu that provides all possible actions as visual representations. In line with Shneiderman’s eight golden rules [57], we recommend inclusion of both options to “enable frequent users to use shortcuts” while “reducing short-term memory load” with contextual actions.

Concerning the task load, the participants rated the mental de- mand highest. We think that two factors contributed to this: 1) interface complexity and 2) difficulty of distinguishing between realities. As the former point is addressed above, we continue by discussing the latter. After the experts highlighted the fact that having both realities in VR could be confusing, we included a real- world scan to make the differences more clear (see Section 4.3). Nonetheless, the predefined objects (e.g., projector or displays) still look the same in both realities. Here, we recommend using different shaders/materials for the different realities (e.g., toon-shading for virtuality objects) to help users to better distinguish between the objects.


---

## LIMITATIONS

Some specific decisions we made are worth discussing.

Prototyping with the VRception Toolkit. We re-implemented a set of six cross-reality systems with our VRception Toolkit in Unity3D (cf. Section 5.2). Thereby, we could showcase the potential of the VRception Toolkit and gain insights from in-depth interviews with the authors. However, prototyping in Unity3D does not rely on our set of predefined objects; thus, it offers more flexibility than proto- typing in Virtual Reality, as it is not restricted by what objects are available. Our goal is to provide users of the VRception Toolkit with a promising set of objects that are frequently used when building cross-reality systems, such as projectors (e.g., [21, 30, 68]), displays (e.g., [21, 22, 36]), and additional spheres and cubes that enable

users to model simple geometry. Nonetheless, our current imple- mentation focuses mainly on displays and projectors. However, this set of primitives can easily be extended in the future by integrating objects such as depth cameras.

Missing Hardware. We also want to highlight that although the absence of physical limitations can be interpreted as an advantage of VRception over traditional real-world prototyping, simulating real- world conditions can sometimes be at the center of a researcher’s investigation. In such situations, simulating real-world conditions (e.g., real-world motion [27]) requires additional effort.

Validity of User Studies. Finally, we cannot claim that cross- reality system evaluations using VRception achieve high validity (e.g., evaluating a cross-reality system through a user study con- ducted in VRception). The value of evaluations conducted in VR- ception remains unclear. We leave this for future work, where we plan to conduct comparative evaluations of cross-reality systems in VRception and in the real world with actual hardware to pinpoint potential similarities and differences between the two approaches. Nonetheless, the main focus of VRception was to highlight its ability as a prototyping tool, not as an evaluation tool.


---

## RESEARCH OPPORTUNITIES

We identified five opportunities and implications for future work in cross-reality system and interaction research and practice, which we will outline in the following paragraphs.

Prototype for Reality and Virtuality. VRception offers researchers and practitioners a novel approach to prototype cross-reality sys- tems and interactions. Essentially, we introduce a tool for the early prototyping phase that allows one to start without physical pro- totyping. Thus, one can rapidly create and test different solutions without hardware expenses or physical prototyping skills. More- over, VRception empowers researchers to explore novel systems and interactions that are not yet possible to build with current hardware, allowing them to focus more on users’ needs and less on hardware limitations. For the future, we envision two research directions that







would benefit our approach: 1) virtual clones of existing hardware, and 2) comparative evaluations that compare prototypes developed with VRception to their real-world implementations as discussed in the limitations section. Currently, we implemented a universal display and projector object; however, more virtual clones of exist- ing hardware are possible. For instance, we envision the addition of a depth camera that utilizes the z-buffer of its render-texture to visualize depth information.

Conducting Remote Studies. The networking feature allows one to use the toolkit not only in co-located settings, but also to conduct remote studies. Thus, it allows researchers to continue researching cross-reality systems and interactions during the ongoing pan- demic, offering an alternative approach to other recently proposed methods [51, 52, 54]. Moreover, it lowers the barrier for study par- ticipation, as it takes geographic location out of the equation; thus, it enables one to conduct studies with a more diverse population.

Communication of Ideas. Our VRception Toolkit allows researchers to communicate their prototype ideas more easily. Currently, two options exist: 1) record videos with a scripted camera drive directly in Unity3D, or 2) repeat the process of creating and designing a prototype (cf. Section 4.3). Here, our toolkit offers a new approach for recording videos across realities, which has recently received more attention in research [44]. Moreover, replay functionality al- lows collaborating researchers to simply share their recordings and enable others to replay the complete prototyping process, alter the prototype, and share their changes.

Research on the Continuum. To our knowledge, little research focuses on prototypes embracing the complete reality-virtuality continuum from Milgram and Kishino [41]. So far, only fewer tran- sitional interfaces (systems that allow users to transition on the continuum) have been proposed. However, experts expect an in- crease in headsets that do not exclusively offer AR or VR, but instead allow users to transition between different manifestations, under- scoring the need for more research in this area [61]. Moreover, foundational work exploring the continuum and revisiting impor- tant concepts aids in the development of a shared language, which benefits researchers [59]. By simulating reality and virtuality in VR, we open up the possibility of exploring these topics more easily.

Education and Learning. The interviewed experts and partici- pants of our design workshop highlighted that VRception would be a great resource for teaching and explaining the reality-virtuality continuum in a vivid way. We agree and see great potential in this use-case. Also, many existing research prototypes can be quickly replicated as lo-fi versions, allowing learners to explore cross-reality systems and easily test possible extensions.


---

## CONCLUSION

We presented VRception, a concept and toolkit for rapid prototyp- ing of cross-reality systems. To evaluate our concept and toolkit, we replicated six cross-reality systems from previous work, con- ducted expert interviews with the authors of these systems, and ran a subsequent evaluation with VR/AR practitioners. The ex- perts unanimously agreed that we were able to replicate the core

functionalities of their systems using the VRception Toolkit. More- over, they highlighted the great potential of VRception to not only overcome hardware limitations, but also to enable remote collab- oration and studies in the context of cross-reality systems and interactions, allowing broader research on the subject. During the evaluation with VR/AR practitioners, we gathered evidence for the rapid-prototyping character of our toolkit and confirmed its good usability. They were able to prototype and experience cross-reality systems in about eight minutes, which demonstrates how quickly users can blueprint these systems with the VRception Toolkit. We conclude our work by outlining research opportunities and their implications for the future of cross-reality research. We argue that cross-reality systems and interactions should be addressed further in future prototyping tools since they are becoming a fundamental type of interaction for augmented and virtual reality applications.


---

## ACKNOWLEDGMENTS

This work is partially funded by the German Federal Ministry of Education and Research (16SV8663, 01IS21068A). This publication was supported by the University of Edinburgh and the University of Glasgow jointly funded PhD studentships. This work is supported by the EPSRC (EP/V008870/1) and the Royal Society of Edinburgh (award number #65040).


---

## REFERENCES

Shivam Agarwal, Jonas Auda, Stefan Schneegaß, and Fabian Beck. 2020. A Design and Application Space for Visualizing User Sessions of Virtual and Mixed Reality Environments. In Vision, Modeling, and Visualization, Jens Krüger, Matthias Niessner, and Jörg Stückler (Eds.). The Eurographics Association, Norrköping,

Sweden, 10 pages. https://doi.org/10.2312/vmv.20201194

Ghassem Alaee, Amit P Deasi, Lourdes Pena-Castillo, Edward Brown, and Oscar Meruvia-Pastor. 2018. A User Study on Augmented Virtuality Using Depth Sensing Cameras for Near-Range Awareness in Immersive VR. In IEEE VR’s 4th Workshop on Everyday Virtual Reality (WEVR ’18, Vol. 10). wevr.adalsimeone.me, Reutlingen, Germany, 1–6.

Tatsuya Amano, Shugo Kajita, Hirozumi Yamaguchi, Teruo Higashino, and Mi- neo Takai. 2018. Smartphone Applications Testbed Using Virtual Reality. In Proceedings of the 15th EAI International Conference on Mobile and Ubiquitous Systems: Computing, Networking and Services (New York, NY, USA) (MobiQui- tous ’18). Association for Computing Machinery, New York, NY, USA, 422–431. https://doi.org/10.1145/3286978.3287028

Deepali Aneja, Daniel McDuff, and Shital Shah. 2019. A High-Fidelity Open Embodied Avatar with Lip Syncing and Expression Capabilities. In 2019 In- ternational Conference on Multimodal Interaction (Suzhou, China) (ICMI ’19). Association for Computing Machinery, New York, NY, USA, 69–73. https:

//doi.org/10.1145/3340555.3353744

Csaba Antonya and Doru Talaba. 2007. Design Evaluation and Modification of Mechanical Systems in Virtual Environments. Virtual Reality 11, 4 (Oct. 2007), 275–285. https://doi.org/10.1007/s10055-007-0074-6

Andreas Aristidou and Joan Lasenby. 2011. FABRIK: A fast, iterative solver for the Inverse Kinematics problem. Graphical Models 73, 5 (2011), 243–260. https://doi.org/10.1016/j.gmod.2011.05.003

Narges Ashtari, Andrea Bunt, Joanna McGrenere, Michael Nebeling, and Par- mit K. Chilana. 2020. Creating Augmented and Virtual Reality Applications: Current Practices, Challenges, and Opportunities. In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (Honolulu, HI, USA) (CHI ’20). Association for Computing Machinery, New York, NY, USA, 1–13. https://doi.org/10.1145/3313831.3376722

Jonas Auda, Uwe Gruenefeld, and Sven Mayer. 2020. It Takes Two To Tango: Conflicts Between Users on the Reality-Virtuality Continuum and Their By- standers. In In the Proceedings of the International Workshop on Cross-Reality (XR) Interaction (2020-11-08) (XR ’20). CEUR-WS, Lisbon, Portugal, 1–5. http://ceur- ws.org/Vol-2779/paper3.pdf

Aaron Bangor, Philip Kortum, and James Miller. 2009. Determining What Indi- vidual SUS Scores Mean: Adding an Adjective Rating Scale. J. Usability Studies 4, 3 (May 2009), 114–123.

Mark Billinghurst and Michael Nebeling. 2021. Rapid Prototyping of XR Expe- riences. In Extended Abstracts of the 2021 CHI Conference on Human Factors in







Computing Systems. Association for Computing Machinery, New York, NY, USA,

Article 132, 3 pages. https://doi.org/10.1145/3411763.3445002

John Brooke. 1996. SUS: a "quick and dirty" usability. Usability evaluation in industry 189 (1996), 6 pages.

Liwei Chan and Kouta Minamizawa. 2017. FrontFace: Facilitating Communi- cation between HMD Users and Outsiders Using Front-Facing-Screen HMDs. In Proceedings of the 19th International Conference on Human-Computer Inter- action with Mobile Devices and Services (Vienna, Austria) (MobileHCI ’17). As- sociation for Computing Machinery, New York, NY, USA, Article 22, 5 pages. https://doi.org/10.1145/3098279.3098548

Lung-Pan Cheng, Eyal Ofek, Christian Holz, and Andrew D. Wilson. 2019. VRoamer: Generating On-The-Fly VR Experiences While Walking inside Large, Unknown Real-World Building Environments. In 2019 IEEE Conference on Vir- tual Reality and 3D User Interfaces. IEEE, Piscataway, New Jersey, United States, 359–366. https://doi.org/10.1109/VR.2019.8798074

Shuchisnigdha Deb, Daniel W. Carruth, Richard Sween, Lesley Strawderman, and Teena M. Garrison. 2017. Efficacy of virtual reality in pedestrian safety research. Applied Ergonomics 65 (2017), 449 – 460. https://doi.org/10.1016/j.apergo.2017.

03.007

Kevin Doherty and Gavin Doherty. 2018. Engagement in HCI: Conception, Theory and Measurement. ACM Comput. Surv. 51, 5, Article 99 (Nov. 2018), 39 pages. https://doi.org/10.1145/3234149

Kevin Fan, Liwei Chan, Daiya Kato, Kouta Minamizawa, and Masahiko Inami. 2016. VR Planet: Interface for Meta-View and Feet Interaction of VR Contents. In ACM SIGGRAPH 2016 VR Village (Anaheim, California) (SIGGRAPH ’16). ACM,

New York, NY, USA, Article 24, 2 pages. https://doi.org/10.1145/2929490.2931001

Gabriel Freitas, Marcio Sarroglia Pinho, Milene Selbach Silveira, and Frank Mau- rer. 2020. A Systematic Review of Rapid Prototyping Tools for Augmented Reality. In 2020 22nd Symposium on Virtual and Augmented Reality (SVR ’20). IEEE, Pis- cataway, New Jersey, United States, 199–209. https://doi.org/10.1109/SVR51698. 2020.00041

Ceenu George, Philipp Janssen, David Heuss, and Florian Alt. 2019. Should I Interrupt or Not? Understanding Interruptions in Head-Mounted Display Settings. In Proceedings of the 2019 on Designing Interactive Systems Conference (San Diego, CA, USA) (DIS ’19). Association for Computing Machinery, New York, NY, USA, 497–510. https://doi.org/10.1145/3322276.3322363

Andrzej Grabowski and Jarosław Jankowski. 2015. Virtual Reality-based pilot training for underground coal miners. Safety Science 72 (2015), 310–314. https:

//doi.org/10.1016/j.ssci.2014.09.017

Uwe Gruenefeld, Abdallah El Ali, Susanne Boll, and Wilko Heuten. 2018. Beyond Halo and Wedge: Visualizing out-of-View Objects on Head-Mounted Virtual and Augmented Reality Devices. In Proceedings of the 20th International Conference on Human-Computer Interaction with Mobile Devices and Services (Barcelona, Spain) (MobileHCI ’18). Association for Computing Machinery, New York, NY, USA,

Article 40, 11 pages. https://doi.org/10.1145/3229434.3229438

Jan Gugenheimer, Evgeny Stemasov, Julian Frommel, and Enrico Rukzio. 2017. ShareVR: Enabling Co-Located Experiences for Virtual Reality between HMD and Non-HMD Users. In Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY,

USA, 4021–4033. https://doi.org/10.1145/3025453.3025683

Jan Gugenheimer, Evgeny Stemasov, Harpreet Sareen, and Enrico Rukzio. 2018. FaceDisplay: Towards Asymmetric Multi-User Interaction for Nomadic Virtual Reality. In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (Montreal QC, Canada) (CHI ’18). Association for Computing Machinery,

New York, NY, USA, 1–13. https://doi.org/10.1145/3173574.3173628

Gunnar Harboe and Elaine M. Huang. 2015. Real-World Affinity Diagramming Practices: Bridging the Paper-Digital Gap. In Proc. 33rd Annual ACM Conf. Human Factors in Computing Systems. ACM, New York, NY, USA, 95–104. https://doi. org/10.1145/2702123.2702561

Sandra G. Hart. 2006. NASA-task load index (NASA-TLX); 20 years later. In Proceedings of the Human Factors and Ergonomics Society Annual Meeting, Vol. 50. Sage publications Sage CA: Los Angeles, CA, Los Angeles, California, United States, 904–908. https://doi.org/10.1177/154193120605000909

Jeremy Hartmann, Christian Holz, Eyal Ofek, and Andrew D. Wilson. 2019. RealityCheck: Blending Virtual Environments with Situated Physical Reality. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (Glasgow, Scotland Uk) (CHI ’19). Association for Computing Machinery, New York, NY, USA, 1–12. https://doi.org/10.1145/3290605.3300577

Jeremy Hartmann, Yen-Ting Yeh, and Daniel Vogel. 2020. AAR: Augmenting a Wearable Augmented Reality Display with an Actuated Head-Mounted Projector. In Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology (Virtual Event, USA) (UIST ’20). Association for Computing Machinery,

New York, NY, USA, 445–458. https://doi.org/10.1145/3379337.3415849

Philipp Hock, Sebastian Benedikter, Jan Gugenheimer, and Enrico Rukzio. 2017. CarVR: Enabling In-Car Virtual Reality Entertainment. In Proceedings of the 2017 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY, USA, 4034–4044. https://doi.org/10.1145/ 3025453.3025665

Arief Ernst Hühn, Vassilis-Javed Khan, Andrés Lucero, and Paul Ketelaar. 2012. On the Use of Virtual Environments for the Evaluation of Location-Based Appli- cations. In Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (Austin, Texas, USA) (CHI ’12). Association for Computing Machinery,

New York, NY, USA, 2569–2578. https://doi.org/10.1145/2207676.2208646

Akira Ishii, Masaya Tsuruta, Ippei Suzuki, Shuta Nakamae, Tatsuya Minagawa, Junichi Suzuki, and Yoichi Ochiai. 2017. ReverseCAVE: Providing Reverse Perspec- tives for Sharing VR Experience. In ACM SIGGRAPH 2017 Posters (Los Angeles, California) (SIGGRAPH ’17). Association for Computing Machinery, New York,

NY, USA, Article 28, 2 pages. https://doi.org/10.1145/3102163.3102208

Akira Ishii, Masaya Tsuruta, Ippei Suzuki, Shuta Nakamae, Junichi Suzuki, and Yoichi Ochiai. 2019. Let Your World Open: CAVE-Based Visualization Methods of Public Virtual Reality towards a Shareable VR Experience. In Proceedings of the 10th Augmented Human International Conference 2019 (Reims, France) (AH ’19). ACM, New York, NY, USA, Article 33, 8 pages. https://doi.org/10.1145/3311823. 3311860

Pascal Jansen, Fabian Fischbach, Jan Gugenheimer, Evgeny Stemasov, Julian Frommel, and Enrico Rukzio. 2020. ShARe: Enabling Co-Located Asymmet- ric Multi-User Interaction for Augmented Reality Head-Mounted Displays. In Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology (Virtual Event, USA) (UIST ’20). Association for Computing Machin- ery, New York, NY, USA, 459–471. https://doi.org/10.1145/3379337.3415843

Ben Kenwright. 2012. Inverse Kinematics – Cyclic Coordinate Descent (CCD).

Journal of Graphics Tools 16, 4 (2012), 177–217. https://doi.org/10.1080/2165347X.

2013.823362

Jarrod Knibbe, Jonas Schjerlund, Mathias Petraeus, and Kasper Hornbæk. 2018. The Dream is Collapsing: The Experience of Exiting VR. In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY, USA, 1–13. https://doi.org/10.1145/ 3173574.3174057

Pascal Knierim, Valentin Schwind, Anna Maria Feit, Florian Nieuwenhuizen, and Niels Henze. 2018. Physical Keyboards in Virtual Reality: Analysis of Typing Per- formance and Effects of Avatar Hands. In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery,

New York, NY, USA, 1–9. https://doi.org/10.1145/3173574.3173919

Zhengqing Li, Liwei Chan, Theophilus Teo, and Hideki Koike. 2020. Om- niGlobeVR: A Collaborative 360° Communication System for VR. In Extended Abstracts of the 2020 CHI Conference on Human Factors in Computing Systems (Honolulu, HI, USA) (CHI EA ’20). Association for Computing Machinery, New York, NY, USA, 1–8. https://doi.org/10.1145/3334480.3382869

Christian Mai, Lukas Rambold, and Mohamed Khamis. 2017. TransparentHMD: Revealing the HMD User’s Face to Bystanders. In Proceedings of the 16th Inter- national Conference on Mobile and Ubiquitous Multimedia (Stuttgart, Germany) (MUM ’17). Association for Computing Machinery, New York, NY, USA, 515–520. https://doi.org/10.1145/3152832.3157813

Christian Mai, Tim Wiltzius, Florian Alt, and Heinrich Hußmann. 2018. Feeling Alone in Public: Investigating the Influence of Spatial Layout on Users’ VR Experience. In Proceedings of the 10th Nordic Conference on Human-Computer Interaction (Oslo, Norway) (NordiCHI ’18). Association for Computing Machinery,

New York, NY, USA, 286–298. https://doi.org/10.1145/3240167.3240200

Ville Mäkelä, Rivu Radiah, Saleh Alsherif, Mohamed Khamis, Chong Xiao, Lisa Borchert, Albrecht Schmidt, and Florian Alt. 2020. Virtual Field Studies: Con- ducting Studies on Public Displays in Virtual Reality. In Proceedings of the 2020 CHI Conference on Human Factors in Computing Systems (Honolulu, HI, USA) (CHI ’20). Association for Computing Machinery, New York, NY, USA, 1–15. https://doi.org/10.1145/3313831.3376796

Florian Mathis, Kami Vaniea, and Mohamed Khamis. 2021. RepliCueAuth: Vali- dating the Use of a lab-based Virtual Reality Setup for Evaluating Authentication Systems. In Proceedings of the 39th Annual ACM Conference on Human Factors in Computing Systems (Yokohama, Japan) (CHI ’21). ACM, New York, NY, USA, 21 pages. https://doi.org/10.1145/3411764.3445478

Mark McGill, Daniel Boland, Roderick Murray-Smith, and Stephen Brewster. 2015. A Dose of Reality: Overcoming Usability Challenges in VR Head-Mounted Displays. In Proceedings of the 33rd Annual ACM Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY, USA, 2143–2152. https://doi.org/10.1145/2702123.2702382

Paul Milgram and Fumio Kishino. 1994. A taxonomy of mixed reality visual displays. IEICE TRANSACTIONS on Information and Systems 77, 12 (1994), 1321–

1329.

Mark P. Mobach. 2008. Do Virtual Worlds Create Better Real Worlds? Virtual Reality 12, 3 (Sept. 2008), 163–179. https://doi.org/10.1007/s10055-008-0081-2

Michael Nebeling, Katy Lewis, Yu-Cheng Chang, Lihan Zhu, Michelle Chung, Piaoyang Wang, and Janet Nebeling. 2020. XRDirector: A Role-Based Collab- orative Immersive Authoring System. In Proceedings of the 2020 CHI Confer- ence on Human Factors in Computing Systems (Honolulu, HI, USA) (CHI ’20). Association for Computing Machinery, New York, NY, USA, 1–12. https:

//doi.org/10.1145/3313831.3376637







Michael Nebeling, Katy Lewis, Yu-Cheng Chang, Lihan Zhu, Michelle Chung, Piaoyang Wang, and Janet Nebeling. 2020. XRDirector: A Role-Based Collab- orative Immersive Authoring System. In Proceedings of the 2020 CHI Confer- ence on Human Factors in Computing Systems (Honolulu, HI, USA) (CHI ’20). Association for Computing Machinery, New York, NY, USA, 1–12. https:

//doi.org/10.1145/3313831.3376637

Michael Nebeling and Katy Madier. 2019. 360proto: Making Interactive Virtual Reality & Augmented Reality Prototypes from Paper. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (Glasgow, Scotland Uk) (CHI ’19). Association for Computing Machinery, New York, NY, USA, 1–13. https://doi.org/10.1145/3290605.3300826

Michael Nebeling, Janet Nebeling, Ao Yu, and Rob Rumble. 2018. ProtoAR: Rapid Physical-Digital Prototyping of Mobile Augmented Reality Applications. In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems (Montreal QC, Canada) (CHI ’18). Association for Computing Machinery, New York, NY, USA, 1–12. https://doi.org/10.1145/3173574.3173927

Michael Nebeling and Maximilian Speicher. 2018. The Trouble with Augmented Reality/Virtual Reality Authoring Tools. In 2018 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct ’18). IEEE, Piscataway, New Jersey, United States, 333–337. https://doi.org/10.1109/ISMAR-Adjunct. 2018.00098

Benjamin Nuernberger, Eyal Ofek, Hrvoje Benko, and Andrew D. Wilson. 2016. SnapToReality: Aligning Augmented Reality to the Real World. In Proceedings of the 2016 CHI Conference on Human Factors in Computing Systems. Association for Computing Machinery, New York, NY, USA, 1233–1244. https://doi.org/10.1145/ 2858036.2858250

Thammathip Piumsomboon, Gun A. Lee, Andrew Irlitti, Barrett Ens, Bruce H. Thomas, and Mark Billinghurst. 2019. On the Shoulder of the Giant: A Multi-Scale Mixed Reality Collaboration with 360 Video Sharing and Tangible Interaction. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (Glasgow, Scotland Uk) (CHI ’19). Association for Computing Machinery, New York, NY, USA, 1–17. https://doi.org/10.1145/3290605.3300458

Charles Pontonnier, Georges Dumont, Asfhin Samani, Pascal Madeleine, and Marwan Badawi. 2014. Designing and evaluating a workstation in real and virtual environment: toward virtual reality based ergonomic design sessions. Journal on Multimodal User Interfaces 8, 2 (2014), 199–208. https://doi.org/10.1007/s12193-

013-0138-8

Rivu Radiah, Ville Mäkelä, Sarah Prange, Sarah Delgado Rodriguez, Robin Piening, Yumeng Zhou, Kay Köhle, Ken Pfeuffer, Yomna Abdelrahman, Matthias Hoppe, Albrecht Schmidt, and Florian Alt. 2021. Remote VR Studies: A Framework for Running Virtual Reality Studies Remotely Via Participant-Owned HMDs. ACM Trans. Comput.-Hum. Interact. 28, 6, Article 46 (nov 2021), 36 pages. https:

//doi.org/10.1145/3472617

Jack Ratcliffe, Francesco Soave, Nick Bryan-Kinns, Laurissa Tokarchuk, and Ildar Farkhatdinov. 2021. Extended Reality (XR) Remote Research: a Survey of Drawbacks and Opportunities. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (2021-05-08) (CHI ’21). Association for Computing Machinery, New York, New York, USA, 1–13. https://doi.org/10.1145/ 3411764.3445170 arXiv:2101.08046 [cs.HC]

Francisco Rebelo, Paulo Noriega, Emília Duarte, and Marcelo Soares. 2012. Using Virtual Reality to Assess User Experience. Human Factors 54, 6 (2012), 964–982. https://doi.org/10.1177/0018720812465006

David Saffo, Sara Di Bartolomeo, Caglar Yildirim, and Cody Dunne. 2021. Re- mote and Collaborative Virtual Reality Experiments via Social VR Platforms. In Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems (2021-05-08) (CHI ’21). Association for Computing Machinery, New York, New York, USA, 1–15. https://doi.org/10.1145/3411764.3445426

Valentin Schwind, Pascal Knierim, Lewis Chuang, and Niels Henze. 2017. "Where’s Pinky?": The Effects of a Reduced Number of Fingers in Virtual Reality. In Proceedings Annual Symposium on Computer-Human Interaction in Play (Am- sterdam, The Netherlands) (CHIPlay ’17). ACM, New York, NY, USA, 507–515. https://doi.org/10.1145/3116595.3116596

Valentin Schwind, Jens Reinhardt, Rufat Rzayev, Niels Henze, and Katrin Wolf. 2018. Virtual Reality on the Go? A Study on Social Acceptance of VR Glasses. In Proceedings of the 20th International Conference on Human-Computer Interaction with Mobile Devices and Services Adjunct (Barcelona, Spain) (MobileHCI ’18). Association for Computing Machinery, New York, NY, USA, 111–118. https:

//doi.org/10.1145/3236112.3236127

Ben Shneiderman, Catherine Plaisant, Maxine S Cohen, Steven Jacobs, Niklas Elmqvist, and Nicholas Diakopoulos. 2016. Designing the user interface: strategies for effective human-computer interaction. Pearson, London, United Kingdom.

Adalberto L. Simeone, Mohamed Khamis, Augusto Esteves, Florian Daiber, Matjaž Kljun, Klen Čopič Pucihar, Poika Isokoski, and Jan Gugenheimer. 2020. Interna- tional Workshop on Cross-Reality (XR) Interaction. In Companion Proceedings of the 2020 Conference on Interactive Surfaces and Spaces (Virtual Event, Portugal) (ISS ’20). Association for Computing Machinery, New York, NY, USA, 111–114. https://doi.org/10.1145/3380867.3424551

Richard Skarbez, Missie Smith, and Mary C. Whitton. 2021. Revisiting Milgram and Kishino’s Reality-Virtuality Continuum. Frontiers in Virtual Reality 2 (2021),

27. https://doi.org/10.3389/frvir.2021.647997

Mel Slater, Martin Usoh, and Anthony Steed. 1994. Depth of Presence in Virtual Environments. Presence: Teleoperators and Virtual Environments 3, 2 (05 1994),

130–144. https://doi.org/10.1162/pres.1994.3.2.130

Maximilian Speicher, Brian D. Hall, and Michael Nebeling. 2019. What is Mixed Reality?. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (Glasgow, Scotland Uk) (CHI ’19). ACM, New York, NY, USA, 1–15. https://doi.org/10.1145/3290605.3300767

Maximilian Speicher, Brian D. Hall, Ao Yu, Bowen Zhang, Haihua Zhang, Janet Nebeling, and Michael Nebeling. 2018. XD-AR: Challenges and Opportunities in Cross-Device Augmented Reality Application Development. Proc. ACM Hum.- Comput. Interact. 2, EICS, Article 7 (June 2018), 24 pages. https://doi.org/10.1145/

3229089

Frank Steinicke, Gerd Bruder, Klaus Hinrichs, Anthony Steed, and Alexander L. Gerlach. 2009. Does a Gradual Transition to the Virtual World increase Presence?. In 2009 IEEE Virtual Reality Conference. IEEE, Piscataway, New Jersey, United States, 203–210. https://doi.org/10.1109/VR.2009.4811024

Balasaravanan Thoravi Kumaravel, Cuong Nguyen, Stephen DiVerdi, and Bjoern Hartmann. 2020. TransceiVR: Bridging Asymmetrical Communication Between VR Users and External Collaborators. In Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology (Virtual Event, USA) (UIST ’20). Association for Computing Machinery, New York, NY, USA, 182–195. https:

//doi.org/10.1145/3379337.3415827

Dimitar Valkov and Steffen Flagge. 2017. Smooth Immersion: The Benefits of Making the Transition to Virtual Environments a Continuous Process. In Proceedings of the 5th Symposium on Spatial User Interaction (Brighton, United Kingdom) (SUI ’17). Association for Computing Machinery, New York, NY, USA, 12–19. https://doi.org/10.1145/3131277.3132183

Alexandra Voit, Sven Mayer, Valentin Schwind, and Niels Henze. 2019. Online, VR, AR, Lab, and In-Situ: Comparison of Research Methods to Evaluate Smart Ar- tifacts. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (Glasgow, Scotland Uk) (CHI ’19). Association for Computing Machinery,

New York, NY, USA, 1–12. https://doi.org/10.1145/3290605.3300737

Chiu-Hsuan Wang, Chia-En Tsai, Seraphina Yong, and Liwei Chan. 2020. Slice of Light: Transparent and Integrative Transition Among Realities in a Multi-HMD- User Environment. In Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology (Virtual Event, USA) (UIST ’20). Association for Computing Machinery, New York, NY, USA, 805–817. https://doi.org/10.1145/ 3379337.3415868

Chiu-Hsuan Wang, Seraphina Yong, Hsin-Yu Chen, Yuan-Syun Ye, and Liwei Chan. 2020. HMD Light: Sharing In-VR Experience via Head-Mounted Projector for Asymmetric Interaction. In Proceedings of the 33rd Annual ACM Symposium on User Interface Software and Technology (Virtual Event, USA) (UIST ’20). Association for Computing Machinery, New York, NY, USA, 472–486. https://doi.org/10. 1145/3379337.3415847

Maximilian Weiß, Katrin Angerbauer, Alexandra Voit, Magdalena Schwarzl, Michael Sedlmair, and Sven Mayer. 2021. Revisited: Comparison of Empirical Methods to Evaluate Visualizations Supporting Crafting and Assembly Purposes. IEEE Transactions on Visualization and Computer Graphics 27, 2 (2021), 1204–1213. https://doi.org/10.1109/TVCG.2020.3030400

Julie R. Williamson, Mark McGill, and Khari Outram. 2019. PlaneVR: Social Acceptability of Virtual Reality for Aeroplane Passengers. In Proceedings of the 2019 CHI Conference on Human Factors in Computing Systems (Glasgow, Scotland Uk) (CHI ’19). Association for Computing Machinery, New York, NY, USA, 1–14. https://doi.org/10.1145/3290605.3300310

Keng-Ta Yang, Chiu-Hsuan Wang, and Liwei Chan. 2018. ShareSpace: Facilitating Shared Use of the Physical Space by Both VR Head-Mounted Display and External Users. In Proceedings of the 31st Annual ACM Symposium on User Interface Software and Technology (Berlin, Germany) (UIST ’18). Association for Computing Machin- ery, New York, NY, USA, 499–509. https://doi.org/10.1145/3242587.3242630




---

