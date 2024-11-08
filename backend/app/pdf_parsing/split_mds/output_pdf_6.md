## Cross-Reality for Extending the Metaverse: Designing Hyper-Connected Immersive Environments with XRI

Jie Guan *	Alexis Morris†	Jay Irizawa ‡



Adaptive Context Environments (ACE) Lab OCAD University







Abstract

The Metaverse comprises technologies to enable virtual twins of the real world, via mixed reality, internet of things, and others. As it matures unique challenges arise such as a lack of strong connections between virtual and physical worlds. This work presents design frameworks for cross-reality hybrid spaces. Contributions include:

clarifying the metaverse ”disconnect”, ii) extended metaverse design frameworks, iii) prototypes, and iv) discussions toward new metaverse smart environments.

Index Terms: Virtual Reality, Mixed Reality, Augmented Reality, Extended Reality, Internet of Things, Human Computer Interaction

Introduction

The metaverse refers to “a virtual environment blending physical and digital, facilitated by the convergence between the Internet and web technologies, and Extended Reality” [15]. This blended environment promises numerous benefits for society, which can be environmental, social, economic, and even psycho-physiological; as this technology has broad human-factor impacts on society such as the physical, psychological, social, organizational, and political dimensions [30]. For example the metaverse can impact the environment when largely adopted, by reducing transportation costs and resources within the environment, while simultaneously enhancing people’s efficiency when working and studying remotely in dynamic shared virtual spaces.

Moreover, the time spent in metaverse environments that are more dynamic, immersive, and creative has the potential to extend these human factors; from the world of physical limitations to the more unlimited virtual environment. This is currently being adopted by large-scale industry developments and the metaverse has become one of the most influential trends in the marketplace. Various industries, such as health-care [28], marketing and advertising [27], travel and tourism [9], education and training [4] are adapting their services to provide metaverse-enabled networked platforms.

Today’s metaverse applications remain limited, however, as they are primarily online social experiences composed of virtual envi- ronments, virtual objects, and virtual avatars. This introduces a set of metaverse challenges for humans-in-the-loop. One of these challenges is the metaverse ”disconnect” problem, as in [6]. Diverse metaverse platforms and virtual spaces host activities with stan- dalone computers, mobile devices, and head-mounted display VR devices. Most of them bring humans into complete virtual spaces, thereby focusing on the virtual content leading to the metaverse dynamics being independent of - or disconnected from - the physi- cal space. This disconnect presents a challenge to the adoption of the metaverse, as there is a need to allow the human-in-the-loop



*e-mail: jie.guan@ocadu.ca

†e-mail:amorris@ocadu.ca

‡e-mail:jirizawa@ocadu.ca

to be more aware of real-world environmental contexts as they si- multaneously become more immersed in virtual and mixed reality environments.





Extending the Metaverse with Cross-Reality XR-IoT (XRI)

An extended metaverse offers the potential to inhabit two spaces concurrently. One space is the physical world, and the other is the metaverse, which is constructed of computational graphics and simulated environments. Living and working in immersive hybrid virtual and physical worlds with smart devices (i.e., head-mounted displays) may become as commonplace as the mobile phone today. Within these speculative futures parameters, this work explores an extended metaverse framework to enhance embodiment, interac- tion, and agency [10] that could provide a seamless interface to the physical world.

To explore designs for this new interface across both physical and virtual sides of the metaverse, requires a hybrid approach that encompasses the ubiquitous computing and immersive interface domains, within what is considered as ”Cross-Reality,” or ”X-Reality (XR),” i.e., the ubiquitous mixed reality environment when combined with context sensing [22] [18]. This work achieves this by extending traditional IoT interfaces with XR-IoT (XRI) interfaces, toward hybrid virtual and physical objects.

