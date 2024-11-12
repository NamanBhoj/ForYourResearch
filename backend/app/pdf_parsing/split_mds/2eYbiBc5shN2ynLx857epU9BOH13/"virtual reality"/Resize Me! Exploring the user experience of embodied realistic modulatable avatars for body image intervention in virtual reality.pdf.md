## Start of PDF Naman_Omar 2

---

##

---

## Resize Me! Exploring the user experience of embodied realistic modulatable avatars for body image intervention in virtual reality

---

## Nina Döllinger1*†, Erik Wolf 2*†, David Mal 1,2,

Stephan Wenninger3, Mario Botsch 3, Marc Erich Latoschik 2 and Carolin Wienrich 1

1Psychology of Intelligent Interactive Systems Group, University of Würzburg, Würzburg, Germany, 2Human-Computer Interaction Group, University of Würzburg, Würzburg, Germany, 3Computer Graphics Group, TU Dortmund University, Dortmund, Germany

Obesity is a serious disease that can affect both physical and psychological well- being. Due to weight stigmatization, many affected individuals suffer from body image disturbances whereby they perceive their body in a distorted way, evaluate it negatively, or neglect it. Beyond established interventions such as mirror exposure, recent advancements aim to complement body image treatments by the embodiment of visually altered virtual bodies in virtual reality (VR). We present a high-fidelity prototype of an advanced VR system that allows users to embody a rapidly generated personalized, photorealistic avatar and to realistically modulate its body weight in real-time within a carefully designed virtual environment. In a formative multi-method approach, a total of 12 participants rated the general user experience (UX) of our system during body scan and VR experience using semi-structured qualitative interviews and multiple quantitative UX measures. Using body weight modification tasks, we further compared three different interaction methods for real-time body weight modification and measured our system’s impact on the body image relevant measures body awareness and body weight perception. From the feedback received, demonstrating an already solid UX of our overall system and providing constructive input for further improvement, we derived a set of design guidelines to guide future development and evaluation processes of systems supporting body image interventions.

KEYWORDS

virtual reality, avatar embodiment, user experience, body awareness, body weight perception, body weight modification, body image disturbance, eating and body weight disorders

---

## Introduction

Obesity is a complex chronic disease characterized by severe overweight and an above-average percentage of body fat (World Health Organization, 2019). Its prevalence has more than doubled within recent decades and is expected to rise (Venegas and Mehrzad, 2020; World Health Organization, 2021). Besides the physical burdens (e.g., an increased risk of several secondary diseases (Stefan et al., 2021), affected individuals deal with an external or internalized stigmatization that can lead to body image disturbances (Thompson and Tantleff-Dunn, 1998; Rosen, 2001; Meadows and Calogero, 2018). Body image disturbances are composed of a misperception of body dimensions (body image distortion) and the inability to like, accept, or value one’s own body (body image dissatisfaction) and are also associated with a reduced body awareness (Todd et al., 2019b; Turbyne et al., 2021). Various interventions (e.g., cognitive-behavioral therapy supported by mirror exposition or fitness training) have been designed to target persisting disturbances but often only achieve small improvements in the body image (Alleva et al., 2015). In recent years, novel virtual reality (VR)-based methods complementing the therapy of body image disturbances have successfully been explored in research with promising results (Ferrer-Garcia et al., 2013; Wiederhold et al., 2016; Riva et al., 2019). The further improvement of these approaches in the context of obesity forms the frame of our current work.

VR-based approaches for supporting body image

interventions often use 3D models of human beings (Horne et al., 2020; Turbyne et al., 2021), so-called avatars (Bailenson and Blascovich, 2004). VR in general, and the confrontation with embodied avatars in particular, have great potential to influence human perception and behavior (Yee and Bailenson, 2007; Ratan et al., 2020; Wienrich et al., 2021). In the context of body image, avatars have been utilized to expose users of a VR system to generic virtual bodies or body parts varying in size or shape to investigate the principles of body weight perception (Thaler, 2019; Wolf et al., 2020, 2021, 2022a) or to influence the perception or attitude towards the user’s own body (Turbyne et al., 2021). Recent developments in computer graphics allow for the generation of photorealistic avatars that match a person’s real-life appearance within a short duration at a low-cost (Achenbach et al., 2017; Wenninger et al., 2020; Bartl et al., 2021) and for a realistic modulation of body dimensions in pictures and videos (Zhou et al., 2010; Zhao et al., 2018; Xiao et al., 2020; Tang et al., 2021) or in VR (Piryankova et al., 2014a; Hudson et al., 2020; Maalin et al., 2020). However, no work has yet been presented where users embody their photorealistically personalized avatar in VR while also having the ability to manipulate that avatar’s body shape in real-time actively, nor has the impact of such a system on the users and their experiences been evaluated.

To address this gap, we present the development of a VR

system allowing users to embody a photorealistic, personalized

avatar within a virtual environment and to actively modify its body weight in real-time using different interaction methods. In a further step, we evaluated the system with regard to a later usage in clinically relevant settings within our research project Virtual Reality Therapy by Stimulation of Modulated Body Perception (ViTraS) (Döllinger et al., 2019). In particular, we performed a formative user evaluation of the avatar generation process and interactive VR exposure with a small sample of healthy participants. Following Wienrich and Gramlich (2020) and considering the future potential user group, we assessed relevant factors such as security, physical comfort, accessibility, usability, and user experience, which we also already considered during the development process. Based on our evaluation’s results, we derive a set of design guidelines for the future design and development of similar avatar-based body image therapy support tools.

---

## Related work

Body image disturbance is characterized by an “excessively negative, distorted, or inaccurate perception of one’s own body or parts of it” (World Health Organization, 2019). It may manifest in body image distortion, the misperception of one’s body weight and dimensions that have repeatedly been reported based on underestimations (Valtolina, 1998; Maximova et al., 2008) or overestimations (Docteur et al., 2010; Thaler et al., 2018a), or body image dissatisfaction, a negative attitude towards the body that is associated with body image avoidance (Walker et al., 2018) and reduced body awareness (awareness for bodily signals) (Peat and Muehlenkamp, 2011; Todd et al., 2019a,b; Zanetti et al., 2013). While often caused by internalized weight stigma and a fear of being stigmatized by others (Meadows and Calogero, 2018), body image disturbance interferes with efforts to stabilize body weight in the long term (Rosen, 2001). Treatments for body image disturbance mainly rely on cognitive-behavioral therapy, typically combining psychoeducation and self-monitoring tasks, mirror exposure, or video feedback (Farrell et al., 2006; Griffen et al., 2018; Ziser et al., 2018). Based on the fundamentals of these established methods, an increasing number of researchers have started to explore VR applications as additional support for attitude and behavior change in general (Wienrich et al., 2021) and therapy of body image disturbance (Riva, 1997; Ferrer-Garcia et al., 2009, 2013; Riva et al., 2019; Turbyne et al., 2021) and obesity in particular (Döllinger et al., 2019; Horne et al., 2020).

---

## The unique potential of modulatable avatars in VR

VR offers the opportunity to immerse oneself in an alternative reality and experience scenarios that are otherwise

only achievable via imagination. Endowed with this unique power, mainly the use of avatars has attracted attention in treating body image disturbance (Horne et al., 2020; Turbyne et al., 2021). Image processing methods for simulating body changes are well established. Using parametric models, it is possible to retouch images to simulate different face or body shapes (Zhou et al., 2010; Zhao et al., 2018) and even manipulate them in real-time during video playback (Xiao et al., 2020; Tang et al., 2021). Avatars in VR allow simulating rapid changes in body shape or weight in an immersive environment using life- sized avatars going beyond the presentation of pictures and videos. They enable further general investigation of body weight perception (Thaler, 2019; Wolf et al., 2020, 2021). While some researchers are using multiple generic avatars differing in body weight (Normand et al., 2011; Piryankova et al., 2014b; Keizer et al., 2016; Ferrer-Garcia et al., 2018; Preston and Ehrsson, 2018), others have developed methods for dynamic body weight modification in VR (Alcañiz et al., 2000; Johnstone et al., 2008; Piryankova et al., 2014a; Nimcharoen et al., 2018; Hudson et al., 2020; Maalin et al., 2020; Neyret et al., 2020). A huge advantage when using advanced body weight modification methods is that the avatar’s body weight can be realistically changed to a desired numeric reference value. For this purpose, mainly the body mass index calculated as BMI = Body Weight in kg/(Body Height in m)2 (World Health Organization, 2000) is used. One example is the work of Thaler et al. (2018a), who trained a statistical model to apply realistic BMI-based body weight modification to their generated personalized, photorealistic avatars. But also other factors like muscle mass could be included in such models (Maalin et al., 2020). However, while picture and video-retouching methods tend to focus on facial features, the statistical models of weight gain/loss of avatars in VR are usually trained on the whole body (Piryankova et al., 2014a) or neglect the head region completely (Maalin et al., 2020). For our system, we also learned a statistical model of weight gain/loss for the head region but kept small parts of the face region fixed to preserve the identity of the users when applying the body weight modification.

Besides the shape of the used avatar, application or

system-related properties also might alter how we perceive the avatar, and particularly its body weight, in VR. Wolf et al. (2020) presented an overview of potentially influencing factors, noting that while the used display or the observation perspective might unintentionally alter body weight perception (Wolf et al., 2022b), especially the personalization and embodiment of avatars hold potential for application in body image interventions. For example, Thaler et al. (2018a) found that the estimator’s BMI influences body weight estimations of a realistic and modulatable avatar, but only when the avatar’s shape and texture matched the estimator’s appearance. This comes along with a recent review by Horne et al. (2020), who identified the personalization of avatars as an important factor when using avatars. For

embodiment, Wolf et al. (2021) recently found, for example, that females’ own BMI influences body weight estimations of a generic avatar only when embodying it.

---

## User experience of a VR-based body image intervention

In the design process of a VR application, it is of utter importance to test the system’s user experience (UX). UX refers to the sum of all perceptions and reactions of a user to the interaction with an interface before, during, and after its use (International Organization for Standardization, 2019). It combines a variety of hedonic qualities, such as the joy of the user during an experience, and pragmatic qualities, such as the efficiency of interactions. Concerning the UX evaluation of VR systems, it is suggested to include the assessment of further VR-specific variables (Tcha-Tokey et al., 2016; Wienrich and Gramlich, 2020), namely simulation sickness (Kennedy et al., 1993), the feeling of presence (Slater, 2009), and the feeling of embodiment (Kilteni et al., 2012). Concerning avatar-based body image interventions, particularly the user’s feeling of embodiment towards their avatar is of interest (Turbyne et al., 2021). It can be evoked by visuomotor congruence, for example, when the user sees the avatar moving like their real body (Slater et al., 2009, 2010) and is divided into the feeling of being inside (self-location), of owning (virtual body ownership), and of controlling (agency) an avatar (Kilteni et al., 2012).

In addition to a system’s classical UX evaluation, it is

important to embed the development into an iterative design process. This typically involves understanding and establishing the context of use, defining the requirements for use, developing prototypes, and an iterative evaluation. Wienrich and Gramlich (2020) recently presented the appRaiseVR framework for UX evaluation in VR, which adapts the general process of UX design to the context of VR. In their VR-adapted design cycle, they include four steps:

1. defining the setting of the experience, including the details of the system, the planned usage context, and the target user group; 2) defining the level of evaluation, including either an evaluation of the system itself, the task, the narrative, the effect on the user, or the relation between different users; 3) rating the plausibility of the experience, namely its realism, its virtual and physical components; and 4) selecting the time of measure, whether evaluating the expectancy towards a system, the immediate reaction within the experience a post-experience evaluation or follow-up assessments.