A hybrid approach exploring both physical and virtual attributes of the metaverse is needed in developing a new and cohesive in- terface. Previous works have presented hybrid mixed-reality and internet-of-things frameworks (known as XR-IoT, or XRI) [18] [29], and more recent work has presented early prototypes [7], [6] in- cluding an approach to strengthen the connection between physical spaces and metaverse environments (such as an XRI Lamp controller and an XRI Ambient Lighting system connecting real physical lamps to their virtual counterparts [7]). The current paper furthers these research contributions for extending the metaverse, based on [6].

The project explores an extended metaverse framework for ap- plying the metaverse layer in the physical space(s) to increase dy- namic inter-connections of humans, agents, and the environment through MR and the IoT. The extended metaverse framework fo- cuses on improving interaction, embodiment, and agency [10] in the human-in-the-loop MR space. The contributions of this include:

i) an exploration of the metaverse disconnect problem and back- ground literature, ii) an architectural framework for extending the metaverse, iii) design prototypes using the framework, (one for a hyper-connected space for time-awareness while in the metaverse; and the other for enabling users to transition between real and vir- tual environments where the environment helps to detect physical objects), and iv) a discussion-based evaluation of these approaches. The problems of the current metaverse platforms have yet to address these models of connection with the physical space in depth, and this work has the potential to elucidate the disconnect problem and to lay the groundwork for future exploration toward seamless immersive engagements in metaverse applications.



Background and Related Works

To discuss the concept of extended metaverse frameworks and agents, this section provides the background knowledge of the metaverse, related theory of XR and the IoT, and introduction of the context awareness along with generative and procedural content concepts. The background of the metaverse addresses the history, current state of technological development, and future possibilities.

XR is the method to embody the virtual and physical objects and environment while the IoT is considered to be for virtual and physical communication. Context awareness is introduced to capture and sense information in the physical environment, and procedural content is the method and rules to embody and enhance dynamic virtual objects.

The Background of Metaverse

As mentioned by Dionisio et al. [5], the metaverse is a portmanteau that combines with the prefix “meta,” which means “beyond,” and the suffix “verse,” which is shorthand for “universe.” It represents a universe beyond the space we live in physically. Specifically, it is a computer-generated environment that simulates the world and distinguishes it from the ”metaphysical” or ”spiritual” concepts. The concept of the metaverse, originally from the fiction novel Snow Crash, was developed by Neal Stephenson in 1992 [13]. In the novel, the metaverse was portrayed as a virtual world with humans interacting with intelligence agencies and each other as avatars in that space. It is a scenario similar to that in Ready Player One by Ernest Cline, where users can adopt any role or play as any character-type in a completely virtual world [1] The metaverse has various definitions (see table 1) because it is a state-of-the-art term that is being continually explored. Dionisio et al. [5] presented that the metaverse is constructed by multiple individual virtual worlds, defined as a fully immersive, three-dimensional digital environment that reflects the totality of shared online space. Lee et al. [15] considered the metaverse as a virtual environment constructed by the internet, web technologies, and extended reality (XR) toward hybrid physical and virtual space.

There are many applications and platforms for the metaverse today. Understanding their features and limitations will provide a better direction for addressing metaverse disconnect. Digital owner- ship is a big problem in the metaverse, and blockchain is applied in some platforms to deal with it, such as Decentraland1, Cryptovox- els2, and Somnium Space3. Decentraland attempts to be a virtual reality platform based on the Ethereum blockchain, where users own the creation’s property entirely when they purchase the “land.” The land is a non-fungible token (NFT), a digital asset stored as an Ethereum smart contract that users can create [21]. Cryptovoxels and Somnium Space also have a similar approach to defining the ownership of digital assets. Although Decentraland’s VR feature is still in development, Cryptovoxels’s ”Origin City” is available to be visited through VR in other popular VR worlds like VRChat, NeosVR, and Substrata. Meanwhile, Somnium Space allows for VR support via common SteamVR supported VR headsets.

Extended Reality and Internet-of-Things

XR-IoT Theory: As examined in works like [18] and [29], design- ing a more connected metaverse requires the merger of technology paradigms of XR and IoT – to connect with the physical environ- ment while extending into the virtual environment. Augmented Reality provides this with an interactive medium of overlaid virtual objects anchored to the real environment, while IoT refers to the networking of physical objects with computing devices for sensing and communication, as examined in [11]. This hybridization, as



1https://decentraland.org/

2https://www.cryptovoxels.com/ 3https://somniumspace.com/

in [29] is here referred to as XR-IoT (XRI), which represents the combination of XR-based IoT systems as well as IoT-based XR sys- tems. XRI engages in immersive, information-rich, multi-user, and agent-driven systems [18]. The combination of these technologies has the potential to bring a closer connection between humans and their environmental objects, as well as each other, and future hybrid XRI applications are being developed for applied situations, like education, cyber security, and marketing [2].

XR-IoT Applications: A selection of these XRI applications is described below, highlighting those projects which embed IoT systems into mixed reality projects, and those that apply XR features in IoT system designs. These metaverse systems merge multiple technologies, as well as interaction techniques, as in [33], in order to create cross-reality experiences. Much of these works are recent and gaining momentum as both paradigms attain maturity and adoption. For instance, the series of XR-IoT projects presented IoT Avatars and workstation prototypes. The IoT Avatar was started with a simple proof of concept that embodies the MR representation Avatar for a plant and provides buttons to control physical servo motors and LEDs of an IoT device through a mobile phone [25]. This has been extended to explore MR frameworks for IoT with head-mounted displays for immersion and expressiveness [8] [19]. The work used video-passthrough MR and collected real-time context of a plant (i.e., its lighting intensity, soil moisture, and the number of people nearby to attend to the plant), which was used to project emotional states of a virtual plant avatar via fuzzy logic. Based on the avatar, XRI workstation [18] extended the avatar by expanding environmental objects (virtual desk) into the scenario to explore a workstation use case. Similarly, “Digi-log” [12] provided an augmented reality shopping scenario using IoT-enabled products within a seamless and scalable AR service. The project presented data visualization based on object position, and mechanisms for access, control, interaction, and content interoperability. A further example, Seiger et al. [24] presented HoloFlows, a new MR interaction method for end-users to manage standard IoT devices without coding. Together these early explorations have set the stage toward the extended metaverse themes of this research.



An Architecture for Extended Metaverse Agents

Figure 1 presents a scene design and architecture for XRI systems that are oriented toward addressing the metaverse disconnect chal- lenge through a convergence of prior research on the Metaverse, XRI, context awareness, Mixed Reality Agents, presence and generative design [7] [18] [29].



Architecture Component Design

The architecture in (Figure 1(a)) outlines the design components needed for providing users with an immersive extended metaverse. This includes the user’s physical environment, the user’s mixed- reality environment (and HMD displays), and an immersive meta- verse environment (virtual reality content), and a bridge between these environments. The system enables users to transition between these hybrid spaces, as shown by the red arrows. The blue arrows highlight the bi-directional information communication between the shared metaverse content and the physical environment. These components are described below:

Physical Environment refers to the real space humans live in ev- ery day, and all the objects there could be interacted with physically. In the extended metaverse agent design, it has smart agents perform- ing as actuators (smart light as an example) and sensors (Arduino sensors and computer visions), and a computer to operate the sys- tem (to perform the operation). These agents are IoT-enabled with informational communication (shown as the blue arrows) between physical and virtual agents (named as shared metaverse content), that could be affected by each other.



Table 1: Comparison of selected papers about the metaverse, as in [6].







Figure 1: (a) Conceptual Architecture for extended metaverse framework systems that strongly connect the real and the virtual (i.e., the entire RV spectrum [17] [6]). A metaverse bridge enables switching between immersive VR and XR environments while an IoT broker enables communication and control of IoT physical and virtual objects. (b) Reference illustration of a scene design reflecting the architecture and details related to user position, environment lighting, and immersive content during an example metaverse interaction.