Considering this framework, our research evaluates a highly immersive VR system, including a realistic environment and photorealistic, modulatable avatars (1, 3). The design aims at a realistic, clinical setting with a target group dealing with obesity and a disturbed body image (1). Based on our target group, our

evaluation focuses on security, physical comfort, and accessibility of our system, next to VR-specific UX and usability of different interaction tasks and the plausibility of avatar modifications (2), which we test during and after the experience (4).

In the context of our application, we further define the effects on body weight perception and physical body awareness during the use as essential parts of the users’ experience. For example, Riva et al. (2019) stated that embodiment could potentially help update the misperception of body dimensions by experiencing the ownership over a differently shaped or sized avatar. This goes along with a recent review by Turbyne et al. (2021), summarizing that participants’ body image conformed to a modified virtual body size when participants felt embodied in it. VR further interferes with the user’s physical body awareness. Filippetti and Tsakiris (2017) showed an increase in body awareness when embodying an avatar for individuals with initially low body awareness. Döllinger et al. (2022) revealed that especially the feeling of body ownership towards a personalized avatar is positively related to body awareness. However, there is no research on body awareness in a VR-based body image treatment task.

---

## User interaction for body weight modification

Most VR applications for body image interventions aim for enhanced mirror confrontation. They surpass real mirror confrontation by modifying the mirror image or the shown avatars into different body shapes. In our system, we want to go one step further and allow users to adjust the shape of their avatar interactively. Our idea is to give users the opportunity to actively engage in analyzing their body image and develop a novel feeling for their own body. Object manipulation in VR has been widely researched and can serve as a reference in the development of body weight modification interaction methods. For example, LaViola et al. (2017) presented a set of design guidelines for different types of object manipulation, including object scaling by virtual buttons or other control elements, the inclusion of physical interfaces as provided on most VR controllers, or the design of gesture-based object manipulation. Furthermore, Williams et al. (2020) and Wu et al. (2019) investigated the preference of users towards different gestures in object manipulation, and both proposed using two-handed gestures (e.g., moving the hands apart or bringing them together) for size modification of large objects.

---

## Summary and outline

VR in general, and the embodiment of modulatable avatars in specific, hold great potential to innovate interventions for body image

disturbances. The introduced research shows that there exist promising developments toward avatar-based interventions for body image disturbances. However, no work to date undertakes a comprehensive VR-specific UX investigation of such an intervention system.

Our current work within the interdisciplinary research project ViTraS (Döllinger et al., 2019) addresses this research gap and aims toward a novel approach for supporting body image therapy. We present a high-fidelity prototype of a body image therapy support system that allows users to embody their rapidly generated personalized, photorealistic avatar within a carefully designed virtual environment. Our system allows users to dynamically alter their body weight while being embodied in VR using three different interaction methods (joystick, gestures, and virtual objects). We focus on a user experience evaluation with normal-weight participants performed within our first design cycle. In a comprehensive mixed-methods evaluation, we assessed 1) the body scan experience during the avatar generation process, 2) the general, VR-specific UX of the exposure and different modification methods, and 3) their impact on body image-related UX, including body awareness and body weight perception. To sum up our results, we derive a set of guidelines for the design and implementation of future VR systems supporting body image interventions.

---

## System description

The technical implementation of our system is realized using the game engine Unity version 2019.4.15f1 LTS (Unity Technologies, 2019). As VR HMD, we use a Valve Index (Valve Corporation, 2020a), providing the user a resolution of 1440 × 1600 pixels per eye with a total field of view of 120° running at a refresh rate of 90 Hz. For motion tracking, we use the two handheld Valve Index controllers, one HTC Vive Tracker 3.0 positioned on a belt at the lower spine, and two HTC Vive Tracker 3.0 on each foot fixed by a velcro strap. The tracking area was set up using four SteamVR Base Stations 2.0. All VR hardware is integrated using SteamVR in version