Shared Metaverse Content refers to the virtual elements (includ- ing virtual agents and 3D user interface) that could be access both in mixed reality and the immersive metaverse environment. The virtual agent is the virtual representation (for full or partial embodiment) of the smart agents 4, that may also perform tasks. The generative objects of the metaverse content are non-static objects with fixed em- bodiment (3D models), that also change and grow dynamically. In the design of this architecture, the generative objects are influenced in their behavior physical context information. Additionally, the ele- ments of 3D user interfaces and widgets is represented, accounting for the new forms of user interaction becoming common for virtual content interfaces that differs from the traditional 2D interface on screen-based devices.

Mixed Reality Environment refers to the hybrid virtual and phys- ical environment, where users see the computer-generated graphic and real space together (through optical or video pass-through) [17]. It includes the physical environment and the shared metaverse con- tent which represented the virtual elements.



4Note that in this work embodiment of IoT objects is considered as the expression of the physical object via its virtual or hybrid virtual-physical counterpart.

Immersive Metaverse Environment refers to a completely syn- thetic world that could immerse the user in totally [17], with con- structing by multiple virtual worlds in fully immersive environ- ment [5].



IoT Broker:The smart agents with sensors in physical environ- ment has the ability to capture context information that could affect and control the shared metaverse content (such as affecting the gen- erative objects, and controlling the behaviours of virtual agetns) through IoT broker. Likewise, the smart light showed in the com- ponent represented the physical actuators, which could affected and controlled by the information from shared metaverse content (such as the interacting with the 3D user interface and virtual objects collision) through IoT Broker.



Metaverse Bridge: act as the method for user to switch between the mixed reality environment and the immersive metaverse envi- ronment. With this bridge, it could enhance the usability of virtual reality applications since it could increase the accessible of physical environment which users rely on.



Scenario Design

Figure 1(b) presents an overall scenario reflecting the architecture components and details. For the mixed reality environment, the user is wearing a head-mounted display headset and could see both the virtual elements (shared metaverse content) and the physical environment. Users could see a virtual tree, virtual butterflies, and a virtual circle represented the metaverse zone on the space. A webcam is attached to the monitor for capturing the physical context through computer vision, and such information could affect and control the virtual elements through IoT communication indicated as solid blue arrows. A metaverse zone is designed to reflect the metaverse bridge in the architecture design, it allow users to move in and move out to switch between immersive metaverse environment and mixed reality environment, as indicated with red arrows. When in the immersive metaverse environment, the user is able to operate a virtual spaceship and perform collision interaction with the virtual planets (indicated with yellow arrows), and such interaction could control the color of physical ambient lighting as indicated with dashed blue arrows through IoT broker.



Extended Metaverse Design Prototypes: MetaPlant and Meta-RV-Traveller

The architecture has been instantiated into two prototype scenar- ios for demonstrating interaction and design within the extended metaverse scenarios. This includes a design exploration of user awareness of time spent in a work context, as in Figure 2; and a similar exploration with a focus on user transitions across immersive contexts, as in Figure 3. Each prototype is described in the following subsections below, based on [6] [7].



Figure 2: (a) The framework of MetaPlant with the IoT (MQTT and HTTP protocol) connection between physical (computer vision model detect environment context) and virtual (Unity visualization with Hololens 2) environment, based on [6]. (b) The MetaPlant scenario connects user context with mixed reality and the phys- ical environment (ambient lighting). A growing tree represents time-context, and a merger of visual effects, and physical lighting dynamics enrich the environment.





MetaPlant: An Extended Metaverse Scenario for Cross-Reality Awareness of Time Context

The goal of this prototype is to illustrate a more complex extended

timing (the length of time a user sits in front of the computer) as con- text to effect the shape, presentation, and growth of the MetaPlant (a virtual plant in the metaverse) and the color of physical ambient lighting. Also, using a mobile phone will attract a virtual butterfly to fly around the head of the user. This project aims to build an immersive and dynamic “clock” to provide a ten-minute block alarm to prevent users from sitting too long in front of computers and the distraction of virtual butterflies flying around when the user uses a cellphone at work. It is a form of data visualization project that represents the time as the virtual tree grows and turns the minutes to the iteration of the L-system.

This project provides two-way communication (information con- nection from virtual to physical and vice versa) between the meta- verse and physical space. In addition, it is a proof-of-concept pro- totype that demonstrates how the generative and procedural virtual object through the L-system and flocking algorithm could enhance the dynamic of the extended metaverse environment. As demon- strated in Figure 2(b), a Philip Hub ambient light is presented as an actuator by changing color in the physical space. At the same time, a webcam can be used as a sensor in a computer vision model through a web browser to detect whether the user is in front of the computer. In this scenario, the user is wearing a HoloLens 2 to enter an extended metaverse space that could see the virtual embodiment of the plant agent and butterfly. The virtual plant has eight states, with iterations growing with L-system based on the time, combined with expressive mixed reality effects, such as fire on the virtual plant (over time) and corresponding change in physical lighting color (after a fixed time-frame, in minutes).

The framework (see Figure 2(a)) of MetaPlant contains an MQTT Broker that addresses the IoT protocol on the cloud that is used to connect the computer vision model and the Unity environment. A computer vision model in Tensorflow.js 5 is available via a browser, and detects whether the human is visible in the space over time and whether they are using a mobile phone (in this case this is whether or not the phone is visible), which then publishes this context in- formation to the MQTT Broker with “Minutes” and “Cell Phone Presented” topics. Unity is the visualization and interaction engine used to subscribe to these topics and use these data to generate a virtual plant with L-system and operate the butterfly movement. Re- garding the physical implementation, a Philip Hue was considered in Prototype 2 to change a physical agent that presented the two-way communication between the metaverse and physical space.

The system starts with object detection when the class detected is equal to “person,” and the timer starts. Likewise, when the label is equal to “cell phone,” a timer of the cell phone being in proximity begins. Communication of this data is via a private MQTT broker powered by Mosquitto6 for IoT publish and subscribe messaging. Additionally for the selected IoT devices, the physical light (Philip Hue), is controlled by sending HTTP Put requests with JSON data. In terms of the visualization of the virtual content in HoloLens 2 with Unity, the L-system generates the virtual plant with iterations and the flocking behaviors of the butterfly. The L-system starts with pre-set parameters to indicate the growing shape of the virtual tree in different iterations. The butterfly’s movement is controlled by a conventional flocking engine (Cloud Fine). For butterfly movement the head of the user and the location of the virtual plant allow for queuing behavior settings, allowing them to be dynamic in the user’s environment, while switching between these two positions in

different conditions.

This prototype uses a simple way for the detection of context, by capturing human and mobile phone present in front of the computer. By combining the color control of the light, as in [7], it can perform two-way communication between metaverse content and the physi- cal agent. With the generative object of a virtual plant, the system



metaverse agent scenario with a generative object and context aware-		



ness approach in a smart space. This prototype (see Figure 2) uses location (computer vision detects a user in front of their desktop) and

5https://www.tensorflow.org/js 6https://mosquitto.org/







Figure 3: (a) Prototype Framework for Transitioning in a Hyper-Connected Metaverse Environment, as in [6]. (b) The Meta-RV-Traveller prototype explores possible user interactions in the hyper-connected metaverse, as the user transitions between virtual, mixed, and physical environments.





is considered to enhance the overall dynamics and promote an en- gaging MR experience (it is noted that evaluating this experience remains for future testing with users).



Meta-RV-Traveller: Cross-Reality Transitions in a Hyper-Connected Metaverse Environment