1.16.10 (Valve Corporation, 2020b) and its corresponding Unity plugin in version 2.7.3.1 In our evaluation, the system was driven by a high-end PC composed of an Intel Core i7-9700K, an Nvidia RTX2080 Super, and 32 GB RAM running Windows 10. To ensure that users always received a fluent VR experience and to preclude a possible cause of simulator sickness, we measured the motion-to-photon latency of our system by frame-counting (He et al., 2000; Stauffert et al., 2021). For this purpose, the video output was split into two signals using an Aten VanCryst VS192 display

https://assetstore.unity.com/packages/tools/integration/steamvr- plugin-32647.

is automatically calibrated accurately to overlay the physical environment spatially (see Figure 1). Here, all preparatory steps required for exposure are performed and tested (e.g., ground calibration, vision test, equipment adjustments, embodiment calibration). For spatial calibration, we use a customized implementation of the Kabsch algorithm2 (Müller et al., 2016), based on the positions of the SteamVR base stations in real and virtual environments. Additionally, the virtual ground height is calibrated by briefly placing the controller onto the physical ground.

The second environment is originally based on an asset taken from the Unity Asset Store3 that was modified to match our requirements. This exposition environment is inspired by a typical office of a psychotherapist with a desk and chairs and an exposure area in which the mirror exposure takes place (see Figure 2). The exposure area includes a virtual mirror allowing for an allocentric observation of the embodied avatar. We aimed for a realistic and coherent virtual environment to enhance the overall plausibility of the exposure (Slater, 2009; Latoschik and Wienrich, 2022).

---

## 3.2 Generation and animation of personalized avatars

port splitter. One signal still led to the HMD, the other to an ASUS ROG SWIFT PG43UQ low-latency gaming monitor. A high-speed camera of an iPhone 8 recorded the user’s motions and the corresponding reactions on the monitor screen at 240 fps. The motion-to-photon latency for the HMD matched the refresh rate of the used Valve Index closely, as it averaged

14.4 ms (SD = 2.8 ms). The motion-to-photon latency for the body movements was considered low enough to provide a high feeling of agency towards the avatar (Waltemate et al., 2016), as it averaged 40.9 ms (SD = 5.4 ms).

---

## Virtual environments

We realized two virtual environments. The first environment replicates the real environment, in which the user was located physically during our evaluation, and which

In our system, the user embodies a personalized avatar from an egocentric perspective while the avatar is animated according to the user’s body movements in real-time. The following sections describe the generation of the avatars as well as the animation system.

---

## Generation process

The generation of the avatars closely follows the method of Achenbach et al. (2017). First, the subject is scanned with a custom-made photogrammetry rig consisting of 94 DSLR cameras, where four studio lights equipped with diffuser balls ensure uniform illumination (Bartl et al., 2021). Instead of employing a separate face scanner like Achenbach et al. (2017) did, ten of the 94 DSLR cameras are zoomed in on the subject’s face to capture more detail in this region. The images taken by the cameras are then automatically processed with the commercial photogrammetry software Agisoft Metashape (Agisoft, 2021), resulting in a dense point cloud of the subject. We manually select 23 landmarks on the point cloud in order to guide the subsequent template fitting process. The counterparts of these landmarks are pre-selected on the

https://github.com/zalo/MathUtilities/#kabsch.

https://assetstore.unity.com/packages/3d/props/interior/manager- office-interior-107709.

template model, which comes from the Autodesk Character Generator (Autodesk, 2014) and consists of N ≈ 21k vertices, an animation skeleton with skinning weights, facial blendshapes, as well as auxiliary meshes for eyes and teeth. Achenbach et al. (2017) enhance the template with a statistical model of human shape variation. This statistical, animatable human template model is then fitted to the point cloud by optimizing for alignment, pose, and shape by employing non- rigid ICP (Bouaziz et al., 2014). This optimization of the model parameters defines the initial registration of the template, which is then further refined by allowing fine- scale deformation of the vertices to match the scanner data more closely. For more details, we refer to Achenbach et al. (2017).

---

## Animation process

For avatar animation, the participants’ movements are continuously captured using the SteamVR motion tracking devices. The tracking solution provides for our work a sufficiently solid and rapid infrared-based tracking solution for the crucial body parts required for animation without aligning different tracking spaces (Niehorster et al., 2017). To calibrate the tracking devices to the user’s associated body parts and capture the user’s body height, arm length, and current limb orientations, we use a custom-written calibration script that requires the user to stand in T-pose for a short moment (see Figure 1). The calibrated tracking targets of the head, left hand, right hand, pelvis, left foot, and right foot were then used to drive an Inverse Kinematics (IK) (Aristidou et al., 2018) approach realized by the Unity plugin FinalIK version 2.0.4 FinalIK’s integrated VRIK solver continuously calculates the user’s body pose according to the provided tracking targets. The tracking

https://assetstore.unity.com/packages/tools/animation/final-ik-

14290.

pose is automatically adjusted to the determined body height and arm length in order to match the user’s body. In the next step, the tracking pose is continuously retargeted to the imported personalized avatar. Potentially occurring inaccuracy in the alignment of the pose or the end-effectors can be compensated by a post-retargeting IK-supported pose optimization step. This leads to high positional conformity between the participant’s body and the embodied avatar and avoids sliding feet due to the retargeting process.

---

## Body weight modification of avatars

Our system allows the user to modify their body weight during runtime dynamically. The statistical model of weight gain/loss and the implemented user interaction methods are described in the following.

---

## Data-driven body weight modification

To build a statistical model of body weight modification, we follow the approach of Piryankova et al. (2014a), who first create a statistical model of body shape using Principal Component Analysis (PCA) and then estimate a linear function from anthropometric measurements to PCA coefficients. For computing the statistical model of human body shape, we use the template fitting process described above to fit our template model to the European subset of the CAESAR scan database (Robinette et al., 2002). It consists of M = 1700 3D scans, each annotated with anthropometric measurements such as weight, height, arm span, inseam, waist width, etc. After bringing the scans into dense correspondence via template fitting, we are left with M pose-normalized meshes consisting of N vertices each. Our approach for data-driven weight gain/loss simulation differs from the method of Piryankova et al. (2014a) in the following ways: 1) Instead of encoding body shape as a 3 × 3 deformation matrix per mesh face (Anguelov et al., 2005), we encode body

shape directly via vertex positions. 2) Modelling weight gain/loss as a change in parameters of a statistical parametric shape model (Piryankova et al., 2014a; Xiao et al., 2020) changes face identity during weight modification due to the fact that the learnt direction of change is not subject-specific. This leads to effects such as changing the shape of the eye socket, the pupillary distance or other unrealistic changes in face proportions. To mitigate these effects, we keep vertices in the face region fixed while deforming the rest of the mesh in order to preserve the identity of the participants.

To this end, we define a set S with cardinality V containing all

vertices outside of the face region (see Figure 3) as well as a selector matrix S ∈ R3V×3N which extracts all coordinates belonging to

vertices in S. Let xj = (pT, ... , pT )T ∈ R3N be the vector

order to seamlessly stitch the new vertex positions to the unmodified face region, we compute the Laplacian coordinates (discretized through cotangent weights and Voronoi areas (Botsch et al., 2010)) of the resulting mesh and then use surface reconstruction from differential coordinates (Sorkine, 2005). For the vertices of the face region and its 1-ring neighborhood, the Laplacian is computed based on the unmodified vertex positions x, while for the rest of the vertices, the Laplacian is computed based on the modified vertex positions x~. Since the position of vertices of the face region is known and should not change, we treat the position of these vertices as hard instead of soft constraints as discussed by Botsch and Sorkine (2008). Setting Δd = ( Δw, 0, 0, 0, 0 )T then allows modifying the user’s weight while

keeping the other anthropometric measurements fixed. Keeping

1 N

containing the stacked vertex positions of the jth training mesh and ¯x = 1 Σjxj ∈ R3N be the corresponding mean. Performing PCA on the data matrix X = ( Sx1 − Sx¯, .. . , SxM − Sx¯ ) ∈ R3V×M and taking the first k = 30 components then yields the PCA matrix P ∈ R3V×k. Let W = ( w1, .. . , wM ) ∈ Rk×M contain the PCA coefficients wj of the M training meshes, computed by wj = PT(Sxj − Sx¯). If we denote by D ∈ RM×4 the matrix containing the anthropometric measurements weight, height, armspan and inseam of the jth subject in its jth row, we can then compute a linear mapping from anthropometric measurements D to PCA coefficients W by solving the linear system of equations

( D | 1 )C = WT in a least-squares sense via normal equations.

New vertex positions for a subject with initial vertex positions x and a desired change in anthropometric measurements Δd ∈ R5

the face region fixed 1) preserves the identity of the user for high values of Δw and 2) avoids having to recalculate the position of auxiliary meshes of the avatar such as eyes and teeth (Figure 3). Results of the described body weight modification method are shown in Figure 4.

---

## Interaction methods

To allow users to modify the avatars’ body weight as quickly, easily, and precisely as possible, we compare in our evaluation three implemented interaction methods regarding their usability. Since interaction methods for human body weight modification have not yet been explored, we considered the guidelines for object modification presented by LaViola et al. (2017). Figure 5 gives a short overview of the body weight

can then be calculated via

x~ = Sx + P(CTΔd), i.e., by first

modification methods. After a pilot test of body weight

projecting the desired change in measurements into PCA space via the learned linear function and then into vertex position space via the PCA matrix. However, this only updates vertices in S. In

modifications with multiple generated virtual humans, we restricted the body weight modification for all interaction methods to a range of ±35% of the user’s body weight to

avoid unrealistic, possibly unsettling shape deformation. To avoid providing any hidden cues, we have extended the possible modification range compared to the used modification range of our passive estimation task. The constants given in the formulas for calculating the velocity of body weight change were determined empirically in a further pilot test.

Body weight modification via controller movement gestures

To modify the avatar’s body weight via gestures (see Figure 5, left), users have to press the trigger button on each controller simultaneously. Moving the controllers away from each other then increases the body weight, while moving them towards each other decreases it. The faster the controllers are moved, the faster the body weight changes. When active, the body weight changes by the velocity v in kg/s, determined by the relative distance change between the controllers r in m/s, and calculated as v =

3.5r2 + 15r.

Body weight modification via joystick movement To modify the avatar’s body weight via joystick (see Figure 5, center), users have to tilt the joystick of either the left or the right controller. Selecting joystick for an initial modification leads to a deactivation of the other joystick for

the remaining interaction. Tilting the joystick to the left

decreases the body weight, tilting it to the right increases it. The stronger the joystick is tilted, the faster the body weight changes. When enabled, the body weight changes by the velocity v in kg/s, determined by the normalized tilt t of the joystick and calculated as v = 10t2 + 5.

Body weight modification via controller movement towards objects

To modify the avatar’s body weight via objects (see Figure 5, right), users have to touch either a virtual “plus” or a virtual “minus” object within the virtual environment. As long as an object is touched, the body weight increases or

decreases. The longer the object is touched, the faster the body weight changes. When active, the body weight modification velocity v in kg/s increases quadratically over a normalized contact duration d of 1.5 s in a normalized range r between

3 kg/s and 15 kg/s.

---

## Evaluation

We tested our first system prototype in a structured UX evaluation based on multiple relevant qualitative questions and quantitative measures concerning the users’ scan and VR exposure experience as well as their body image. The following sections contain a detailed explanation of the evaluation process.

---

## Ethics

Since our technical system was developed with the aim of being tested on potential patients in a clinically relevant context as part of a later feasibility study, particular attention has already been paid to ethical aspects during the here reported development and evaluation of our system. As part of a conservative development and evaluation strategy, we decided to work with a relatively small sample of healthy participants in this initial formative evaluation. The system, as well as the evaluation, was designed in consultation with our clinical partners within the context of our interdisciplinary research project ViTraS (Döllinger et al., 2019). A detailed ethics proposal following the Declaration of Helsinki was submitted to the ethics committee of the Human-Computer-Media Institute of the University of Würzburg and found to be ethically unobjectionable. Free professional help services provided by the Anorexia Nervosa and Associated Disorders (ANAD)5 organization were explicitly highlighted during the acquisition and evaluation process.

---

## Participants

A total of 12 students (8 female, 4 male) of the University of Würzburg participated in our evaluation and received course credit in return. Before the evaluation, we defined four exclusion criteria queried by self-disclosure: Participants had to have 1) normal or corrected to normal vision and hearing, 2) at least 10 years of experience with the German language, 3) not suffered from any kind of mental or psychosomatic disease, or from body weight disorders, and 4) no known sensitivity to simulator sickness. None of the participants matched any exclusion criteria. The participants were aged between 20 and 25 (M =

https://www.anad.de/.

22.0, SD = 1.48), had a BMI between 17.85 and 32.85 (M = 22.72,

SD = 3.98), and had mostly very little VR experience. Nine out of the twelve participants claimed to know their current body weight. The mean deviation of the indication of their body weight compared to that measured by the experimenter was

0.29 kg (SD = 1.57).

---

## Design

The evaluation of our system included qualitative and quantitative measures regarding 1) the body scan experience,

2. the UX of the VR exposure and the different modification methods used, and 3) their impact on the body image-related measures body awareness and body weight estimation. To compare our three modification methods (see Figure 5), participants performed for each modification method a set of active modification tasks (AMTs) in a counterbalanced order using a 1 × 3 within-subjects design. For comparing the novel AMT with the more traditional passive estimation task (PET), the participants performed a PET each before and after the AMTs (see Figure 6, right). All tasks and the timing of the measures will be further explained in Section 4.5.

---

## Measures

---

## Body scan experience

Overall, the scan process was mainly rated as simple and interesting, although it took place in a separate room with great technical effort. Participants stated a high acceptance and willingness to be scanned again. In addition, the scan and the associated body measurements were seen as something that one would do in a clinical setting, and that does not trigger unpleasant reservations. This assessment strengthens the idea of using body scans in a clinical context.

Nevertheless, two main criticisms of the scanning process were the feelings of being watched and being left alone. The large number of visible cameras mainly caused the first while both can be attributed to the arrangement of the cameras surrounding the person in all directions. Curtains around the scanner also supported the feeling of being left alone during the scan process. In particular for our target group and the intended clinical usage, amendments seem necessary. Options to reduce the negative feelings could be a change in the arrangement of cameras, e.g., opening the space by placing them only on one side or reducing the number of cameras to a minimum as proposed by Wenninger et al. (2020) and supported by the results of Bartl et al. (2021). In addition, we suggest a constant dialogue about and during the process to counteract the feeling of being alone.

Guidelines for Body Scanning

Users should receive thorough information and instruction in advance about the body scan procedure to provide clarity and transparency.

Body scans should be performed unobtrusively to protect privacy and avoid the feeling of being watched.

The number and arrangement of cameras should be planned carefully to avoid the feeling of being watched.

The number of people involved in the body scan should be minimized to increase privacy, and personal contact should be maximized to increase safety.

Body-related measurements should be performed professionally while maintaining privacy.

---

## VR experience

Since there was no comparison condition to the overall quantitative scores of the VR experience, we report the data, which were mainly collected on validated and comparable scales, descriptively. For measures captured multiple times during the experience, we calculated the mean value of all data points. The descriptive results of the VR exposure experience are summarized in Table 1.