Meta-RV-Traveller explores the concept of how users can engage and “travel” between real and virtual environments based on the virtuality continuum [17] in the metaverse context. Figure 3 presents the prototype framework designed for exploring this transition aspect of the extended metaverse, and the resulting prototype exploration is shown in Figure 3(b). This involved designing a metaverse zone in the physical space by combining previous work [7] of switching capacity between two spaces. The virtual environment (a spaceship and universe background) would appear immersive when users enter the area. A virtual bulb is also a shared object of the metaverse virtual and mixed reality environment. The user could also switch on the physical light by moving in/out in a specific area in the MR space and can bring this object with them into the metaverse (fully virtual) zone where they can use it to control the spaceship movement in the virtual universe. In the virtual environment, the bulb attaches to a virtual joystick to control the movement of the spaceship. Two- way communication from virtual to physical and from physical to virtual is shown by switching on and off the physical light using a virtual bulb as one of the interactions from virtual to physical communication. Additionally, when driving the spaceship in the metaverse, there are many planets moving toward the users. Users can move the spaceship by manipulating the virtual joystick to avoid or collide with the planets. If the spaceship hits a planet, then the physical ambient light in the room will change the color to that of the recently collided planet.

On the other hand, similar to previous prototype, the from phys- ical to virtual interaction uses computer vision to detect physical context. The generative tree, from previous, is also incorporated into this project, plus object detection to affect the virtual presentation. When the computer vision model detects example objects (in this case a wine glass, teddy bear, and phone), the MR environment will relatively display a representative visualization (e.g., flowing wine particles, spray fluid, and fire explosion), thereby enabling the fully immersed user to experience the physical context.

Discussion

The proof-of-concept prototypes presented in the previous section are designed to be representative and exploratory. They highlight the potential for interaction simultaneously between the metaverse environments, mixed reality, and the physical environment. They explore possible control of devices in one part of the spectrum that influence those in another part of the spectrum. These also bring attention to the need for designs that bring the benefits of virtual and mixed reality to communicate to the user in rich visual dimensions. Likewise, they also show the merger of IoT sensing and control, with computer vision, can be actively applied to mixed reality scenes for environment understanding and presentation of a shared context, which will be essential for a more hyper-connected metaverse. Al- though this work is not comprehensively evaluated (such as via user study), the frameworks developed are a step toward future research in this direction. However, to show how these prototypes can relate to other work in this area, a subjective rating has been applied, based on a selection of factors (inspired by [10] [17] [14] [32]) considered deemed important for such systems.

Table 2 presents the definitions of the factors for comparison, including embodiment, connectedness, content generation, mixed reality access, context awareness, virtual-physical agency and user- interactive level, with the meaning of the levels of very low, low, medium, high, and very high. Figure 4 shows the authors’ subjective comparison of levels of the related works with those of the proto- types presented in Section 4, MetaPlant and Meta-RV-Traveller, as described below. These show how the prototypes can be considered to address the merger of a broad range of needs and factors, at a high level.

Directions for Future Work

The current work centered on the design and prototyping of these systems, and a more rigorous evaluation of these concepts is left as a direction for future research. For instance, more experimentation is needed to clearly show how cross-reality benefits users. Further, this work only considers a single-user cross-reality scenario, and multi-user explorations would be beneficial for proving the concept across different scenarios. New forms of representing changes in the physical and virtual environment and new design approaches are needed for users regardless of whether they are physically present, or virtually telepresent, across the entire cross-reality spectrum.



Table 2: Factors for comparison of the related prototypes (showed in Figure 4), and their meanings from very low to very high.





Additionally, as the current work relies on subjective evaluation, a more thorough user evaluation is required to objectively assess the benefits and significance of this cross-reality research, as well as user-experience and performance. In the two example prototypes presented, the users can direct the virtual or physical world via their interactions, but the system-directed interactions to the user have not been examined, i.e., the cross-reality user interaction and feedback loop could be a significant factor for designers of future systems.

Further, more system performance and functionality evaluations are also required. It is also noted that new head-mounted displays and cross-reality hardware also remains to be incorporated into the framework, which would address several limitations related to visi- bility and immersion (i.e., use of color-passthrough HMD’s versus the black & white passthrough HMD used in this work). Lastly, an exploration of how to optimize the anchoring and placement of mixed reality objects without obstructing the user’s field of view is also an important question for further research, such as positioning content in the peripheral field-of-view, or minimizing visual clutter.





Summary



This work has addressed the metaverse disconnect problem and the underlying challenges related to bridging and extending the metaverse concept across virtual, mixed, and physical environments through a single architectural framework. This framework has been instantiated to show two distinct prototype designs as cross-reality use cases wherein a user immersed in a mixed reality environment is able to engage with objects and elements from across either environ- ment, and transition between these contexts while remaining in touch with each. This approach examines through design, outlining the need for connectivity, shared visualizations, and context awareness as ways to bridge the human-in-the-loop and the many virtual, mixed, and physical reality environments that they will increasingly engage in as the metaverse advances to maturity. Together, it is hoped that these will help foster the design-creation of a more seamless and extended metaverse environment.





Figure 4: A comparison of the prototypes (based on the factors in Table 2) developed versus related work. It provides a subjective comparison with criteria in Table2 from 0-5 (very low to very high) of XR and IoT related projects, IoT Avatar 1.0 [25], IoT Avatar 2.0 [19], XRI Workstation [18], Digi-log [12], Holoflows [24], XRI lamp Controller [7], XRI Ambient Lighting [7], and the two prototypes presented in this paper.





Acknowledgments

This work was supported by funding from the Tri-council of Canada under the Canada Research Chairs program.

References

	T. Ai. Metaverse Theory. SSRN Electronic Journal, pp. 1–4, 2021. doi: 10.2139/ssrn.3840764

T. Andrade and D. Bastos. Extended reality in iot scenarios: Concepts, applications and future trends. In 2019 5th Experiment International Conference (exp.at’19), pp. 107–112, 2019. doi: 10.1109/EXPAT.2019

.8876559

E. Cline. Ready Planyer One. Crown Publishers, New York, 2011.

C. Collins. Looking to the Future: Higher Education in the Metaverse.

EDUCAUSE Review, 43(5):50–52, 2008.



	J. D. N. Dionisio, W. G. Burns, and R. Gilbert. 3D virtual worlds and the metaverse: Current status and future possibilities. ACM Computing Surveys, 45(3), 2013. doi: 10.1145/2480741.2480751

J. Guan. Extending the metaverse: Exploring generative objects with extended reality environments and adaptive context awareness. 2022.

J. Guan, J. Irizawa, and A. Morris. Extended reality and internet of things for hyper-connected metaverse environments. In 2022 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW), pp. 163–168. IEEE, 2022.

J. Guan, N. Lessio, Y. Shao, and A. Morris. Exploring a mixed re- ality framework for the internet-of-things: Toward visualization and interaction with hybrid objects and avatars. In 2020 IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW), pp. 857–857. IEEE, 2020.

D. Gursoy, S. Malodia, and A. Dhir. The metaverse in the hospitality and tourism industry: An overview of current trends and future research directions. Journal of Hospitality Marketing & Management, pp. 1–8, 2022.

T. Holz, A. G. Campbell, G. M. Ohare, J. W. Stafford, A. Martin, and

M. Dragone. MiRA-mixed reality agents. International Journal of Human Computer Studies, 69(4):251–268, 2011. doi: 10.1016/j.ijhcs. 2010.10.001

D. Jo and G. J. Kim. AR enabled IoT for a smart and interactive environment: A survey and future directions. Sensors (Switzerland), 19(19), 2019. doi: 10.3390/s19194330

D. Jo and G. J. Kim. Iot+ ar: pervasive and augmented environments for “digi-log” shopping experience. Human-centric Computing and Information Sciences, 9(1):1–17, 2019.

J. Joshua. Information Bodies: Computational Anxiety in Neal Stephen- son’s Snow Crash. Penn State University Press, 19(1):17–47, 2017.