To evaluate the possible occurrence of simulator sickness, we compared SSQ pre- and post-measurements. The observed increase in SSQ scores of 16.21 was below the indication threshold for simulator sickness of 20 points (Stanney et al., 1997), implying a safe use of the application with respect to potential simulator sickness-related impacts. Further, a two-tailed Wilcoxon signed-rank test revealed that the median ranks did not differ significantly between measurements, Z = 1.14, p = .254.

---

## Body image

In the following, we present the impact of our VR exposure on the body image-related measures of body awareness and body weight estimation as well as the related qualitative feedback.

---

## 4.5.2 Body scan phase

An auxiliary experimenter performed the body scan in normal clothes without any accessories. Afterwards, the main experimenter measured the interpupillary distance (IPD), body weight, and the participants’ waist and hip circumference, and conducted the interview about the scan process. The duration of the interview averaged 4 min. All interviews were recorded by a Tascam DR-05 voice recorder.

---

## 4.5.3 VR exposure phase

Prior to the VR exposure, participants answered demographic questions and the SSQ as pre-questionnaires on a dedicated questionnaire computer. Then, an auxiliary experimenter demonstrated

the average misestimation

M¯ = 1Σn

Mk and 2) the

the participants how to fit the equipment, adjusted the

n k=1

absolute average percentage of misestimation as

A¯ =

HMD’s IPD, and controlled that all equipment was

1Σn

|Mk|.

correctly attached. After finishing the fitting, a pre-

n k=1

Active body weight estimation (AMT)

The AMT was inspired by related work (Piryankova et al., 2014a; Thaler et al., 2018a,b) and used to capture the participants’ ability to modify the avatar’s body weight to match a requested numeric value. We also used it to analyze whether a certain interaction method for body weight modification influenced the participant’s ability to judge the avatars’ body weight. Participants had to modify the avatar’s body weight by using one of our modification interaction methods until they thought it matched a presented numeric target weight in kg. The task was repeated for a target weight range of ±20% of the actual avatar’s body weight incremented in 5% intervals in a counterbalanced manner resulting in n = 9 modifications. For each modification, we calculated the misestimation M based on the modified body weight m and the target body weight t as M = t−m. A negative value states an

underestimation, a positive value an overestimation. Additionally, we calculated M¯ and A¯ as for the PET.

---

## Procedure

The entire evaluation took place in three adjacent rooms (office, body scanner, laboratory) of the University of Würzburg and averaged 117 min. The procedure is illustrated in Figure 6.

---

## Opening phase

First, participants were informed about the local COVID-19 regulations, received information about the experiment and the body scans, gave their consent, and generated two personal pseudonymization codes used to store the experimental data and the generated avatars separately. Then, the main experimenter answered potential questions and measured the participant’s body height without shoes as required for the body scan.

programmed experimental procedure was started, and participants were transferred to the preparation environment. For all virtual transitions during the VR exposure, the display was blacked-out for a short moment. All instructions were displayed on an instruction panel and additionally played as pre-recorded voice instructions. As the first preparation step, the participants had to undergo a short reading test to ensure the view was sufficient. Then, they performed the embodiment calibration in T-pose and judged its workload. During the whole VR exposure, participants had to answer questions and measurements verbally. Although interaction between the experimenter and the user may cause small breaks in presence (Putze et al., 2020), we considered this approach as part of the evaluation, since interaction between patient and the rapist would also likely occur in clinical settings and advanced in virtuo interaction to answer questionnaires might be difficult for novice users.

After the preparation finished, participants were transferred

to the exposition environment. There, they performed five movement tasks in front of a virtual mirror while being instructed to alternatingly look at the mirror and directly on their body to induce the feeling of embodiment. Movement tasks were adapted from related work (Wolf et al., 2020) and had to be performed for 20 s. The first PET followed. Participants estimated the modified body weight of their avatar nine times. Between the estimations, the display was blacked-out briefly to cover the weight changes. In the next phase, participants conducted AMTs nine times for each body weight modification method in a counterbalanced manner. For all body weight estimation tasks, no feedback regarding the estimation error was provided to the participants. The second PET concluded the phase. After each AMT (see Figure 6), participants were asked to judge workload, agency, VBO, and

VBA in virtuo. The whole VR exposure took 36 min on average. After the VR exposure, participants answered IPQ, SSQ, UVI, and UX questions again on the dedicated questionnaire computer.

---

## 4.5.4 Closing and debriefing phase

The questionnaires were followed by the second interview about the VR exposure that lasted on average 11 min. At the end of the session, the main experimenter thanked the participants and granted them credits for their participation. As part of the debriefing process after the session, the interviews were first transcribed and then two researchers summarized and clustered the answers into categories.

---

## Results

In this section, we report the results of our evaluation separated into 1) the body scan experience, 2) the UX of the VR exposure including the different modification methods, and 3) their impact on body image-related measures. The statistical analysis of our results was partially performed using the software R for statistical computing (R Core Team, 2020) and partially using SPSS version 26.0.0.0 (IBM, 2020). All tests were performed against an α of .05.

---

## Feedback on the body scanning process

When asked whether the body scan procedure matched their idea of a body scan, four participants expected a different amount or arrangement of cameras, three participants expected a different scan process (e.g., one camera moving around the body, a laser measuring the body shape, or cameras only in the front), and one participant claimed to have no previous expectations on the body scan process. The other participants stated they already knew the body scan procedure from former experiments and did not remember expectations.

Most of the participants perceived the scan process as

simple and clear. Only one participant stated not knowing what was happening between two scans. The experience during the scan process differed from “straightforward” and “easy” (n = 4) over “interesting” or “cool” (n = 4) to being “something to getting used to” or making one “feel observed” (n = 4).

All participants stated positively they would do a body scan again. While most of them did not have suggestions for improvement (n = 8). One suggested that the experimenter should be visible during the whole scan process to increase a feeling of safety. Others pointed out that a reduced number of cameras would ease the feeling of being watched and that the

stiff posture during the scan felt kind of uneasy after some time.

---

## Feedback on the body measurements

When evaluating the assessment of body measures, most participants claimed to perceive it as neutral or similar to being measured during a doctor’s appointment (n = 8). Some others pointed out they would not expect it in a “normal” lab study but did not perceive it as awkward (n = 3). One participant stated to perceive the measuring of their weight as very private and therefore uncomfortable.

---

## Feedback on embodiment and avatar perception

When asked about their feelings towards their personalized avatar, two participants used “neutral” or “okay” to describe their experience, and another four participants described it as “cool”, “interesting”, or “pleasant”. The remaining six participants described the experience as less positive, using words like “strange” and “irritating”. While one of the former emphasized the quality of the embodiment compared to other studies, three of the latter criticized the embodiment, especially concerning the lack of facial expression, eye movements and hand gestures. One pointed out that their “hands hold these controllers but the avatar does not”. The participants who found the experience rather irritating emphasized a lack of similarity in their avatar’s appearance.

The question of whether the avatar’s appearance met the

participants’ expectations also received mixed responses. While one participant found it overall disproportional, six participants stated that the look of their avatar rather met their expectations. The remaining participants indicated that although the avatar’s

TABLE 1 The table shows the descriptive values for our captured measurements concerning the VR experience. Detailed information regarding the measurements can be found in Section 4.4.

body looked as expected, they did not associate its face with themselves.

---

## Comparison of the body weight modification methods

For comparing the three AMT conditions (gesture, joystick, and objects), we calculated a one-way repeated- measures ANOVA for each listed measurement (see Table 2) except modification times, where we calculated a Friedman test, and preference rankings, which are presented descriptively only. Test results showed significant differences between conditions only for workload, F (2, 22) = 13.95, p <