A. Jovanovic´ and A. Milosavljevic´. VoRtex Metaverse Platform for Gamified Collaborative Learning. Electronics (Switzerland), 11(3), 2022. doi: 10.3390/electronics11030317

L.-H. Lee, T. Braud, P. Zhou, L. Wang, D. Xu, Z. Lin, A. Kumar,

C. Bermejo, and P. Hui. All One Needs to Know about Metaverse: A Complete Survey on Technological Singularity, Virtual Ecosystem, and Research Agenda. 14(8):1–66, 2021.

L.-H. Lee, Z. Lin, R. Hu, Z. Gong, A. Kumar, T. Li, S. Li, and P. Hui. When Creators Meet the Metaverse: A Survey on Computational Arts, vol. 37. Association for Computing Machinery, 2021.

P. Milgram. a Taxonomy of Mixed Reality Visual Displays. Industrial Engineering, (12):1–14, 2011.

A. Morris, J. Guan, and A. Azhar. An xri mixed-reality internet-of- things architectural framework toward immersive and adaptive smart environments. In 2021 IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct), pp. 68–74. IEEE, 2021.

A. Morris, J. Guan, N. Lessio, and Y. Shao. Toward mixed reality hybrid objects with iot avatar agents. In 2020 IEEE International Conference on Systems, Man, and Cybernetics (SMC), pp. 766–773. IEEE, 2020.

C. Ondrejka. Escaping the Gilded Cage: User Created Content and Building the Metaverse. NYL Sch. L. Rev., 49(1):81, 2004.

E. Ordano, A. Meilich, Y. Jardi, and M. Araoz. Decentraland white paper. p. 15, 2017.

J. A. Paradiso and J. A. Landay. Guest editors’ introduction: Cross- reality environments. IEEE Pervasive Computing, 8(3):14–15, 2009.

B. Ryskeldiev, Y. Ochiai, M. Cohen, and J. Herder. Distributed meta- verse: Creating decentralized blockchain-based model for peer-To-peer sharing of virtual spaces for mixed reality applications. ACM Inter- national Conference Proceeding Series, 2018. doi: 10.1145/3174910. 3174952

R. Seiger, R. Ku¨hn, M. Korzetz, and U. Aßmann. Holoflows: modelling of processes for the internet of things in mixed reality. Software and Systems Modeling, 20(5):1465–1489, 2021.

Y. Shao, N. Lessio, and A. Morris. Iot avatars: Mixed reality hybrid objects for core ambient intelligent environments. vol. 155, pp. 433–

440. Elsevier, 2019.

H. soo Choi and S. heon Kim. A content service deployment plan for metaverse museum exhibitions—Centering on the combination of beacons and HMDs. International Journal of Information Management,

37(1):1519–1527, 2017. doi: 10.1016/j.ijinfomgt.2016.04.017

E. Swilley. Moving virtual retail into reality: Examining metaverse and augmented reality in the online shopping experience. In Looking Forward, Looking Back: Drawing on the Past to Shape the Future of Marketing, pp. 675–677. Springer, 2016.

J. Thomason. Metahealth-how will the metaverse change health care?

Journal of Metaverse, 1(1):13–16, 2021.

T. Tsang and A. Morris. A hybrid quality-of-experience taxonomy for mixed reality iot (xri) systems. In 2021 IEEE International Conference on Systems, Man, and Cybernetics (SMC), pp. 1809–1816. IEEE, 2021.

K. J. Vicente. The human factor: Revolutionizing the way people live with technology. Routledge, 2013.

M. Wooldridge and N. R. Jennings. Agent theories, architectures, and languages: A survey. Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics), 890:1–39, 1995. doi: 10.1007/3-540-58855-8 1

D. Zeltzer. Autonomy, Interaction, and Presence. (September):127– 132, 1992.

Y. Zhao, J. Jiang, Y. Chen, R. Liu, Y. Yang, X. Xue, and S. Chen. Metaverse: Perspectives from graphics, interactions and visualization. Visual Informatics, 2022.




---