.001. Two-tailed paired-sample post-hoc t-tests revealed significant differences in the SEA score between body weight modifications with gesture and joystick, t (11) = 2.74, p = .019, gesture and objects, t (11) = 2.8, p = .017, and joystick and objects, t (11) = 4.86, p = .001. Thus, the workload was considered to be highest when modifying body weight via objects and lowest when using the joystick.

---

## Feedback on the body weight modification methods

When asked to explain their preference for an interaction method, most of the participants who preferred joystick (n = 8) stated that it felt most controllable and least complicated. One participant additionally preferred the continuity of joystick- based interaction compared to the necessity of repetition in the gesture-based interaction. The participants who had preferred the gesture-based interaction (n = 4) stated they found it most intuitive, flexible, and direct. They reasoned that controlling the speed of modification by extent and speed

of arm movements increased usability. None of the participants preferred modification via the objects.

---

## Comparison of body awareness between body weight modification methods

We calculated a one-way repeated-measures ANOVA to compare the body awareness (VBA) during the three AMT conditions (gesture, joystick, and objects). As shown in Table 2, VBA ratings differed tendentially between the three AMT conditions, with higher joystick ratings than the other conditions, F (2, 22) = 3.37, p = .053.

---

## Feedback on the intensity of body awareness

Seven participants stated they felt in contact with their physical body during the experience, while the other five stated they had lost contact to their body at least once. The latter stated, for example, they focused mainly on the task and the avatar. Others felt that their bodily awareness “got a bit lost” or that the situation and virtual surroundings made them forget reality, including their real body. On the other hand, three participants who stated being aware of their body during the experiment reasoned the embodiment as a main cause. One of them stated that “once before re-calibration, my avatar’s foot was kind of crooked, that’s when I paid attention to my real body. I made sure my knee was straight”. The other one focused on the avatar weight and claimed that “I was still aware of my body, but it was very strange because I was looking at a different mirror image, and sometimes, I felt much heavier when the weight of the avatar was lower than my actual weight”. Another reason why participants were aware of their bodily sensations was the physical contact with the floor or the proprioception during movements, which reminded them of their presence in the physical room (n = 2).

Feedback on the affect towards the body Eight of the participants stated that their feelings towards their bodies had changed during the experience. These changes concerned either their general awareness (n = 3), their experienced body size (n = 2), or their satisfaction with their body (n = 3). The two participants stating a change in their experienced body size had either felt thicker or thinner in contrast to their avatar during the experience or felt thinner after the experience. Two of the participants whose bodily satisfaction changed stated an increased body

TABLE 2 The table shows all descriptive values of the measures related to the comparison between our proposed body weight modification methods including p-values when calculated. Asterisks indicate significant p-values. Post-hoc tests for significant differences can be found in the corresponding text.

satisfaction or increased motivation to care for their bodily interests. In contrast, one participant reported increased dissatisfaction towards their physical body after the experience.

---

## Feedback on the perception of body weight changes

Concerning the changes in the avatar’s body weight, the participants equally rated them as “interesting” (n = 6) or “weird” (n = 6). Two participants especially pointed out

body weight misestimation, and a Friedman test for A¯-values, the absolute percentage body weight misestimation. The tests revealed that the three interaction methods did not differ significantly, neither in M¯ , F (2, 22) = 0.66, p = .529, nor in A¯, χ2 (2) = 0.50, p = .779, as summarized

in Table 3.

---

## Comparison of body weight estimations between estimation methods

We compared AMT and PET using two-tailed paired-

that it was interesting to compare the avatar’s body shape to

samples t-tests for

M¯ -values and two-tailed Wilcoxon

their own former body, as they had lost or gained weight in

signed-rank tests for

A¯-values. For

M¯ , we showed that

the past. One stated “when I started my studies 5 years ago, I was 20 kg lighter than now, and it was kind of interesting to compare the avatar’s look to the memories of my old body shape. It gave me a little perspective on how I want to look”. Four of the other participants liked the idea of seeing how they could look if they changed their eating/exercise behavior. Especially the modification towards a lower weight was perceived as threatening by some of the participants (n = 3), as they thought it looked a bit unhealthy. To enhance the modification, two participants suggested more individual and fine-grained possibilities to manipulate only body parts instead of the body as a whole, for example, by including “two fixed points on the virtual body, one in the middle of the body and one at the shoulder area, to adjust the weight in these areas more exactly”.

---

## Comparison of body weight estimations between body weight modification methods

For comparing the performance in body weight estimations between the AMT, we calculated a one-way

participants misestimated the body weight significantly less using the PET (M = 1.46, SD = 8.4) than when using the AMT (M = 3.1, SD = 8.4), t (11) = 2.47, p = .031. For A¯, the

median ranks for PET, Mdn = 6.28, were tendentially lower than the median ranks for AMT, Mdn = 7.85, Z = 1.88, p = .060.

We further analyzed the results of AMT and PET concerning the modification levels (±20% in 5% steps) using linear regression. Our data violated pre-requirements for linear regression in terms of homoskedasticity and normality. Therefore, we calculated each linear regression using parameter estimations with robust standard errors (HC4) as recommended by Hayes and Cai (2007). Figure 7 shows the body weight misestimations M (left) and the absolute body weight misestimations A (right) for PET and AMT in relation to the modification levels.

For M, the results showed a significant regression equation

for PET, F (1, 106) = 7.88, p = .006, with a R2 of 0.069. The

prediction followed equation M = −0.194 × Body Weight Modification in % instead of a simple point. The modification level did significantly impact on body weight misestimations M, t

(106) = 5.11, p = .013. For AMT, we found no significant

repeated-measures ANOVA for

M¯ -values, the percentage

prediction of the modification level on the body weight

TABLE 3 The table summarizes the body weight estimation performance (average misestimation M¯ and absolute average of misestimation A¯) of the comparison between our proposed modification methods.

misestimations M, F (1, 106) = 3.05, p = .084, having a R2 of 0.028. The found prediction followed equation M = −0.120. Body Weight Modification in % + 3.099. In consequence, the modification level did not significantly impact on body weight misestimations M, t (106) = −3.46, p = .094.

For A, the results showed a significant regression equation for PET, F (1, 106) = 5.27, p = .024, with a R2 of 0.047. The prediction followed equation A = −0.101 × Body Weight Modification in % + 7.743. The modification level did significantly impact on body weight misestimations A, t (106) = −2.09, p = .039. For AMT, we found a significant prediction of the modification level on the body weight misestimations A, F (1, 106) = 15.7, p < .001, with a R2 of 0.129. The found prediction followed equation M = −0.147 × Body Weight Modification in % + 8.585. The modification level did significantly impact on body weight misestimations A, t (106) = −17.9, p < 0.001. In addition to the linear regressions, we averaged body weight estimations for negative and positive modifications for both measurements to analyze differences between the modification directions. Again, we compared AMT and PET using two-tailed paired-samples t-tests for M-values and two-tailed Wilcoxon signed- rank tests for A-values. Test results for M-values showed that body weight misestimations in PET differed significantly between negative (M = 3.96, SD = 11.13) and positive (M = −1.09, SD = 7.44)

modifications, t (11) = 2.27, p = .044, but misestimations in AMT did not differ between negative (M = 4.86, SD = 10.57) and positive (M = 1.38, SD = 7.45) modifications, t (11) = 1.63, p = .131. For A-values, we found no significant differences between the median negative ranks, Mdn = 7.23, and the median positive ranks, Mdn = 5.80, modifications for PET, Z = 1.26, p = .209, but found significant differences between the median negative ranks, Mdn = 9.51, and the median positive ranks, Mdn = 5.39, modifications for AMT, Z = 2.59, p = .010.

---

## Feedback on the body weight estimation difficulty

Regardless of the estimation method, estimating the body weight of the avatar was found to be difficult (n = 8). Only three participants stated they found it relatively easy or only medium-difficult to estimate the body weight. The main reason why participants rated the task as difficult was the high number of repetitions (n = 2) or a reduced perceptibility of their physical body, both leading to a “loss of perspective”. Additionally, one participant stated that the task difficulty depended on the distance of the avatar’s weight to their own.

---

## Discussion

In the present paper, we introduced a prototype of an interactive VR-based system that aims to support body image interventions based on embodied, modulatable, and personalized avatars in future clinically relevant settings. We evaluated the system regarding 1) the body scan experience, 2) the general UX of the VR exposure including body weight modification interaction methods, and 3) the body-image specific UX of the exposure, namely the impact on body awareness and body weight perception. In the following, we summarize and discuss the results of our evaluation to ultimately derive guidelines supporting the design of systems for body image interventions. The guidelines are based on conclusions of the

qualitative and quantitative results accomplished by the researchers’ observations and participants’ comments during the evaluation. While these may overlap with existing best practices or established VR guidelines, we believe it is elementary to summarize them for the given context and to highlight their importance.

---

## User experience of VR experience

The feedback regarding preparation and calibration was consistently positive, confirming the decision for our

approach. This is empirically supported by the low measured calibration times requiring only a short time holding T-pose, and the low workload ratings during the calibration process. Nevertheless, there are further possibilities to reduce the effort for calibration and invasiveness, for example, by using completely markerless body tracking solutions (Wolf et al., 2022a).

Regarding VR-specific measures, participants rated their perceived feeling of presence on an acceptable level (Buttussi and Chittaro, 2018; Wolf et al., 2020), with lower ratings on involvement and realism. A reason for the lower observed involvement score could be the constant interaction with the experimenter during the tasks (e.g., confirming body weight estimations, rating experiences). Possible implausible content (e.g., body weight modification by interaction) could have impacted negatively on realism. Continuous communication between therapist and patient during weight modifications might be a crucial element in clinical settings. Therefore, further research on the role of presence (and its sub- dimensions) in VR body image interventions seems required, as the latest reviews did not address this topic (Riva et al., 2019; Horne et al., 2020; Turbyne et al., 2021).

Surprisingly, although participants rated their feeling of

virtual body ownership descriptively higher compared to non- personalized avatars (Waltemate et al., 2018; Wolf et al., 2020), their ratings were lower than in prior work using personalized and photorealistic avatars (Waltemate et al., 2018). A reason for the noticed differences could be the particularly body-related nature of our task. Avatars created via body scans have a very high resemblance to the individual but still do not provide a perfect visual replica. In a task highly focusing on body perception, even minor inaccuracies may become noticeable, and participants might focus on these, experiencing a diminished feeling of virtual body ownership. Another factor could be the performed body weight modification leading to a reduced congruence between real and virtual bodies and, consequently, might decrease the feeling of virtual body ownership.

The ratings and especially the qualitative statements on

avatar perception reveal similar results, as some of the participants stated their avatar to be uncanny or not fully recognizable as themselves. This raises doubts about the degree of personalization of avatars and whether the creation of highly photorealistic textures is currently necessary (and feasible). Tools such as Virtual Caliper (Pujades et al., 2019) can create in shape personalized avatars using only VR equipment. In conjunction with generic avatar generators, such as Meta Human (Epic Games, 2021), highly realistic avatars with personalized body shapes could be created with less effort. They would not resemble the person perfectly, but this lack of resemblance could make them less uncanny while remaining a still better quality in general. Additionally, a personalization in body shape would be sufficient for

simulating body weight changes. However, one counter- argument is provided by Thaler et al. (2018a), who clearly state that the body weight perception of avatars having personalized textures differs from generic ones. To address the question of whether personalization of avatars in our context should be achieved through photorealism or customization, further research seems necessary.

Guidelines for VR Design

The physical and mental effort for system calibration should be kept as low as possible.

The animations of embodied avatars should be as authentic as possible and include facial expressions, eye movements, and hand gestures to increase realism and reduce eeriness.

When using physical controllers, virtual controller representations should be displayed in VR and controlled by the avatar.

When using personalized avatars, body shape and texture should aim for the highest possible conformity with the user to reduce uncanniness.

---

## User experience of body weight modification

When comparing the subjective rankings of the three modification methods, it becomes apparent that the interaction via virtual objects was the least preferred. It was rated as more demanding and difficult, and less vivid, resulting in lower contentment and overall preference than the other two modification methods. Modification via joystick and gestures were rated rather similarly with a slight preference towards the joystick interaction. The in virtuo ratings of workload match these rankings. While joystick was rated quantitatively most positively, the qualitative analysis shows arguments in favor of gesture interaction, especially in terms of vividness and intuitivity. No impact has been noticed on the feeling of embodiment or performance in body weight estimation, which is particularly important in our context.

Regardless of the interaction method, the lack of body weight

modification in relation to different body parts (e.g., abdomen, hips, thighs) and in relation to the composition of the body tissue (e.g., fat or muscle mass) was mentioned. The use of advanced body modification methods, such as those presented by Maalin et al. (2020) or Pujades et al. (2019) could allow for body weight modifications that go beyond using only BMI as a single parameter modifying the whole body’s weight. However, having more complex body weight modification methods would also increase the complexity of user interaction.

Guidelines for Body Weight Modifications

Body weight modifications severely differing from the user’s BMI or reaching unrealistic or considered unhealthy ranges should be avoided to reduce alienation.

Body weight modifications should allow changing the body weight independently on different body parts considering different body tissue compositions.

Body weight modifications performed directly via a hardware input device or body gestures should be preferred over virtual objects or buttons.

---

## Body image-related outcomes

The comparison of body awareness between the three modification methods indicated a higher body awareness in joystick interaction compared to gestures and objects. However, the reported effects of the VR exposure on body awareness and affect towards the body were very individual, with participants reporting either a loss or an increase of body awareness during the experience. Future work with an increased sample size is necessary to further investigate the difference between the conditions and whether the individual differences are related to people’s overall body awareness, as proposed by Filippetti and Tsakiris (2017). These insights will be crucial to determine what effects can be expected for a target group with low body awareness or negative body image. In contrast to body awareness, body weight estimations did not differ between body weight modification methods. However, when comparing the accuracy of the type of estimations task, PET provided more accurate estimates than AMT. While estimating a person’s weight based on their appearance is not an everyday task, it is surely more common than actively modifying a (virtual) body to a certain body weight. Thus, the difference might originate in the relative novelty of active modification compared to passive estimation. Another reason could be the different phrasing of the task instructions, which has been shown to have the ability to influence body weight estimation (Piryankova et al., 2014b). For both PET and AMT, the accuracy of the body weight estimation depended on the target weight, or in other words, on the deviation between the own real weight and the virtually presented body weight. This effect has been observed priorly for VR body weight estimation tasks (Thaler et al., 2018a; Wolf et al., 2020) and is in line with the so- called Contraction bias as described by Cornelissen et al. (2016, 2015). It states that body weight estimates are most accurate around an estimator-dependent reference template (of a body) and decrease with increasing BMI difference from this reference. Thereby, bodies heavier than the reference tend to be underestimated, while lighter ones tend to be overestimated. Results on absolute body weight estimations show that although the average misestimations were comparatively low, they are subject to high deviations and uncertainties, which also has been observed priorly (Thaler et al., 2018a). The reasons for this probably lie in the nature of the task, since estimating body weight seems generally challenging, and body image disturbances are ubiquitous even in the healthy population (Longo, 2017). Qualitative feedback confirms the task difficulty. When further analyzing the absolute body weight estimations, it is particularly noticeable that they seem to be easier and more

accurate for increased than for reduced body weight. This is rather unexpected since Weber’s Law suggests that differences in body weight become harder to detect when body weight increases (Cornelissen et al., 2016). A possible reason for the high uncertainties in the absolute body weight estimations and the contradiction to Weber’s law could be the perspective on the avatar offered by the virtual mirror, which mainly shows the front side of the body (Cornelissen et al., 2018). More research on this topic seems required.

Guidelines for Body Weight Estimations

Body weight estimations capturing the current perception of the real body in VR should be performed at the beginning of an intervention, as the perceptibility of the real body might decrease over time.

When performing body weight estimations, care should be taken to present the respective body equally from multiple perspectives.

When analyzing body weight misestimations based on avatars, determining the average accuracy of the misestimations with healthy individuals helps avoid strong influences of the system properties.

---

## Future research directions

The results of our work raise new research questions for future work. First, the high necessity of communication between therapist and user, potentially leading to breaks in presence, raises the question of the general impact of presence in body image interventions. This is also interesting when it comes to augmented reality, as already recognized by Wolf et al. (2022a). Second, the observed ratings in body ownership despite using photorealistic, personalized avatars and the feedback on avatar perception leads to the question of how photorealism and personalization should be applied to body image interventions. Future work should explore whether avatars that are less personalized in texture are sufficient for our

purpose as they might raise less uncanniness.

Third, the severe individual differences in the report of body awareness and affect towards the body raise the question, of which individual characteristics might predict the effects of a VR- based intervention on both variables.

Fourth, future work should further address the difference between active body weight modification and passive body weight estimation we found in this study. It remains unclear which underlying processes lead to differences between the two tasks and whether they impact differently on body image. Similar counts for the observed differences in body weight misestimations for avatars with decreased or increased body weight.

Finally, although our current work is situated in the context of body image disturbances, it aimed to test the usability and user

experience of our application regardless of the target population in a non-clinical setting. For subsequent work, we suggest directly incorporating our gained knowledge by considering the participants’ feedback and the derived guidelines and testing the system with the intended target population in a feasibility study. To further improve the system in direction of an appropriate clinical setting, technical advancements, like low-cost avatar reconstruction techniques (Wenninger et al., 2020; Bartl et al., 2021), should be incorporated and domain expert opinions, like recently summarized by Halbig et al. (2022), further considered.

---

## Limitations

Our system implementation and evaluation still have limitations. As stated earlier, some of our participants described mixed feelings toward their personalized avatar and a lack of similarity between their avatar’s face and their own. Including animations of facial expressions and eye movements could help increase the association with one’s avatar. However, previous work on facial animations has shown only little effect on the perceived embodiment (Gonzalez-Franco et al., 2020; Döllinger et al., 2022). Improving the scan quality in the facial area, i.e., by using more cameras in the facial area, could improve this problem.

While modifying the body weight of the personalized avatars, we keep parts of the face region fixed (see Figure 3). This does not completely accurately model weight gain/loss in this region, as the soft tissue in this area of the face changes with varying body weight (De Greef et al., 2006). Other methods (Piryankova et al., 2014a; Zhao et al., 2018; Tang et al., 2021) deform the whole face region or regularize the deformation of a region similar to ours (Xiao et al., 2020). These methods, however, produce other undesirable effects such as changing eye socket shape or pupillary distance due to the fact that the underlying statistical model produces one direction of change that is applied to all avatars. As the data measured by De Greef et al. (2006) shows, the soft tissue thickness in our fixed region does positively correlate with BMI. However, we note that the correlation for landmarks in our fixed region is smaller than for those outside the fixed region and as such we decided to keep the face region around the eyes, nose, and mouth fixed. As seen in Figure 3, this still produces plausible results while avoiding undesirable changes in face identity. For future work, weight modification models should incorporate information about the underlying bone and muscle structure (Achenbach et al., 2018; Komaritzan et al., 2021) in order to more accurately model changes in soft tissue thickness.

Although our sample included slightly overweight

participants, the current design and development phase was limited to students without a diagnosed body image disturbance and predominantly with a BMI in a healthy range. The clinical applicability to our target group, which is

already in preparation as part of our ViTraS research project (Döllinger et al., 2019), is one next step after the here presented design and UX optimization phase. Further, given the small sample size of 12 participants and the comparatively narrow range of age, the results cannot be generalized to a wider population. However, the study provides valuable insights into such a system’s user experience and facilitates further research.

Overall, the design and development phase would benefit from a larger test sample tailored to the final target group. However, this is not an easy endeavor since it blurs the separation between the usability and user experience tests in the development phases and the clinical application. Hence, it requires closer integration and supervision by therapeutically trained professionals and experts in obesity treatment. Ultimately, this integration would be necessary throughout all steps of technical developments to safeguard against unwanted effects for all participants during the design and development and UX optimization steps. Notably, two participants of our overall healthy sample already showed some emotional reactions when confronted with their modified virtual self. Given the uneasiness some participants felt when their avatar’s body weight was modified, further research is needed on how to restrict body weight modifications levels for different populations.

---

## Conclusion

In this work, we have presented and evaluated the prototype of an advanced VR therapy support system that allows users to embody a rapidly generated, personalized, photorealistic avatar and modulate its body weight in real- time. Our system already offers numerous positive features and qualities, especially regarding the execution of body scans and an overall enjoyable VR experience. The guidelines for designing VR body image therapy support systems that we derived from our results helps to facilitate future developments in this field.

However, more research is needed for a therapeutic

application. Possible areas of investigation include the implementation of photorealism, which may need to be revisited when working on body image. More research is also required on the differences between active body weight modification and passive body weight estimation. Finally, investigations with more focus on the target group and the individual characteristics of future users will be necessary, especially concerning body image distortion, body dissatisfaction, and body awareness.

---

## Data availability statement

The raw data supporting the conclusions of this article will be made available by the authors, without undue reservation.

---

## Ethics statement

The studies involving human participants were reviewed and approved by the Ethics Committee of the Institute Human- Computer-Media (MCM) of the University of Würzburg. The participants provided their written informed consent to participate in this study. Written informed consent was obtained from the individual(s) for the publication of any potentially identifiable images or data included in this article.

---

## Author contributions

ND and EW conceptualized large parts of the experimental design, collected the data, performed data analysis, and took the lead in writing the manuscript. EW and DM developed the Unity application including the experimental environment and avatar animation system. MB and SW provided the avatar reconstruction and body weight modification framework. CW and ML conceived the original project idea, discussed the study design, and supervised the project. All authors continuously provided constructive feedback and helped to shape study and the corresponding manuscript.

---

## Funding

This research has been funded by the German Federal Ministry of Education and Research in the project ViTraS (project numbers 16SV8219 and 16SV8225). It was further supported by the Open Access Publication Fund of the University of Würzburg.

---

## Acknowledgments

We thank Andrea Bartl for her extensive support when preparing and conducting the body scans, Viktor Frohnapfel for contributing his Blender expertise to our virtual environments, Marie Fiedler for proofreading, and Sara Wolf for her support with our illustrations. We also thank Miriam Fößel and Nico Erdmannsdörfer for their help in preparing the interviews for qualitative analysis. In addition, we would like to thank the project partners from the ViTraS research project for their constructive feedback.

---

## Conflict of interest

The authors declare that the research was conducted in the absence of any commercial or financial relationships that could be construed as a potential conflict of interest.

---

## Publisher’s note

All claims expressed in this article are solely those of the authors and do not necessarily represent those of their affiliated

organizations, or those of the publisher, the editors and the reviewers. Any product that may be evaluated in this article, or claim that may be made by its manufacturer, is not guaranteed or endorsed by the publisher.

---

## Supplementary Material

The Supplementary Material for this article can be found online at: https://www.frontiersin.org/articles/10.3389/frvir.2022. 935449/full#supplementary-material

---
